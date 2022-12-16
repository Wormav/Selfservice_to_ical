const fs = require("fs");
const path = require("node:path");

const {
  nextService,
  dayTypeEvaluate,
  previousService,
} = require("./scraping/functions");
const {
  evaluateif1fNav,
  evaluateif1fPriseDeService,
  getService1f,
  getService1fIfNav,
  getService1fIfPriseDeService,
  getService1fIfPriseDeServiceEtNav,
  getService1fIfPriseDeServiceAnticipé,
} = require("./scraping/1f");

const {
  getService2fService1,
  getService2fService2,
  evaluateif2fDeplacementVers,
  evaluateif2fPriseDeService,
  evaluateif2fPause,
  getService2fPriseDeServiceService1,
  getService2fPriseDeServiceService2,
  getService2fIfDeplacementVersService1,
  getService2fIfDeplacementVersService2,
  getService2fIfPauseService1,
  getService2fIfPauseService2,
  getService2fIfPauseService3,
} = require("./scraping/2f");

const {
  getService3fService1,
  getService3fService2,
  getService3fService3,
  evaluateif3f4lignes,
  evaluateif3f4lignesAndDeplacement,
  evaluateif3CoupureEtNavettePerso,
  evaluateif3fSyndicat,
  getService3fIf4lignesService1,
  getService3fIf4lignesService2,
  getService3fIf4lignesService3,
  getService3fIf4lignesService4,
  getService3fif4lignesAndDeplacmentService2,
  getService3fif4lignesAndDeplacmentService3,
  getService3fIfCoupureEtNavettePersoService1,
  getService3fIfCoupureEtNavettePersoService2,
  getService3fIfCoupureEtNavettePersoService3,
  getService3fIfCoupureEtNavettePersoService4,
  getService3fIfsyndicat1,
  getService3fIfsyndicat2,
} = require("./scraping/3f");

const { deleteServiceDay } = require("./scraping/deleteServiceDay");

const { evaluateIfDispo, getServiceDispo } = require("./scraping/dispo");

const puppeteer = require("puppeteer-extra");

const { checkDateOk } = require("./scraping/checkDateOk");

const {
  changeHoursAfterMidnight,
} = require("./scraping/changeHoursAfterMidnight");

module.exports.scrape = async function scrape(id, password) {
  //plugin that allows not to be detected

  const StealthPlugin = require("puppeteer-extra-plugin-stealth");
  puppeteer.use(StealthPlugin());

  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 920 });
  await page.goto("https://selfservice.stcl.fr/SelfService/?version=mobile", {
    waitUntil: "networkidle2",
  });

  //------------- Username ------------- //

  const searchInputUsername = await page.$("#Username");
  await searchInputUsername.type(id);

  // // ------------- Password-------------- //

  const searchInputUserPassword = await page.$("#Password");
  await searchInputUserPassword.type(password);

  // // ------------- btn ------------- //

  await page.click("#LoginButton");
  await page.waitForSelector(".ShowLoadingOnClick:first-child");
  console.log("Connection ok!");
  // ------------- first service ------------- //

  await page.click(".AgendaDate:nth-child(1) .ShowLoadingOnClick");

  await page.waitForSelector(".ApplicationContent");

  // // ------------- Scrap serve then loop ------------- //

  const arrayServices = [];

  console.log("scrap in court!");

  await page.waitForTimeout("5000");

  for (i = 0; i < 30; i++) {
    const dayType = await dayTypeEvaluate(page);
    const dispo = await evaluateIfDispo(page);
    let service;
    let service2;
    let service3;
    let service4;
    // ------------->  if 1F  <------------- //

    if (dayType === "1PM" || dayType === "1TAR" || dayType === "1MA") {
      const if1fNav = await evaluateif1fNav(page);
      const if1fPriseDeService = await evaluateif1fPriseDeService(page);
      // if nav perso
      if (if1fNav === "Navette du Personnel") {
        service = await getService1fIfNav(page);
      } // if nav perso et prise de service
      else if (if1fNav === "Pause") {
        service = await getService1fIfPriseDeServiceEtNav(page);
      } // if prise de service
      else if (if1fPriseDeService === "Prise de service") {
        service = await getService1fIfPriseDeService(page);
      } // if prise de service anticipée
      else if (if1fPriseDeService === "Prise de service anticipée") {
        service = await getService1fIfPriseDeServiceAnticipé(page);
      } // if non normal
      else {
        service = await getService1f(page);
      }

      service = changeHoursAfterMidnight(service);

      arrayServices.push(service);
      // ------------->  if 2F  <------------- //
    } else if (dayType === "2F") {
      const ifDeplacementVers = await evaluateif2fDeplacementVers(page);
      const ifPriseDeService = await evaluateif2fPriseDeService(page);
      const ifPause = await evaluateif2fPause(page);
      // if 2F deplacement vers
      if (
        ifDeplacementVers === "Coupure" ||
        ifDeplacementVers === "Déplacement de"
      ) {
        service = await getService2fIfDeplacementVersService1(page);
        service2 = await getService2fIfDeplacementVersService2(page);
      } else if (ifPriseDeService === "Prise de service anticipée") {
        service = await getService2fPriseDeServiceService1(page);
        service2 = await getService2fPriseDeServiceService2(page);
      } else if (ifPause === "Pause") {
        service = await getService2fIfPauseService1(page);
        service2 = await getService2fIfPauseService2(page);
        service3 = await getService2fIfPauseService3(page);

        arrayServices.push(service3);
      }
      // if 2F normal
      else {
        service = await getService2fService1(page);
        service2 = await getService2fService2(page);
      }

      arrayServices.push(service, service2);
      // ------------->  if 3F  <------------- //
    } else if (dayType === "3F") {
      const if4lignes = await evaluateif3f4lignes(page);
      const if4lignesAndDeplacement = await evaluateif3f4lignesAndDeplacement(
        page
      );
      const ifCoupureEtNavettePerso = await evaluateif3CoupureEtNavettePerso(
        page
      );
      const if3fSyndicat = await evaluateif3fSyndicat(page);
      if (if3fSyndicat === "Heure délégation Délégué Syndi") {
        service = await getService3fIfsyndicat1(page);
        service2 = await getService3fIfsyndicat2(page);
      }
      // if 4 lignes et deplacement
      else if (
        if4lignes === "Coupure" &&
        if4lignesAndDeplacement === "Déplacement de"
      ) {
        service = await getService3fIf4lignesService1(page);
        service2 = await getService3fif4lignesAndDeplacmentService2(page);
        service3 = await getService3fif4lignesAndDeplacmentService3(page);
        arrayServices.push(service3);
      }
      // if 4 lignes
      else if (if4lignes === "Coupure") {
        service = await getService3fIf4lignesService1(page);
        service2 = await getService3fIf4lignesService2(page);
        service3 = await getService3fIf4lignesService3(page);
        service4 = await getService3fIf4lignesService4(page);

        arrayServices.push(service3, service4);
      } // if 3F avec coupure et navette du perso
      else if (ifCoupureEtNavettePerso === "Navette du Personnel") {
        service = await getService3fIfCoupureEtNavettePersoService1(page);
        service2 = await getService3fIfCoupureEtNavettePersoService2(page);
        service3 = await getService3fIfCoupureEtNavettePersoService3(page);
        service4 = await getService3fIfCoupureEtNavettePersoService4(page);

        arrayServices.push(service3, service4);
      } // if non 3F normal
      else {
        service = await getService3fService1(page);
        service2 = await getService3fService2(page);
        service3 = await getService3fService3(page);
        arrayServices.push(service3);
      }

      arrayServices.push(service, service2);
    } // ------------->  if Dispo  <------------- //
    else if (dispo === "34:00") {
      service = await getServiceDispo(page);
      arrayServices.push(service);
      // if not day not worked deleted if changed
    } else {
      const date = await deleteServiceDay(page);

      const dataBase = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, "..", "data", id + "data.json"),
          "utf-8"
        )
      );

      let arrayFiltered = dataBase.filter((obj) => obj.date !== date);

      fs.writeFileSync(
        path.join(__dirname, "..", "data", id + "data.json"),
        JSON.stringify(arrayFiltered)
      );
    }

    // ------------->  Next page  <------------- //

    await nextService(page);

    console.log(i);
  }

  console.table(arrayServices);

  await browser.close();

  return checkDateOk(arrayServices);
};

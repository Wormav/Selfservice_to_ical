const {
  nextService,
  dayTypeEvaluate,
  previousService,
  monthInEn,
  serveur,
} = require("./functions/functions");
const {
  evaluateif1fNav,
  evaluateif1fPriseDeService,
  getService1f,
  getService1fIfNav,
  getService1fIfPriseDeService,
  getService1fIfPriseDeServiceEtNav,
  getService1fIfPriseDeServiceAnticipé,
} = require("./functions/1f");

const {
  getService2fService1,
  getService2fService2,
  evaluateif2fDeplacementVers,
  evaluateif2fPriseDeService,
  getService2fPriseDeServiceService1,
  getService2fPriseDeServiceService2,
  getService2fIfDeplacementVersService1,
  getService2fIfDeplacementVersService2,
} = require("./functions/2f");

const {
  getService3fService1,
  getService3fService2,
  getService3fService3,
  evaluateif3f4lignes,
  getService3fIf4lignesService1,
  getService3fIf4lignesService2,
  getService3fIf4lignesService3,
  getService3fIf4lignesService4,
} = require("./functions/3f");

const { evaluateIfDispo, getServiceDispo } = require("./functions/dispo");

const puppeteer = require("puppeteer-extra");
const ical = require("ical-generator");
const http = require("http");


(async () => {
  // plugin qui permet de ne pas être détecté

  const StealthPlugin = require("puppeteer-extra-plugin-stealth");
  puppeteer.use(StealthPlugin());

  const browser = await puppeteer.launch({
    headless: true, // mode sans tête
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 920 });
  await page.goto("https://selfservice.stcl.fr/SelfService/?version=mobile", {
    waitUntil: "networkidle2",
  });

  //------------- Sélection du Username et remplisage ------------- //

  const searchInputUsername = await page.$("#Username");
  await searchInputUsername.type("31146");

  // // ------------- Sélection du Password et remplisage ------------- //

  const searchInputUserPassword = await page.$("#Password");
  await searchInputUserPassword.type("6294");

  // // ------------- Appui du btn ------------- //

  await page.click("#LoginButton");
  console.log("connexion ok!");
  await page.waitForSelector(".ShowLoadingOnClick:first-child");

  // ------------- Appui sur le premier service ------------- //

  await page.click(".AgendaDate:nth-child(1) .ShowLoadingOnClick");

  await page.waitForSelector(".ApplicationContent");

  // // ------------- Scrappe le service puis boucle sur le nombre i de services et l'ajoute à un tableau ------------- //

  const arrayServices = [];

  console.log("Scrap en cour!");

  for (i = 0; i < 5; i++) {
    const dayType = await dayTypeEvaluate(page);
    const dispo = await evaluateIfDispo(page);
    let service;
    let service2;
    let service3;
    let service4;
    // ------------->  SI 1F  <------------- //

    if (dayType === "1PM" || dayType === "1TAR" || dayType === "1MA") {
      const if1fNav = await evaluateif1fNav(page);
      const if1fPriseDeService = await evaluateif1fPriseDeService(page);
      // si nav perso
      if (if1fNav === "Navette du Personnel") {
        service = await getService1fIfNav(page);
      } // si nav perso et prise de service
      else if (if1fNav === "Pause") {
        service = await getService1fIfPriseDeServiceEtNav(page);
      } // si prise de service
      else if (if1fPriseDeService === "Prise de service") {
        service = await getService1fIfPriseDeService(page);
      } // si prise de service anticipée
      else if (if1fPriseDeService === "Prise de service anticipée") {
        service = await getService1fIfPriseDeServiceAnticipé(page);
      } // si non normal
      else {
        service = await getService1f(page);
      }

      arrayServices.push(service);
      // ------------->  SI 2F  <------------- //
    } else if (dayType === "2F") {
      const ifDeplacementVers = await evaluateif2fDeplacementVers(page);
      const ifPriseDeService = await evaluateif2fPriseDeService(page);
      // si 2F deplacement vers
      if (
        ifDeplacementVers === "Coupure" ||
        ifDeplacementVers === "Déplacement de"
      ) {
        service = await getService2fIfDeplacementVersService1(page);
        service2 = await getService2fIfDeplacementVersService2(page);
      } else if (ifPriseDeService === "Prise de service anticipée") {
        service = await getService2fPriseDeServiceService1(page);
        service2 = await getService2fPriseDeServiceService2(page);
      }
      // si 2F normal
      else {
        service = await getService2fService1(page);
        service2 = await getService2fService2(page);
      }

      arrayServices.push(service, service2);
      // ------------->  SI 3F  <------------- //
    } else if (dayType === "3F") {
      const if4lignes = await evaluateif3f4lignes(page);
      // si 4 lignes
      if (if4lignes === "Coupure") {
        service = await getService3fIf4lignesService1(page);
        service2 = await getService3fIf4lignesService2(page);
        service3 = await getService3fIf4lignesService3(page);
        service4 = await getService3fIf4lignesService4(page);

        arrayServices.push(service4);
      } // si non 3F normal
      else {
        service = await getService3fService1(page);
        service2 = await getService3fService2(page);
        service3 = await getService3fService3(page);
      }

      arrayServices.push(service, service2, service3);
    } // ------------->  SI Dispo  <------------- //
    else if (dispo === "34:00") {
      service = await getServiceDispo(page);
      arrayServices.push(service);
    }

    // ------------->  Page suivante  <------------- //

    await nextService(page);

    console.log(i);
  }

  console.table(arrayServices);

  await browser.close();

  // boucle qui crée les event

  const calendar = ical({ name: "Boulot" });

  for (i = 0; i < arrayServices.length; i++) {
    calendar.createEvent({
      start: new Date(
        monthInEn(arrayServices[i].date) + " " + arrayServices[i].start
      ),
      end: new Date(
        monthInEn(arrayServices[i].date) + " " + arrayServices[i].end
      ),
      summary:
        arrayServices[i].sb +
        " ( " +
        arrayServices[i].startPlaceIdentifier +
        " )",
      description: "",
      location:
        arrayServices[i].startPlaceIdentifier +
        " => " +
        arrayServices[i].endPlaceIdentifier,
      url: "https://selfservice.stcl.fr/SelfService/",
    });
  }

  // crée un serveur en local

  async function serveur(){
    http.createServer((req, res) => calendar.serve(res)).listen(4000, "127.0.0.1", () => {
        console.log("Server running at http://127.0.0.1:4000/")
      })
  }

  await serveur();
})();

// ------------->  eval 1F  <------------- //

async function evaluateif1fNav(page) {
  try {
    const dayType = await page.evaluate(() => {
      const type = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[2]
        .innerText;
      return type;
    });
    return dayType;
  } catch (e) {
    return "no 1f Nav";
  }
}

async function evaluateif1fPriseDeService(page) {
  try {
    const dayType = await page.evaluate(() => {
      const type = document.querySelector(
        ".DutyActivity_Name_Cell_Value"
      ).innerText;
      return type;
    });
    return dayType;
  } catch (e) {
    return "no 1f prise";
  }
}

// ------------->  scrap 1F  <------------- //
// 1F classique
async function getService1f(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText
      const start = document.querySelector(
        ".DutyActivity_StartTime_Cell_Value"
      ).innerText;
      const end = document.querySelector(
        ".DutyActivity_EndTime_Cell_Value"
      ).innerText;

      const startPlaceIdentifier = document.querySelector(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      ).innerText;
      const endPlaceIdentifier = document.querySelector(
        ".DutyActivity_EndPlaceIdentifier_Cell_Value"
      ).innerText;
      const sb = document.querySelector(
        ".DutyActivity_Name_Cell_Value"
      ).innerText;

      return {
        date,
        start,
        end,
        startPlaceIdentifier,
        endPlaceIdentifier,
        sb,
      };
    });
    return result;
  } catch (e) {
    return "bug 1F";
  }
}

// 1f avec navette perso
async function getService1fIfNav(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = document.querySelector(
        ".DutyActivity_StartTime_Cell_Value"
      ).innerText;
      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[2].innerText;

      const startPlaceIdentifier = document.querySelector(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      ).innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_EndPlaceIdentifier_Cell_Value"
      )[2].innerText;
      const sb = document.querySelector(
        ".DutyActivity_Name_Cell_Value"
      ).innerText;

      const message = "Navette du perso";

      return {
        date,
        start,
        end,
        startPlaceIdentifier,
        endPlaceIdentifier,
        sb,
        message,
      };
    });
    return result;
  } catch (e) {
    return "bug 1F navette perso";
  }
}

// 1f avec prise de servie
async function getService1fIfPriseDeService(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = document.querySelector(
        ".DutyActivity_StartTime_Cell_Value"
      ).innerText;
      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[1].innerText;

      const startPlaceIdentifier = document.querySelector(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      ).innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_EndPlaceIdentifier_Cell_Value"
      )[1].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[1]
        .innerText;

      const message = "Prise de service";

      return {
        date,
        start,
        end,
        startPlaceIdentifier,
        endPlaceIdentifier,
        sb,
        message,
      };
    });
    return result;
  } catch (e) {
    return "bug 1F prise de service";
  }
}

// 1f avec Prise de service anticipée
async function getService1fIfPriseDeServiceAnticipé(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = document.querySelector(
        ".DutyActivity_StartTime_Cell_Value"
      ).innerText;
      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[2].innerText;

      const startPlaceIdentifier = document.querySelector(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      ).innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_EndPlaceIdentifier_Cell_Value"
      )[2].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[2]
        .innerText;

      const message = "Prise de service Anticipée";

      return {
        date,
        start,
        end,
        startPlaceIdentifier,
        endPlaceIdentifier,
        sb,
        message,
      };
    });
    return result;
  } catch (e) {
    return "bug 1F prise de service anticipée";
  }
}

// 1f avec prise de service et navette du perso
async function getService1fIfPriseDeServiceEtNav(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = document.querySelector(
        ".DutyActivity_StartTime_Cell_Value"
      ).innerText;
      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[3].innerText;

      const startPlaceIdentifier = document.querySelector(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      ).innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_EndPlaceIdentifier_Cell_Value"
      )[3].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[1]
        .innerText;

      const message = "Prise de service et navette perso";

      return {
        date,
        start,
        end,
        startPlaceIdentifier,
        endPlaceIdentifier,
        sb,
        message,
      };
    });
    return result;
  } catch (e) {
    return "bug 1F prise de service";
  }
}

module.exports = {
  evaluateif1fNav,
  evaluateif1fPriseDeService,
  getService1f,
  getService1fIfNav,
  getService1fIfPriseDeService,
  getService1fIfPriseDeServiceEtNav,
  getService1fIfPriseDeServiceAnticipé
};

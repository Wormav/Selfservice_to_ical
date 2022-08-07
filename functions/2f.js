// ------------->  eval 2F  <------------- //

async function evaluateif2fDeplacementVers(page) {
  try {
    const dayType = await page.evaluate(() => {
      const type = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[2]
        .innerText;
      return type;
    });
    return dayType;
  } catch (e) {
    return "no 2f Deplacement vers";
  }
}

async function evaluateif2fPriseDeService(page) {
  try {
    const dayType = await page.evaluate(() => {
      const type = document.querySelector(
        ".DutyActivity_Name_Cell_Value"
      ).innerText;
      return type;
    });
    return dayType;
  } catch (e) {
    return "no 2f Prise de service";
  }
}

// ------------->  scrap 2F  <------------- //

//2F Deplacement vers
async function getService2fIfDeplacementVersService1(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = document.querySelector(
        ".DutyActivity_StartTime_Cell_Value"
      ).innerText;

      const startPlaceIdentifier = document.querySelector(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      ).innerText;

      const sb = document.querySelector(
        ".DutyActivity_Name_Cell_Value"
      ).innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[1].innerText;

      const end = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[1].innerText;

      const message = "2F avec deplacement vers";

      return {
        date,
        start,
        end,
        startPlaceIdentifier,
        sb,
        endPlaceIdentifier,
        message,
      };
    });
    return result;
  } catch (e) {
    return "bug 2F Deplacement vers 1er service";
  }
}

async function getService2fIfDeplacementVersService2(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      
      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[3].innerText;
      
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_EndPlaceIdentifier_Cell_Value"
      )[3].innerText;
      
      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[3].innerText;
      
      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[3].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[3]
        .innerText;
      const message = "2F avec deplacement vers";

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
    return "bug 2F Deplacement vers 2ème servie";
  }
}

//2F Prise de service

async function getService2fPriseDeServiceService1(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = document.querySelector(
        ".DutyActivity_StartTime_Cell_Value"
      ).innerText;

      const startPlaceIdentifier = document.querySelector(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      ).innerText;

      const sb = document.querySelectorAll(
        ".DutyActivity_Name_Cell_Value")[2].innerText;

      const end = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[3].innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[3].innerText;
      const message = '2f avec Prise de Service'

      return {
        date,
        start,
        startPlaceIdentifier,
        sb,
        end,
        endPlaceIdentifier,
        message
      };
    });

    return result;
  } catch (e) {
    return "bug 2F 1er service" ;
  }
}

async function getService2fPriseDeServiceService2(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[4].innerText;

      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[4].innerText;

      const sb = document.querySelectorAll(
        ".DutyActivity_Name_Cell_Value")[4].innerText;

      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[4].innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_EndPlaceIdentifier_Cell_Value"
      )[4].innerText
      const message = '2f avec Prise de Service'

      return {
        date,
        start,
        startPlaceIdentifier,
        sb,
        end,
        endPlaceIdentifier,
        message
      };
    });

    return result;
  } catch (e) {
    return "bug 2F 1er service" ;
  }
}


// 2F simple
async function getService2fService1(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = document.querySelector(
        ".DutyActivity_StartTime_Cell_Value"
      ).innerText;

      const startPlaceIdentifier = document.querySelector(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      ).innerText;

      const sb = document.querySelector(
        ".DutyActivity_Name_Cell_Value"
      ).innerText;

      const end = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[1].innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[1].innerText;

      return {
        date,
        start,
        startPlaceIdentifier,
        sb,
        end,
        endPlaceIdentifier,
      };
    });

    return result;
  } catch (e) {
    return "bug 2F 1er service" ;
  }
}

async function getService2fService2(page) {
  try {
    const result2 = page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[2].innerText;
      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[2].innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_EndPlaceIdentifier_Cell_Value"
      )[2].innerText;

      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[2].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[2]
        .innerText;

      return {
        date,
        start,
        end,
        endPlaceIdentifier,
        startPlaceIdentifier,
        sb,
      };
    });
    return result2;
  } catch (e) {
    return "bug 2F 2eme service";
  }
}

module.exports = {
  getService2fService1,
  getService2fService2,
  evaluateif2fDeplacementVers,
  evaluateif2fPriseDeService,
  getService2fPriseDeServiceService1,
  getService2fPriseDeServiceService2,
  getService2fIfDeplacementVersService1,
  getService2fIfDeplacementVersService2,
};

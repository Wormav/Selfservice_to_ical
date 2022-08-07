// ------------->  eval 3F  <------------- //

async function evaluateif3f4lignes(page) {
  try {
    const dayType = await page.evaluate(() => {
      const type = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[5]
        .innerText;
      return type;
    });
    return dayType;
  } catch (e) {
    return "no 3f 4 lignes";
  }
}

// ------------->  scrap 3F  <------------- //

// 3F 4 lignes
async function getService3fIf4lignesService1(page) {
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

      const message = "3f avec 4 lignes";

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
    return "bug 3F 4ligne Service 1";
  }
}

async function getService3fIf4lignesService2(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;

      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[2].innerText;

      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[2].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[2]
        .innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[3].innerText;

      const end = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[3].innerText;

      const message = "3f avec 4 lignes Service 2";

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
    return "bug 3F";
  }
}

async function getService3fIf4lignesService3(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;

      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[4].innerText;

      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[4].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[4]
        .innerText;
      const end = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[5].innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_EndPlaceIdentifier_Cell_Value"
      )[5].innerText;

      const message = "3f avec 4 lignes";

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
    return "bug 3F Service 3";
  }
}

async function getService3fIf4lignesService4(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;

      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[6].innerText;

      const endPlaceIdentifier = 'DEP' // pour résoudre bug etrange (marche car fini forcément au dépot)

      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[6].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[6]
        .innerText;
      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[6].innerText;
      const message = "3f avec 4 lignes";

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
    return "bug 3F Service 4";
  }
}

// 3F classic
async function getService3fService1(page) {
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
    return "bug 3F service 1";
  }
}

async function getService3fService2(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;

      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[2].innerText;

      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[2].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[2]
        .innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[3].innerText;

      const end = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[3].innerText;

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
    return "bug 3F service 2";
  }
}

async function getService3fService3(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      
      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[4].innerText;
      
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_EndPlaceIdentifier_Cell_Value"
      )[4].innerText;
      
      
      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[4].innerText;
      
      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[4].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[4]
        .innerText;

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
    return "bug 3F Service 3";
  }
}

module.exports = {
  getService3fService1,
  getService3fService2,
  getService3fService3,
  evaluateif3f4lignes,
  getService3fIf4lignesService1,
  getService3fIf4lignesService2,
  getService3fIf4lignesService3,
  getService3fIf4lignesService4,
};

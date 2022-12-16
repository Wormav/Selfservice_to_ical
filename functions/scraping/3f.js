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

async function evaluateif3f4lignesAndDeplacement(page) {
  try {
    const dayType = await page.evaluate(() => {
      const type = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[2]
        .innerText;
      return type;
    });
    return dayType;
  } catch (e) {
    return "no 3f 4 lignes";
  }
}

async function evaluateif3CoupureEtNavettePerso(page) {
  try {
    const dayType = await page.evaluate(() => {
      const type = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[6]
        .innerText;
      return type;
    });
    return dayType;
  } catch (e) {
    return "no 3f coupure et navette perso";
  }
}

async function evaluateif3fSyndicat(page) {
  try {
    const dayType = await page.evaluate(() => {
      const type = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[0]
        .innerText;
      return type;
    });
    return dayType;
  } catch (e) {
    return "no 3f syndicat";
  }
}

// ------------->  scrap 3F  <------------- //

// 3F syndicat
async function getService3fIfsyndicat1(page) {
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

      const message = "3f syndicat";

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
    return "bug 3F syndicat Service 1";
  }
}

async function getService3fIfsyndicat2(page) {
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
      const endPlaceIdentifier = "DEP";

      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[2].innerText;

      const message = "3f avec syndicat Service 2";

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

      const endPlaceIdentifier = "DEP"; // pour résoudre bug etrange (marche car fini forcément au dépot)

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

async function getService3fif4lignesAndDeplacmentService2(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;

      const end = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[4].innerText;

      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[4].innerText;

      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[3].innerText;

      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[3].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[3]
        .innerText;

      const message = "3f avec 4 lignes avec deplacement";

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
    return "bug 3F Service 2 avec deplacement";
  }
}

async function getService3fif4lignesAndDeplacmentService3(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;

      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[6].innerText;

      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[6].innerText;
      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[6]
        .innerText;
      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[6].innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_EndPlaceIdentifier_Cell_Value"
      )[6].innerText;

      const message = "3f avec 4 lignes avec deplacement";

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
    return "bug 3F Service 3 avec deplacement";
  }
}

// 3F avec coupure pause et navette du perso

async function getService3fIfCoupureEtNavettePersoService1(page) {
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

      const message = "3f avec navette du perso et coupure";

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
    return "bug 3F service 1";
  }
}

async function getService3fIfCoupureEtNavettePersoService2(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[2].innerText;

      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[2].innerText;

      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[2]
        .innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[3].innerText;

      const end = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[3].innerText;

      const message = "3f avec navette du perso et coupure";

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
    return "bug 3F service 1";
  }
}

async function getService3fIfCoupureEtNavettePersoService3(page) {
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

      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[4]
        .innerText;
      const endPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[5].innerText;

      const end = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[5].innerText;

      const message = "3f avec navette du perso et coupure";

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
    return "bug 3F service 1";
  }
}

async function getService3fIfCoupureEtNavettePersoService4(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = document.querySelectorAll(
        ".DutyActivity_StartTime_Cell_Value"
      )[6].innerText;

      const startPlaceIdentifier = document.querySelectorAll(
        ".DutyActivity_StartPlaceIdentifier_Cell_Value"
      )[6].innerText;

      const sb = document.querySelectorAll(".DutyActivity_Name_Cell_Value")[6]
        .innerText;
      const endPlaceIdentifier = "DEP"; // pour résoudre bug etrange (marche car fini forcément au dépot)

      const end = document.querySelectorAll(
        ".DutyActivity_EndTime_Cell_Value"
      )[6].innerText;

      const message = "3f avec navette du perso et coupure";

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
    return "bug 3F service 1";
  }
}

module.exports = {
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
};

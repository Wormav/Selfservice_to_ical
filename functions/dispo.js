async function evaluateIfDispo(page) {
  try {
    const dayType = await page.evaluate(() => {
      const type = document.querySelector(
        ".Workday_EndTime_Cell_Value"
      ).innerText;
      return type;
    });
    return dayType;
  } catch (e) {
    return "not is dispo";
  }
}

async function getServiceDispo(page) {
  try {
    const result = await page.evaluate(() => {
      const date = document.querySelector(
        ".DateNavigationBarDateLabel"
      ).innerText;
      const start = "00:00";
      const end = "23:59";
      const sb = 'dispo'

      return {
          date, start , end , sb
      }
    });
    return result
  } catch (e) {
      return 'bug getServiceDispo'
  }
}

module.exports = { evaluateIfDispo, getServiceDispo };

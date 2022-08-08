

// ------------->  REGARDE ET RETOURNE TYPE DE JOURNEE <------------- //

async function dayTypeEvaluate(page) {
  await page.waitForSelector(".WorkdayDetailAccordions");
  try {
    const dayType = await page.evaluate(() => {
      const type = document.querySelector(
        ".SDExtendedWorkdayDetail_Cell_Value"
      ).innerText;
      return type;
    });
    return dayType;
  } catch (e) {
    return "no dayType";
  }
}

// ------------->  NEXT PAGE  <------------- //

async function nextService(page) {
  await page.click(".DateNavigationBarNextDate");
}

// ------------->  PREVIOUS PAGE  <------------- //

async function previousService(page) {
  await page.click(".DateNavigationBarPreviousDate");
}


// ------------->  crée un serveur en local  <------------- //



module.exports = {
  dayTypeEvaluate, nextService , previousService  
};

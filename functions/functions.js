

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

// ------------->  month in en  <------------- //

function monthInEn(string){
  const val = {
    "janv.": "January ,",
    "févr.": "February ,",
    "mars" : "March ,",
    "avr.": "April ,",
    "mai" : "May ,",
    "juin" : "June ,",
    "juil.": "July ,",
    "août" : "August ,",
    "sept.": "September ,",
    "oct.": "October ,",
    "nov.": "November ,",
    "déc" : "December ,",
  };

  const stringReplace = string.replace(
    /(janv.|févr.|mars|avr.|mai|juin|juil.|août|sept.|oct.|nov.|déc.)/g,
    (m) => {
      return val[m];
    }
  )
  .slice(5)

  return stringReplace
}

// ------------->  crée un serveur en local  <------------- //



module.exports = {
  dayTypeEvaluate, nextService , previousService , monthInEn 
};



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
  
  module.exports = {monthInEn}
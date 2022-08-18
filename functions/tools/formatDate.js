function formatDate(date) {
    let dateFormat =
      date.getDay() +
      "/" +
      date.getMonth() +
      "/" +
      date.getFullYear() +
      " à " +
      date.getHours() +
      ":" +
      date.getMinutes();
  
    return dateFormat;
  }
  
  module.exports = { formatDate };
  
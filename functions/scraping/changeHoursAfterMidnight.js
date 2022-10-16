function changeHoursAfterMidnight(obj) {
  if (obj.end === "25:09" || obj.end === "25:14") {
    obj.end = "23:59";
    obj.sb = "grande 21 fini à 1h09";
  } else if (obj.end === "24:04") {
    obj.end = "23:59";
  } else {
  }
  return obj;
}

module.exports = { changeHoursAfterMidnight };

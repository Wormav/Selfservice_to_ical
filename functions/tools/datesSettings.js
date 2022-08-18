const fs = require("fs");
const dateLastScrap = require("../../data/lastScrapTime.json").date;

const timeLimitForScrap = 43200000;

module.exports = { dateLastScrap, timeLimitForScrap };

const { log } = require("console");
const { formatDate } = require("../tools/formatDate");
const fs = require("fs");

function getTimeScrap(path) {
  fs.writeFileSync(path, JSON.stringify({ date: Date.now() }));
}

module.exports = { getTimeScrap };

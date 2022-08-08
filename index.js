const { scrape } = require("./functions/scraping");
const { createEvents } = require("./functions/createEvents");

async function getPlanning() {
  let arrayServices = await scrape();

  console.log(arrayServices);

  let calendar = await createEvents(arrayServices);
}

getPlanning();

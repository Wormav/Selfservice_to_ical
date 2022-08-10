const { scrape } = require("./functions/scraping");
const { createEvents } = require("./functions/createEvents");

async function getPlanning() {
  // scrape et crée un tableau

  let arrayServices = await scrape();
  console.log(arrayServices);

  // Crée les évenelents apple et crée un serveur puis renvoie l'addresse dans la console
  await createEvents(arrayServices);
}

getPlanning();

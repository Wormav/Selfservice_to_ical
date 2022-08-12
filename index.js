const { createEvents } = require("./functions/createEvents");
const fs = require("fs");
const { removeDuplicates } = require("./functions/checkDuplicates");
const { scrape } = require("./functions/scraping");

const express = require('express');

const app = express();




async function getPlanning() {
  // scrape et crée un tableau

  let arrayServices = await scrape();

  console.log(arrayServices);

  // recupere la data du fichier déja présent et la convertie en objet js

  const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));

  // supprime les doublons entre le scrape et la data

  const arrayForAddData = removeDuplicates(arrayServices, data);

  // ecrit dans la data le nouveaux tableaux sans les doublons

  fs.writeFileSync("./data/data.json", JSON.stringify(arrayForAddData));

  // Crée les évenelents apple et crée un serveur puis renvoie l'addresse dans la console
  const calendar = await createEvents(JSON.parse(fs.readFileSync("./data/data.json", "utf-8")));
  return calendar
}

app.get('/calendar', async (req, res) => {
        console.log("COUCOU LE SERVEUR A RECU TON APPEL BRO")
	const calendar = await getPlanning();
	calendar.serve(res)
});

app.listen(3000);

const { createEvents } = require("./functions/createEvents");
const fs = require("fs");
const { removeDuplicates } = require("./functions/checkDuplicates");
const { scrape } = require("./functions/scraping");
const { getTimeScrap } = require("./functions/scraping/getTimeScrap");
const { formatDate } = require("./functions/tools/formatDate");


const express = require("express");

const app = express();

//fonction pour retourner le planning a partir des resulta du scrap
async function getPlanning() {
  // scrape et crée un tableau

  let arrayServices = await scrape();

  console.log(arrayServices);

  // envoie la date et l'heure du dernier scrap dans la data

  getTimeScrap("./data/lastScrapTime.json");

  // recupere la data du fichier déja présent et la convertie en objet js

  const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));

  // supprime les doublons entre le scrape et la data

  const arrayForAddData = removeDuplicates(arrayServices, data);

  // ecrit dans la data le nouveaux tableaux sans les doublons

  fs.writeFileSync("./data/data.json", JSON.stringify(arrayForAddData));

  // Crée les évenelents apple et crée un serveur puis renvoie l'addresse dans la console
  const calendar = await createEvents(
    JSON.parse(fs.readFileSync("./data/data.json", "utf-8"))
  );
  return calendar;
}

//fonction pour retourner le planning a partir de la data

async function getCalendarData() {
  const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
  const calendar = await createEvents(data);
  return calendar;
}

app.get("/calendar", async (req, res) => {
  let dateLastScrap = require("./data/lastScrapTime.json").date;

   const timeLimitForScrap = 43200000;
  console.log("LE SERVEUR A RECU UN APPEL");
  // regarde si la date actuel est suppérieur a la date du dernier scrap + 12h

  if (Date.now() > dateLastScrap + timeLimitForScrap) {
    // si oui re scrap et lance le fichier

    const calendar = await getPlanning();
    calendar.serve(res);
    console.log("avec scrap");
  } else {
    // si non lance l'ancier fichier avec la data déja présente

    const calendar = await getCalendarData();
    calendar.serve(res);
    console.log("sans scrap");
  }
});

app.listen(3000);

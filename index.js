const { createEvents } = require("./functions/createEvents");
const fs = require("fs");
const { removeDuplicates } = require("./functions/checkDuplicates");
const { scrape } = require("./functions/scraping");
const { getTimeScrap } = require("./functions/scraping/getTimeScrap");
const { changeService } = require("./functions/changeService");
const express = require("express");

const app = express();

//function to return the schedule from the results of the scrap
async function getPlanning() {
  let arrayServices = await scrape();

  getTimeScrap("./data/lastScrapTime.json");

  const dataBase = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));

  const data = changeService(arrayServices, dataBase);

  const arrayForAddData = removeDuplicates(arrayServices, data);

  fs.writeFileSync("./data/data.json", JSON.stringify(arrayForAddData));

  const calendar = await createEvents(
    JSON.parse(fs.readFileSync("./data/data.json", "utf-8"))
  );

  return calendar;
}

//function to return the schedule from the data
async function getCalendarData() {
  const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
  const calendar = await createEvents(data);
  return calendar;
}

app.get("/calendar", async (req, res) => {
  let dateLastScrap = JSON.parse(
    fs.readFileSync("./data/lastScrapTime.json", "utf-8")
  ).date;

  const timeLimitForScrap = 43200000;
  console.log("THE SERVER RECEIVED A CALL");

  if (Date.now() > dateLastScrap + timeLimitForScrap) {
    const calendar = await getPlanning();
    calendar.serve(res);
    console.log("scrap");
  } else {
    const calendar = await getCalendarData();
    calendar.serve(res);
    console.log("not scrap");
  }
});

app.listen(3000);

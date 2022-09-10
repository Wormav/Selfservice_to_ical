const { createEvents } = require("./functions/createEvents");
const fs = require("fs");
const { removeDuplicates } = require("./functions/checkDuplicates");
const { scrape } = require("./functions/scraping");
const { getTimeScrap } = require("./functions/scraping/getTimeScrap");
const { changeService } = require("./functions/changeService");
const express = require("express");

const app = express();

//function to return the schedule from the results of the scrap
async function getPlanning(id, password) {
  let arrayServices = await scrape(id, password);

  getTimeScrap("./data/" + id + "lastScrapTime.json");

  const dataBase = JSON.parse(
    fs.readFileSync("./data/" + id + "data.json", "utf-8")
  );

  const data = changeService(arrayServices, dataBase);

  const arrayForAddData = removeDuplicates(arrayServices, data);

  fs.writeFileSync(
    "./data/" + id + "data.json",
    JSON.stringify(arrayForAddData)
  );

  const calendar = await createEvents(
    JSON.parse(fs.readFileSync("./data/" + id + "data.json", "utf-8"))
  );

  return calendar;
}

//function to return the schedule from the data
async function getCalendarData(id) {
  const data = JSON.parse(
    fs.readFileSync("./data/" + id + "data.json", "utf-8")
  );
  const calendar = await createEvents(data);
  return calendar;
}

app.get("/calendar/:id/:password", async (req, res) => {
  id = req.params.id;
  password = req.params.password;

  // Server call function

  async function callServeur(id) {
    let dateLastScrap = JSON.parse(
      fs.readFileSync("./data/" + id + "lastScrapTime.json", "utf-8")
    ).date;
    const timeLimitForScrap = 43200000;
    console.log("THE SERVER RECEIVED A CALL");

    if (Date.now() > dateLastScrap + timeLimitForScrap) {
      const calendar = await getPlanning(id, password);
      calendar.serve(res);
      console.log("scrap " + "for: " + id);
    } else {
      const calendar = await getCalendarData(id);
      calendar.serve(res);
      console.log("not scrap " + "for: " + id);
    }
  }

  // Create files if they don't exist

  if (!fs.existsSync("./data/" + id + "data.json")) {
    fs.writeFileSync(
      "./data/" + id + "data.json",
      JSON.stringify([
        {
          date: "lun. 7 févr. 1994",
          start: "16:30",
          end: "16:31",
          startPlaceIdentifier: "nul",
          endPlaceIdentifier: "nul",
          sb: "naissance du createur",
          message: "3f avec 4 lignes",
        },
      ]),
      function (err) {
        if (err) throw err;
        console.log("File create !");
      }
    );
  }

  // Create files if they don't exist and launch the call to the server

  if (!fs.existsSync("./data/" + id + "lastScrapTime.json")) {
    fs.writeFileSync(
      "./data/" + id + "lastScrapTime.json",
      JSON.stringify({ date: 0 }),
      function (err) {
        if (err) throw err;
        console.log("File create !");
      }
    );
    await callServeur(id);
  } else {
    callServeur(id);
  }
});

app.listen(3000);

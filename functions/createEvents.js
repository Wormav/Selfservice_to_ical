const ical = require("ical-generator");
const { monthInEn } = require("./tools/monthInEn");
const http = require("http");

// boucle qui crée les event

module.exports.createEvents = async function createEvents(arrayServices) {
  const calendar = ical({ name: "Boulot" });

  for (i = 0; i < arrayServices.length; i++) {
    calendar.createEvent({
      start: new Date(
        monthInEn(arrayServices[i].date) + " " + arrayServices[i].start
      ),
      end: new Date(
        monthInEn(arrayServices[i].date) + " " + arrayServices[i].end
      ),
      summary:
        arrayServices[i].sb +
        " ( " +
        arrayServices[i].startPlaceIdentifier +
        " )",
      description: "",
      location:
        arrayServices[i].startPlaceIdentifier +
        " => " +
        arrayServices[i].endPlaceIdentifier,
      url: "https://selfservice.stcl.fr/SelfService/",
    });
  }
};

// crée un serveur en local

module.exports.serveur = async function serveur(calendar) {
  http
    .createServer((req, res) => calendar.serve(res))
    .listen(4000, "127.0.0.1", () => {
      console.log("Server running at http://127.0.0.1:4000/");
    });
};

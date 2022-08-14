const ical = require("ical-generator");
const { monthInEn } = require("./tools/monthInEn");
const {getVtimezoneComponent} = require('@touch4it/ical-timezones');
const http = require("http");


// boucle qui crée les event

module.exports.createEvents = async function createEvents(arrayServices) {
  const calendar = ical({ name: "Boulot" });

  calendar.timezone({
    name: 'FOO',
    generator: getVtimezoneComponent
});

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
      timezone: 'Europe/Paris'
    });
  }
	return calendar
}







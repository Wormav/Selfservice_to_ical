const array = [
  {
    date: 1,
  },
  {
    date: 1,
  },
  {
    date: 2,
  },
  {
    date: 3,
  },
];

const data = [
  {
    date: 1,
    test: "j",
  },
  {
    date: 1,
    test: "j",
  },
  {
    date: 2,
    test: "j",
  },
  {
    date: 3,
    test: "j",
  },
  {
    date: 4,
  },
];

function changeService(array, data) {
  for (let i = 0; i < array.length; i++) {
    let arrayFiltered = data.filter((obj) => obj.date !== array[i].date);

    data = arrayFiltered;
  }
  return data;
}

const data2 = [
  {
    date: "ven. 19 août 2022",
    start: "06:37",
    end: "13:01",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "TOU",
    sb: "SB 24 / Ligne(s) 8",
  },
  {
    date: "sam. 20 août 2022",
    start: "06:57",
    end: "12:58",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "RUB",
    sb: "SB 8 / Ligne(s) 2",
  },
  {
    date: "dim. 21 août 2022",
    start: "13:42",
    end: "20:58",
    startPlaceIdentifier: "WIN",
    endPlaceIdentifier: "DEP",
    sb: "SB 4 / Ligne(s) D4",
  },
  {
    date: "lun. 22 août 2022",
    start: "13:01",
    end: "20:38",
    startPlaceIdentifier: "TOU",
    endPlaceIdentifier: "DEP",
    sb: "SB 24 / Ligne(s) 8,35",
  },
];

const array2 = [
  {
    date: "ven. 19 août 2022",
    start: "06:37",
    end: "13:01",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "TOU",
    sb: "SB 24 / Ligne(s) 8",
  },
  {
    date: "sam. 20 août 2022",
    start: "06:57",
    end: "12:58",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "RUB",
    sb: "SB 8 / Ligne(s) 2",
  },
  {
    date: "dim. 21 août 2022",
    start: "13:42",
    end: "20:58",
    startPlaceIdentifier: "WIN",
    endPlaceIdentifier: "DEP",
    sb: "SB 4 / Ligne(s) D4",
  },
];

console.log(changeService(array2, data2));

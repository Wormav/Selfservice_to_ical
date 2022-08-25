function changeService(array, data) {
  for (let i = 0; i < array.length; i++) {
    let arrayFiltered = data.filter((obj) => obj.date !== array[i].date);

    data = arrayFiltered;
  }
  return data;
}

function saveChangeServices(array, data) {
  const serviceDeleteByChangeService = [];
  for (let i = 0; i < array.length; i++) {
    let saveChangeService = data.filter((obj) => obj.date === array[i].date);

    serviceDeleteByChangeService.push(...saveChangeService);
  }
  return serviceDeleteByChangeService;
}

function checkIfServiceChangeNewService(array, data) {
  const servicesThatHaveChangedArray = [];
  for (let i = 0; i < array.length; i++) {
    let servicesThatHaveChanged = data.filter(
      (obj) => obj.date === array[i].date && obj.sb !== array[i].sb
    );

    servicesThatHaveChangedArray.push(...servicesThatHaveChanged);
  }
  return servicesThatHaveChangedArray;
}

function checkIfServiceChangeAncientService(array, data) {
  const servicesThatHaveChangedArray = [];
  for (let i = 0; i < data.length; i++) {
    let servicesThatHaveChanged = array.filter(
      (obj) => obj.date === data[i].date && obj.sb !== data[i].sb
    );

    servicesThatHaveChangedArray.push(...servicesThatHaveChanged);
  }
  return servicesThatHaveChangedArray;
}

const data2 = [
  {
    date: "ven. 19 août 2022",
    start: "06:37",
    end: "13:01",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "TOU",
    sb: "SB 25 / Ligne(s) 8",
  },
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

console.log(checkIfServiceChangeAncientService(array2, data2));

module.exports = {
  changeService,
  saveChangeServices,
  checkIfServiceChangeAncientService,
};

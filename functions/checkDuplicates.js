const serviceDb = [
  {
    
    date: "mar. 9 août 2022",
    start: "07:21",
    end: "13:52",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "TOU",
    sb: "SB 37 / Ligne(s) 10",
    id: 1
  },
  {
    date: "mer. 10 août 2022",
    start: "07:21",
    end: "13:52",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "TOU",
    sb: "SB 37 / Ligne(s) 10",
    id: 2
  },
  {
    date: "jeu. 11 août 2022",
    start: "07:21",
    end: "13:52",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "TOU",
    sb: "SB 37 / Ligne(s) 10",
    id: 3
  },
  
];

const serviceScrap = [
  {
    date: "mar. 9 août 2022",
    start: "07:21",
    end: "13:52",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "TOU",
    sb: "SB 37 / Ligne(s) 10",
    id: 1
  },
  {
    date: "mer. 10 août 2022",
    start: "07:21",
    end: "13:52",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "TOU",
    sb: "SB 37 / Ligne(s) 10",
    id: 2
  },
  {
    date: "jeu. 11 août 2022",
    start: "07:21",
    end: "13:52",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "TOU",
    sb: "SB 37 / Ligne(s) 10",
    id: 3
  },
  {
    date: "ven. 12 août 2022",
    start: "07:21",
    end: "13:52",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "TOU",
    sb: "SB 37 / Ligne(s) 10",
    id: 4
  },
  {
    date: "sam. 13 août 2022",
    start: "06:09",
    end: "13:24",
    startPlaceIdentifier: "DEP",
    endPlaceIdentifier: "HDV",
    sb: "SB 11 / Ligne(s) 4",
    id: 5
  },
  {
    date: "lun. 15 août 2022",
    start: "13:42",
    end: "20:59",
    startPlaceIdentifier: "WIN",
    endPlaceIdentifier: "DEP",
    sb: "SB 1 / Ligne(s) D1",
    id: 6
  },
  
];

// fonction qui prend deux tableaux , les reuni , et supprime les doublons

function removeDuplicates(array1 , array2){
  const arrayUnited = [...array1 , ...array2];

  const array = Array.from(new Set(arrayUnited.map(JSON.stringify))).map(JSON.parse)

  return array
}

console.table(removeDuplicates(serviceDb, serviceScrap))

module.exports = {removeDuplicates}
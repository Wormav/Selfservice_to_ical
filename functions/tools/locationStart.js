function locationStart(startPlaceIdentifier, endPlaceIdentifier) {
  switch (startPlaceIdentifier) {
    case "TOU":
      return "1 Place Jourdan 87000 Limoges, France";
      break;

    case "DEP":
      return "8 Rue du Clos Moreau 87000 Limoges, France";
      break;

    case "WIN":
      return "1 Place Winston Churchill 87000 Limoges, France";
      break;

    case "RUB":
      return "8 Rue du Clos Moreau 87000 Limoges, France";
      break;

    case "HDV":
      return "1 Mairie de Limoges 9 Place Léon Betoulle, 87000 Limoges, France";
      break;

    case "LIB":
      return "1 Avenue de la Libération 87000 Limoges, France";
      break;
    default:
      return startPlaceIdentifier + " => " + endPlaceIdentifier;
      break;
  }
}

module.exports = { locationStart };

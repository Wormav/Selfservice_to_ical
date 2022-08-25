// function that takes two arrays, joins them, and removes duplicates

function removeDuplicates(array1, array2) {
  const arrayUnited = [...array1, ...array2];

  const array = Array.from(new Set(arrayUnited.map(JSON.stringify))).map(
    JSON.parse
  );

  return array;
}

module.exports = { removeDuplicates };

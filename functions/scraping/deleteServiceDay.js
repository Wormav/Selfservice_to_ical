const fs = require("fs");

async function deleteServiceDay(page) {
  const result = await page.evaluate(() => {
    const date = document.querySelector(
      ".DateNavigationBarDateLabel"
    ).innerText;

    return date;
  });
  return result;
}

module.exports = { deleteServiceDay };

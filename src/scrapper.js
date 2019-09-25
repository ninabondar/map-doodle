const fs = require("fs");
const puppeteer = require("puppeteer");
const select = require("cheerio");
const URL = "https://vn.com.ua/ua/catalog/lvovskaya-oblast/lvov?page=";
let addresses = [];

const parseHtml = html => {
  const cards = select(".building-card.has-slider", html);
  cards.each((i, el) => {
    const address = {
      name: select(".building-card__title", el).text(),
      address: select(".building-card__address", el).text()
    };
    addresses.push(address);
  });
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (let i = 1; i < 35; i++) {
    try {
      await page.goto(URL + String(i));
      const contents = await page.content();
      parseHtml(contents);
    } catch (e) {
      console.log("No such page exists. Seems like you've reached the end", e);
    }
  }

  fs.writeFile(
    "src/addresses.txt",
    JSON.stringify(addresses),
    { flag: "a", encoding: "utf8" },
    err => {
      if (err) console.log("smth went wrong");
    }
  );
  await browser.close();
})();

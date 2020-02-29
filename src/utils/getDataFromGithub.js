const puppeteer = require('puppeteer');
const getTime = require('./getTime');

const githubUrl = 'https://github.com/';

const getDataFromGithub = async (githubUser) => {
  // console.log('Launch Puppeteer');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({ path: `${__dirname}/images/${githubUser}.png` });
  const githubCounter = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
  // await page.screenshot({ path: `${__dirname}/images/${getTime()}-${githubUser}.png` });

  const githubUserPhoton = await page.evaluate(
    () => document.getElementsByClassName('avatar-before-user-status')[0],
  );
  await browser.close();
  // //console.log(githubCounter);
  return true;
};

module.exports = getDataFromGithub;

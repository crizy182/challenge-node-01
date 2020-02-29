const puppeteer = require('puppeteer');
const getTime = require('./getTime');
const getPhoto = require('./getPhoto');
const getCount = require('./getCount');
const postToSlack = require('./postToSlack');


const githubUrl = 'https://github.com/';

const getDataFromGithub = async (githubUser) => {
  // console.log('Launch Puppeteer');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const unixTime = getTime();
  console.log(unixTime);
  await page.goto(`${githubUrl}${githubUser}?tab=repositories`);
  await page.screenshot({ path: `${__dirname}/images/${githubUser}.png` });
  await page.screenshot({ path: `${__dirname}/images/${getTime()}-${githubUser}.png` });

  const reposCount = await getCount(page);
  const avatar = await getPhoto(page);
  await postToSlack(githubUser, avatar, reposCount);
  await browser.close();
  // //console.log(githubCounter);
  return true;
};

module.exports = getDataFromGithub;

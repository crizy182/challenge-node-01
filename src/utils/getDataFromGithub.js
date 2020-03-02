const puppeteer = require('puppeteer');
const getTime = require('./getTime');
const getPhoto = require('./getPhoto');
const getCount = require('./getCount');
const postToSlack = require('./postToSlack');

const githubUrl = 'https://github.com/';

const getDataFromGithub = async (githubUser) => {
  const browser = await puppeteer.launch({
    args: ['--start-fullscreen'],
  });
  const page = await browser.newPage();
  const unixTime = getTime();
  await page.goto(`${githubUrl}${githubUser}`);
  await page.screenshot({
    path: `${__dirname}/images/${unixTime}-${githubUser}.png`,
  });

  const reposCount = await getCount(page);
  const avatar = await getPhoto(page);
  await postToSlack(githubUser, avatar, reposCount);
  await browser.close();
  return true;
};

module.exports = getDataFromGithub;

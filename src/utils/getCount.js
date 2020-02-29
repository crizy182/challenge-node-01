const getCount = async (page) => {
  const result = await page.evaluate(() => document.getElementsByClassName('Counter')[0].innerText);
  return result;
};

module.exports = getCount;

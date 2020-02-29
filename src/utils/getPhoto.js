const githubUserPhoton = async (page) => {
  const photo = await page.evaluate(
    () => {
      return document.getElementsByClassName('avatar width-full height-full rounded-2')[0].src;
    },
  );
  return photo;
};

module.exports = githubUserPhoton;

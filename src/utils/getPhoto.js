const githubUserPhoton = async (page) => {
  const photo = await page.evaluate(
    () => document.getElementsByClassName('avatar-before-user-status')[0],
  );
  return photo;
};

module.exports = githubUserPhoton;

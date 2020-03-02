require('dotenv').config();

const config = {
  githubUser: process.env.GITHUB_USER,
  githubpasswd: process.env.GITHUB_PASSWD,
  hook: process.env.HOOK,
  token: process.env.TOKEN,
};

module.exports = { config };

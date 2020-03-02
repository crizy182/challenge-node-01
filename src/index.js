const prompt = require('prompt');
const getDataFromGitHub = require('./utils/getDataFromGithub');

const promptAttributes = [{
  name: 'githubUser',
}];

prompt.get(promptAttributes, (err, result) => {
  if (err) {
    process.stdout.write(err);
    return 1;
  }
  getDataFromGitHub(result.githubUser)
    .then((response) => {
      process.stdout.write(`it's done ${response}`);
    });

  process.stdout.write('Command-line received data:');
});

prompt.start();

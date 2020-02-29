const prompt = require('prompt');
const getDataFromGitHub = require('./utils/getDataFromGithub');

const count = 1;

const prompt_attributes = [{
  name: 'githubUser',
}];

prompt.get(prompt_attributes, (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }
  getDataFromGitHub(result.githubUser).then((response) => console.log('el nuevo proceso termino'));

  console.log('Command-line received data:');
});

prompt.start();

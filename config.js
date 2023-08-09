const Fs = require('fs');

module.exports = {
  "platform": "github",
  "token": process.env.RENOVATE_TOKEN,
  "repositories": JSON.parse(Fs.readFileSync('repos.json', 'utf8')),
  "logLevel": process.env.LOG_LEVEL,
  "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
  "prConcurrentLimit": 0,
  "prHourlyLimit": 0,
  "pruneStaleBranches": true,
  "recreateClosed": true,
  "onboarding": false,
  "requireConfig": false,
  "baseBranches": ["master", "main"],
  "packageRules": [

  ],
  "enabledManagers": ["helmv3"],
  "regexManagers": []
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'BSD 3') {
    return '![Github license](https://img.shields.io/badge/license-BSD_3-blue.svg)';
  } else if (license === 'APACHE 2.0') {
    return '![Github license](https://img.shields.io/badge/license-APACHE_2.0-blue.svg)';
  } else if (license === 'GPL 3.0') {
    return '![Github license](https://img.shields.io/badge/license-GPL_3.0-blue.svg)';
  } else if (license === 'MIT') {
    return '![Github license](https://img.shields.io/badge/license-MIT-blue.svg)';
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
// Don't know what this is referring to. There were no further instructions I could go off.
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'BSD 3') {
    return 'This project is licensed under the BSD 3 license.';
  } else if (license === 'APACHE 2.0') {
    return 'This project is licensed under the APACHE 2.0 license.';
  } else if (license === 'GPL 3.0') {
    return 'This project is licensed under the GPL 3.0 license.';
  } else if (license === 'MIT') {
    return 'This project is licensed under the MIT license.';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  console.log(data.project);
  return `# ${data.project}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  npm install
  \`\`\`
  
  ## Usage

  ${data.usingRepo}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributingRepo}

  ## Tests

  To run tests, run the following command:

  \`\`\`
  npm test
  \`\`\`

  ## Questions

  If you have any questions about the repo, contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;

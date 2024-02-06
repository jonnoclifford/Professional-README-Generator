// function to generate markdown for README

function generateMarkdown(data) {
  let licenseBadge = "";
  let licenseInfo = "";

  if (data.license !== "None") {
    licenseBadge = `[![License](https://img.shields.io/badge/license-${data.license}-brightgreen)](LICENSE)`;
    licenseInfo = `This application is covered under the ${data.license} license. [Learn more](LICENSE).`;
  } else {
    licenseInfo = "This application has no license.";
  }

  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseBadge}
${licenseInfo}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;

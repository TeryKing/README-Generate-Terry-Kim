
// TODO: Create a function to generate markdown for README
//standard README format
function generateMarkdown(data) {
  return `
  #${data.title}

  ${data.title} by ${data.username}

  ${data.getLicense}

# Description

${data.description}

# Table of Contents 

* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-Installation)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-Information)
    
# Installation

${data.installation}
# Usage

${data.usage}
# License 

${data.getLicense}

* As this license list was not comprehensive, if you need another license, use the contact information below to ask for license to be added. 

# Contributors

${data.contributors}

# Tests

${data.tests}

# Questions

${data.questions}

# Contact Information 
* GitHub Username: ${data.username}
* Github Profile: github.com/${data.username}
* Contact Email: ${data.email}
`;
}

module.exports = generateMarkdown;

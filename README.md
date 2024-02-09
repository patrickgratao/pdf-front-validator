<h1 align="center">
    <img alt="brainz group" src="https://brainz.group/wp-content/themes/brainz-group/assets/BrainzGroupLogo.svg" width="300" />
    <br>
    PDF Front-end Validator
</h1>
<br/>
<p align="center">
  <a href="#overview">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-install?">How to install?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

# Overview

The PDFValidator library is a tool that simplifies the process of validating PDF files when developing front-end interfaces. 

Use the main function to validate whether a file is in fact a PDF or whether it has been renamed with the pdf extension.

## Technology

- ⚛️ React 18
- ⛑ TypeScript
- ⛑ Vite
- 📏 ESLint
- 💖 Prettier

# How to install?

NPM:
```bash
npm install pdf-validator
```

Yarn
```bash
yarn add pdf-validator
```

## Usage

React example

```javascript

import { validateFilePDF } from 'pdf-validator'

function App() {
  const selectedFile = e.target.files[0]

    validateFilePDF(selectedFile)
    .then((result) => {
      if (result !== undefined) {
        // It's a PDF file
      } else {
        // It's not a PDF file
      }
    })
    .catch((error) => {
      console.error("Error to validate PDF File. ln: 58 Error => ", error);
      return;
    });
}

```

---

Made with 💗 by [Patrick Gratão](https://www.linkedin.com/in/patrickgratao/) 

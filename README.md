<h1 align="center">
    PDF Front-end Validator
</h1>
<br/>
<p align="center">
  <a href="#overview">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#install">Install</a>&nbsp;&nbsp;&nbsp;
</p>

# Overview

The PDF Front Validator library is a tool that simplifies the process of validating PDF files when developing front-end interfaces. 

Use the main function to validate whether a file is in fact a PDF or whether it has been renamed with the pdf extension.

## Technology

- ⚛️ React 18
- ⛑ TypeScript
- ⛑ Vite
- 📏 ESLint
- 💖 Prettier

# Install

NPM:
```bash
npm i pdf-front-validator
```

Yarn
```bash
yarn add pdf-front-validator
```

## Usage

React example

```javascript

import { validateFilePDF } from 'pdf-front-validator'

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

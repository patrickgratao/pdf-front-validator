<h1 align="center">
    PDF Front-end Validator
</h1>
<br/>
<p align="center">
  <a href="#PDF Front Validator">PDF Front Validator</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#install">Install</a>&nbsp;&nbsp;&nbsp;
</p>

# PDF Front Validator

A lightweight TypeScript library for inspecting PDF file signatures in the browser and detecting files that were renamed with a `.pdf` extension.

> Client-side file validation improves user feedback but does not replace server-side validation, malware scanning, or security controls.

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

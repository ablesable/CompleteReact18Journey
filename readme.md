#### Learning new React from scratch with Brian Holt course on Frontend Masters.

## Intro
- two scripts in the index file (react and react-dom), makes them behave as a global variable. 
- React is an API part of a library, and react-dom is actual renderer on a DOM.
- App function needs to be called. That's why we add renderer in script tags.
- JSX is translated into the JS. Then React.createElement is called.
- Components always has to return markup, the result of React.createElement.
- for developer dependencies use npm install --save-dev
- for formatting I use prettier. To use it for specific project, go to the settings: prettier -> require config file, prettier needs to be default formatter. That way, prettier will run only in projects with spcific instructions.
- add this to scripts: "format": "prettier --write \"src/**/*.{js,jsx}\"", then npm run format will format all the code.
- for eslint install additional extension for vscode, just like with prettier. Before script format is for people which doesn't use vscode. For VSCode previous settings needs to be added + format on save setting.
- add this to scripts: "lint": "eslint \"src/**/*.{js, jsx}\" --quiet"
- For specific debugging: npm run lint -- --debug (first -- is not passing anything to npm, second -- is for passing to eslint).
  
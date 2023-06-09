#### Learning new React from scratch with Brian Holt course on Frontend Masters.

## Intro

- two scripts in the index file (react and react-dom), makes them behave as a global variable.
- React is an API part of a library, and react-dom is actual renderer on a DOM.
- App function needs to be called. That's why we add renderer in script tags.
- JSX is translated into the JS. Then React.createElement is called.
- Components always has to return markup, the result of React.createElement.
- for developer dependencies use npm install --save-dev
- for formatting I use prettier. To use it for specific project, go to the settings: prettier -> require config file, prettier needs to be default formatter. That way, prettier will run only in projects with spcific instructions.
- add this to scripts: "format": "prettier --write \"src/\*_/_.{js,jsx}\"", then npm run format will format all the code.
- for eslint install additional extension for vscode, just like with prettier. Before script format is for people which doesn't use vscode. For VSCode previous settings needs to be added + format on save setting.
- add this to scripts: "lint": "eslint \"src/\*_/_.{js, jsx}\" --quiet"
- For specific debugging: npm run lint -- --debug (first -- is not passing anything to npm, second -- is for passing to eslint).
- type="module" in index.html is for vite. We don't use typical JavaScript but ES6 modules.
- For Eslint to understand jsx/tsx, We need to install plugins: import, react, jsx-a11y.

## JavaScript rules in React

- () parantheses in return are telling JS that line is not ended after return keyword, but after closing paranthesis.
- className keyword is used, cause class in JS is a keyword reserved to... classes.

## Hooks

- Every event in JavaScript, when happens, it rerenders everything.
- Because of rerendering cycle, we have to be more explicit about changing value (Hook).
- Hook - useState() returns array of two values. First is current state, and second is a function to change that state.
- Hooks needs to be called in the same order, when we're referencing the same component. That's how react keep track of things.
- RENDER FUNCTION needs to be fast and stateless!
- Custom Hooks are bundled from a few other hooks that exists.
- Effect Hook is a way to get something from out of component (Typical API request).
- Second argument in useEffect means that this hook will be called not every time, but just then, when value under this second argument changes.
- Spread operator should be used in componenets, where we don't do anything with data besides passing somewhere elese. Like Results componenet.

## Routing

- useParams hook can be used in Details page for getting an ID number. Details page is put in the same context (BrowserRouter) as Pet page which puts id to the its route. Makes this possible to happen.

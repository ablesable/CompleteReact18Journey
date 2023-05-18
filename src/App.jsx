// import React from 'react';
// import ReactDOM from 'react-dom';

import Pet from "./Pet.jsx" 

const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <Pet name ="Luna" animal = "dog" breed="Havanese" ></Pet>
      <Pet name ="Luna2" animal = "dog2" breed="Havanese2" ></Pet>
      <Pet name ="Luna3" animal = "dog3" breed="Havanese3" ></Pet>
    </div>
  )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App)); //passing a component
root.render(<App></App>);
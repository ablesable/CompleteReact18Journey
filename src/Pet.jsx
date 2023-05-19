// import React from 'react'; //with pure html inside of a function, we can get rid of it
//cause it uses React implicitly.

// const Pet = (props) => {
//     //one way data flow
//     return React.createElement('div', {}, [
//       React.createElement('h1', {}, props.name),
//       React.createElement('h2', {}, props.animal),
//       React.createElement('h2', {}, props.breed),
//     ]);
//   };

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0];
  }
  return (
    <a href={`/details/${id}`} className='pet'>
      <div className='image-container'>
        <img src={hero} alt={name} />
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;

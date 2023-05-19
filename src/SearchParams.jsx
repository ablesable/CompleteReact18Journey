import { useState, useEffect } from 'react';
import Pet from './Pet';
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const breeds = [];

  const [location, setLocation] = useState('Seattle, WA'); //const can be used here, cause the whole SearchParams function needs to be called again to reassign value there.
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className='search-params'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor='location'>
          Location
          <input onChange={(e) => setLocation(e.target.value)} id='location' value={location} placeholder='Location' />
        </label>
        <label htmlFor='animal'>
          Animal
          <select
            id='animal'
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed('');
            }}
          >
            {ANIMALS.map(
              (
                animal, //parentheses used cause of implicit return
              ) => (
                <option key={animal}>{animal}</option>
              ),
            )}
          </select>
        </label>

        <label htmlFor='breed'>
          Breed
          <select
            id='breed'
            value={breed}
            disabled={breeds.length === 0}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            {breeds.map(
              (
                breed, //parentheses used cause of implicit return
              ) => (
                <option key={breed}>{breed}</option>
              ),
            )}
          </select>
        </label>

        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
      ))}
    </div>
  );
};
export default SearchParams;

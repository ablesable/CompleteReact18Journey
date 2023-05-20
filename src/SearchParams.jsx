import { useState, useEffect } from 'react';
import useBreedList from './useBreedList';
import Results from './Results';
import BreedSelect from './BreedSelect';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA'); //const can be used here, cause the whole SearchParams function needs to be called again to reassign value there.
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal); //now we have it everytime we choose something.

  useEffect(() => {
    requestPets();
  }, []); //works once, initialy and never runs again. In the future only requestPets from onSubmit is called.

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

        <BreedSelect setBreed={setBreed} breed={breed} breeds={breeds}></BreedSelect>

        <button>Submit</button>
      </form>
      <Results pets={pets}></Results>
    </div>
  );
};
export default SearchParams;

const AnimalSelect = (props) => {
  return (
    <label htmlFor='animal'>
      Animal
      <select
        id='animal'
        value={props.animal}
        onChange={(e) => {
          props.setAnimal(e.target.value);
          props.setBreed('');
        }}
      >
        {props.ANIMALS.map((animal) => (
          <option key={animal}>{animal}</option>
        ))}
      </select>
    </label>
  );
};

export default AnimalSelect;

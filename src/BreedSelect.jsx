const BreedSelect = (props) => {
  return (
    <label htmlFor='breed'>
      Breed
      <select
        id='breed'
        value={props.breed}
        disabled={props.breeds.length === 0}
        onChange={(e) => {
          props.setBreed(e.target.value);
        }}
      >
        {/* parentheses used cause of implicit return */}
        {props.breeds.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </select>
    </label>
  );
};

export default BreedSelect;

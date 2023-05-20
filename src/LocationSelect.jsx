const LocationSelect = (props) => {
  return (
    <label htmlFor='location'>
      Location
      <input
        onChange={(e) => props.setLocation(e.target.value)}
        id='location'
        value={props.location}
        placeholder='Location'
      />
    </label>
  );
};

export default LocationSelect;

import { useState } from 'react';
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA"); //const
    //can be used here, cause the whole SearchParams function needs to be 
    //called again to reassign value there.

    const [animal, setAnimal] = useState("");
    return (
       <div className="search-params">
        <form>
            <label htmlFor="location">
                Location
                <input onChange={(e) => setLocation(e.target.value)}
                id="location" 
                value={location} 
                placeholder="Location" />
            </label>
            <label htmlFor="animal">
                Animal
                <select
                    id="animal"
                    value={animal}
                    onChange={e=> {
                        setAnimal(e.target.value)
                    }}>

                    {ANIMALS.map((animal) => ( //parentheses used cause of implicit return
                        <option key={animal}>{animal}</option>
                    ))}
                    
                </select>  
            </label>

            <button>Submit</button>
        </form>
       </div> 
    )


}
export default SearchParams;
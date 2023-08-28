import { useState } from "react";
const animals = ["bird", "cat", "reptile", "mammal"];
const breeds = ["kushal"];


const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div className="search-params">
      <form>

        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            disabled={animals.length===0}
            value={animal}
            onChange={(e) => {setAnimal(e.target.value)
            setBreed("");
            }}
            onBlur={(e)=>{setAnimal(e.target.value)
            setBreed("");
            }}
          >
            <option />
            {animals.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled ={breeds.length===0}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e)=>setBreed(e.target.value)}
            value={breed}
            placeholder="Breed"
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

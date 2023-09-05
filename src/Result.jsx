import Pet from "./Pet";
const Result = ({ pets }) => {
  return (
    <div className="search">
     {!pets.length ? (<h1>No Pets Found</h1>): (
        pets.map(pet=>(
            <Pet key={pet.id} location={pet.city} {...pet}/>
        ))
     )}
    </div>
  );
};

export default Result;

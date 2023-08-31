import Pet from "./Pet";
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>Pets not found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            key={pet.key}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;

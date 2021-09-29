// display the people in the array, must be able to remove certain people 
// have to add both name and age fields, should not accept 1 of none


const FixIt3 = () => {
  const [people, setPeople] = useState([
    { firstName: "wade", age: "30" },
    { firstName: "donny", age: "39" },
  ]);

  const deleteHandler = () => {
    const newPeople = people;
    newPeople.slice(index, 1);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person, index) => {
        return (
          <>
            <PersonCard
              key={index}
              age={age}
              firstName={firstName}
              index={index}
            />
            <button>remove</button>
          </>
        );
      })}
      <AddPerson people=(people) setPeople=(setPeople) />
    </div>
  );
};

const PersonCArd = ({ age, firstName }) => {
  return (
    <div>
      <h3>{firstName}</h3>
      <h3>{age}</h3>
    </div>
  );
};

const AddPerson = ({ people, setPeople }) => {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const addHandler = (e) => {
    
      const newPeople = people;
      newPeople.push({
        nameInput,
        ageInput,
      });
      setPeople(newPeople);
      setAgeInput("");
      setNameInput("");
    
  };
  return (
    <form>
      <input value={nameInput} onChange={(e) => nameInput()} />
      <input value={ageInput} onChange={(e) => ageInput()} />
      <button>add person</button>
    </form>
  );
};


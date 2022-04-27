import React, { useState } from "react";

const InventoryCreationForm = () => {
  const [fruit, setFruit] = useState([]);
  const [fruitToAdd, setFruitToAdd] = useState([]);
  const [vegtable, setVegtable] = useState([]);
  const [vegtableToAdd, setVegtableToAdd] = useState([]);
  const [poultry, setPoultry] = useState([]);
  const [poultryToAdd, setPoultryToAdd] = useState([]);
  const [grains, setGrains] = useState([]);
  const [grainsToAdd, setGrainsToAdd] = useState([]);
  const [dairy, setDairy] = useState([]);
  const [dairyToAdd, setDairyToAdd] = useState([]);

  //Function that will add Fruit to a list when button is pressed
  const addFruit = () => {
    setFruit((curr) => {
      return [...curr, fruitToAdd];
    });
  };

  const addVegtable = () => {
    setVegtable((curr) => {
      return [...curr, vegtableToAdd];
    });
  };

  const addPoultry = () => {
    setPoultry((curr) => {
      return [...curr, poultryToAdd];
    });
  };

  const addGrains = () => {
    setGrains((curr) => {
      return [...curr, grainsToAdd];
    });
  };

  const addDairy = () => {
    setDairy((curr) => {
      return [...curr, dairyToAdd];
    });
    };

    const updateInventory = async () => {
        const newProducts = {
            fruits: fruit,
            vegtables: vegtable,
            poultry: poultry,
            grains: grains,
            dairy: dairy,
        };

        const data = JSON.stringify(newProducts);
        await fetch('/inventory/create', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: data
        });
    };
    
    

  return (
    <div>
      <form>
        <label htmlFor="fruits">Fruits:</label>
        <ul>
          {fruit.map((fruit) => {
            return <li>{fruit}</li>;
          })}
        </ul>
        <input
          type="text"
          id="fruits"
          onChange={(e) => {
            setFruitToAdd(e.target.value);
          }}
          value={fruitToAdd}
        />
        <button type="button" onClick={addFruit}>
          Add
        </button>
        <br />
        <label htmlFor="vegtables">Vegtables:</label>
        <ul>
          {vegtable.map((vegtable) => {
            return <li>{vegtable}</li>;
          })}
        </ul>
        <input
          type="text"
          id="vegtables"
          onChange={(e) => {
            setVegtableToAdd(e.target.value);
          }}
          value={vegtableToAdd}
        />
        <button type="button" onClick={addVegtable}>
          Add
        </button>
        <br />
        <label htmlFor="poultry">Poultry:</label>
        <ul>
          {poultry.map((poultry) => {
            return <li>{poultry}</li>;
          })}
        </ul>
        <input
          type="text"
          id="poultry"
          onChange={(e) => {
            setPoultryToAdd(e.target.value);
          }}
          value={poultryToAdd}
        />
        <button type="button" onClick={addPoultry}>
          Add
        </button>
        <br />
        <label htmlFor="grains">Grains:</label>
        <ul>
          {grains.map((grains) => {
            return <li>{grains}</li>;
          })}
        </ul>
        <input
          type="text"
          id="grains"
          onChange={(e) => {
            setGrainsToAdd(e.target.value);
          }}
          value={grainsToAdd}
        />
        <button type="button" onClick={addGrains}>
          Add
        </button>
        <br />
        <label htmlFor="dairy">Dairy:</label>
        <ul>
          {dairy.map((dairy) => {
            return <li>{dairy}</li>;
          })}
        </ul>
        <input
          type="text"
          id="dairy"
          onChange={(e) => {
            setDairyToAdd(e.target.value);
          }}
          value={dairyToAdd}
        />
        <button type="button" onClick={addDairy}>
          Add
        </button>
        <br />
        <button onClick={updateInventory}>submit</button>
      </form>
    </div>
  );
};

export default InventoryCreationForm;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductUpdate = () => {
  const params = useParams();
  const id = params.id;
  const [fruit, setFruit] = useState([]);
  const [fruitToAdd, setFruitToAdd] = useState([]);
  const [vegtable, setVegtable] = useState([]);
  const [vegtableToAdd, setVegtableToAdd] = useState([]);
  const [meats, setMeats] = useState([]);
  const [meatsToAdd, setMeatsToAdd] = useState([]);
  const [grains, setGrains] = useState([]);
  const [grainsToAdd, setGrainsToAdd] = useState([]);
  const [dairy, setDairy] = useState([]);
  const [dairyToAdd, setDairyToAdd] = useState([]);
  const [discription, setDiscription] = useState("");
  const navigate = useNavigate();

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

  const addMeats = () => {
    setMeats((curr) => {
      return [...curr, meatsToAdd];
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

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`/inventory/${id}`);
      const data = await response.json();
      setFruit(data.products[0].fruits);
      setVegtable(data.products[0].vegtables);
      setMeats(data.products[0].meats);
      setGrains(data.products[0].grains);
      setDairy(data.products[0].dairy);
      setDiscription(data.description)
    };
    getProducts();
  }, [id]);

  const updateInventory = async () => {
    const updateProducts = {
      description: discription,
      products: {
        fruits: fruit,
        vegtables: vegtable,
        meats: meats,
        grains: grains,
        dairy: dairy,
      },
    };

    const data = JSON.stringify(updateProducts);
    const response = await fetch(`/inventory/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    if (response.status === 200) {
      navigate("/inventory")
    }
  };

  return (
    <div>
      <h1>Product Update</h1>

      <section>
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
        <label htmlFor="meat">Meat:</label>
        <ul>
          {meats.map((meats) => {
            return <li>{meats}</li>;
          })}
        </ul>
        <input
          type="text"
          id="meats"
          onChange={(e) => {
            setMeatsToAdd(e.target.value);
          }}
          value={meatsToAdd}
        />
        <button type="button" onClick={addMeats}>
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
        <label htmlFor="description">Description:</label>
        <br />
        <textarea
          id="description"
          rows="4"
          cols="40"
          placeholder="What do you want people to know about your locally grown food"
          onChange={(e) => setDiscription(e.target.value)}
          value={discription}
        />
        <br />
        <button onClick={updateInventory}>Update</button>
        <button onClick={() => navigate("/inventory")}>Cancel</button>
      </section>
    </div>
  );
};

export default ProductUpdate;

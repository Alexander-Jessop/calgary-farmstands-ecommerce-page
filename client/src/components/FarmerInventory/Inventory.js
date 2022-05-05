import React, { useState } from 'react'
import FarmStandDetails from './FarmStandDetails'
import InventoryCreationForm from './InventoryCreationForm'
import ViewProduct from './ViewProduct';

const Inventory = () => {
  const [popUpForm, setPopUpForm] = useState(false);
  

  return (
    <div>
      <FarmStandDetails id={"626372742a678c99fded8d0d"} />
      <button
        onClick={() => {
          setPopUpForm(true);
        }}
      >
        Create inventory
      </button>
      {popUpForm && <InventoryCreationForm setPopUpForm={setPopUpForm} />}
      <ViewProduct id={"62744d503801e4a2e43c988d"} />
    </div>
  );
}

export default Inventory
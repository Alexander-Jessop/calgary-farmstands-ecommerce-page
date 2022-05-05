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
        Create and edit Inventory
      </button>
      {popUpForm && <InventoryCreationForm setPopUpForm={setPopUpForm} />}
      <ViewProduct id={"626d5ac87479d7a7c8b05b49"} />
    </div>
  );
}

export default Inventory
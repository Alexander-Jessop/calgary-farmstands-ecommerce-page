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
      <ViewProduct id={"626d72e1cd475dbb05451d30"} />
    </div>
  );
}

export default Inventory
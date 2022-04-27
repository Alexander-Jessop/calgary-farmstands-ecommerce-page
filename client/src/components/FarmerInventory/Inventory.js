import React, { useState } from 'react'
import FarmStandDetails from './FarmStandDetails'
import InventoryCreationForm from './InventoryCreationForm'

const Inventory = () => {
  const [popUpForm, setPopUpForm] = useState(false);
  

  return (
    <div>
      <FarmStandDetails id={"626372742a678c99fded8d0d"} />
      <button onClick={()=>{setPopUpForm(true)}}>Create and edit Inventory</button>
      {popUpForm && <InventoryCreationForm setPopUpForm={setPopUpForm} />}
    </div>
  )
}

export default Inventory
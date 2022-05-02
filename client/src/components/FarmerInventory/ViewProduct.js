import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductDeletion from './ProductDeletion';

const ViewProduct = (props) => {
  const id = props.id;
  const [productInfo, setProductInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const productInfo = async () => {
      let response = await fetch(`/inventory/${id}`);
      let data = await response.json();
      setProductInfo(data);
    };

    productInfo();
  }, [id]);

  if (!productInfo) {
    return <p>Loading data...</p>;
  }
  return (
    <div>
      <div className="info">
        <label>FarmStand id: </label>
        <span>{productInfo._id}</span>
        <br />
        <label>Fruits: </label>
        <span>{productInfo.products[0].fruits}</span>
        <br />
        <label>Vegtables: </label>
        <span>{productInfo.products[0].vegtables}</span>
        <br />
        <label>Meats: </label>
        <span>{productInfo.products[0].meats}</span>
        <br />
        <label>Vegtables: </label>
        <span>{productInfo.products[0].grains}</span>
        <br />
        <label>Dairy: </label>
        <span>{productInfo.products[0].dairy}</span>
        <br />
        <label>Description: </label>
        <span>{productInfo.description}</span>
        <br />
        <ProductDeletion id={"626d7278cd475dbb05451d28"} />
        <button onClick={() => navigate(`/inventory-update/${id}`)}>
          Update
        </button>
      </div>
    </div>
  );
}

export default ViewProduct
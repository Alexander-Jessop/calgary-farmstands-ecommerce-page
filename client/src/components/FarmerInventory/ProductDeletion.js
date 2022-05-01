import React, { useEffect, useState } from 'react'

const ProductDeletion = (props) => {
    const id = props.id;
    const [deleteProduct, setDeleteProduct] = useState();

    useEffect(() => {
        const getProduct = async () => {
            let response = await fetch(`/inventory/${id}`);
            let data = await response.json();
            setDeleteProduct(data);
        };
        getProduct();
    }, [id]);

    const deleteRecord = async () => {
        const data = JSON.stringify(deleteProduct);
        await fetch(`/inventory/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: data,
        });
    };

    return (
        <div>
            <button onClick={deleteRecord}>Delete</button>
        </div>
    );
};

export default ProductDeletion
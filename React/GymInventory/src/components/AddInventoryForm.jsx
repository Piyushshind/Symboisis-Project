import React, { useState } from 'react';
import { addInventoryItem } from '../api/api';

const AddInventoryForm = () => {
  const [itemData, setItemData] = useState({
    itemName: '',
    itemCategory: 'CARDIO',
    itemCondition: 'GOOD',
    price: 0,
    quantity: 1,
    distributorContactNumber: '',
    distributorEmail: '',
    currentdate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addInventoryItem(itemData);
    // Clear the form after submission
    setItemData({
      itemName: '',
      itemCategory: 'CARDIO',
      itemCondition: 'GOOD',
      price: 0,
      quantity: 1,
      distributorContactNumber: '',
      distributorEmail: '',
      currentdate: new Date().toISOString().split('T')[0],
    });
  };

  return (
     <div className="inventory-form">
            <form onSubmit={handleSubmit}>
                <h2 className="form-title">Add Inventory Item</h2>
                <input className="form-input" type="text" name="itemName" value={itemData.itemName} onChange={handleChange} placeholder="Item Name" required />
                <select className="form-select" name="itemCategory" value={itemData.itemCategory} onChange={handleChange}>
                    <option value="CARDIO">Cardio</option>
                    <option value="STRENGTH">Strength</option>
                    <option value="WEIGHTS">Weights</option>
                </select>
                <select className="form-select" name="itemCondition" value={itemData.itemCondition} onChange={handleChange}>
                    <option value="GOOD">Good</option>
                    <option value="AVERAGE">Average</option>
                    <option value="BAD">Bad</option>
                </select>
                <input className="form-input" type="number" name="price" value={itemData.price} onChange={handleChange} placeholder="Price" required />
                <input className="form-input" type="number" name="quantity" value={itemData.quantity} onChange={handleChange} placeholder="Quantity" required />
                <input className="form-input" type="text" name="distributorContactNumber" value={itemData.distributorContactNumber} onChange={handleChange} placeholder="Distributor Contact" required />
                <input className="form-input" type="email" name="distributorEmail" value={itemData.distributorEmail} onChange={handleChange} placeholder="Distributor Email" required />
                <button className="form-button" type="submit">Add Item</button>
            </form>
        </div>
  );
};

export default AddInventoryForm;

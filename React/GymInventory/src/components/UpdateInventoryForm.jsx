import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getInventoryItemById, updateInventoryItem } from '../api/api';

const UpdateInventoryForm = () => {
  const { id } = useParams();  // Get the ID from the URL params
  const navigate = useNavigate();  // For navigation after form submission
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

  useEffect(() => {
    // Fetch the current item details based on the ID and set it in the form
    const fetchItem = async () => {
      try {
        const response = await getInventoryItemById(id);
        setItemData(response.data);
      } catch (error) {
        console.error("Failed to fetch item data", error);
      }
    };
    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateInventoryItem(id, itemData);
      alert('Inventory updated successfully');
      navigate('/');  // Redirect back to the inventory list page after updating
    } catch (error) {
      console.error("Error updating inventory", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Inventory Item</h2>
      <input
        type="text"
        name="itemName"
        value={itemData.itemName}
        onChange={handleChange}
        placeholder="Item Name"
        required
      />
      <select
        name="itemCategory"
        value={itemData.itemCategory}
        onChange={handleChange}
      >
        <option value="CARDIO">Cardio</option>
        <option value="STRENGTH">Strength</option>
        <option value="WEIGHTS">Weights</option>
        <option value="YOGA">Yoga</option>
        <option value="OTHER">Other</option>
      </select>
      <select
        name="itemCondition"
        value={itemData.itemCondition}
        onChange={handleChange}
      >
        <option value="GOOD">Good</option>
        <option value="AVERAGE">Average</option>
        <option value="BAD">Bad</option>
      </select>
      <input
        type="number"
        name="price"
        value={itemData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="number"
        name="quantity"
        value={itemData.quantity}
        onChange={handleChange}
        placeholder="Quantity"
        required
      />
      <input
        type="text"
        name="distributorContactNumber"
        value={itemData.distributorContactNumber}
        onChange={handleChange}
        placeholder="Distributor Contact"
        required
      />
      <input
        type="email"
        name="distributorEmail"
        value={itemData.distributorEmail}
        onChange={handleChange}
        placeholder="Distributor Email"
        required
      />
      <input
        type="date"
        name="currentdate"
        value={itemData.currentdate}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Item</button>
    </form>
  );
};

export default UpdateInventoryForm;

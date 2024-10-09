import React, { useEffect, useState } from 'react';
import { getInventoryItems, deleteInventoryItem } from '../api/api';
const InventoryList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetchItems();
    }, []);
  
    const fetchItems = async () => {
      const response = await getInventoryItems();
      setItems(response.data);
    };
  
    const handleDelete = async (id) => {
      await deleteInventoryItem(id);
      fetchItems(); // Refresh the list after deletion
    };
  
    return (
      <div>
        <h2>Inventory List</h2>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Condition</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.itemName}</td>
                <td>{item.itemCategory}</td>
                <td>{item.itemCondition}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default InventoryList;
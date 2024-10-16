import React, { useEffect, useState } from 'react';
import { getInventoryItems, deleteInventoryItem } from '../api/api';
import { Link } from 'react-router-dom';



const InventoryList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchInventoryItems();
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

    const fetchInventoryItems = async () => {
        try {
            console.log("ye re bhai");
            const response = await fetch('/api/v1/inventory/getAll');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching inventory items:', error);
        }
    };
    return (
        <div className="inventory-list">
            <h2 className="title">Inventory List</h2>
            <table className="inventory-table">
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
                            <td>₹{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Link to={`/update/${item.id}`}>
                                    <button className="action-button">Update</button>
                                </Link>
                                <button className="action-button" onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default InventoryList;
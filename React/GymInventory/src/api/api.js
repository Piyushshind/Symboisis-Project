import axios from 'axios';

// Define the base URL of your Spring Boot API
const API_URL = 'http://localhost:8071/api/v1/inventory';

// Get all inventory items
export const getInventoryItems = async () => {
    return await axios.get(`${API_URL}/getAll`);
};

// Add a new inventory item
export const addInventoryItem = async (itemData) => {
    return await axios.post(`${API_URL}/create`, itemData);
};

// Update an inventory item
// export const updateInventoryItem = async (id, updatedData) => {
//   return await axios.put(`${API_URL}/update/${id}`, updatedData);
// };

// Delete an inventory item
export const deleteInventoryItem = async (id) => {
    return await axios.delete(`${API_URL}/delete/${id}`);
};

// Update an inventory item
export const updateInventoryItem = async (id, updatedData) => {
    return await axios.put(`${API_URL}/update/${id}`, updatedData);
};

// Get a single inventory item by ID
export const getInventoryItemById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

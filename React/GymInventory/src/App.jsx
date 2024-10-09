import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import InventoryList from './components/InventoryList';
import AddInventoryForm from './components/AddInventoryForm';
import UpdateInventoryForm from './components/UpdateInventoryForm';

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<InventoryList />} />
            <Route path="/add" element={<AddInventoryForm />} />
            <Route path="/update/:id" element={<UpdateInventoryForm />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;

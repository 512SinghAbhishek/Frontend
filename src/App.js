// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerList from './Components/CustomerList/CustomerList';
import AddEditCustomer from './Components/Add_Edit Customer Component/Edit Customer Component';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Add_Customer_Component from './Components/Add_Edit Customer Component/Add Customer Component';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
        <Route path="/CustomerList" element={<CustomerList />} />
        <Route path="/add" element={<Add_Customer_Component />} />
        <Route path="/edit/:id" element={<AddEditCustomer />} />
      </Routes>
    </Router>
  );
}

export default App;


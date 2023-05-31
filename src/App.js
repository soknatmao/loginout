import logo from './logo.svg';
import './App.css';
import ProductForm from './Pages/CreateProduct';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import NotFound from './Pages/404';
import ProductTable from './Pages/ProductTable';
import MyEditor from './Pages/MyEditor';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<ProductForm update={false}/>} />
        <Route path='/update' element={<ProductForm update={true}/>} />
        <Route path='/datatable' element={<ProductTable />} />
        <Route path='/editor' element={<MyEditor />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
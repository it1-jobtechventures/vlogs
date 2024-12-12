import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallary from './components/Gallary';
import Header from './components/Header';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path='/gallary' element={<Gallary/>}/>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;

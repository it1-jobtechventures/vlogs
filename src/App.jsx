import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
import BlogDetail from './components/BlogDetail'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-[#dab392]'>
      <Navbar/>
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

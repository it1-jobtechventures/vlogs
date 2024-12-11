import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
import BlogDetail from './components/BlogDetail'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;

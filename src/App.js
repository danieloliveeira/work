
import './App.css';
import { HashRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import  Form  from './components/forms';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

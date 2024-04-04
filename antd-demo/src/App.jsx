import './App.css';
import Home from './Home.jsx';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="recommend/post/all" />}>
          
        </Route>
      </Routes>
      <Home />

    </div>

  );
}

export default App;
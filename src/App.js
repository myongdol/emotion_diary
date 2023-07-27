import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import RouteTest from './components/RouteTest';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/diary' element={<Diary/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
        <RouteTest/>
      </div>
    </BrowserRouter>
  );
}

export default App;

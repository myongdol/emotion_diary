import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>일기장 만들기</h2>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/diary/:id' element={<Diary/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

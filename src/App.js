import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';

//컴포넌트
import MyButton from './components/MyButton';
import Header from './components/Header';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header headText={"헤더!!!!!"}/>
        <h2>일기장 만들기</h2>
        <MyButton text={'버튼'} type={"positive"} onClick={() => alert("hi")}/>
        <MyButton text={'버튼'} type={"negative"} onClick={() => alert("hi")}/>
        <MyButton text={'버튼'} onClick={() => alert("hi")}/>
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

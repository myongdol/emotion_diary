import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import React, { useReducer, useRef } from 'react';

const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case 'INIT':{
      return action.data;
    }
    case 'CREATE':{
      const newitem = {
        ...action.data
      };
      newState =[newitem, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((item) => item.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((item) => item.id === action.data.id? {...action.data}: item)
      break;
    }
    default:
      return state;
  }
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id:1,
    meotion:3,
    content:"테스트용 일기",
    date:1690567976999,
  },
  {
    id:2,
    meotion:1,
    content:"테스트용 일기222",
    date:1690567977000,
  },
  {
    id:3,
    meotion:2,
    content:"테스트용 일기333",
    date:1690567977001,
  },
]

function App() {

  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({type: "CREATE", data:{
      id: dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion
    }})
    dataId.current += 1;
  }
  
  const onRemove = (targetId) => {
    dispatch({type: "REMOVE", targetId});
  }

  const onEdit = (targetId, date, content, emotion)=> {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    })
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{onCreate, onRemove, onEdit}}
      >
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/diary/:id' element={<Diary/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;

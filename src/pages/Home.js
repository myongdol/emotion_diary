import { useContext, useEffect, useState } from "react";
import Header from '../components/Header';
import MyButton from '../components/MyButton';
import { DiaryStateContext } from "../App";
import DiaryList from "../components/DiaryList";

const Home = () => {
    

    const [curDate, setCurDate] = useState(new Date());
    console.log(curDate)
    // getMont는 0부터 시작하기 때문애 +!
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월` 

    const increaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate()));
    }

    const decreaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate()));
    }

    
    const diaryList = useContext(DiaryStateContext);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        if(diaryList.length >= 1) {

    
        const firstDay = new Date(
            curDate.getFullYear(), 
            curDate.getMonth(),
            1
        ).getTime();
        
        const lastDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth() + 1,
            0
        ).getTime();

        setData(
            diaryList.filter((item) => firstDay <= item.date && item.date <= lastDay)
        );  
    }
    }, [diaryList, curDate])

    useEffect(() => {
        console.log(data);
    }, [data])


    return <div>
        <Header 
        headText={headText}
        leftChild={<MyButton text={'<-'} onClick={decreaseMonth}/>}
        rightChild={<MyButton text={'->'} onClick={increaseMonth} />}
        />
        <DiaryList diaryList={data}/>
    </div>
}

export default Home;
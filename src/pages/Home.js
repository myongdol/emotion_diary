import { useState } from "react";
import Header from '../components/Header';
import MyButton from '../components/MyButton';

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


    return <div>
        <Header 
        headText={headText}
        leftChild={<MyButton text={'<-'} onClick={decreaseMonth}/>}
        rightChild={<MyButton text={'->'} onClick={increaseMonth} />}
        />
    </div>
}

export default Home;
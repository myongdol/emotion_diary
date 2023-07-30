
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Header from "./Header";
import MyButton from "./MyButton";



const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
}

const DiaryEditor = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState();
    console.log(getStringDate(new Date()))

    return (
    <div>
        <Header
         headText={"새 일기쓰기"} 
         leftChild={<MyButton text={"<- 뒤로가기"} 
         onClick={()=> navigate(-1)}/>}
        />
        <div>
            <section>
                <h4>오늘은 몇월 몇일 인가요?</h4>
                <div className="input-box">
                    <input
                        className="input-date" 
                        value={date} 
                        onChange={(e)=> setDate(e.target.value)} 
                        type="date"
                    />
                </div>
            </section>
        </div>
    </div>
    )
}

export default DiaryEditor;
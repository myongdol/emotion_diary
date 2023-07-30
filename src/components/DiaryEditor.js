
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Header from "./Header";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem";



const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
}

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const emotionList = [
    {
        emotion_id:1,
        emotion_img : process.env.PUBLIC_URL + `assets/emotion1.png`,
        emotion_descript: '아주 좋음'
    },
    {
        emotion_id:2,
        emotion_img : process.env.PUBLIC_URL + `assets/emotion2.png`,
        emotion_descript: '좋음'
    },
    {
        emotion_id:3,
        emotion_img : process.env.PUBLIC_URL + `assets/emotion3.png`,
        emotion_descript: '보통'
    },
    {
        emotion_id:4,
        emotion_img : process.env.PUBLIC_URL + `assets/emotion4.png`,
        emotion_descript: '나쁨'
    },
    {
        emotion_id:5,
        emotion_img : process.env.PUBLIC_URL + `assets/emotion5.png`,
        emotion_descript: '끔찍함'
    },
]

const DiaryEditor = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState();
    
    const [emotion, setEmotion] = useState(3);
    const handleClickEmote = (emotion) => {
        setEmotion(emotion)
    }

    return (
    <div className="DiaryEditor">
        <Header
         headText={"새 일기쓰기"} 
         leftChild={<MyButton text={"<- 뒤로가기"} 
         onClick={()=> navigate(-1)}/>}
        />
        <div>
            <section>
                <h4>오늘은 몇월 몇일 인가요?</h4>
                <div className="input_box">
                    <input
                        className="input_date" 
                        value={date} 
                        onChange={(e)=> setDate(e.target.value)} 
                        type="date"
                    />
                </div>
            </section>
            <section>
                <h4>오늘의 감정</h4>
                <div className="input_box emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem 
                            key={item.emotion_id} 
                            {...item}
                            onClick={handleClickEmote}
                            isSelected={item.emotion_id === emotion}
                        />
                    ))}
                </div>
            </section>
        </div>
    </div>
    )
}

export default DiaryEditor;

import { useCallback, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Header from "./Header";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem";
import { useRef } from "react";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";


const DiaryEditor = ({isEdit, originData}) => {
    const navigate = useNavigate();
    const [date, setDate] = useState("");
    
    const [emotion, setEmotion] = useState(3);
    const handleClickEmote = useCallback((emotion) => {
        setEmotion(emotion)
    },[])

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const {onCreate, onEdit, onRemove} = useContext(DiaryDispatchContext);

    const handleSubmit = () => {
        if(content.length < 1 ){
            contentRef.current.focus();
            return;
        }

        if(window.confirm(isEdit ? "일기를 수정 하시겠습니까?": "새로운 일기를 작성 하시겠습니까?"))
            if(!isEdit) {
                onCreate(date, content, emotion);
            } else {
                onEdit(originData.id, date, content, emotion)
            }
        

        onCreate(content, date, emotion);
        navigate('/',{
            replace: true
        })
    }

    const handleRemove = () => {
        if(window.confirm('정말 삭제 하시겠습니까?')) {
            onRemove(originData.id);
            navigate('/', {replace:true})
        }
    }

    useEffect(() => {
        if(isEdit) {
            setDate(getStringDate(new Date(parseInt(originData.date))))
            setEmotion(originData.emotion);
            setContent(originData.content);
        }
    }, [isEdit, originData])

    return (
    <div className="DiaryEditor">
        <Header
         headText={isEdit ? "일기 수정하기" : "새 일기 작성하기"} 
         leftChild={<MyButton text={"<- 뒤로가기"} 
         onClick={()=> navigate(-1)}/>}
         rightChild={isEdit && (
            <MyButton text={'삭제하기'} type={'negative'} onClick={handleRemove}/>
         )}
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
            <section>
                <h4>오늘의 일기 쓰기</h4>
                <div className="input_box text_wrapper">
                    <textarea 
                        ref={contentRef} 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="오늘은 어떠셨나요?"
                    />
                </div>
            </section>
            <section>
                <div className="control_box">
                    <MyButton
                        text={'취소하기'}
                        onClick={() => navigate(-1)}
                    />
                    <MyButton
                        text={'작성하기'}
                        type={'positive'}
                        onClick={handleSubmit}
                    />
                </div>
            </section>
        </div>
    </div>
    )
}

export default DiaryEditor;
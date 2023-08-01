import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../util/date";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import { emotionList } from "../util/emotion";


const Diary = () => {
    
    const {id} = useParams();
    const diaryList = useContext(DiaryStateContext);
    const navigate = useNavigate();
    const [data, setData] =useState();

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `일기장 - ${id}번 일기`;
    },[]);

    useEffect(() => {
        if(diaryList.length >= 1) { 
            const targetDiary = diaryList.find((item) => parseInt(item.id) === parseInt(id));
            
            if(targetDiary) {
                //일기가 존재 할 때 
                setData(targetDiary);
            } else {
                //일기가 존재 하지 않을 때
                alert("없는 일기에 접근을 시도 하였습니다.");
                navigate('/', {replace:true});
            }
        } 
    }, [id, diaryList])

    if(!data) {
        return (
            <div className="DiaryPage">
                로딩중......
            </div>
        )
    } else {

        const curEmotionData = emotionList.find((item) => parseInt(item.emotion_id) === parseInt(data.emotion))
        
        return (
            <div className="DiaryPage">
                <Header 
                    headText={`${getStringDate(new Date(data.date))}일에 작성한 일기`}
                    leftChild={<MyButton text={"<-뒤로가기"} onClick={() => navigate(-1)}/>}
                    rightChild={<MyButton text={"수정하기"} onClick={() => navigate(`/edit/${data.id}`)}/>}
                />
                <article>
                    <section>
                        <h4>오늘의 감정</h4>
                        <div className={["diary_img_wrapper", `diary_img_wrapper_${data.emotion}`].join(" ")}>
                            <img src={curEmotionData.emotion_img} /> 
                            <div className="emotion_descript">
                                {curEmotionData.emotion_descript}
                            </div>
                        </div>
                    </section>
                    <section>
                        <h4>오늘의 일기</h4>
                        <div className="diary_content_wrapper">
                            <p>{data.content}</p>
                        </div>
                    </section>
                </article>
            </div>
        )
    }

}

export default Diary;
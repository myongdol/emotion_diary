import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";



const Diary = () => {
    
    const {id} = useParams();
    const diaryList = useContext(DiaryStateContext);

    useEffect(() => {
        if(diaryList.length >= 1) { 
            const targetDiary = diaryList.find((item) => parseInt(item.id) === parseInt(id));
            console.log(targetDiary)
        } 
    }, [id, diaryList])

    return <div>
        <h1>Diary</h1>
        <p>일기 상세 페이지</p>
    </div>
}

export default Diary;
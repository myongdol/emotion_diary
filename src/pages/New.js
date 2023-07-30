import Header from "../components/Header";
import MyButton from "../components/MyButton";
import {useNavigate} from 'react-router-dom'



const New = () => {
    const navigate = useNavigate();

    return (
    <div>
        <Header
         headText={"새 일기쓰기"} leftChild={<MyButton text={"<- 뒤로가기"} onClick={()=> navigate(-1)}/>}
        />
        
    </div>
    )
}

export default New;
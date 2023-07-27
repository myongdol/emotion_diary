import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    console.log("id :",id)

    const mode = searchParams.get('mode');
    console.log("mode :",mode)

    const navigate = useNavigate();

    return <div>
        <h1>Edit</h1>
        <p>일기 수정 페이지</p>
        <button onClick={()=>setSearchParams({who:'myongdol'})}>
            QS변경하기
        </button>
        <button onClick={()=> {
            navigate("/home")
        }}>
            홈으로
        </button>
    </div>
}

export default Edit;
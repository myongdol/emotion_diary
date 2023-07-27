import { useSearchParams } from "react-router-dom";

const Edit = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    console.log("id :",id)

    const mode = searchParams.get('mode');
    console.log("mode :",mode)

    return <div>
        <h1>Edit</h1>
        <p>일기 수정 페이지</p>
    </div>
}

export default Edit;
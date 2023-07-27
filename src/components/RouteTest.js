import { Link } from "react-router-dom";

// SPA 방식으로 페이지를 이동 시켜줌! 
const RouteTest = () => {
    return <>
    <Link to={'/'}>Home</Link>
    <br/>
    <Link to={'/diary'}>Diary</Link>
    <br/>
    <Link to={'/new'}>New</Link>
    <br/>
    <Link to={'/edit'}>Edit</Link>
    </>
}
export default RouteTest;
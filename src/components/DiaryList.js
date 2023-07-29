import { useState } from "react";


const sortOtionList = [
    {value: "lastest", name:"최신순"},
    {value: "oldest", name:"오래된 순"},
]

const ControlMenu = ({value, onChange, optionList}) => {
    return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
        {optionList.map((item, idx) => <option value={item.value} key={idx}>{item.name}</option>)}
    </select>)
}

const DiaryList = ({diaryList}) => {

    const [sortType, setSortType] = useState('lastest');

    return (
    <div>
        <ControlMenu value={sortType} onChange={setSortType} optionList={sortOtionList}/>
        {diaryList.map((item) => (
            <div key={item.id}>{item.content}</div>
        ))}
    </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
}

export default DiaryList;
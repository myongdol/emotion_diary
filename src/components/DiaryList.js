import { useState } from "react";


const sortOtionList = [
    {value: "latest", name:"최신순"},
    {value: "oldest", name:"오래된 순"},
]

const ControlMenu = ({value, onChange, optionList}) => {
    return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
        {optionList.map((item, idx) => <option value={item.value} key={idx}>{item.name}</option>)}
    </select>)
}

const DiaryList = ({diaryList}) => {

    const [sortType, setSortType] = useState('latest');

    const getProcessedDiaryList = () => {

        const compare = (a, b) => {
            if(sortType === 'latest'){
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        }

        const copyList = JSON.parse(JSON.stringify(diaryList))
        const sortedList = copyList.sort(compare);
        return sortedList;
    };

    return (
    <div>
        <ControlMenu 
            value={sortType} 
            onChange={setSortType} 
            optionList={sortOtionList}
        />
        {getProcessedDiaryList().map((item) => (
            <div key={item.id}>{item.content}</div>
        ))}
    </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
}

export default DiaryList;
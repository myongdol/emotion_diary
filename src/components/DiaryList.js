import { useState } from "react";


const sortOtionList = [
    {value: "latest", name:"최신순"},
    {value: "oldest", name:"오래된 순"},
]

const filterOptionList = [
    {value: "all", name:"전부 보기"},
    {value: "good", name:"좋은 감정만 보기"},
    {value: "bad", name:"나쁜 감정만 보기"},
]

const ControlMenu = ({value, onChange, optionList}) => {
    return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
        {optionList.map((item, idx) => <option value={item.value} key={idx}>{item.name}</option>)}
    </select>)
}

const DiaryList = ({diaryList}) => {

    const [sortType, setSortType] = useState('latest');
    const [filter, setFilter] = useState('all');

    const getProcessedDiaryList = () => {
        const filterCallback = (item) => {
            if(filter === 'good') {
                return parseInt(item.emotion) <= 3;
            } else {
                return parseInt(item.emotion) > 3;
            }
        }

        const compare = (a, b) => {
            if(sortType === 'latest'){
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        }

        const copyList = JSON.parse(JSON.stringify(diaryList))

        const filteredList = filter === 'all' ? copyList : copyList.filter((item) => filterCallback(item)); 

        const sortedList = filteredList.sort(compare);
        return sortedList;
    };

    return (
    <div>
        <ControlMenu 
            value={sortType} 
            onChange={setSortType} 
            optionList={sortOtionList}
        />
        <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
        />
        {getProcessedDiaryList().map((item) => (
            <div key={item.id}>{item.content} {item.emotion }</div>
        ))}
    </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
}

export default DiaryList;
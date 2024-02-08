/**
 * 추후 portfolio 추가시 path 및 일부 아이템 컬러 지정해서 나오도록 설정
 */
const colors = [
    '#90211B', '#A82921', '#C13229',
    '#3F379F', '#4941AE', '#4D45B1',
    '#187186', '#1B788D', '#1C7B92',
    '#51A831', '#56B237', '#5FBC40',
    '#DBAE10', '#E8B816', '#F5C41B'
];
const emptyColor = '#111617';
const empty = {
    title: "dummy"
};
const datas = [
    {
        title: "Test Item"
    },
    {
        title: "Long Title Test Item"
    },
    {
        title: "Test Item"
    },
    {
        title: "Test Item"
    },
    {
        title: "Test Item"
    },
    {
        title: "Test Item"
    }
];
const PortfolioList = Array.from({ length: Math.max(datas.length, 15) }, (_, i) => {
    if (i < datas.length) {
        return { ...datas[i], key: i, color: colors[i % colors.length] };
    }
    return { ...empty, color: emptyColor, key: i };
});

export default PortfolioList;
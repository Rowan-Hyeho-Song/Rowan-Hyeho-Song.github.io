/**
 * 추후 portfolio 추가시 path 및 일부 아이템 컬러 지정해서 나오도록 설정
 */
const colors = [
    '#90211B', '#A82921', '#C13229',
    '#3E379E', '#473FAA', '#4E47B4',
    '#1C7D93', '#1A788F', '#1B7A90',
    '#567C24', '#67982A', '#80BF32',
    '#BCA821', '#CFB823', '#EBCE13'
];
const emptyColor = ['#303030', '#333333', '#3E3E3E'];
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
    return { ...empty, color: emptyColor[i % emptyColor.length], key: i };
});

export default PortfolioList;
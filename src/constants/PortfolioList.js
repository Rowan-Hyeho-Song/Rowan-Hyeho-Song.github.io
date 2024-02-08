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
        title: "Test Item",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "Long Title Test Item",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "Lorem ipsum dolor sit amet",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "consectetur adipiscing elit",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "sed do eiusmod tempor",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "incididunt ut labore",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "et dolore magna aliqua",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "Ut enim ad minim veniam",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "quis nostrud",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "exercitation ullamco laboris",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "nisi ut aliquip",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "ex ea commodo consequat",
        date: ["FEBRUARY", 2024]
    },
    {
        title: "Duis aute irure dolor",
        date: ["FEBRUARY", 2024]
    }
];
const PortfolioList = Array.from({ length: Math.max(datas.length, 15) }, (_, i) => {
    if (i < datas.length) {
        return { ...datas[i], key: i, color: colors[i % colors.length] };
    }
    return { ...empty, color: emptyColor, key: i };
});

export default PortfolioList;
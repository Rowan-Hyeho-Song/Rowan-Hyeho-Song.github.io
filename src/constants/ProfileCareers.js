const careers = [
    {
        company: "주식회사 퍼즐데이터",
        department: "개발팀",
        position: "연구원",
        employ: false,
        date: ["2020.03", "2023.06"],
        performance: [
            {
                name: "ProDiscorvery 3.0",
                date: ["2022.02", "2023.05"],
                summary: "Vallia JS를 기반으로 자체 프레임워크를 개발하며 진행한 신규 자사 제품 개발 프로젝트 (전체 기여도 20%)",
                content: "프로젝트 내에서 일부 데이터시각화 차트(Bar, Line, Pie, Dotted 등) 을 담당하여 설계 단계부터 진행. D3.js 라이브러리를 활용해 개발, 자주 쓰이는 기능들의 Util화, 컴포넌트 렌더링 최적화",
                skill: ["javascript", "scss"],
                links: "https://www.youtube.com/watch?v=UxOh1jiwZMk"
            },
            {
                name: "Action Mining",
                date: ["2021.07", "2021.12"],
                summary: "새로운 자사 제품 후보인 Action Mining 반응형 웹 구현 (전체 기여도 40%)",
                content: "D3.js 라이브러리를 활용하여 Bar, Box Plot, Scatter plot, jitter plot 등 차트를 개발, 리스트형 데이터 렌더링 최적화를 위해 가상 스크롤 구현 등",
                skill: ["javascript", "angularJS"]
            },
            {
                name: "Transform Flow",
                date: ["2020.07", "2021.04"],
                summary: "ProDiscovery 2.0 신규 기능인 데이터 전처리 가공 기능의 프론트 화면 개발 (프론트 기여도 100%)",
                content: "D3.js 라이브러리를 활용하여 Bar, Box Plot, Scatter plot, jitter plot 등 차트를 개발, 리스트형 데이터 렌더링 최적화를 위해 가상 스크롤 구현 등테이블 형태의 화면에서 데이터의 split, combine, translate, replace(regex), column rename 등 데이터의 가공을 처리하는 기능을 백엔드 개발자와 1 대 1로 협업하며 개발",
                skill: ["javascript", "angularJS", "java"],
                links: "https://www.youtube.com/watch?v=7FyYIkmuPQA?t=20"
            }
        ]
    }
];

export default careers;
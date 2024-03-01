import styled from 'styled-components';

const Container = styled.div`
background-color: #F7F9FD;
padding: 20px;

display: flex;
flex-direction: column;
overflow-y: auto;
min-height: 300px;
max-height: 500px;

&::-webkit-scrollbar {
    width: 5px;
    padding: 2px;
    background-color: transperent;
}
&::-webkit-scrollbar-thumb {
    background-color: #66666633;
    border-radius: 3px;

    &:hover {
        background-color: #66666677;
    }
}
`;

const Card = styled.div`
width: 100%;
background-color: white;
border-radius: 4px;
border-left: 5px solid #146EB0;
padding: 12px;
box-shadow: 0px 0px 2px #66666633;
display: flex;
flex-direction: column;

transition: .3s all;

&:not(:last-child) {
    margin-bottom: 8px;
}

.career-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .column-box { display: flex; flex-direction: column; }
    .company {
        font-size: 1.2em;
        font-weight: 700;
        margin-bottom: 4px;
    }
    .depart {}
    .main-date {
        font-size: 1em;
        color: #8E9AAF;
    }
}

.career-performance {
    border-top: 1px solid #66666633;
    margin-top: 12px;
    padding: 8px;

    &.hidden {
        height: 0;
        border: 0;
        opacity: 0;
        margin-top: 0px;
        padding: 0px;
    }

    ul {
        margin: 0;
    }
    .peformance-item {
        &:not(:last-child) {
            margin-bottom: 12px;
        }
        > div {
            padding: 8px 0;
        }
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .project-name { font-size: 20px; }
        }
    }
}
`;


function CareerList(props) {
    const {
        datas
    } = props;

    const toggleList = (e) => {
        const target = e.target.nextSibling;
        const list = target?.classList;
        list && list.toggle("hidden");
    };

    return (
        <Container className="no-drag" onClick={toggleList}>
            {datas.map((d, i) => {
                const {
                    company,  department, position, employ, date,
                    performance
                } = d;
                return (
                    <Card key={i}>
                        <div className="career-main">
                            <div className="column-box">
                                <div className="company">{company}</div>
                                <div className="depart">{department}/{position}</div>
                            </div>
                            <div className="main-date">{employ ? `${date} ~` : date.join(" - ")}</div>
                        </div>

                        <div className="career-performance hidden">
                            <h3>Performance</h3>
                            <ul>
                                {performance.map((p, i) => {
                                    return (
                                        <li className="peformance-item" key={i}>
                                            <div className="title">
                                                <div className="project-name">{p.name}</div>
                                                <div className="project-duration">{p.date.join(" - ")}</div>
                                            </div>

                                            <div>{p.summary}</div>
                                            <div>- 성과: {p.content}</div>
                                            <div>- 사용기술: {p.skill.join(", ")}</div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Card>
                );
            })}
        </Container>
    );
}

export default CareerList;
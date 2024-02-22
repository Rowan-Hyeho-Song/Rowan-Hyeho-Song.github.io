import styled from 'styled-components';
import { useState, useRef } from 'react';
import Layout from "components/Layout";
import SimpleBar from "components/SimpleBar";
import ProfileSkills from 'constants/ProfileSkills';


const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
padding: 0 10%;
`;

const Block = styled.div`
flex: ${(props) => props.$flex || "none"};
display: flex;
flex-direction: column;

&:not(:last-child) {
    margin-bottom: 30px;
}
`;

const CallOut = styled.div`
background-color: #F7F9FD;
padding: 12px 24px;
border-left: 5px solid ${(props) => props.$color};
font-size: 1.2em;
color: #333333;
`;

const SplitView = styled.div`
display: flex;
flex-direction: row;
`

const Title = styled.div`
font-size: 1.5em;
font-weight: 700;
padding: 0 0 8px 0;
`

const TagGroup = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin-bottom: 10px;
`

const Tag = styled.span`
flex: none;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border-radius: 4px;
background-color: ${(props) => props.$color};
padding: 2px 8px;
color: white;
font-weight: 500;
cursor: pointer;
&.disabled { background-color: #616161; }
&:not(:last-child) { margin-right: 5px; }
svg { margin-right: 4px; }
`;

const Chart = styled.div`
    width: 100%;
`;

function AboutPage() {
    const [skills, setSkills] = useState(ProfileSkills.map((skill, i) => ({...skill, enable: i % 2 === 0})));
    const toggleEnable = (index) => {
        skills[index].enable = !skills[index].enable;
        setSkills([...skills]);
    };

    return (
        <Layout $footerEnable={false}>
            <Container>
                <Block>
                    <Title>Profile</Title>
                    <CallOut $color="#C13229">
                        안녕하세요, JavaScript 기반의 3년차 프론트엔드 개발자 <b>송혜호</b>입니다!<br />
                        현재까지 주로 데이터 시각화 분야에서 지속적으로 개발을 해왔고, 주 업무는 Vanilla JS를 활용하여 사내 자체 프레임워크 개발 및 사내 솔루션 중 다양한 차트를 개발하는 역할을 맡았습니다.<br />
                        비록 React와 직접적으로 관련된 경력은 없으나, 자체 프레임워크를 개발하며 기술의 이해를 위해 스스로 학습하며 경험을 쌓았습니다. <br />
                        모르는 것을 인정하고 새로운 기술을 배우는 것을 매우 좋아하여 어떠한 언어든 금방 적응하고 활용할 수 있습니다.
                    </CallOut>
                </Block>
                <SplitView>
                    <Block $flex={1}>
                        <Title>Skills</Title>
                        <TagGroup>
                            { skills.map((skill, i) => 
                                <Tag className={!skill.enable && "disabled"} $color={skill.color}
                                    onClick={() => toggleEnable(i)} key={skill.key}
                                >
                                    {skill.icon}{skill.key}
                                </Tag>
                            )}
                        </TagGroup>
                        <Chart>
                            <SimpleBar 
                                width={500}
                                height={200}
                                marginLeft={70}
                                marginBottom={20}
                                datas={skills} />
                        </Chart>
                    </Block>
                    <Block $flex={1}></Block>
                </SplitView>
            </Container>
        </Layout>
    );
}

export default AboutPage;
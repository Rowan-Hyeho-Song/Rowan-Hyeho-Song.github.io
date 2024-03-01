import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin-bottom: 10px;
`;

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

function TagGroup(props) {
    const { 
        datas,
        $onClick
    } = props;
    // TODO: 태그마다 click 이벤트를 바인딩하여 비효율적임 > Container의 클릭을 받아 target을 이용하는 방법으로 수정해야함
    return (
        <Container>
            { datas.map((skill, i) => 
                <Tag className={!skill.enable && "disabled"} $color={skill.color}
                    onClick={() => $onClick(i)} key={skill.key}
                >
                    {skill.icon}{skill.key}
                </Tag>
            )}
        </Container>
    );
}

export default TagGroup;
import React, {useState} from 'react';
import styled from "styled-components";
import PostButtonList from "./PostButtonList";

const StyledDiv = styled.div`
  margin: 0 0 12px;
  overflow: auto;
`;

const SelectedDiv = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
`;

function SelectTypeContent() {
    const [types, setTypes] = useState([
        {
            mode: 'text',
            active: true,
            name : 'Text'
        },
        {
            mode: 'image',
            active: false,
            name : 'Image & Video'
        },
        {
            mode: 'link',
            active: false,
            name : 'Link'
        }
    ]);

    const onToggle = (mode) => {
        setTypes(types.map(type =>
        type.mode === mode ? { ...type, active: true}
        : {...type, active : false})
        );
    }

    return (
        <StyledDiv>
            <SelectedDiv>
                <PostButtonList types={types} onToggle={onToggle}/>
            </SelectedDiv>
        </StyledDiv>
    );
}

export default SelectTypeContent;
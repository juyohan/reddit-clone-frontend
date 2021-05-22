import React,{useState} from 'react';
import styled from "styled-components";
import SelectTypeContent from "./SelectTypeContent";
import ContentDiv from "./ContentDiv";
import PostDataLayout from "./PostDataLayout";

const StyledDiv = styled.div`
    background-color: white;
  margin-bottom: 15px;
  border-radius: 5px;
  position: relative;
  
`;

function PostContextDiv () {
    const [inputs, setInputs] = useState({
        title : '',
        desc : '',
        url : document.location.href
    });

    return (
        <StyledDiv>
            {/* 해당 버튼에 의해 */}
            <SelectTypeContent>
            </SelectTypeContent>

            {/* 안에 내용물이 바뀜 */}
            <ContentDiv setData={setInputs} data={inputs}>
            </ContentDiv>

            {/* 백엔드로 값을 전송 */}
            <PostDataLayout data={inputs} resetData={setInputs}>
            </PostDataLayout>
        </StyledDiv>
    );
}

export default PostContextDiv;
import React from 'react';
import styled from "styled-components";

const LikesContainer = styled.div`
  width: 40px;
  border-left: 4px solid transparent;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  left: 0;
  padding: 8px 4px 8px 0;
  position: absolute;
  top: 0;
`

const ContainerInner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  //fill:;
`

const LikeButton = styled.button`
  height: 24px;
  width: 24px;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: initial;
`

const LikeButtonSpan = styled.span`
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  height: 24px;
  width: 24px;
  font-size: 16px;
  line-height: 24px;
`

const LikeButtonI = styled.i`
  line-height: 24px;
  position: relative;
  font-size: 20px;
  font-weight: 400;
  height: 20px;
  vertical-align: middle;
  width: 20px;

  &::before {
    content: "\f17c";
    -webkit-font-smoothing: antialiased;
    //font-family: redes;
  }
`
const StyledSvg = styled.svg`
  margin-right: 10px;
  height: 1.3em;
  width: 1.3em;
  stroke-width: 0;
  fill: currentColor;
  stroke: currentColor;
`

function FeedLikes() {
    return (
        <LikesContainer>
            <ContainerInner>
                <LikeButton>
                    <LikeButtonSpan>
                        {/*<LikeButtonI>*/}
                        <StyledSvg viewBox={"0 0 512 512"} xmlns={"http://www.w3.org/2000/svg"}>
                            <path
                                d={"M235.252,13.406l-0.447-0.998c-3.417-7.622-11.603-12.854-19.677-12.375l-0.3,0.016l-0.302-0.016    C214.194,0.011,213.856,0,213.524,0c-7.706,0-15.386,5.104-18.674,12.413l-0.452,0.998L13.662,176.079    c-6.871,6.183-6.495,12.657-4.971,16.999c2.661,7.559,10.361,13.373,18.313,13.82l1.592,0.297c0.68,0.168,1.356,0.348,2.095,0.427    c23.036,2.381,45.519,2.876,64.472,3.042l5.154,0.048V407.93c0,11.023,7.221,15.152,11.522,16.635l0.967,0.33l0.77,0.671    c3.105,2.717,7.02,4.093,11.644,4.093h179.215c4.626,0,8.541-1.376,11.639-4.093l0.771-0.671l0.965-0.33    c4.307-1.482,11.532-5.611,11.532-16.635V210.706l5.149-0.048c18.961-0.17,41.446-0.666,64.475-3.042    c0.731-0.079,1.407-0.254,2.082-0.422l1.604-0.302c7.952-0.447,15.65-6.262,18.312-13.82c1.528-4.336,1.899-10.811-4.972-16.998    L235.252,13.406z M344.114,173.365c-11.105,0.18-22.216,0.254-33.337,0.254c-5.153,0-9.363,1.607-12.507,4.768    c-3.372,3.4-5.296,8.48-5.266,13.932l0.005,0.65l-0.157,0.629c-0.437,1.767-0.64,3.336-0.64,4.928v194.001H137.458V198.526    c0-1.597-0.201-3.161-0.638-4.928l-0.157-0.629l0.005-0.65c0.031-5.456-1.892-10.537-5.271-13.937    c-3.141-3.161-7.353-4.763-12.507-4.768c-11.124,0-22.224-0.074-33.337-0.254l-13.223-0.218L214.834,44.897l142.503,128.249    L344.114,173.365z"}/>
                        </StyledSvg>

                        {/*</LikeButtonI>*/}
                    </LikeButtonSpan>
                </LikeButton>


                <LikeButton>
                    <LikeButtonSpan>
                        <StyledSvg viewBox={"0 0 100 100"} xmlns={"http://www.w3.org/2000/svg"}>
                            <path
                                d={"M77.438,42.842l-0.305-0.058c-0.131-0.032-0.261-0.067-0.403-0.082c-4.432-0.458-8.755-0.553-12.4-0.586l-0.991-0.009    V4.179c0-2.119-1.389-2.914-2.217-3.198l-0.186-0.064l-0.147-0.129C60.19,0.266,59.437,0,58.548,0H24.083    c-0.889,0-1.643,0.265-2.24,0.788l-0.148,0.129l-0.186,0.064c-0.828,0.285-2.217,1.079-2.217,3.198v37.928l-0.991,0.009    c-3.646,0.033-7.97,0.128-12.399,0.586c-0.145,0.015-0.274,0.05-0.405,0.082l-0.304,0.058c-1.529,0.086-3.01,1.203-3.521,2.656    c-0.294,0.835-0.366,2.079,0.956,3.27l34.76,31.283l0.086,0.191c0.658,1.467,2.211,2.48,3.784,2.382l0.057-0.004l0.058,0.004    c1.567,0.099,3.126-0.915,3.784-2.382l0.086-0.191l0.157-0.142l34.603-31.142c1.322-1.19,1.25-2.436,0.956-3.271    C80.447,44.045,78.966,42.928,77.438,42.842z M41.315,73.995L13.91,49.331l2.543-0.042c2.136-0.035,4.272-0.049,6.411-0.049    c0.991,0,1.8-0.309,2.404-0.917c0.65-0.654,1.021-1.631,1.015-2.681l-0.001-0.123l0.029-0.119c0.084-0.344,0.123-0.645,0.123-0.95    V7.141h29.762V44.45c0,0.306,0.039,0.606,0.123,0.95l0.029,0.119l-0.001,0.123c-0.007,1.05,0.363,2.025,1.015,2.681    c0.604,0.608,1.413,0.917,2.404,0.917c2.139,0,4.274,0.014,6.41,0.049l2.543,0.042L41.315,73.995z"}/>
                        </StyledSvg>
                    </LikeButtonSpan>
                </LikeButton>
            </ContainerInner>
        </LikesContainer>
    );
}

export default FeedLikes;
import React from 'react';
import {createAction, handleActions} from 'redux-actions'
import styled, {css} from "styled-components";
import InputDiv from "./InputDiv";
import {Map} from 'immutable';

const Wrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0px;
  line-height: 2.5rem;
  font-size: 0.9rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  ::placeholder {
    color: lightgray;
  }
  
  ${props => (props.name === 'username') && css`
    width: 90%;
    border-bottom: 1px solid lightgray;
  ` }
`;


function InputWithLabel({label, name, icon, check, setAble, ...rest}) {

    return (
        <Wrapper>
            <Label>
                {label}
            </Label>
            <InputDiv name={name} icon={icon} check={check} setAble={setAble}>
                <Input name={name} {...rest}/>
            </InputDiv>
        </Wrapper>
    );
}

export default InputWithLabel;
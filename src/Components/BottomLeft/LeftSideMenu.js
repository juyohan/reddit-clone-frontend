import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import LeftMenuIcon from "./LeftMenuIcon";

const SideMenuDiv = styled.div`
    display: flex;
  flex-direction: column;
  //min-width: 200px;
  width: auto;
  position: absolute;
  ;
`

const SideMenu = styled.span`
    text-decoration: none;
  line-height: 50px;
  align-items: center;
  display: flex;
  cursor: pointer;
  color: skyblue;
`

function LeftSideMenu() {
    const [scrollY, setScrollY] = useState(0);
    const [divLocation, setDivLocation] = useState();

    // const refs = React.createRef();

    const handleFollow = () => {
        setScrollY(window.scrollY);
    }

    // const handleTop = () => {
    //     window.scrollTo({
    //         top : divLocation + scrollY,
    //         behavior : "smooth"
    //     })
    // }

    // useEffect(() => {
    //     console.log("scrollY : ", scrollY);
    //     // console.log("divLocation : ", divLocation);
    //     console.log(refs
    // }, [scrollY]);

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        }
        watch();
        // setDivLocation(refs.current.offsetTop);
        return () => {
            window.removeEventListener('scroll',handleFollow);
        }
    });

    // console.log(window.scrollY);
    // const handleAnimate = () => {
    //     const position = window.scrollY;
    //    stop().animate({
    //         "top" : position + "px"
    //     }, 1000)
    // }

    const [types, setTypes] = useState([
        {
            name : 'Hot',
            mode : 'hot',
            active : true
        },
        {
            name : 'New',
            mode : 'new',
            active : false
        },
        {
            name : 'Rising',
            mode : 'rising',
            active : false
        },
        {
            name : 'Top',
            mode : 'top',
            active : false
        },
        {
            name : 'Best',
            mode : 'best',
            active : false
        }
    ]);

    const onToggle = (mode) => {
        setTypes(types.map(type => type.mode === mode ?
            {...type, active : true} : {...type, active : false}));
    }

    return(
        <SideMenuDiv style={{
            top : scrollY + 150,
            transition : "all 0.7s ease-out"
        }} >
            <LeftMenuIcon types={types} onToggle={onToggle}>
            </LeftMenuIcon>
        </SideMenuDiv>
    );
}

export default LeftSideMenu;
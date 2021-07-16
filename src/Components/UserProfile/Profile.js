import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import DefaultDiv from "../DefaultValue/DefaultDiv";
import {AuthorAPI, FeedAPI} from "../../Components/axios/index"
import axios from "axios";
import {pheedState} from "../Context/PheedDataContext";
import {useUserState} from "../Context/UserContext";
import {set} from "immutable";

const StyledDiv = styled.div`
    height: 100px;
  font-size: 20px;
`

// async function getProfile(username) {
//     return await axios.get("http://localhost:8080/myProfile/" + username,
//         {
//             headers : {
//                 "Authorization" : "Bearer " + localStorage.getItem("Access_Token")
//             }
//         });
// }

// async function getProfiles(username) {
//     const data = await axios.get("http://localhost:8080/api/auth/user",
//         {
//             headers : {
//                 "Authorization" : "Bearer " + localStorage.getItem("Access_Token")
//             }
//         });
//
//     return data;
// }f

function Profile({match}) {
    const {username} = useUserState();
    const [feeds, setFeeds] = useState([]);
    // useEffect(() => {
    //     const authenticate = async () => {
    //         try {
    //             await axios.get(`http://localhost:8080/api/feed/${username}`,
    //                 {
    //                     headers : {
    //                         "Authorization" : "Bearer " + localStorage.getItem("Access_Token")
    //                     }
    //                 })
    //
    //         } catch(e) {
    //             console.log(e);
    //         }
    //     }
    //     console.log(authenticate);
    //
    // },[username]);

    // useEffect(() => {
    //     AuthorAPI.getUser().then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }, []);

    useEffect(() => {
        function getFetchUrl() {
            FeedAPI.getUserFeeds(username).then(res => setFeeds(res.data))
                .catch(err => console.log(err));
        }
        console.log(feeds);
        // console.log(feeds)
        getFetchUrl();
    },[]);

    return(
        <DefaultDiv bottom>
            <StyledDiv>
                {
                    feeds.map((feed) => (
                        <div key={feed.id}>
                            제목 : {feed.title}
                            <div>
                                내용 : {feed.desc}
                            </div>
                            <br/>
                                {feed.user}
                        </div>
                    ))
                }
            </StyledDiv>
        </DefaultDiv>
    );
}

export default Profile;
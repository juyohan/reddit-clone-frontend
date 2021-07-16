import axiosInstance from "./axiosConfig";
import moment from "moment";
import {useUserState} from "../Context/UserContext";

export const Feed = {
    getUserFeeds: async function (username) {
        return await axiosInstance.request({
            method: "GET",
            url: `/api/feed/${username}`
        });
    },
    postFeed: async function (postData, username) {
        const date = moment().format("YYYY-MM-DD HH:mm:ss");
        return await axiosInstance.request({
            method: "POST",
            url: `/api/feed/save`,
            data:
                {
                    title: postData.title,
                    desc: postData.desc,
                    createDate: date
                }
        });
    }
}
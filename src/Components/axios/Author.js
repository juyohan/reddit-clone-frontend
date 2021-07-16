import axiosInstance from "./axiosConfig";

export const Author = {
    getUser : async function() {
        return await axiosInstance.request({
            method : "GET",
            url : `/api/auth/user`
        });
    }
}
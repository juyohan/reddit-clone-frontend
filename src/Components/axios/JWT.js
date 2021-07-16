import axiosInstance from "./axiosConfig";

export const JWT = {
    checkJwt : async function () {
        return await axiosInstance.request({
            method : "GET",
            url : `/api/jwt/check`
        })
    }
}
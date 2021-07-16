export const isEmail = email => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
};

export const isPw = pw => {
    const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

    return pwRegex.test(pw);
}

export const isUsername = username => {
    const usernameRegex = /^[가-힣|a-z|A-Z|0-9|\_]{2,10}$/;

    return usernameRegex.test(username);
}


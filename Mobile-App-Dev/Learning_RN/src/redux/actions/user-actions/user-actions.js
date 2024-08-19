// All action functions related to users reducer are defined here...!

import { UPDATE_USER_NAME } from "../../reducers/user-reducer/user-reducer";


const changeUserName = (nameData) => {
    return {
        type: UPDATE_USER_NAME,
        payload: nameData
    };
};

export { changeUserName };
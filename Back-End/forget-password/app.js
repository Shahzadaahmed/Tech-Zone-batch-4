const uidEl = document.getElementById("uid-field");
const passwordEl = document.getElementById("password-field");

const resetPassword = async () => {
    const apiUrl = "http://localhost:8080/user/update/password";

    const obj = {
        userId: uidEl.value,
        newPassword: passwordEl.value
    };
    console.log('Obj: ', obj);

    try {
        const apiRes = await axios({
            method: "PUT",
            url: apiUrl,
            data: obj
        });
        console.log('Api res: ', apiRes);

        if (apiRes.status == 200) {
            alert(apiRes.data.message);
            uidEl.value = "";
            passwordEl.value = "";
        };
    }

    catch (error) {
        console.log('Error occured while integrating an api: ', error);

        if (error.response.status != 200) {
            alert(error.response.data.message);
        };
    };
};
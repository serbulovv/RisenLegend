import { myDecipher, myCipher } from './EncryptData.js'

document.getElementById("login").onsubmit = function () {
    let account_hash = document.getElementById("account_hash_input").value
    
    if (checkData(account_hash)) {
        let account_password_in_hash = JSON.parse(myDecipher(account_hash)).user_data.user_password
        let password = document.querySelector("#password_input").value

        if (password === account_password_in_hash) {
            let data_for_ls = myDecipher(account_hash)
            localStorage.setItem("data", data_for_ls)
            document.getElementById("login").action = "/html/MainPage.html"
        }
        else {
            alert("Password incorrect or account not registered!")
        }
    }
    else {
        alert("Hash is corrupted!")
    } 
}
function checkData(hash) {
    let decipherData = JSON.parse(myDecipher(hash))
    return (decipherData.user_data && decipherData.dungeons_info) ? true : false
}


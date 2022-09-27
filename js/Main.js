let retrievedObject = JSON.parse(localStorage.getItem("data"))
let account_name_in_ls = retrievedObject.user_data.user_name
let account_money_in_ls = retrievedObject.user_data.money
let account_gems_in_ls = retrievedObject.user_data.gems
let account_level_in_ls = retrievedObject.user_data.level
let account_exp_in_ls = retrievedObject.user_data.experience
let account_exp_to_next_lvl = retrievedObject.user_data.experience_to_next_lvl
let percent_of_experience = (account_exp_in_ls * 100) / account_exp_to_next_lvl

let adventure_btn = document.getElementById("open_adventure_page")
let html_account_name = document.getElementById("html_account_name").outerText = account_name_in_ls
let html_account_money = document.getElementById("html_account_money").outerText = account_money_in_ls
let html_account_gems = document.getElementById("html_account_gems").outerText = account_gems_in_ls
let html_account_level = document.getElementById("html_account_lvl").outerText = `Level: ${account_level_in_ls}`
let html_level_progress_bar = document.getElementById("lvl_progress_bar").style = `width: ${percent_of_experience}%`
let html_account_exp_in_progress_bar = document.getElementById("html_account_exp").outerText = account_exp_in_ls

adventure_btn.onclick = function () {
    let new_window = window.open("/html/AdventurePage.html", "_self")
}
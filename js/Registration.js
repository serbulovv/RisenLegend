function registration() {
    let account_name = document.querySelector("#name_input").value
    let first_account_password = document.querySelector("#first_password_input").value
    let second_account_password = document.querySelector("#second_password_input").value

    if (first_account_password == second_account_password) {
        let data_for_ls = `{ "user_data": { "user_name": "${account_name}", "user_password": "${first_account_password}", "level": 1, "experience": 0, "experience_to_next_lvl": 160, "heal_point": 200, "money": 0, "gems": 0, "physical_defence": 10, "phisical_damage": 15, "crit_chance": 5, "class": "Human", "splash_url": "" }, "dungeons_info": [{ "dungeon_ID": "1", "dungeon_name": "Forest", "unlocked": true, "units_ID": [1, 2, 3, 4, 5], "dungeon_asset": "/assets/background_images/AdventureImage.jpg" }, { "dungeon_ID": "2", "dungeon_name": "Swamp", "unlocked": true, "units_ID": [6, 7, 8, 9, 10], "dungeon_asset": "/assets/background_images/Swamp.jpeg" }, { "dungeon_ID": "3", "dungeon_name": "Swamp", "unlocked": false, "units_ID": [6, 7, 8, 9, 10], "dungeon_asset": "/assets/background_images/AdventureImage.jpg" }, { "dungeon_ID": "4", "dungeon_name": "Castle", "unlocked": false, "units_ID": [6, 7, 8, 9, 10], "dungeon_asset": "/assets/background_images/AdventureImage.jpg" }, { "dungeon_ID": "5", "dungeon_name": "Castle", "unlocked": false, "units_ID": [6, 7, 8, 9, 10], "dungeon_asset": "/assets/background_images/AdventureImage.jpg" }, { "dungeon_ID": "6", "dungeon_name": "Castle", "unlocked": false, "units_ID": [6, 7, 8, 9, 10], "dungeon_asset": "/assets/background_images/AdventureImage.jpg" }, { "dungeon_ID": "7", "dungeon_name": "Castle", "unlocked": false, "units_ID": [6, 7, 8, 9, 10], "dungeon_asset": "/assets/background_images/AdventureImage.jpg" }, { "dungeon_ID": "8", "dungeon_name": "Castle", "unlocked": false, "units_ID": [6, 7, 8, 9, 10], "dungeon_asset": "/assets/background_images/AdventureImage.jpg" }, { "dungeon_ID": "9", "dungeon_name": "Castle", "unlocked": false, "units_ID": [6, 7, 8, 9, 10], "dungeon_asset": "/assets/background_images/AdventureImage.jpg" }] }`
        localStorage.setItem("data", data_for_ls)
        document.getElementById("sing_up").action = "/html/MainPage.html"
    }
    else {
        alert("Passwords do not match")
    }
}
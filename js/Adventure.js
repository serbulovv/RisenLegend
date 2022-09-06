let dungeons_info =
{
    dungeons: [
        {
            "dungeon_ID": "1",
            "dungeon_name": "Forest",
            "unlocked": true,
            "units_ID": [1, 2, 3, 4, 5],
            "dungeon_asset": "/assets/background_images/AdventureImage.jpg"
        },
        {
            "dungeon_ID": "2",
            "dungeon_name": "See",
            "unlocked": false,
            "units_ID": [6, 7, 8, 9, 10],
            "dungeon_asset": "/assets/background_images/AdventureImage.jpg"
        },
        {
            "dungeon_ID": "3",
            "dungeon_name": "Swamp",
            "unlocked": false,
            "units_ID": [6, 7, 8, 9, 10],
            "dungeon_asset": "/assets/background_images/AdventureImage.jpg"
        },
        {
            "dungeon_ID": "4",
            "dungeon_name": "Castle",
            "unlocked": false,
            "units_ID": [6, 7, 8, 9, 10],
            "dungeon_asset": "/assets/background_images/AdventureImage.jpg"
        },
        {
            "dungeon_ID": "5",
            "dungeon_name": "Castle",
            "unlocked": false,
            "units_ID": [6, 7, 8, 9, 10],
            "dungeon_asset": "/assets/background_images/AdventureImage.jpg"
        },
        {
            "dungeon_ID": "",
            "dungeon_name": "Castle",
            "unlocked": false,
            "units_ID": [6, 7, 8, 9, 10],
            "dungeon_asset": "/assets/background_images/AdventureImage.jpg"
        }, {
            "dungeon_ID": "7",
            "dungeon_name": "Castle",
            "unlocked": false,
            "units_ID": [6, 7, 8, 9, 10],
            "dungeon_asset": "/assets/background_images/AdventureImage.jpg"
        },
        {
            "dungeon_ID": "8",
            "dungeon_name": "Castle",
            "unlocked": false,
            "units_ID": [6, 7, 8, 9, 10],
            "dungeon_asset": "/assets/background_images/AdventureImage.jpg"
        },
        {
            "dungeon_ID": "9",
            "dungeon_name": "Castle",
            "unlocked": false,
            "units_ID": [6, 7, 8, 9, 10],
            "dungeon_asset": "/assets/background_images/AdventureImage.jpg"
        }
    ]
}
//localStorage.setItem("dungeons_info", JSON.stringify(dungeons_info))

let HTMLDungeonList = document.getElementById("dungeons_menu")

call()

function showDungeonMenu() {
    let resDungeonList = ""
    let retrievedObject = JSON.parse(localStorage.getItem("dungeons_info"))
    for (var key in retrievedObject.dungeons) {
        if (retrievedObject.dungeons[key].unlocked == false) {
            resDungeonList += '<div class="col-4 mx-auto block_menu mb-3"><div class="image_div border border-5 border-dark"><img class="w-100 h-100" src="/assets/background_images/test.jpg"></div><span class="fs-5 text-light">' +
                retrievedObject.dungeons[key].dungeon_name + '</span></div>'
        }
        else {
            resDungeonList += '<div class="col-4 mx-auto block_menu mb-3"><div class="image_div border border-5 border-dark"><img class="w-100 h-100" src="' +
                retrievedObject.dungeons[key].dungeon_asset + '"></div><span class="fs-5 text-light">' +
                retrievedObject.dungeons[key].dungeon_name + '</span></div>'
        }
    }
    HTMLDungeonList.insertAdjacentHTML('afterbegin', resDungeonList)
}

function call() {
    showDungeonMenu()
}


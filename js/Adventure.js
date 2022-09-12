let HTMLDungeonList = document.getElementById("dungeons_menu")

call()

function showDungeonMenu() {
    let resDungeonList = ""
    let retrievedObject = JSON.parse(localStorage.getItem("data"))
    for (var key in retrievedObject.dungeons_info) {
        if (retrievedObject.dungeons_info[key].unlocked == false) {
            resDungeonList += '<div class="col-4 mx-auto block_menu mb-3"><div class="image_div border border-5 border-dark" onclick = "show_units_page([' + retrievedObject.dungeons_info[key].units_ID + '])"><img class="w-100 h-100" src="/assets/background_images/test.jpg"></div><span class="fs-5 text-light">' +
                retrievedObject.dungeons_info[key].dungeon_name + '</span></div>'
        }
        else {
            resDungeonList += '<div class="col-4 mx-auto block_menu mb-3"><div class="image_div border border-5 border-dark" onclick = "show_units_page([' + retrievedObject.dungeons_info[key].units_ID + '])"><img class="w-100 h-100" src="' +
                retrievedObject.dungeons_info[key].dungeon_asset + '"></div><span class="fs-5 text-light">' +
                retrievedObject.dungeons_info[key].dungeon_name + '</span></div>'
        }
    }
    HTMLDungeonList.insertAdjacentHTML('afterbegin', resDungeonList)
}

function call() {
    showDungeonMenu()
}

function show_units_page(units_id) {
    window.open(`/html/UnitsPage.html?unitsIDs=${units_id}` , "_self")
}
let HTMLUnitsList = document.getElementById("units_list")

function getFileData(id){
    var request = new XMLHttpRequest();
    request.open("GET", "../../data/units.json", false)
    request.send(null)
    var file_json = JSON.parse(request.responseText)
    let unit_global_data = file_json['unit_data'][id]
    return unit_global_data
}

show_units_list()
function show_units_list() {
    let encoded_arr_units_id = atob(location.search.split('?')[1])
    let arr_units_id = new URL(location.origin + location.pathname + "?" + encoded_arr_units_id).searchParams.get("unitsIDs").split(',')
    let resUnitsList = ""
    for (let i = 0; i < arr_units_id.length; i++) {
        currentUnit = getFileData(arr_units_id[i] - 1)
        resUnitsList += '<div class="col-4 mx-auto block_menu mb-3"><span class="fs-5 text-black">' +
            currentUnit.name + '</span><div class="image_div border border-3 border-dark d-flex justify-content-center align-items-center"><img class="image_size" src="' +
            currentUnit.splash_url + '"></div><input class="monster_button mt-3" type = "button" onclick = "call(' + (arr_units_id[i] - 1) +')" value = "Click Me"></div>'
    } 
    HTMLUnitsList.insertAdjacentHTML('afterbegin', resUnitsList)
}
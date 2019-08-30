let dummy = [];

function makeDummy() {
    let i = 0;
    while(i < 20){
        dummy.push({
            "id" : i,
            "home_no" : i,
            "message" : "Test",
        });
        i += 1;
    }
    return dummy;
}

function loadHouseList(list=dummy) {
    let tbody = document.querySelector(".table > tbody");
    let row = document.createElement("tr");

    // 리팩토링 필요
    for (let i = 0; i < list.length; i++){
        row.appendChild(createHouseItem(list[i]));
        if(i % 2 === 1){
            tbody.appendChild(row);
            row = document.createElement("tr");
        }
    }

}


function createHouseItem(item) {
    let houseItem = document.createElement("td");
    let noise_color = document.createElement("div");
    let room_number_box = document.createElement("div");
    let room_number = document.createElement("div");

    houseItem.classList.add("house-item");
    noise_color.classList.add("noise-color");
    room_number_box.classList.add("room-number-box");
    room_number.classList.add("room-number");

    //색 변경 작업
    room_number.textContent = item.home_no;

    room_number_box.appendChild(room_number);
    houseItem.appendChild(noise_color);
    houseItem.appendChild(room_number_box);

    return houseItem;

}

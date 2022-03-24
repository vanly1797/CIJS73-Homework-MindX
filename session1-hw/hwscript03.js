function AddNumber() {
    let box_total = document.getElementById("box-total");
    let box_detail_card = document.getElementById("box-detail-card");
    
    let div = document.createElement("div");
    let div_name = document.createElement("div");
    let div_phone = document.createElement("div");

    let name = document.getElementById("txtName").value;
    let phone = document.getElementById("txtPhone").value;
    let node_name = document.createTextNode("name");
    let node_phone = document.createTextNode("phone");

    div_name.appendChild(node_name);
    div_phone.appendChild(node_phone);

    div.appendChild(div_name);
    div.appendChild(div_phone);

    box_detail_card.appendChild(div);
    box_total.appendChild(box_detail_card);

    div.classList.add("box-card");
    div_name.classList.add("name");
    div_phone.classList.add("phone");
}
// Bài 4: Viết một ứng dụng web danh bạ có giao diện và yêu cầu như sau:

//Thêm mới danh bạ với tên và số điện thoại
function addNumber() {
    let box_detail_card = document.getElementById("box-detail-card");
    
    let new_div = document.createElement("div");
    let new_div_name = document.createElement("div");
    let new_div_phone = document.createElement("div");

    let getName = document.getElementById("txtName").value;
    let getPhone = document.getElementById("txtPhone").value;
    if(getName === "" || getName.replace(/\s/g,"") == "" || getPhone === "" || getPhone.replace(/\s/g,"") == "")
    {
        alert("Tên hoặc số điện thoại đang rỗng!!! Mời bạn nhập vào");
    }
    else
    {
        if(isNaN(getPhone))
        {
            alert("Vui lòng nhập số điện thoại bằng số!!!");
        }
        else
        {
            let node_name = document.createTextNode(getName);
            let node_phone = document.createTextNode(getPhone);
        
            new_div_name.appendChild(node_name);
            new_div_phone.appendChild(node_phone);
            new_div.appendChild(new_div_name);
            new_div.appendChild(new_div_phone);
            box_detail_card.appendChild(new_div);
            
            new_div.classList.add("box-card");
            new_div_name.classList.add("name");
            new_div_phone.classList.add("phone");
        }
    }
}

//Tìm kiếm danh bạ theo tên và số điện thoại
function findNumber() {
    let input, filter, list, phone, name, i, txtValue;
    input = document.getElementById("txtFind");
    filter = input.value.toUpperCase();
    list = document.getElementById("box_detail_card");
    phone = list.getElementsByClassName("box-card");
    for (i = 0; i < phone.length; i++) {
        name = phone[i].getElementsByClassName("name")[0];
        if (name) {
        txtValue = name.textContent || name.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            phone[i].style.display = "";
        } else {
            phone[i].style.display = "none";
        }
        }
    }
}

//Xoá các danh bạ bị trùng số điện thoại (ở trong ví dụ là Alice và Daniel). Sẽ xoá người nào đứng sau (Daniel sẽ bị xoá)
function removeDouble() {
    let listPhone = document.getElementsByClassName("phone");
    let listPhoneDel = [], listPhoneDouble = [], listPhoneNew = [];

    for (let i = 0; i < listPhone.length; i++) {
        listPhoneDel.push(listPhone[i].outerText);
        console.log(listPhoneDel);
    }

    listPhoneDel.forEach((item) => {
        !listPhoneDouble.includes(item) ? listPhoneDouble.push(item) : listPhoneNew.push(listPhoneDel.lastIndexOf(item))
    console.log(listPhoneNew);
    });
    
    for (i = 0; i < listPhoneNew.length; i++) {
        let delPhone = document.getElementsByClassName("box-card");
        let box_detail_card = document.getElementById("box_detail_card");
        box_detail_card.removeChild(delPhone[listPhoneNew[i]]);
        console.log(list.removeChild(delPhone[listPhoneNew[i]]));
    }
}
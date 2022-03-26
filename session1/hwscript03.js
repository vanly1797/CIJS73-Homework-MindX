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
        if(isNaN(getName))
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
        else
        {
            alert("Vui lòng không nhập tên người dùng hợp lệ!!!");
        }
    }
}

//Tìm kiếm danh bạ theo tên và số điện thoại
function findNumber() {
    let inputText, temp, box_detail_card, box_card, name, phone, txtValue;
    inputText = document.getElementById("txtFind").value;
    box_detail_card = document.getElementById("box-detail-card");
    box_card = box_detail_card.getElementsByClassName("box-card");

    if(inputText === "" || inputText.replace(/\s/g,"") == "")
    {
        alert("Vui lòng nhập vào ô tìm kiếm!!!");
    }
    else
    {
        //Tìm kiếm bằng tên.
        if(isNaN(inputText))
        {
            for (let i = 0; i < box_card.length; i++) {
                temp = inputText.toLowerCase();
                name = box_card[i].getElementsByClassName("name")[0];
                if (name) {
                    txtValue = name.textContent || name.innerText;
                    if (txtValue.toLowerCase().indexOf(temp) > -1) 
                    {
                        box_card[i].style.display = "";
                    } 
                    else{
                        box_card[i].style.display = "none";
                    }
                }
            }
        }
        else
        {
            //Tìm kiếm bằng số điện thoại.
            for (let i = 0; i < box_card.length; i++) {
                temp = inputText.toString();
                phone = box_card[i].getElementsByClassName("phone")[0];
                if (phone) {
                    txtValue = phone.textContent || phone.innerText;
                    console.log(txtValue);
                    console.log(typeof txtValue);
                    if (txtValue.indexOf(temp) > -1) 
                    {
                        box_card[i].style.display = "";
                    } 
                    else{
                        box_card[i].style.display = "none";
                    }
                }
            }
        }
    }
}

//Xoá các danh bạ bị trùng số điện thoại (ở trong ví dụ là Alice và Daniel). Sẽ xoá người nào đứng sau (Daniel sẽ bị xoá)
function removeDouble() {
    let listPhone = document.getElementsByClassName("phone");
    let listPhoneTemp = [], listPhoneDouble = [], listPhoneNew = [];

    for (let i = 0; i < listPhone.length; i++) {
        listPhoneTemp.push(listPhone[i].outerText);
    }

    listPhoneTemp.forEach((item) => {
        !listPhoneDouble.includes(item) ? listPhoneDouble.push(item) : listPhoneNew.push(listPhoneTemp.lastIndexOf(item))
    });
    
    for (let i = 0; i < listPhoneNew.length; i++) {
        let box_card = document.getElementsByClassName("box-card");
        let box_detail_card = document.getElementById("box-detail-card");
        box_detail_card.removeChild(box_card[listPhoneNew[i]]);
    }
}
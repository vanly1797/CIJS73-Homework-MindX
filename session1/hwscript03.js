// Bài 4: Viết một ứng dụng web danh bạ có giao diện và yêu cầu như sau:

function AddNumber() {
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
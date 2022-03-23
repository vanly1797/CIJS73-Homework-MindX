/* Câu hỏi trắc nghiệm:
    Câu 1: var khai báo một biến có phạm vi trong block? => Fasle
    Câu 2: const khai báo một biến có phạm vi trong block? => True
    Câu 3: let khai báo một biến có phạm vi trong block? => True
    Câu 4: Giá trị sau cùng của obj trong ví dụ sau là gì? => {foo: 1, bar: 2}
    Câu 5: Kết quả của ví dụ sau đây là gì? => 'The quick brown fox jumps over the lazy dog.’
    Câu 6: Giá trị của câu lệnh obj[123] trong ví dụ sau: => undefined
    Câu 7: Giá trị của array trong ví dụ sau: => [4, 5, 6, 1, 2, 3] => Error
    Câu 8: Giá trị của a trong ví dụ sau? => [1, 23, 4]
    Câu 9: Giá trị của biểu thức sau? => 3
    Câu 10: Giá trị của a và b với ví dụ sau? => a = 3, b = 12
    Câu 11 Giá trị của obj sau trong ví dụ sau? => Error
    Câu 12: Giá trị của biểu arr trong ví dụ sau? => [2, 2, 6, 4, 10]
    Câu 13: Giá trị của total trong ví dụ sau? => 16
*/

// Bài 1 Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
function reverseStr(string) {
  string = prompt("Nhập vào chuỗi string: ");
  if(string != "")
  {
    // cách 1:
    //let reverse_str = str.split('').reverse().toString().replace(/,/g, '');

    // cách 2:
    let reverse_str = "";
    for (let i= string.length -1; i >= 0; i--)
    {
      reverse_str += string[i];
    }
    console.log("Chuỗi nhập vào: " + string);
    console.log("Chuỗi đảo ngược: " + reverse_str);
  }
  else
  {
    alert("Chuỗi nhập vào không đúng!");
  }
}
reverseStr();

// Bài 2 Viết một function xoá các phần từ trùng lặp trong một mảng các số:
let num = [1, 2, 3, 5, 4, 2, 6, 4];
let result = [];
result = num.filter(function(item){
  return result.includes(item) ? '' : result.push(item)
});

console.log(result);



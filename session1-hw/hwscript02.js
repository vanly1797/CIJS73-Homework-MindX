// Bài 3 Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
let arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];

function array_count(array) {
     array.sort();
     let max = [0,0];
     let count = 1;
     let i = 0;
     for(i = 0; i < array.length; i++)
     {
          if(array[i] == array[i+1])
          {
               count++;
               if(count > max[0])
               {
                    max[0] = count;
                    max[1] = array[i];
               }
          }
          else
          {
               count = 1;
          }
     }
     console.log( "Value: " + max[1] + ", Count: " + max[0]);
}

array_count(arr);
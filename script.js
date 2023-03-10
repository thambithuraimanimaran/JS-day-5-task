/* a. Print odd numbers in an array
var arr =[1,2,3,4,5,6,7,8,9,10]

var odd = function(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd(arr));
-----------------------------------------------------------------------*/
/*(function(arr){
    let result =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2){
            result.push(arr[i]);
        }
    }
    console.log(result);
})([11,12,13,14,15,16,17,18,19]);
---------------------------------------------------------------------------*/
// b. Convert all the strings to title caps in a string array:

/*let string = ["apple","orrange","mango","banana","fig"];
let titlecaps = function(arr){
    let result =[];
    for(let i=0;i<arr.length;i++){
        result.push(arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1));

    }return result;
}
console.log(titlecaps(string))
output:
['Apple', 'Orrange', 'Mango', 'Banana', 'Fig']

(function(arr){
    let result =[];
    for(let i=0;i<arr.length;i++){
        result.push(arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    console.log(result);
})(["apple","orrange","mango","banana","fig"])
output:
['Apple', 'Orrange', 'Mango', 'Banana', 'Fig']
--------------------------------------------------------------------------------------*/

/* c. Sum of all numbers in an array (anonymous function):
let arr =[1,2,3,4,5]
let numbers = function(ans){
    let sum = 0;
    for(let i=0;i<ans.length;i++){
        sum += ans[i];
    }return sum;
}
console.log(numbers(arr));
output:
15

(function(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }console.log(sum)
})([12,13,14,15,16]);
output:
70
---------------------------------------------------------------------------*/
/*d. Return all the prime numbers in an array (anonymous function):
let n = [1,2,3,4,5,6,7,8,9];
let dhurai = function(ans){
let result = [];
for(let i=0;i<ans.length;i++){
let isprime = true;
if(ans[i]==1||ans[i]==0){
    isprime = false;
}else if(ans[i]>1){
    for(let j=2;j<ans[i];j++){
        if(ans[i]%j==0){
            isprime = false;
            break;
        }
    }
}
if(isprime){
    result.push(ans[i])
}
} return result;
}
console.log(dhurai(n));
 output:
[2, 3, 5, 7]

(function(ans){
    let result =[];
    for(let i=0;i<ans.length;i++){
        let isprime = true;
        if(ans[i]==1||ans[i]==0){
            isprime = false;
        }else if(ans[i]>1){
            for(let j=2;j<ans[i];j++){
                if(ans[i]%2==0){
                    isprime = false;
                    break;
                }
            }
        }if(isprime){
            result.push(ans[i]);
        }
    }console.log(result);
})([12,13,14,15,16,17,18,19,20])
output:
[13, 15, 17, 19]
--------------------------------------------------------------------------*/
/* e. Return all the palindromes in an array
 let a = ["aba","noon","car","racecar","punch","tata","malayalam"];
let dhurai = function(res){
let result =[];
for(let i=0;i<res.length;i++){
    let b =res[i].split("").reverse().join("")
    if(res[i]==b){
        result.push(res[i]);
    }
}return result;
}
console.log(dhurai(a));
output:
['aba', 'noon', 'racecar', 'malayalam']


(function(res){
    let result =[];
    for(let i=0;i<res.length;i++){
        let b =res[i].split("").reverse().join("");
        if(res[i]==b){
            result.push(res[i]);
        }
    }console.log(result);
})(["malayalam","dad","mom","level"]);
output:
['malayalam', 'dad', 'mom', 'level']
----------------------------------------------------------------------
f. Return median of two sorted arrays of the same size(anonymous function):
Return median of two sorted arrays of the same size(IIFE function):
g. Remove duplicates from an array(anonymous function):
let n = [1,2,3,4,3,2,5,6];
let num =function(arr){
    let result = {};
    for(let i=0;i<arr.length;i++){
        result[arr[i]]=0;
    }return Object.keys(result);
} 
console.log(num(n))
output:
['1', '2', '3', '4', '5', '6']
Remove duplicates from an array(IIFE function):
(function(duplicates){
    let n= function(arr){
        let result = {};
        for(let i=0;i<arr.length;i++){
            result[arr[i]]=0;
        }Object.keys(result);
    }
    console.log(n(duplicates))
})([1,2,3,4,5,2,4,3,6,7]);
--------------------------------------------------
Rotate an array by k times(anonymous function):
let array =[1,2,3,4,5,6,7,8,9,0];
let k = 4;
let rotate = function(data,count){
    for(let i=0;i<count;i++){
        data.unshift(data.pop());
    }return data;
}
console.log(rotate(array,k));
output:
[7, 8, 9, 0, 1, 2, 3, 4, 5, 6]
------------------------------------------------------
Rotate an array by k times(IIFE function):
(function(data,count){
   
    for(let i=0;i<count;i++){
        data.unshift(data.pop());
    }
    console.log(data);
})([1,2,3,4,5,6,7,8,9,0],3)
output:
[8, 9, 0, 1, 2, 3, 4, 5, 6, 7]
----------------------------------------------------------
3. Do the below programs in arrow functions.
a.Print odd numbers in an array:
let odd =(arr)=>{
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd([12,13,14,15,16,17,18]));
output:
[12, 14, 16, 18]
----------------------------------------------------------
b. Convert all the strings to title caps in a string array
let titlecaps = (arr)=>{
    let result =[];
    for(let i=0;i<arr.length;i++){
        result.push(arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1));

    }return result;
}
console.log(titlecaps(["apple","orrange","mango","banana","fig"]));
output:
??['Apple', 'Orrange', 'Mango', 'Banana', 'Fig']
----------------------------------------------------------------
c. Sum of all numbers in an array:

let numbers = (ans)=>{
    let sum = 0;
    for(let i=0;i<ans.length;i++){
        sum += ans[i];
    }return sum;
}
console.log(numbers([1,2,3,4,5]));
output:
15
------------------------------------------------------
d. Return all the prime numbers in an array:

let dhurai = (ans)=>{
let result = [];
for(let i=0;i<ans.length;i++){
let isprime = true;
if(ans[i]==1||ans[i]==0){
    isprime = false;
}else if(ans[i]>1){
    for(let j=2;j<ans[i];j++){
        if(ans[i]%j==0){
            isprime = false;
            break;
        }
    }
}
if(isprime){
    result.push(ans[i])
}
} return result;
}
console.log(dhurai([1,2,3,4,5,6,7,8,9]));
output:
[2, 3, 5, 7]
--------------------------------------------------------------
e. Return all the palindromes in an array:

let dhurai = (res)=>{
let result =[];
for(let i=0;i<res.length;i++){
    let b =res[i].split("").reverse().join("")
    if(res[i]==b){
        result.push(res[i]);
    }
}return result;
}
console.log(dhurai(["aba","noon","car","racecar","punch","tata","malayalam"]));
output:
['aba', 'noon', 'racecar', 'malayalam']
--------------------------------------------------------------*/

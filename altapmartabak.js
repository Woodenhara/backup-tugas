for (let i = 0; i <= 10; i++)
if (i % 2 == 0){ 
console.log(i);
}
//Program diatas untuk proses bilangan genap statis menggunakan for

var panggilUntukInput = require('readline-sync');
var bil = panggilUntukInput.questionInt('Input bilangan = ');

if (bil <= 0){
    console.log("Tolong input bilangan diatas angka 0");
    process.exit();
}

for (let i = 0; i <= bil; i++) {
    if (i % 2 == 0)
    console.log(i);
}
//Program diatas untuk proses bilangan genap dinamis tanpa batas

var panggilUntukInput = require('readline-sync');
var bil = panggilUntukInput.questionInt('Input bilangan = ');

if (bil > 10) {
    console.log("Bilangan melebihi batas angka yaitu 10, silahkan input ulang");
    process.exit();
}else{

if (bil <= 0){
    console.log("Tolong input bilangan diatas angka 0");
    process.exit();
}

for (let i = 0; i <= bil; i++) {
    if (i % 2 == 0)
    console.log(i);
}
}
//Program diatas untuk proses bilangan genap dinamis dengan batas angka 10

let i = -1;

while(i <= 10){
     i++;

if (i % 2 == 0) { 
    console.log(i);
 }
}
//Program diatas untuk proses bilangan genap statis menggunakan while

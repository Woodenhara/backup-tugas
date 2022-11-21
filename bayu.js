var input = require('readline-sync');
var bilangan = input.question('Masukan Bilangan 1 ' + "=" );
var bilangan1 = input.question('Masukan Bilangan 2 ' + "=" );
var bilangan = Number(bilangan)
var bilangan1 = Number(bilangan1)

if (isNaN(bilangan && bilangan1))
 {console.log("input angka bukan huruf")

 }else{

if (bilangan == bilangan1) {
    console.log(bilangan + "Nilainya sama dengan" + bilangan1)
}else{
if (bilangan < bilangan1) {
    console.log(bilangan + " lebih kecil dari " + bilangan1)
}
else {
    console.log(bilangan1 + " lebih kecil dari " + bilangan)
} }}
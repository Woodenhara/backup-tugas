// var input = require('readline-sync');
// var nama = input.question('Input your name = ');
// var age = input.question('Input your age = ');
// if (isNaN(age)) {
    // voteable = "Its not a number, stupid dickhead";
    // console.log(voteable);
// } else {
// let voteable = (age < 18) ? 
// "Too young kid, go home and drink milk from ur mom" : 
// "Enough to hook up with some bices";
// console.log(voteable);
// }

//Deklarasi bilangan
var panggilUntukInput = require('readline-sync');
var bilangan = panggilUntukInput.question('Input bilangan = ');

//Kode blok dibawah untuk memastikan bahwa yang diinput adalah Number
var bilangant = Number(bilangan);

//Jika bukan maka akan menampilkan kalimat pemberitahuan
if (isNaN(bilangant)){
    console.log("Syntax gagal dikarenakan yang diinput bukanlah angka.")
    //Jika benar maka akan melanjutkan operasi dibawah
}else {
//Sisa bagi = bilangan % 2
var sisa_bagi = bilangan % 2;

//Jika statement dibawah bernilai true, maka lakukan baris program ini
if (sisa_bagi == 0) {
    console.log('Bilangan tersebut adalah bilangan genap');

//Jika statement dibawah bernilai false, maka lakukan baris program ini
} else {
    console.log('Bilangan tersebut adalah bilangan ganjil');
 }
}
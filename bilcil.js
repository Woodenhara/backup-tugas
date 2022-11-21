//Deklarasi bilangan
var panggilUntukInput = require('readline-sync');
var bilangan = panggilUntukInput.question('Input bilangan ke1 = ');
var bilangan2 = panggilUntukInput.question('Input bilangan ke2 = ');

//Kode blok dibawah untuk memastikan bahwa yang diinput adalah Number
var bilangant = Number(bilangan);
var bilangant2 = Number(bilangan2);

//Jika bukan maka akan menampilkan kalimat pemberitahuan
if (isNaN(bilangant) && isNaN(bilangant2)){
        console.log("Syntax gagal dikarenakan yang diinput bukanlah angka.");
}
 else 
 {
    if (bilangant == bilangant2) {
        console.log(bilangan + " Nilainya sama dengan " + bilangan2);
    }
     else 
     {
if (bilangant < bilangant2) {
    console.log(bilangant + " adalah bilangan yang lebih kecil dari " + bilangant2);
}
 else 
 {
    console.log(bilangant2 + " adalah bilangan yang lebih kecil dari " + bilangant);
       }

    }

}
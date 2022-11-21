var input = require('readline-sync');
var nama = input.question("Input nama kamu = ");
var indo = input.question("Input nilai B.Indonesia = ");
var mtk = input.question("Input nilai Matematika = ");
var inggris = input.question("Input nilai B.Inggris = ");
var ipa = input.question("Input nilai IPA = ");
if (isNaN(indo) || isNaN(mtk) || isNaN(inggris) || isNaN(ipa)) {
    console.log("input yang anda masukan adalah string, silahkan input Number.")}
    else{
const nilai = [Number(indo), Number(mtk), Number(inggris), Number(ipa)];

console.log("Halo " + nama + ", ini adalah ketercapaian kamu dalam ujian kali ini : ");

let arrayrtrt = [indo, mtk, inggris, ipa];
let sum = arrayrtrt.reduce((a, b) => parseInt(a) + parseInt(b), 0);
let avg = (sum / arrayrtrt.length) || 0;
console.log("Nilai rata rata kamu adalah " + avg);


    if (nilai[0] >= 91 && nilai[0] <= 100) {
    console.log("Nilai Bahasa Indonesia kamu Sangat Baik!")
} else {
    if (nilai[0] >= 81 && nilai[0] <= 90) {
        console.log("Nilai Bahasa Indonesia kamu Baik!")
    } else {
        if (nilai[0] >= 71 && nilai[0] <= 80) {
            console.log("Nilai Bahasa Indonesia kamu Cukup!")
        } else {
            if (nilai[0] <= 70) {
                console.log("Nilai Bahasa Indonesia kamu Kurang, silahkan dipelajari kembali ya!")
            }
        }
    }
}

if (nilai[1] >= 91 && nilai[1] <= 100) {
    console.log("Nilai Matematika kamu Sangat Baik!")
} else {
    if (nilai[1] >= 81 && nilai[1] <= 90) {
        console.log("Nilai Matematika kamu Baik!")
    } else {
        if (nilai[1] >= 71 && nilai[1] <= 80) {
            console.log("Nilai Matematika kamu Cukup!")
        } else {
            if (nilai[1] <= 70) {
                console.log("Nilai Matematika kamu Kurang, silahkan dipelajari kembali ya!")
            }
        }
    }
}

if (nilai[2] >= 91 && nilai[2] <= 100) {
    console.log("Nilai Bahasa Inggris kamu Sangat Baik!")
} else {
    if (nilai[2] >= 81 && nilai[2] <= 90) {
        console.log("Nilai Bahasa Inggris kamu Baik!")
    } else {
        if (nilai[2] >= 71 && nilai[2] <= 80) {
            console.log("Nilai Bahasa Inggris kamu Cukup!")
        } else {
            if (nilai[2] <= 70) {
                console.log("Nilai Bahasa Inggris kamu Kurang, silahkan dipelajari kembali ya!")
            }
        }
    }
}

if (nilai[3] >= 91 && nilai[3] <= 100) {
    console.log("Nilai Ilmu Pengetahuan Alam kamu Sangat Baik!")
} else {
    if (nilai[3] >= 81 && nilai[3] <= 90) {
        console.log("Nilai Ilmu Pengetahuan Alam kamu Baik!")
    } else {
        if (nilai[3] >= 71 && nilai[3] <= 80) {
            console.log("Nilai Ilmu Pengetahuan Alam kamu Cukup!")
        } else {
            if (nilai[3] <= 70) {
                console.log("Nilai Ilmu Pengetahuan Alam kamu Kurang, silahkan dipelajari kembali ya!")
                }
            }
        }
    }
}
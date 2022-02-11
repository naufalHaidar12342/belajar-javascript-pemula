let angka1 = 8;
let angka2 = 2;
let tampilkanHasil = document.getElementById("angka-hasil");

// inject angka ke document html yang punya id berikut
let angkaPertama = document.getElementById("angka-pertama");
angkaPertama.textContent = angkaPertama.textContent + angka1;

let angkaKedua = document.getElementById("angka-kedua");
angkaKedua.textContent = angkaKedua.textContent + angka2;

function penjumlahan() {
    let hasilJumlah = angka1 + angka2;
    tampilkanHasil.textContent = "Hasil : " + hasilJumlah;
}

function pengurangan() {
    let hasilKurang = angka1 - angka2;
    tampilkanHasil.textContent = "Hasil : " + hasilKurang;
}

function perkalian() {
    let hasilKali = angka1 * angka2;
    tampilkanHasil.textContent = "Hasil : " + hasilKali;
}

function pembagian() {
    let hasilBagi = angka1 / angka2;
    tampilkanHasil.textContent = "Hasil : " + hasilBagi;
}
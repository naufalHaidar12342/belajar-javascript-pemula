//document.getElementById("angka-pengunjung").innerText = 5;

//cara membaca : let pengunjung be 0
let pengunjung = 0;

//menampilkan di console dari halaman web (klik kanan > inspect > console)
console.log(pengunjung);

// menampilkan umur di console
let umurku = 20;
console.log("umur saya = " + umurku + " tahun");

// mengubah umur dalam tahun manusia
// ke dalam tahun anjing

// const adalah kependekan dari constant/konstan
// artinya, nilainya tidak bisa diubah setelah
// deklarasi
const tahunAnjing = 7;
let umurKonversi = umurku * tahunAnjing;
console.log("umur saya dalam tahun anjing = " + umurKonversi);

let jumlahPengunjung = 0;

function counterPengunjung() {
    let hitungPengunjung = document.getElementById("angka-pengunjung");
    jumlahPengunjung = jumlahPengunjung + 1;
    hitungPengunjung.innerText = jumlahPengunjung;

    if (jumlahPengunjung >= 50) {
        document.getElementById("modal").style.display = "";
        //alert("maaf, jumlah pengunjung maksimal 50 orang");
        document.getElementById("tombol-hitung").disabled = true;
    }
}

function showModal() {
    document.getElementById("modal").style.display = "";
}
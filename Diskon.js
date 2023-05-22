const harga = prompt("Masukan Harga");

const max_harga = 100000
const min_harga = 50000
let diskon;
if(harga >= max_harga){
    diskon = 10
}else if(harga >= min_harga){
    diskon = 5
}else{
    diskon = 0
}
const hargadiskon = harga * diskon / 100
const totalharga = harga-hargadiskon

if(diskon > 0){
     document.writeln("Potongan harga yang anda dapatkan adalah" +" "+diskon+"%");
     document.writeln("<p>Total Belajnaan Anda Sebesar Rp.</p>"+totalharga)
}else{
    document.writeln("Potongan harga yang anda dapatkan adalah" +" "+diskon+"%");
     document.writeln("<p>Total Belajnaan Anda Sebesar Rp.</p>"+totalharga);
}
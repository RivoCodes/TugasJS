//Dynamic & Static
const nilai1 = prompt("Masukan Nilai Anda: \n contoh (A,B,C,D)")
let ucapan = "Selamat"
switch(nilai){
       case "A":
           document.write(ucapan+" "+"Anda Lulus Dengan Baik")
           break;
       case "B":
       case "C":
           document.write(ucapan+" "+"Anda Lulus")
           break;
       case "D":
           document.write(ucapan+" "+"Anda Tidak Lulus")
       default:
           document.write(ucapan+" "+"Yang Anda Masukan Tidak Benar")
   }

//Array
let nilai2 = ['100','200','300','400','500','600','700']
if(nilai){
    document.writeln(nilai.join('-'))
}
//JSON
let data = {
    products: [
        {
            name: "Aomine Daiki",
            desc: "ini adalah Aomine Daiki",
            qty: 5,
            price: 1000000,
            discount: 5,
            image: "/img/Aomkine_daiki.jpg",
            detail: {
                comment: {
                    name: "rizpol",
                    comment: "bagus",
                    date: "15-01-2023"
                },
                rating: 9,
                sold: 10
            }
        },
        {
            name: "Balmon",
            desc: "ini adalah balmon",
            qty: 10,
            price: 1000000,
            discount: 5,
            image: "/img/Balmon.jpg",
            detail: {
                comments: {
                    name: "Miya",
                    comment: "bagus",
                    date: "15-01-2023"
                },
                rating: 9,
                sold: 10
            }
        },
        {
            name: "Saber",
            desc: "ini adalah Miya",
            qty: 10,
            price: 1000000,
            discount: 5,
            image: "/img/Miya.jpg",
            detail: {
                comments: {
                    name: "Balmon",
                    comment: "bagus",
                    date: "15-01-2023"
                },
                rating: 9,
                sold: 10
            }
        },
    ]
}
console.log(data);
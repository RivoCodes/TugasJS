// 1. split text
const splitText = String => {
    console.log(String.split('').join('@'));
  };
  console.log('hello world');
  splitText('hello world');
  
  // 2. Sorting
  
  let nama = [
    { nama: 'John', umur: 25 },
    { nama: 'Jane', umur: 30 },
    { nama: 'John', umur: 35 },
    { nama: 'Alice', umur: 28 },
  ];

  nama.sort(function (a, b) {
    if (a.nama < b.nama) {
      return -1;
    }
    if (a.nama > b.nama) {
      return 1;
    }
    return 0;
  });

  console.log(nama)
  
  // 3. menambahkan nilai array
  const kumulatif = (array) => {
    let sum = 0;
    return array.map(num => {
      sum += num;
      return sum;
    });
  };
  
  const angka = [1, 2, 3, 4, 5];
  const kumulatifArray = kumulatif(angka);
  console.log(angka)
  console.log(kumulatifArray);
  
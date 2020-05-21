function cetak_gambar(angkaGanjil) {
  if (angkaGanjil % 2 != 0) {
    let arrBox = [];

    for (let i = 0; i < angkaGanjil; i++) {
      let arrBox2 = [];

      if (i % 2 === 0) {

        for (let j = 0; j < angkaGanjil; j++) {
          arrBox2.push("x");

        }
      } else {
        for (let j = 0; j < angkaGanjil; j++){

          if (j === 0 || j === angkaGanjil - 1){
            arrBox2.push("x");
          }else {
            arrBox2.push("=");
          }
        }

      }
      arrBox.push(arrBox2);
    }
   arrBox.forEach(arrItem =>{
       console.log(arrItem.join(" "))
   })
  } else {
    console.log("Hanya bilangan Ganjil yang diperbolehkan !");
  }
}



cetak_gambar(5);

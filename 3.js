function giveChocolate(tanggalLahir, bulanLahir){
  let barCoklat = [1,2,1,3,2];

  let sum1 = barCoklat[0] + barCoklat[1];
  let sum2 = barCoklat[2] + barCoklat[4];

  if (sum1 || sum2 || barCoklat.every() === tanggalLahir) {
    console.log(`Tanggal Lahir : ${tanggalLahir}`);
    console.log(`Bulan Lahir : ${bulanLahir}`);
    console.log(`Result : ${bulanLahir}`);
  }
  return barCoklat;
}

console.log(giveChocolate(3,2));

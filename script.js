function play(playerChoice) {
  let compRandom = Math.random();
  let compChoice;
  
  if (compRandom < 0.34) {
    compChoice = "gajah"; //kenapa 0.34 dan 0.67? karna Math.random() menghasilkan angka desimal secara acak antara 0 sampai kurang dari 1
  } else if (compRandom < 0.67) {
    compChoice = "semut";
  } else {
    compChoice = "orang";
  }

  let hasil;
  if (playerChoice === compChoice) {
    hasil = "SERI!";
  } else if (
    (playerChoice === "gajah" && compChoice === "orang") ||
    (playerChoice === "orang" && compChoice === "semut") ||
    (playerChoice === "semut" && compChoice === "gajah")
  ) {
    hasil = "KAMU MENANG!";
  } else {
    hasil = "KAMU KALAH!";
  }

  document.getElementById("result").innerHTML = 
    `Kamu pilih: <span>${playerChoice}</span> <br>Komputer pilih: <span>${compChoice}</span> <br>Hasil: <span>${hasil}</span>`;
}

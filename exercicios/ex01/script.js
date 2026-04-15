function carregar() {
  let msg = window.document.getElementById("msg");
  let imagem = window.document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();

  msg.innerHTML = `<strong>Agora são ${hora} horas e ${minutos} minutos.</strong>`;

  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    imagem.src = "./imagens/manha.jpg";
    document.body.style.background = "rgb(67, 97, 234)";
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    imagem.src = "./imagens/tarde.jpg";
    document.body.style.background = "rgb(197, 108, 13";
  } else {
    // BOA NOITE!
    imagem.src = "./imagens/noite.jpg";
    document.body.style.background = "rgb(6, 12, 40)";
  }
}

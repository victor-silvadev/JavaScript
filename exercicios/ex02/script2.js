function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('iano')
    let reS = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('verifique o ano e tente novanmente')
    } 

    else {
        let sexo = document.getElementsByName('sexo')
        let idade = ano - Number(fAno.value)
        let genero = '' 

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked) {
        genero = 'Homem' 
        if (idade >= 0 && idade < 4) {
            /*  BEBE  */
            img.setAttribute('src', 'bebe-menino.jpg')
        } else if (idade < 15) {
            /* CRIANÇA */
            img.setAttribute('src', 'criança-M.jpg')
        } else if (idade < 21) {
            /* JOVEM */
            img.setAttribute('src', 'jovem-M.jpg')
        } else if (idade < 60) {
            /* ADULTO */
            img.setAttribute('src', 'adulto-M.jpg')
        } else {
            /* VELHO */
            img.setAttribute('src', 'velho-M.jpg')
        }
    } 
    else if (sexo[1].checked) {
            genero = 'Mulher'
                    if (idade >= 0 && idade < 4) {
            /*  BEBE  */
            img.setAttribute('src', 'bebe-menina.jpg')
        } else if (idade < 15) {
            /* CRIANÇA */
            img.setAttribute('src', 'criança-F.jpg')
        } else if (idade < 21) {
            /* JOVEM */
            img.setAttribute('src', 'jovem-F.jpg')
        } else if (idade < 60) {
            /* ADULTO */
            img.setAttribute('src', 'adulto-F.jpg')
        } else {
            /* VELHO */
            img.setAttribute('src', 'velho-F.jpg')
        }
    } 
    reS.style.textAlign = 'center'
    reS.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    reS.appendChild(img)
    }
}
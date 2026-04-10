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
        if(sexo[0].checked) {
        genero = 'Homem' 
    } 
    else if (sexo[1].checked) {
            genero = 'Mulher'
    }
    reS.style.textAlling = 'center'
    reS.innerHTML = `Detectamos ${genero} com ${idade} anos.`
}

}
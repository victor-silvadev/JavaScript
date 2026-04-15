function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // Limpa a tabuada anterior

        while (c <= 10) {
            let item = document.createElement('option') // Cria a linha da tabuada
            item.text = `${n} x ${c} = ${n * c}` // Texto que aparece
            item.value = `tab${c}` // Importante para outras linguagens (PHP/C#)
            tab.appendChild(item) // Adiciona a opção na lista
            c++ // Não esqueça o incremento!
        }
    }
}
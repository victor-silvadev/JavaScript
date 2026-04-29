let input = document.getElementById('numero')
let ilista = document.getElementById('lista')
let n = Number(input.value)
let valores = [] 

function adicionar() {

  if(n < 1 || n > 100) {
    alert('numero invalido')
  } else if (valores.includes(n)){
    alert('valor ja adicionado')
  } else {
    valores.push(n)  

    let item = document.createElement('option')
  item.text = `Valor ${n} adicionado`
  lista.appendChild(item)
  }
  input.value = ''
  input.focus()
}
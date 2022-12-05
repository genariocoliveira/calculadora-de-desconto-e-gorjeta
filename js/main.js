// variável reset
const btnReset = document.getElementById('btn-reset')
const valorPrincipal = document.getElementById('valor-principal').value
const numberPerson = document.getElementById('n-people').value


btnReset.addEventListener('click', () => {
  valorPrincipal.innerHTML = ''
  valorGorjeta.innerHTML = '0.00'
  valorTotal.innerHTML = '0.00'
})

function calcular(tipo, valor) {
  const valorPrincipal = document.getElementById('valor-principal').value
  const numberPerson = document.getElementById('n-people').value
  const valueAmount = document.getElementById('valorGorjeta')
  const valueTotal = document.getElementById('valorTotal')
  const alertaPrincipal = document.querySelector('#alert-value')
  const borP = document.querySelector('#borda-valor-principal')
  console.log(tipo, valor)

  if (valorPrincipal == '') {
    alertaPrincipal.classList.add('info-ativ')
    borP.classList.add('input-ativ')
  } else if (valor === 5) {
    resFivePercent = (valorPrincipal / 100) * 5
    total = valorPrincipal - resFivePercent
    
    alertaPrincipal.classList.remove('info-ativ')
    borP.classList.remove('input-ativ')
    valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
    valueTotal.innerHTML = (total / numberPerson).toFixed(2)
  }
  else if (valor === 10) {
    resFivePercent = (valorPrincipal / 100) * 10
    total = valorPrincipal - resFivePercent
    
    alertaPrincipal.classList.remove('info-ativ')
    borP.classList.remove('input-ativ')
    valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
    valueTotal.innerHTML = (total / numberPerson).toFixed(2)
  }
  else if (valor === 15) {
    resFivePercent = (valorPrincipal / 100) * 15
    total = valorPrincipal - resFivePercent
    alertaPrincipal.classList.remove('info-ativ')
    borP.classList.remove('input-ativ')
    valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
    valueTotal.innerHTML = (total / numberPerson).toFixed(2)
  }
  else if (valor === 25) {
    resFivePercent = (valorPrincipal / 100) * 25
    total = valorPrincipal - resFivePercent
    alertaPrincipal.classList.remove('info-ativ')
    borP.classList.remove('input-ativ')
    valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
    valueTotal.innerHTML = (total / numberPerson).toFixed(2)
  }
  else if (valor === 50) {
    resFivePercent = (valorPrincipal / 100) * 50
    total = valorPrincipal - resFivePercent
    alertaPrincipal.classList.remove('info-ativ')
    borP.classList.remove('input-ativ')
    valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
    valueTotal.innerHTML = (total / numberPerson).toFixed(2)
  }
  else if (valor === '') {
    const custom = document.getElementById('custom').value
    resFivePercent = (valorPrincipal / 100) * custom
    total = valorPrincipal - resFivePercent
    alertaPrincipal.classList.remove('info-ativ')
    borP.classList.remove('input-ativ')
    valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
    valueTotal.innerHTML = (total / numberPerson).toFixed(2)
  }
}

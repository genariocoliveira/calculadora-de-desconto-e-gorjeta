// variável reset
const btnReset = document.getElementById('btn-reset')
const valorPrincipal = document.getElementById('valor-principal').value
const numberPerson = document.getElementById('n-people').value

btnReset.addEventListener('click', () => {
  valorPrincipal.innerText = '0'
  valorGorjeta.innerHTML = '0'
  valorTotal.innerHTML = '0'
})



function calcular(tipo, valor) {
  const valorPrincipal = document.getElementById('valor-principal').value
  const numberPerson = document.getElementById('n-people').value
  const valueAmount = document.getElementById('valorGorjeta')
  const valueTotal = document.getElementById('valorTotal')
  const modal = document.getElementById('my-modal')
  console.log(tipo, valor)

  if (valorPrincipal == '') {
    
  } else if (valor === 5) {
    resFivePercent = (valorPrincipal / 100) * 5
    total = valorPrincipal - resFivePercent
    if (numberPerson == 0) {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / 1).toFixed(2)
    } else {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / numberPerson).toFixed(2)
    }

  }
  else if (valor === 10) {
    resFivePercent = (valorPrincipal / 100) * 10
    total = valorPrincipal - resFivePercent
    if (numberPerson == 0) {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / 1).toFixed(2)
    } else {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / numberPerson).toFixed(2)
    }
  }
  else if (valor === 15) {
    resFivePercent = (valorPrincipal / 100) * 15
    total = valorPrincipal - resFivePercent
    if (numberPerson == 0) {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / 1).toFixed(2)
    } else {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / numberPerson).toFixed(2)
    }
  }
  else if (valor === 25) {
    resFivePercent = (valorPrincipal / 100) * 25
    total = valorPrincipal - resFivePercent
    if (numberPerson == 0) {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / 1).toFixed(2)
    } else {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / numberPerson).toFixed(2)
    }
  }
  else if (valor === 50) {
    resFivePercent = (valorPrincipal / 100) * 50
    total = valorPrincipal - resFivePercent
    if (numberPerson == 0) {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / 1).toFixed(2)
    } else {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / numberPerson).toFixed(2)
    }
  }
  else if (valor === '') {
    const custom = document.getElementById('custom').value
    resFivePercent = (valorPrincipal / 100) * custom
    total = valorPrincipal - resFivePercent
    if (numberPerson == 0) {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / 1).toFixed(2)
    } else {
      valueAmount.innerHTML = ((total / 100) * 5).toFixed(2)
      valueTotal.innerHTML = (total / numberPerson).toFixed(2)
    }
  }
}
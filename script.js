function contar() {
  let initialNumber = Number(document.querySelector("input#txt-start").value);
  let finalNumber = Number(document.querySelector("input#txt-end").value);
  let stepNumber = Number(document.querySelector("input#txt-step").value);
  let result = document.querySelector("div#result");

  let differenceBetween = finalNumber - initialNumber;
  if (differenceBetween < 0) {
    differenceBetween *= -1;
  }
  if (stepNumber === 0) {
    return alert(
      `[ERRO] O passo não pode ser igual a Zero! Preencha o formulário novamente.`
    );
  } else if (
    initialNumber < finalNumber &&
    stepNumber > 0 &&
    differenceBetween < 1000
  ) {
    let count = "🚩";
    for (i = initialNumber; i <= finalNumber; i += stepNumber) {
      count += `${i} 👉`;
    }
    count += "🏁";
    result.innerHTML = count;
  } else if (
    finalNumber < initialNumber &&
    stepNumber < 0 &&
    differenceBetween < 1000
  ) {
    let count = "🚩";
    for (i = initialNumber; i >= finalNumber; i += stepNumber) {
      count += `${i} 👉`;
    }
    count += "🏁";
    result.innerHTML = count;
  } else if (initialNumber < finalNumber && stepNumber < 0) {
    return alert(
      `[ERRO] O passo não pode ser menor do que ZERO quando o número inicial for menor que o número final! Preencha o formulário novamente.`
    );
  } else if (finalNumber < initialNumber && stepNumber > 0) {
    return alert(
      `[ERRO] O passo não pode ser maior que zero quando o número inicial for maior do que o número final! Preencha o formulário novamente.`
    );
  }
}

function calculateSum() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;
  
    while (K < INDICE) {
      K += 1;
      SOMA += K;
    }
  
    console.log(`The total sum is: ${SOMA}`);
  }
  
  calculateSum();
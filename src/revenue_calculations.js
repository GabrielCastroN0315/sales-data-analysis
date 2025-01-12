function calculateSales(data) {
    let minSale = Number.MAX_VALUE;
    let maxSale = Number.MIN_VALUE;
    let total = 0;
    let daysWithSales = 0;
  
    for (let i = 0; i < data.length; i++) {
      if (data[i] > 0) { 
        total += data[i];
        daysWithSales++;
        
        if (data[i] < minSale) {
          minSale = data[i];
        }
        
        if (data[i] > maxSale) {
          maxSale = data[i];
        }
      }
    }
  
    let average = total / daysWithSales;
    let daysAboveAverage = 0;
  
    for (let i = 0; i < data.length; i++) {
      if (data[i] > average) {
        daysAboveAverage++;
      }
    }
  
    return {
      minSale: minSale,
      maxSale: maxSale,
      daysAboveAverage: daysAboveAverage
    };
  }
  
  let monthlySales = [100, 200, 0, 300, 150, 0, 50, 400, 250, 600, 350, 0, 0, 300, 0, 200, 250, 0, 100, 450, 300, 350, 500, 0, 600, 700];
  let result = calculateSales(monthlySales);
  
  console.log(`Minimum Sale: $${result.minSale}`);
  console.log(`Maximum Sale: $${result.maxSale}`);
  console.log(`Days with Sales above average: ${result.daysAboveAverage}`);
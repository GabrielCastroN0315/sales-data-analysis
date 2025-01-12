const revenueByState = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  
  const totalRevenue = Object.values(revenueByState).reduce((acc, curr) => acc + curr, 0);
  
  for (const [state, revenue] of Object.entries(revenueByState)) {
    const percentage = ((revenue / totalRevenue) * 100).toFixed(2);
    console.log(`${state} represents ${percentage}% of the total revenue.`);
  }
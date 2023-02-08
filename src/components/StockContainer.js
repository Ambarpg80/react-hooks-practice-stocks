import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, onPurchase, onfilterByCategory}) {
// console.log(stockList)



  return (
    <div>
      <h2>Stocks</h2>
      {onfilterByCategory.map(stock => <Stock key={stock.id} stock={stock} onPurchase={onPurchase}/>)}
    </div>
  );
}

export default StockContainer;

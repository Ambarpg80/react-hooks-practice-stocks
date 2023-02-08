import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioList, setPortfolioList}) {
//  console.log(portfolioList)

// function handleStockSale(e){
//   sellStock(e.target.id)
// }

  function sellStock(item){
    const stockSold = portfolioList.filter(stock => stock.id !== item.id)
    setPortfolioList(stockSold)
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList.map(stock => <Stock key={stock.ticker}  stock={stock} onStockSale={sellStock} /> )}
    </div>
  );
}

export default PortfolioContainer;

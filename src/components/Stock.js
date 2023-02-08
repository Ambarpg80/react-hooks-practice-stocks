import React from "react";

function Stock({stock , onPurchase , onStockSale}) {
const { ticker, name, price} = stock

function handleStockBuy(){
  onPurchase(stock)
}

function handleStockSale(){
  onStockSale(stock)
}

  return (
    <div >
      <div className="card"  >
        <div className="card-body" id={stock.id} name={name} >
          <h5 className="card-title" id={stock.id} value={name} onClick={handleStockBuy} >{name}</h5>
          <p className="card-text" id={stock.id} value={price} onClick={handleStockSale}>{ticker}: {price}</p>
          
        </div>
      </div>
    </div>
  );
}

export default Stock;

import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);
  const [categorySelected, setCategorySelected] = useState('Tech');
   const [checkValue, setCheckValue] = useState("Alphabetically");
  
  
  useEffect(()=>{
    fetch('http://localhost:3001/stocks/')
    .then(res => res.json())
    .then(list => setStockList(list))
  },[])

  function handlePurchase(item){ 
  setPortfolioList([...portfolioList, item])
  }

   const categoryFilter = stockList
        .sort((stockA , stockB) => {
          // console.log(stockB.price)
          if(checkValue === "Alphabetically")
          return (stockA.name.toUpperCase() < stockB.name.toUpperCase()) ? -1 : 1
         if(checkValue === "Price") 
          return (stockA.price - stockB.price ) 

          return true
        })
        .filter(stock =>(categorySelected === "Tech") ? stock.type === "Tech" : (stock.type === categorySelected))

  

  return (
    <div>
      <SearchBar setCategorySelected={setCategorySelected}
                   setCheckValue={setCheckValue} />
      <div className="row">
        <div className="col-8">
          <StockContainer onfilterByCategory={categoryFilter} 
                          stockList={stockList} 
                          onPurchase={handlePurchase}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} 
                              setPortfolioList={setPortfolioList}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

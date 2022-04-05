import React,{useState,useEffect} from 'react';

//Api
import {getCoin} from "../service/Api";

//Loader
import Loader from "./Loader";

//Coin
import Coin from "./Coin";

const Landing = () => {

    const [coins,setCoin]=useState([])
    const [search,setSearch]=useState([])

    //fetchApi
    useEffect(()=>{
        const fetchApi=async()=>{
            const data=await getCoin();
            setCoin(data)
        }
        fetchApi();
    },[] )
    const searchHandeler=(e)=>{
        setSearch(e.target.value)
    }
    const searchCoins=coins.filter(coin=>coin.name.toLowerCase().includes(search))
    return (
        <div>
            
            <input type="text" placeholder='Search' value={search} onChange={searchHandeler}/>
            {
                coins.length ?
                <div>
                        {
                        searchCoins.map(item=><Coin 
                            key={item.id} 
                            name={item.name}
                            image={item.image}
                            symbol={item.symbol}
                            price={item.price}
                            marketCap={item.marketCap}
                            priceChange={item.market_cap_change_24h}

                            />)
                        }
                </div> :

                <Loader />

            }
            
            
        </div>
    );
};



export default Landing;
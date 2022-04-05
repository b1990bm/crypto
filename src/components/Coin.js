import React from 'react';

//Css Coin
import styles from "./Coin.module.css"
const Coin = ({name,image,symbol,price,marketCap,priceChange}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="name"/>
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>$ {price.toFixed(2)}</span>
            <span  className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(2)}</span>
            <span  className={styles.marketCap}>$ {marketCap}</span>
        </div>
    );
};

export default Coin;
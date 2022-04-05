import React,{useState,useEffect} from 'react';

//Api
import {getCoin} from "../service/Api";

const Landing = () => {

    //fetchApi
    useEffect(()=>{
        const fetchApi=async()=>{
            const data=await getCoin();
            console.log(data);
        }
        fetchApi();
    },[] )
    return (
        <div>
            
        </div>
    );
};



export default Landing;
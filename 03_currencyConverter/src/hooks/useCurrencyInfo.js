import { useState, useEffect } from "react";

//this a custom hook which will be returning some data

function useCurrencyInfo(currency){

    //here, `useState` hook is used to update the data variable 
    //with change of `currency` variable while fetching the currency-converter api
    //here, we've taken an object to initiate the data variable in the
    //useState hook to avoid undefined while looping through it if api call get rejected
     const [data , setData] = useState({})

    useEffect( () =>{
           fetch(`https://v6.exchangerate-api.com/v6/d61a5716899576b454293427/latest/${currency}`)
           .then((response) => response.json())
           .then((response) => setData(response['conversion_rates']))
           //.then((response) => setData(response[currency]))
          // console.log(data);
    } , [currency] )
   // console.log(data);
    return data
}

//here we're returning the whole method as usually every hook this functionality
export default useCurrencyInfo;
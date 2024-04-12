import React, { useId }from 'react'

function InputBox({
    //`label` to indicate whether is `from` or `to` section
    label,
    //`amount` to access `input` element value which would be given by the user
    amount,
    //`onAmountChange` to understand whether the user amount has changed or not
    onAmountChange,
    //`onCurrencyChange` to set the algorithm based on the changed currency
    onCurrencyChange,
    //`currencyOption` to have all the currency options as array format
    currencyOptions = [],
    //`selectCurrency` to know which currency has selected
    selectCurrency = "usd",
    //`amountDisable` to understand whether the input field is enabled or disabled
    amountDisable = false,
    currencyDisable = false, 
    className = "",
}) {
   
    const amountInputId = useId()

    return (
        //here, in the line no: 11 we've used tailwind within the `{}` js to
        //change the UI with respect to user preference through `className` variable
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    //this `disabled` variable is optional
                    disabled = {amountDisable}
                    value={amount}
                    //here , onClick event is set up to let other component know that the input value is changed 
                    //to perform their tasks according to it
                    //here, we put a extra checker through (&&) to call the 
                    //loop if it's exist
                    //here, we've converted the the `e.target.value` into number to avoid 
                    //bugs since some times in js returns the input value as string 
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    //to set the value of the select option
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    //this `disabled` variable is optional
                    disabled = {currencyDisable}
                > 
                     {/* here, we're adding each option by using the data of the api through loop(map in this case) */}
                       { 
                           //whenever, iteration is used in react , a unique `key` should be added with each iteration items
                         currencyOptions.map( (currency)=> (
                           <option key={currency} value={currency}>
                              {currency}
                            </option>
                
                          ))
                       }
                       
                </select>
            </div>
        </div>
    );
}

export default InputBox;
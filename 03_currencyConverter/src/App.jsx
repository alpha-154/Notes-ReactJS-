import { useState } from 'react'
import { InputBox } from './components' //why ??? bcz this component exported in
//the index.js file which call itself automatically(any other alternative to access it)
import useCurrencyInfo from './hooks/useCurrencyInfo'



function App() {

  const [amount, setAmount] = useState(0) //to update the input field with respect to user input
  const [from , setFrom ] = useState("usd")//to track from which currency to change into another currency
  const [to , setTo ] = useState("inr") //same
  const [convertedAmount , setConvertedAmount ] = useState(0) //to convert the final answers

  const currencyInfo = useCurrencyInfo(from) //here, this variable will hold the data which 
  //would be come from api for the `from` variable
  const options = Object.keys(currencyInfo) //here, `options` variable will hold all the keys 
  //from the `currencyInfo` variable bcz `useCurrencyInfo` will send an object of base currency
 
  //to swap button (optional)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) //executing the final calculation
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={ (currency) => setAmount(amount) }
                            selectCurrency= {from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                           label="To"
                           amount={convertedAmount}
                           currencyOptions={options}
                           onCurrencyChange={ (currency) => setTo(currency) }
                           selectCurrency= {from}   
                           amountDisable 
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App

import { useState } from "react"

function App() {

  const [inputValue, setInputValue] = useState("");

  function display(value) {
    setInputValue(inputValue + value)
  }

  function calculate() {
    let answers = eval(inputValue)
    setInputValue(answers)
  }

  function clear() {
    setInputValue("")
  }



  return (
    <>

      <div class=" bg-gray-300 w-80 mx-auto mt-40 rounded-md shadow-md ... 
        pt-5 border-4 border-blue-500  pb-2">
        <div class="">
          <input type="text" value={inputValue} class="block mx-auto text-lg
             font-bold bg-white w-60 text-right pe-3
              py-2 rounded-md border-red-500 border-2
               shadow-md ... ps-3"/>
        </div>

        <div>
          <div class="grid grid-cols-4 gap-4 mt-3 p-2">
            <button class="bg-red-500 text-lg p-2
               text-white font-bold rounded-lg shadow-lg ..."
              onClick={() => clear()}>C</button>
            <button class="bg-blue-500 text-lg p-2 text-white 
              font-bold rounded-lg shadow-lg ..." onClick={() => display("/")}>/</button>
            <button
              class="bg-blue-500 text-2xl p-2 text-white 
                font-bold rounded-lg shadow-lg ..." onClick={() => display("*")}>*</button>
            <button
              class="bg-blue-500 text-2xl p-2 text-white 
                font-bold rounded-lg shadow-lg ..." onClick={() => display("-")}>-</button>
          </div>
        </div>

        <div>
          <div class="grid grid-cols-4 gap-4 p-2">
            <button class="bg-white py-2 text-lg 
              text-black font-bold rounded-lg shadow-lg ..." onClick={() => display("7")}>7</button>
            <button class="bg-white text-lg p-2 text-black
               font-bold rounded-lg shadow-lg ..." onClick={() => display("8")}>8</button>
            <button class="bg-white text-lg p-2 text-black
               font-bold rounded-lg shadow-lg ..." onClick={() => display("9")}>9</button>
            <button
              class="bg-blue-500 text-2xl p-2 text-white
                 font-bold rounded-lg shadow-lg ..." onClick={() => display("+")}>+</button>
          </div>
        </div>

        <div>
          <div class="grid grid-cols-4 gap-4 p-2">
            <button class="bg-white py-2 text-lg text-black 
              font-bold rounded-lg shadow-lg ..." onClick={() => display("4")}>4</button>
            <button class="bg-white text-lg p-2 text-black 
              font-bold rounded-lg shadow-lg ..." onClick={() => display("5")}>5</button>
            <button class="bg-white text-lg p-2 text-black 
              font-bold rounded-lg shadow-lg ..." onClick={() => display("6")}>6</button>
            <button
              class="bg-green-400 text-lg p-2 text-white font-bold
                 rounded-lg shadow-lg ..." onClick={() => calculate()}>=</button>
          </div>
        </div>

        <div>
          <div class="grid grid-cols-4 gap-4 p-2">
            <button class="bg-white py-2 text-lg text-black 
              font-bold rounded-lg shadow-lg ..." onClick={() => display("1")}>1</button>
            <button class="bg-white text-lg p-2 text-black
               font-bold rounded-lg shadow-lg ..." onClick={() => display("2")}>2</button>
            <button class="bg-white text-lg p-2 text-black 
              font-bold rounded-lg shadow-lg ..." onClick={() => display("3")}>3</button>
          </div>
        </div>

        <div>
          <div class="grid grid-cols-4 gap-4 p-2">
            <button class="bg-white py-2 text-lg text-black 
              font-bold rounded-lg shadow-lg ..." onClick={() => display("0")}>0</button>
            <button class="bg-white text-lg p-2 text-black 
              font-bold rounded-lg shadow-lg ..." onClick={() => display("00")}>00</button>
            <button class="bg-white text-2xl p-2 text-black 
              font-bold rounded-lg shadow-lg ..." onClick={() => display(".")}>.</button>
          </div>
        </div>
      </div>



    </>
  )
}

export default App

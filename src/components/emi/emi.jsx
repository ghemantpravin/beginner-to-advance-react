import React, { useState } from 'react'

function Emi() {

    const [amount, setAmount] = useState(50000)
    const [years, setYears] = useState(1)
    const [interest, setInterest] = useState(10.45)
    const [emi, setEmi] = useState(0)

    function AmountChange(e){
        setAmount(e.target.value)
    }

    function YearsChange(e){
        setYears(e.target.value)
    }

    function InterestChange(e){
        setInterest(e.target.value)
    }

    function CalculateClick(){

        var p = parseInt(amount)
        var r = parseFloat(interest)/12/100
        var n = parseInt(years) * 12

        var emi = p * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n)-1)
        setEmi (Math.round(emi).toLocaleString('en-in', {style : 'currency', currency : 'INR'}));
    }

  return (
    <div className='container'>
        <h1>EMI Calculator</h1>

        <div className="row">
                <div className="col-md-4">
                    Amount you need <input type='text' className='form-control mb-4' onChange={AmountChange} value={amount}></input>
                    &#x20B9; 50,000<input type='range' value={amount} min="50000" max="500000" onChange={AmountChange}></input>&#x20B9; 500000
                </div>
                <div className="col-md-4">
                    For how many years <input type='text' className='form-control mb-4' onChange={YearsChange} value={years}></input>
                    01<input type='range' value={years} min="1" max="5" onChange={YearsChange}></input>05
                </div>
                <div className="col-md-4 mb-4">
                    Interest rate  <input type='text' className='form-control mb-4' onChange={InterestChange} value={interest}></input>
                    10.45% <input type='range' step="0.1" min="10.45" max="18.00" value={interest} onChange={InterestChange}></input>18.00%
                </div>
                <button className='btn btn-primary w-25' onClick={CalculateClick}>Calculate</button>
                <p>our monthly  EMI <b>{emi}</b> is for next <b>{years}</b></p>
        </div>

    </div>
  )
}

export default Emi

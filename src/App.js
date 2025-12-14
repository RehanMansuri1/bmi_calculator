import { useState } from 'react';
import './App.css';

function App() {

  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmiResult, setBmiresult] = useState('BMI')
  const [msg , setMsg] = useState('')

  const handleInput = (e) => {


    if (e.target.name === 'weight') {
      setWeight(e.target.value)
    } else if (e.target.name === 'height') {
      setHeight(e.target.value)
    }
  }


  const calculate = () => {
    //formaula bmi = weight/heght*height(in meter)
    // 1 feet = .3048
    let meter = height * 0.3048
    let meterSquare = meter * meter;
    let bmi = (weight / meterSquare).toFixed(2);
    setBmiresult(`Your BMI is : ${bmi}`)
    if (bmi<18) {
      setMsg('Hey! you are under weighr')
    } else if (bmi>=18 && bmi<=25) {
      setMsg('Hey! you have normal wieght')
    } else{
      setMsg('Hey Dude ! you have heavy weight')
    }

  }

  return (
    <div className="container">
      <div className='heading'>
        <h1>BMI Calculator</h1>
      </div>
      <div className='inputs'>
        <p>Please Enter your Weight (kg)</p>
        <input type='text' placeholder='Enter weight' name='weight' onChange={handleInput} />
        <div className='height'>
          <p>Please Enter your Height (Feet)</p>
          <input type='text' placeholder='Enter Height' name='height' onChange={handleInput} />
        </div>
      </div>
      <div className='btns'>
        <button onClick={calculate}>Calculate</button>
        <button className='reset'>Reset</button>
      </div>
      <div className='result'>
        <p>{bmiResult}</p>
        <p>{msg}</p>
      </div>

    </div>
  );
}

export default App;

import './App.css'
import PercentView from './components/PercentView'
import { useState } from 'react';


/*
type MyType = {
    name: string,
    age: number,
    isActive: boolean,
    doIt: (h: number) => number, //delegat v c# \ predpis metody
    hobbies: Array<string>,
    address: {
        street: string,
        city: string,
        country: string
    }
}

const myPerson: MyType = {};
myPerson.name = "franta"


type ArrowType = (x: number) => number

const arrow1:ArrowType = (x) => x + 1
const arrow2:ArrowType = (x) => (
    x + 1 
)
const arrow3:ArrowType = (x) => {
    x = 2;
    return (
        x + 1
    )
}
*/
// const App = () => {
//     let cislo: number = 11;
//     cislo -= 1;
//     return (
//         <>
//             <PercentView value={cislo + 15} max={100} makeColor={(p) => `rgb(${p*2*100}, 255, 255)`}/>
//             <PercentView value={cislo + 40} max={100} makeColor={(p) => `rgb(${p*2*100}, 255, 255)`}/>
//             <PercentView value={100} max={100} makeColor={(p) => `hsl(10, 100%, ${p*50}%)`}/>
//         </>  
//     )
// }

const App = () => {
    const [rangeValue,  setRangeValue] = useState(100)
    const initialValue: number = 50;
    console.log(rangeValue, setRangeValue)
    return (
        <> 
            <div>
                <input type="range" min={0} max={200} onChange={(e) => setRangeValue(parseInt(e.target.value))} defaultValue={initialValue}/>
            </div>
            <PercentView value={rangeValue} max={200} makeColor={(p) => `hsl(${p*100})%, 100%, 50%`} />
        </>  
    )
}

export default App
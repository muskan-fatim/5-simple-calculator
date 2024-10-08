'use client'
import { useRef } from "react";
export default function Calculator(){
    let first = useRef<HTMLInputElement | null>(null)
    let second = useRef<HTMLInputElement | null>(null)

  const add = ()=>{
    let result = document.getElementById("result")
if(first && second){
 let onevalue =  Number(first.current?.value)
 let secondvalue = Number(second.current?.value)
 if(onevalue&&secondvalue && result){
   let total = onevalue + secondvalue;
   result.innerHTML = total.toString()
 }

}
  }
  const multi = ()=>{
    let result = document.getElementById("result")

    if(first && second){
     let onevalue =  Number(first.current?.value)
     let secondvalue = Number(second.current?.value)
     if(onevalue&&secondvalue && result){
      let total = onevalue * secondvalue
       result.innerHTML = total.toString();
     }
    
    }
      }
      const divide = ()=>{
        let result = document.getElementById("result")

        if(first && second){
         let onevalue =  Number(first.current?.value)
         let secondvalue =Number(second.current?.value)
         if(onevalue&&secondvalue && result){
          let total = onevalue / secondvalue
           result.innerHTML = total.toString();
         }
        
        }
          }
          const sub = ()=>{
            let result = document.getElementById("result")

            if(first && second){
             let onevalue =  Number(first.current?.value)
             let secondvalue =Number(second.current?.value)
             if(onevalue&&secondvalue && result){
              let total = onevalue - secondvalue
               result.innerHTML = total.toString();
             }
            
            }
              }
      
  return(
    <div>
      <h1>Calculator</h1>
      <input ref={first} type="number"  placeholder="enter number"></input>
      <br>
      </br>
      <br>
      </br>
      <input ref={second} type="number" placeholder="enter number"></input>
      <br></br>
      <br></br>
      <button onClick={multi}>*</button>
      <button onClick={add}>+</button>
      <button onClick={divide}>/</button>
      <button onClick={sub}>-</button>
      <h3>Result</h3>
      <p id="result"></p>

      
    </div>
  )
}
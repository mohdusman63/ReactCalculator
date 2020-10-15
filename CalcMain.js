import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const CalcMain=()=>{
    const [Number,setNumber]=useState('')
    const handle=(e)=>{
       // alert(e.target.name)
         setNumber(Number+  e.target.name)
    }
    const result=()=>{
        try{
            let c=Number;
            let z=eval(c);
            setNumber(z)
        }
        catch(e){
            setNumber('error')
        }     
    }
    const clearExp=()=>{
        setNumber('')
    }
    const facto=()=>{
        // alert(Number)
        let i,f=1;
        for(i=1;i<=Number;i++){
            f=f*i;

        }
        setNumber(f)
    }
    const rootValue=()=>{
        //alert(Math.sqrt(Number))
        setNumber(Math.sqrt(Number))
    }

    return(
        <>
       <div className="container">
    <div className="row">
      <div className="col-md-3 mx-auto">
         <div className="btn-group-vertical my-4" role="group" aria-label="Basic example">
            <input type="text" style={{padding:10,textAlign:"right"}} value={Number}/>
                <div className="btn-group ">
                    <button type="button"  className="btn btn-secondary border-bottom-0 rounded-0 " name="7" onClick={handle} >7</button>
                    <button type="button" className="btn btn-secondary border-bottom-0 " name="8" onClick={handle}>8</button>
                    <button type="button" className="btn btn-secondary border-bottom-0 rounded-0" name="9" onClick={handle}>9</button>
                    <button type="button" className="btn btn-secondary border-bottom-0 rounded-0" name="*" onClick={handle}>&times;</button>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary border-bottom-0 rounded-0" name="4" onClick={handle}>4</button>
                    <button type="button" className="btn btn-secondary border-bottom-0" name="5" onClick={handle}>5</button>
                    <button type="button" className="btn btn-secondary border-bottom-0 rounded-0" name="6" onClick={handle}>6</button>
                    <button type="button" className="btn btn-secondary border-bottom-0 rounded-0" name="+" onClick={handle}>+</button>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary rounded-0" name="1" onClick={handle}>1</button>
                    <button type="button" className="btn btn-secondary" name="2" onClick={handle}>2</button>
                    <button type="button" className="btn btn-secondary rounded-0" name="3" onClick={handle}>3</button>
                    <button type="button" className="btn btn-secondary border-bottom-0 rounded-0" name="-" onClick={handle}>-</button>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary rounded-0" name="h" onClick={rootValue}>&radic;</button>
                    <button type="button" className="btn btn-secondary" name="0" onClick={handle}>0</button>
                    <button type="button" className="btn btn-secondary rounded-0" name="." onClick={handle}>.</button>
                    <button type="button" className="btn btn-secondary rounded-0" name="=" onClick={result}>=</button>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary rounded-0" name="^" onClick={handle}>^</button>
                    <button type="button" className="btn btn-secondary" name="%" onClick={handle}>%</button>
                    <button type="button" className="btn btn-secondary rounded-0" name="" onClick={clearExp}>AC</button>
                    <button type="button" className="btn btn-secondary rounded-0" name="!" onClick={facto}>!</button>
                </div>
            </div>
        </div>
    </div>

</div>


        </>
    )
}
export default CalcMain;

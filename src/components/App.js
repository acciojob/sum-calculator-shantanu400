
import React,{useState,useEffect} from "react";
import './../styles/App.css';
import { TextField,Typography} from "@material-ui/core";


const App = () => {
  const [val,setval]=useState(0);
  const [sum,setsum]=useState(0);
  useEffect(()=>{
    
    setsum(sum+Number(val));
        
  
    }, [val]);
  return (
    <div>
      <TextField type="number" InputLabelProps={{ shrink: true }} onChange={(e)=>{
        setval(e.target.value);
        
      }} />
        <Typography variant="h1"><p>Sum: {sum}</p></Typography>   
    </div>
  )
}

export default App

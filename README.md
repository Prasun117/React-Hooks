# React-Hooks and Optimization

Created with Prasun Mukherjee

## useState Hook

useState Hook enables you to add state to a functional component.
```
import {useState} from 'react';

export function Flicker=()=>{
const [flick,setFlick]=useState(false);
return(
 <div>
  {flick?'Flicked':'Normal'}
  <button onClick={()=>setFlick(!flick)}>Flick the paper</button>
 </div>)
}
```


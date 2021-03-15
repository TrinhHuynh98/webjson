import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const Main = () => {
  
const [value,setValue] = useState('');
const history = useHistory();

function handleClick(){
  if (value === "404"){
    history.push("/404")
  }
    else if (value === "401"){
    history.push("/401")
  }
  else{
    history.push("/")
  }
  
}

return (
    <section>
      <form>
        <label>
          <span>Error Message</span>
          <input
            type="input" onChange={event => setValue(event.target.value)}
          />
          <button type="submit" onClick={()=>handleClick()}>Submit</button>
        </label>
      </form>
    </section>
  );
};

export default Main;


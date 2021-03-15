import React, { useState } from "react";

const Main = () => {

const [error, setError] = useState(false);

return (

    <section>
      <form>
        <label>
          <span>Error Message</span>
          <input
            type="input"
          />
          <button type="submit" onClick={} >Submit</button>
        </label>
        
      </form>
    </section>
  );
};
export default Main;


import logo from "./logo.svg";
import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserAction } from "./redux/actions/UserAction";

import { useCustomizeContext } from "./context/Context";

function App() {
  const dispatch = useDispatch();

// API Call 

  useEffect(() => {
    dispatch(
      UserAction.GetCmsData(
        {
          _id: "63888c8689325c98b5ac8bdb",
        },
        (resp) => {
          console.log(resp);
        }
      )
    );
  }, []);


  // UseContext

  const {    declareState: {     

    exhiStartComplete,
    setExhiStartComplete,
    
  },  } = useCustomizeContext();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {exhiStartComplete}
        </p>
        <button style={{backgroundColor:"darkcyan", padding:"10px", borderRadius:"10px", color:"white", fontWeight:"bold", cursor:"pointer"}} 
        onClick={()=>setExhiStartComplete("Updated Content")}>Change State</button> <br/>
        <button style={{backgroundColor:"darkcyan", padding:"10px", borderRadius:"10px", color:"white", fontWeight:"bold", cursor:"pointer"}} 
        onClick={()=>setExhiStartComplete("Learn Context")}>Re-Change State</button>
      </header>
    </div>
  );
}

export default App;

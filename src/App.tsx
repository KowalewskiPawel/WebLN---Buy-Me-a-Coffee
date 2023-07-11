/* eslint-disable @typescript-eslint/no-misused-promises */
import { GetInfoResponse } from "@webbtc/webln-types";
import "./App.css";

function App() {
  const enableWebLN = async () => {
    if (typeof window.webln === "undefined") {
      console.warn("WebLN not enabled");
      return;
    }
    try {
      await window.webln.enable();
    } catch (err) {
      console.log(err);
    }
  };

  const getInfoWebLN = async () => {
    if (typeof window.webln === "undefined") {
      console.warn("WebLN not enabled");
      return;
    }
    try {
      const info: GetInfoResponse = await window.webln.getInfo();
      console.log("Your node info: ", info);
    } catch (err) {
      console.log(err);
    }
  };

  const sendSats = async () => {
    if (typeof window.webln === "undefined") {
      console.warn("WebLN not enabled");
      return;
    }
    try {
      const result = await window.webln.keysend({
        destination:
          "", // node address
        amount: "1",
        customRecords: {
          "": "", // key is Custom Key and value is Custom Value 
        },
      });
      console.log("Result: ", result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>WebLN</h1>
      <div className="card">
        <button onClick={enableWebLN}>Enable WebLN</button>
        <button onClick={getInfoWebLN}>Info</button>
        <button onClick={sendSats}>Send Sats</button>
      </div>
    </>
  );
}

export default App;

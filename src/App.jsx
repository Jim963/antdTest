import React, { useState, useEffect, useRef } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/index";
import { getUserToken } from "./utils/handleUserToken";

//test
import SignBox from "./components/SignTest";

// nature
import NatureSignTest from "./components/NatureSignTest";

const App = () => {
  const userToken = getUserToken();
  console.log(userToken, "userToken");
  const routeElement = useRoutes(routes(userToken));

  // nature
  const [state, setStateData] = useState({
    tbs: "TBS", //隨機值,get from api,
    b64Signature: "",
    b64Cert: "",
    returnCode: "",
    tbsEncoding: "NONE",
    hashAlgorithm: "SHA256",
  });
  const [natureTrigger, setNatureTrigger] = useState(false);
  return (
    <>
      <div className="App w-screen min-h-screen text-[#484848]">
        {/* {routeElement} */}
        {/* <SignBox></SignBox> */}
        <NatureSignTest
          state={state}
          setStateData={setStateData}
          natureTrigger={natureTrigger}
          setNatureTrigger={setNatureTrigger}
          isPinError={false}
          getErrorMsg={() => {
            console.log("yap");
          }}
        ></NatureSignTest>
      </div>
    </>
  );
};

export default App;

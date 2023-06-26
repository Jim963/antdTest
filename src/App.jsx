import { useState } from "react";
import ModalOne from "./components/ModalOne";

function App() {
  const [openModal, setModal1Open] = useState(false);
  return (
    <>
      <h1 className="text-3xl font-bold underline"></h1>
      <ModalOne
        title={"test"}
        isOpen={openModal}
        cancelAction={() => setModal1Open(false)}
        okAction={() => setModal1Open(false)}
      ></ModalOne>
      <button onClick={() => setModal1Open(true)}>Test</button>
    </>
  );
}

export default App;

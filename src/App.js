import React, {useState, useEffect} from "react";
import { } from "react-router-dom"
import api from "./api/store"
import GlobalStyle from "./globalStyles";
import AddStore from "./Components/AddStore/AddStore"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
function App() {
  const [store, setStore] = useState([]);

  // For POP

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => setShow(true);

   // For POP

  //  For Add Store

  const addStoreHandler = async (contact) =>{
    const request = {
     ...(contact),
    }
    const res = await api.post("/store", request );
      setStore(...store, res.data)
   };

 
  //  For Add Store

   useEffect(() => {
 
  }, []);

  return (
    <>
      <GlobalStyle />

      <Header logotext={"Logo text"}  handleShow={handleShow} />

      <AddStore addStoreHandler={addStoreHandler} show={show} handleClose={handleClose}  />

      <Footer footetext={"(c) 2021 Wellbux, Inc. All Rights reserved"} />
    </>
  );
}

export default App;

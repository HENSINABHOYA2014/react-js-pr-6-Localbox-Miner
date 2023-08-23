import logo from './logo.svg';
import './App.css';
import './Crud.css';
import Crud from './Crud';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 



function App() {
  const[openModal,setOpenModal]=useState(false);
  return (
    <>
    <center>
      <br/>
      <br/>
    <button onClick={()=>{setOpenModal(true)}}  className="btn btn-1">Add Employee Data</button>
    {openModal && <Crud claseModal={setOpenModal}/>}
    </center>
    </>
  );
}

export default App;

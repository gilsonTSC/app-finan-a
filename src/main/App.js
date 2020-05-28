import React from 'react';

import Rotas from './rotas'
import NavBar from '../components/navbar'
import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <Rotas/>
      </div>
    </>
  );
}

export default App;

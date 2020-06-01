import React from 'react';

import Rotas from './rotas';
import NavBar from '../components/navbar';
import 'toastr/build/toastr.min.js';

import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css';
import 'toastr/build/toastr.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

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

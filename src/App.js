import React, { useState } from 'react';
import Header from './Components/Header'
import Hero from './Components/Hero'
import Form from './Components/form'
import Spinner from './Components/Spinner'
import Summary from './Components/Summary'
import Result from './Components/Result'

import './App.scss';

function App() {

  const [ summary , saveSummary ] = useState({
    quotation: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [ loading, saveLoading ] = useState(false)

  //extracción de datos
  const { data, quotation } = summary

  return (
    <>
      <Header title='Seguro Online'/>
      <Hero title='El mejor seguro está acá' slogan='No busques más, disfrutá nuestro plan más vendido' off='20% off por 3 meses.' />
      <div className="app-wrapper">
        <Form saveSummary={ saveSummary } saveLoading={ saveLoading }/>
        { loading ? <Spinner /> : null }
        <Result quotation={ quotation }/>
        <Summary data={ data }/> 
      </div>
      
    </>
  );
}

export default App;

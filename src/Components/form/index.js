import React, { useState } from 'react'
import { calculateBrand, getDifferenceYear, getPlan } from '../../Helper'
import './Style.scss'

const Form = ({ saveSummary, saveLoading }) => {

    const [ data, saveData ] = useState({
        brand: '',
        year: '',
        plan: ''
    });

    const [ error, saveError ] = useState(false);

    //extracción de valores del State
    const { brand, year, plan } = data;

    //lectura de datos del form para colocarlos en el State
    const getData = e => {
        saveData({
            ...data,
            [e.target.name] : e.target.value
        })

    }

    //submit
    const handleSubmit = e => {
        e.preventDefault();
        if(brand.trim() === '' || year.trim() === '' || plan.trim() === '') { 
            saveError(true);
        return;
        }

     saveError(false);

     let result = 2000;

     //obtención de diferencia de años
     const difference = getDifferenceYear(year);

     //resta 3% por cada año
     result -= ((difference * 3) * result) / 100;
     console.log('la resta del 3% es' + result);
     //incremento volkswagen
     //incremento ford
     //incremento renault
     //incremento chevrolet
     //incremento peugeot
     //incremento fiat
     result = calculateBrand(brand) * result;

     //terceros completo aumenta 30%
     //todo riesgo aumenta 50%
     const increasePlan = getPlan(plan);
     result = parseFloat( increasePlan * result).toFixed(2);

     saveLoading(true)

     setTimeout(() => {
        //ellimina el spinner
        saveLoading(false)

        //carga los datos
        saveSummary({
            quotation: result,
             data
         })

     }, 3000)
     //total
     
    }

    return (
        <div className="form-wrapper">
            <form
            className="input-group mb-3"
                onSubmit={ handleSubmit }
            >
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Marca</label>
                    </div>
                    <select 
                        name='brand'
                        value={ brand }
                        onChange={ getData }
                        className="custom-select" id="inputGroupSelect01"
                    >
                        <option value="">---Seleccione---</option>
                        <option value="volkswagen">VOLKSWAGEN</option>
                        <option value="ford">FORD</option>
                        <option value="chevrolet">CHEVROLET</option>
                        <option value="peugeot">PEUGEOT</option>
                        <option value="renault">RENAULT</option>
                        <option value="fiat">FIAT</option>
                    </select>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Año</label>
                    </div>
                    <select
                        name='year'
                        value={ year }
                        onChange={ getData }
                        className="custom-select" id="inputGroupSelect01"
                    >
                        <option value="">---Seleccione---</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </select>
                </div>

                <div className="plan-wrapper">
                    <label>
                    <div className="blog-card">
                        <div className="meta">
                            <div className="photo one"></div>
                            <ul className="details">
                                <li className="tags"></li>
                                <span class="badge badge-primary"></span>
                                <span class="badge badge-light"></span>
                                <h6>Techo <span class="badge badge-secondary"></span></h6>
                            </ul>
                        </div>
                        
                        <div className="description">
                            <h1>Terceros FULL completo</h1>
                            <h2>FULL Potenciado</h2>
                                <input 
                                    className="text-center"
                                    type="radio"
                                    name="plan"
                                    value="terceros completo"
                                    checked={ plan === 'terceros completo' }
                                    onChange={ getData }
                                /> 
                        </div>
                    </div>
                    </label>

                    <label>
                    <div className="blog-card alt">
                        <div className="meta">
                            <div className="photo two"></div>
                            <ul className="details">
                                <li className="tags"></li>
                                <li className="tags"></li>
                                <li className="tags"></li>
                            </ul>
                        </div>
                        <div className="description">
                            <h1>GARANTIZADO TODO RIESGO</h1>
                            <h2>Franquicia fija</h2>
                                <input 
                                className="text-center"
                                type="radio"
                                name="plan"
                                value="todo riesgo"
                                checked={ plan === 'todo riesgo' }
                                onChange={ getData }
                                />
                        </div>
                    </div>
                    </label>
                </div>

                { error ? <div className="alert alert-danger  btn-block text-center" role="alert">Todos los campos son obligatorios</div> : null }

                <button type="submit" className="btn btn-primary btn-lg btn-block">Cotizar</button>
            </form>
        </div>
        
    );

}

export default Form
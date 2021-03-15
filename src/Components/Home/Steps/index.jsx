import {memo} from 'react';
import './steps.css';
import { BiBuildingHouse } from 'react-icons/bi';
import { FaTruckMoving} from 'react-icons/fa';

import {TiThumbsUp} from 'react-icons/ti';



const ComoFunciona = () => {
    console.log('ComoFunciona');

    return (
        <section className="comoFunciona">

            <h1>Arrienda en simples pasos</h1>

            <div>
                <h1>Inquilino o Tomador </h1>
            </div>  

            <div className="steps">
                
                <div className="step1">
                    <div className="circulo">
                        <h2>Encuentra el espacio que deseas utilizar</h2>
                    </div>
                    <h3><BiBuildingHouse /></h3>
                </div>
                <div className="step2">
                    <div className="circulo">
                        <h2>Aprueba el estudio o paga al contado</h2>
                    </div>
                    <h3><TiThumbsUp /></h3>
                </div>
                <div className="step3">
                    <div className="circulo">
                        <h2>Ya puedes utilizar el espacio</h2>
                    </div>
                    <h3><FaTruckMoving /></h3>
                </div>

            </div>

            <div>
                <h1>Propietario o Arrendador</h1>
            </div>

            <div className="steps">

                <div className="step1">
                    <div className="circulo">
                        <h2>Regístrate y publica el espacio que quieres arrendar</h2>
                    </div>
                    <h3><BiBuildingHouse /></h3>
                </div>
                <div className="step2">
                    <div className="circulo">
                        <h2>Espera que un interesado reserve o arriende el espacio</h2>
                    </div>
                    <h3><TiThumbsUp /></h3>
                </div>
                <div className="step3">
                    <div className="circulo">
                        <h2>Recibe los pagos directos en tu cuenta bancaria</h2>
                    </div>
                    <h3><FaTruckMoving /></h3>
                </div> 

            </div>

           


        </section>
    )
}

export default memo(ComoFunciona);
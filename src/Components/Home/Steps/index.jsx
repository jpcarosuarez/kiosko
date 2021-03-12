import {memo} from 'react';
import {Link} from 'react-router-dom';
import './steps.css';

const ComoFunciona = () => {
    console.log('ComoFunciona');

    return (
        <section className="comoFunciona">

            <h1>Cómo Funciona</h1>

            
            <div className="steps">
                <div className="step1">

                    <Link to="">
                        Encuentra un espacio
                    </Link>
                </div>
                <div className="step2">
                    <Link to="">
                        Ház una reservacion
                    </Link>
                </div>
                <div className="step3">
                    <Link to="">
                        Mudate al espacio  
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default memo(ComoFunciona);
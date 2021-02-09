import {memo} from 'react';
import './CategoriesGrid.css';
import {Link} from 'react-router-dom';
import {remodelacion} from './img/remodelacion.jpg'

const CategoriesGrid = () => {
    console.log('Render de grilla de categorias');

    return (
        <section className="categories_grid">

            <h1> Servicios </h1>

            <div className="container">
                <div className="item">

                    <Link to="">
                        Seguros 
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Agentes  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Remodelaciones  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Espacios  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Busco Roomates  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Tienda 
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default memo(CategoriesGrid);
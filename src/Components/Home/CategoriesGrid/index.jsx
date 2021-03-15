import {memo} from 'react';
import './CategoriesGrid.css';
import {Link} from 'react-router-dom';

const CategoriesGrid = () => {
    console.log('Render de grilla de categorias');

    return (
        <section className="categories_grid">


            <div className="container">
                <h1>Servicios</h1>

                <div className="item">

                    <Link to="">
                        Administramos tu inmueble 
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Corretaje
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Teusaquillo  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Medellin 
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Suba 
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Kennedy 
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default memo(CategoriesGrid);
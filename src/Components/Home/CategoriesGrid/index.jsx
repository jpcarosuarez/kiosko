import {memo} from 'react';
import './CategoriesGrid.css';
import {Link} from 'react-router-dom';

const CategoriesGrid = () => {
    console.log('Render de grilla de categorias');

    return (
        <section className="categories_grid">

            <h1>  </h1>

            <div className="container">
                <div className="item">

                    <Link to="">
                        Chapinero
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Usaquen
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
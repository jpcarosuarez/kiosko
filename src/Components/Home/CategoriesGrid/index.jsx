import {memo} from 'react';

import './CategoriesGrid.css';
import {Link} from 'react-router-dom';

const CategoriesGrid = () => {
    console.log('Render de grilla de categorias');

    return (
        <section className="categories_grid">
            <div className="container">
                <div className="item">
                    <Link to="">
                        Apartamentos  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Casas  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Fincas  
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
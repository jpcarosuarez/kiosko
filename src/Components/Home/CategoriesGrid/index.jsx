import './CategoriesGrid.css';
import {Link} from 'react-router-dom';

const CategoriesGrid = () => {
    console.log('Render de grilla de categorias');

    return (
        <section className="categories_grid">
            <div className="container">
                <div className="item">
                    <Link to="/category/apartamentos">
                        Apartamentos  
                    </Link>
                </div>
                <div className="item">
                    <Link to="/category/casas">
                        Casas  
                    </Link>
                </div>
                <div className="item">
                    <Link to="/category/fincas">
                        Fincas  
                    </Link>
                </div>
                <div className="item">
                    <Link to="/category/espacios">
                        Espacios  
                    </Link>
                </div>
                <div className="item">
                    <Link to="/category/Roomates">
                        Busco Roomates  
                    </Link>
                </div>
                <div className="item">
                    <Link to="/category/tienda">
                        Tienda 
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CategoriesGrid;
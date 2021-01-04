import './CategoriesGrid.css';
import {Link} from 'react-router-dom';

const CategoriesGrid = () => {
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
                        Pet Friendly  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Roomates  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Amoblados por dias  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Amoblados Mensuales  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Reserva tu arriendo 
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CategoriesGrid;
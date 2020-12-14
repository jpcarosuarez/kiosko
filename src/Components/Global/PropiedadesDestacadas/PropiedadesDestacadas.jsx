import ItemListContainer from 'latienda/src/Components/Global/ItemListContainer/ItemListContainer';
import './PropiedadesDestacadas.css';

const PropiedadesDestacadas = () => {
    return (
        <section className="propiedadesDestacadas">
            <div className="container">
                <h2>Apartamentos Amoblados en Bogotá</h2>
                <ul>
                    <li><ItemListContainer titulo="Apto 1" habitaciones="1" ubicacion_localidad="Chapinero" precio="75.000" /></li>
                    <li><ItemListContainer titulo="Apto 2" habitaciones="2" ubicacion_localidad="Usaquen" precio="65.000" /></li>
                    <li><ItemListContainer titulo="Apto 3" habitaciones="3" ubicacion_localidad="Cedritos" precio="55.000" /></li>
                    <li><ItemListContainer titulo="Apto 4" habitaciones="2" ubicacion_localidad="Chapinero" precio="95.000" /></li>
                </ul> 
            </div>
        </section>
    )
}
 
export default PropiedadesDestacadas;

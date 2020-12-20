import {useState, useEffect} from 'react';
import ItemListContainer from 'latienda/src/Components/Global/ItemListContainer/ItemListContainer';
import './PropiedadesDestacadas.css';

const PropiedadesDestacadas = () => {

    const [items, setItems] = useState([]);

    const propiedades = [
        {
            id: 1,
            titulo: 'Apto 1',
            ubicacion: 'Chapinero',
            habitaciones: 2,
            precio: 85000,
            baños:2,
            mts: 80,
        },
        {
            id: 2,
            titulo: 'Apto 2',
            ubicacion: 'Usaquén',
            habitaciones: 2,
            precio: 95000,
            baños:1,
            mts: 48,
        },
        {
            id: 3,
            titulo: 'Apto 3',
            ubicacion: 'Cedritos',
            habitaciones: 2,
            precio: 75000,
            baños:2,
            mts: 95,
        },
        {
            id: 4,
            titulo: 'Apto 4',
            ubicacion: 'Suba',
            habitaciones: 2,
            precio: 55000,
            baños:1,
            mts: 75,
        },
    ]

    const getPropiedades = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(propiedades);
        }, 2000)
    })
    useEffect(() => {
        getPropiedades.then(rta => setItems(rta));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <section className="propiedadesDestacadas">
            <div className="container">
                {
                    items.length ? 
                    <>
                        <h2>Apartamentos Amoblados en Bogotá</h2>

                        <ul>
                            {
                                items.map((item, index) => (
                                    <li key={index}>
                                        <ItemListContainer
                                            titulo={item.titulo}
                                            precio={item.precio}
                                            ubicacion={item.ubicacion}
                                            habitaciones={item.habitaciones}
                                            baños={item.baños}
                                            mts={item.mts}

                                        />
                                    </li>
                                ))
                            }
                        </ul>

                    </> :
                    <p className="cargando">Cargando Propiedades...</p>

                }
                

            </div>
        </section>
    )
}
 
export default PropiedadesDestacadas;

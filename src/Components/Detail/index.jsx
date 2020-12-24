import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    const [propiedades, setProduct] = useState(null);

    const getPropiedad = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: id, 
                nombre: "Alojamiento en Bogotá",
                foto: "http://placehold.it/350x400",
                descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam laboriosam deleniti neque! Explicabo aspernatur accusantium ex provident natus, nam neque nesciunt eaque iure dolore, architecto maiores corrupti deserunt totam. Veniam.",
                precio: 75000
            })
        }, 500);
    });

    useEffect(() => {
        getPropiedad
        .then(response => setProduct(response))
        .catch(error => console.log(error));
        // eslint-disable-next-line
    }, []);
        

    return (
        <>
            {       
                propiedades ?
                <div className="container">
                    <ProductDetail item={propiedades} />

                    <section>
                        Inmuebles Recomendados
                    </section>
                </div> : 
                <p>Cargando Inmuebles...</p>
            }
        </>
    )
}
export default Detail;
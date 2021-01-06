import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';
import Comments from './Comments';


const Detail = () => {
    const {id} = useParams();
    const [propiedades, setProduct] = useState(null);

    const getPropiedad = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: id, 
                nombre: "Detalle Propiedad",
                title:"",
                img: "http://placehold.it/350x400",
                descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam laboriosam deleniti neque! Explicabo aspernatur accusantium ex provident natus, nam neque nesciunt eaque iure dolore, architecto maiores corrupti deserunt totam. Veniam.",
                precio: 75000,
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
                                        
                        <div>
                            <h1>Inmuebles Recomendados</h1>
                            <Comments />


                        </div>

                    </section>
                </div> : 
                <p>Cargando Inmuebles...</p>
            }
        </>
    )
}
export default Detail;
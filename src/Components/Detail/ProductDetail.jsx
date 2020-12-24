const ProductDetail = ({item}) => {
    return (
        <article>
            <h1>{item.nombre}</h1>
            <p>El id de este producto es {item.id}</p>
            <img src={item.foto} alt=""/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <button>Reservar Arriendo</button>
        </article>
    )
}

export default ProductDetail;
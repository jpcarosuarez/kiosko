import './ItemListContainer.css';

const ItemListContainer = ({titulo, precio, habitaciones, ubicacion_localidad }) => {
    return (
        <article className="itemListContainer">
            <img src="https://placehold.it/400x400" alt="apartamento"/>
            <div>
                <h3>{titulo}</h3>
                <p>$&nbsp;{precio}</p>
                <p>Habitaciones {habitaciones} </p>
                <p>{ubicacion_localidad}</p>
            </div>
        </article> 
    )
}  

export default ItemListContainer;      

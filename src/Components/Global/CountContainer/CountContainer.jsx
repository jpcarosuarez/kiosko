import './CountContainer.css';



export default function CountContainer({ count, add, less }) {
  return (
    <div className="botonContador">

      <button onClick={() => less()}>-</button>
      <h3 className="contador">{count}</h3> 
      <button className="boton" onClick={() => add()}>+</button>
      
    </div>
  );
}  



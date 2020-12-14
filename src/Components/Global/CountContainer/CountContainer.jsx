
export default function CountContainer({ count, add, less }) {
  return (
    <>
      <button onClick={() => add()}>+</button>
      <p>{count}</p>
      <button onClick={() => less()}>-</button>
    </>
  );
}  

import { useCounter } from "./useCounter";

export default function App() {
  const { count, handleIncrement, handleDecrement } = useCounter(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Sumar +1</button>
      <button onClick={handleDecrement}>Restar -1</button>
    </>
  );
}
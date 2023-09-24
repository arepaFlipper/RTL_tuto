import { useState } from 'react';
type Props = {}

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> Increment</button>
    </div>
  )
}

export default Counter

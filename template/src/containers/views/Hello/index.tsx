import constate from "constate";
import { isEmpty } from "lodash-es";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useToggle } from "ahooks";
const Title = styled.h1`
  text-align: center;
`;

// 1️⃣ Create a custom hook that receives props
function useCounter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  // 2️⃣ Wrap your updaters with useCallback or use dispatch from useReducer
  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  return { count, increment };
}

// 3️⃣ Wrap your hook with the constate factory splitting the values
const [CounterProvider, useCount, useIncrement] = constate(
  useCounter,
  (value) => value.count, // becomes useCount
  (value) => value.increment // becomes useIncrement
);

function Button() {
  // 4️⃣ Use the updater context that will never trigger a re-render
  const increment = useIncrement();
  return <button onClick={increment}>+</button>;
}

function Count() {
  // 5️⃣ Use the state context in other components
  const count = useCount();
  return <span>{count}</span>;
}

const Hello = () => {
  const [state, { toggle }] = useToggle();
  // 测试lodash-es模块加载
  isEmpty({});
  return (
    <div style={{ textAlign: "center" }}>
      <Title>你好，欢迎使用！</Title>
      <CounterProvider initialCount={10}>
        <Count />
        <Button />
      </CounterProvider>
      <div>
        <p>Current Boolean: {String(state)}</p>
        <p>
          <button onClick={() => toggle()}>Toggle</button>
        </p>
      </div>
    </div>
  );
};
export default Hello;

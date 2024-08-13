import { useState, useEffect } from "react";
export const Props = () => {
  const [count, setCount] = useState(1); //[1个东西,2个东西]

  const setFn = (val: any) => setCount(val); //父组件定义了一个可以改变父组件值的方法
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh", //开发必备宽高必须写 多少不管
      }}
    >
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <Child count={count} xxxx={"xxxxxxx"} setFn={setFn} />

      {/* {Child({ count: count, xxxx: "dassasasa" })} */}
    </div>
  );
};

const Child = ({ count, xxxx, setFn }: any) => {
  useEffect(() => {
    setTimeout(() => {
      setFn?.(82222); //子组件调用这个方法 并可以传值 改变父组件的值 同时自己的值也会改变，？.的意思：有set函数才会执行，没有就不执行
    }, 1000);
  }, []);
  return (
    <div>
      子组件获取父组件{count}
      <div>{xxxx}</div>
    </div>
  );
};

// const xxx = () => {};
// function dsaad() {}
// const xxxxx = function () {};

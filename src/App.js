import logo from "./logo.svg";
import "./App.css";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
const parentCounterAtom = atom(0);
const childrenCounterAtom = atom(0);

function App() {
  const [parentCounter, setParentCounter] = useAtom(parentCounterAtom);
  const rerenderCounterRef = useRef(0);
  useEffect(() => {
    rerenderCounterRef.current = rerenderCounterRef.current + 1;
  });
  return (
    <div style={{ margin: 30 }}>
      <h3>Parent</h3>
      <div>
        Counter Value: <b>{parentCounter}</b>
      </div>
      <div>
        Rerenders: <b>{rerenderCounterRef.current}</b>
      </div>
      <button
        onClick={() => {
          setParentCounter(parentCounter + 1);
        }}>
        Change Parent Counter
      </button>
      <Child1 />
      <Child2 />
    </div>
  );
}

const Child1 = () => {
  const [childrenCounter, setChildrenCounter] = useAtom(childrenCounterAtom);
  const rerenderCounterRef = useRef(0);
  useEffect(() => {
    rerenderCounterRef.current = rerenderCounterRef.current + 1;
  });
  return (
    <div style={{ margin: 30, border: "1px solid", minHeight: 200 }}>
      <h3>Child1</h3>
      <div>
        Counter Value: <b>{childrenCounter}</b>
      </div>
      <div>
        Rerenders: <b>{rerenderCounterRef.current}</b>
      </div>
      <button
        onClick={() => {
          setChildrenCounter(childrenCounter + 1);
        }}>
        Change Shared Children Counter
      </button>
      <Subchild1 />
    </div>
  );
};

const Subchild1 = () => {
  const rerenderCounterRef = useRef(0);
  useEffect(() => {
    rerenderCounterRef.current = rerenderCounterRef.current + 1;
  });
  return (
    <div style={{ margin: 30, border: "1px solid", minHeight: 200 }}>
      <h3>Subchild1</h3>
      <div>
        Rerenders: <b>{rerenderCounterRef.current}</b>
      </div>
    </div>
  );
};

const Child2 = () => {
  const [childrenCounter, setChildrenCounter] = useAtom(childrenCounterAtom);
  const rerenderCounterRef = useRef(0);
  useEffect(() => {
    rerenderCounterRef.current = rerenderCounterRef.current + 1;
  });
  return (
    <div style={{ margin: 30, border: "1px solid", minHeight: 200 }}>
      <h3>Child2</h3>
      <div>
        Counter Value: <b>{childrenCounter}</b>
      </div>

      <div>
        Rerenders: <b>{rerenderCounterRef.current}</b>
      </div>
      <button
        onClick={() => {
          setChildrenCounter(childrenCounter + 1);
        }}>
        Change Shared Children Counter
      </button>
    </div>
  );
};

export default App;

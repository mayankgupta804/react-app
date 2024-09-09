import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // after render, these functions will be called by React
  // in order
  useEffect(() => {
    ref.current?.focus();
  });

  useEffect(() => {
    window.document.title = "My App";
  });

  return (
    <>
      <input ref={ref} type="text" className="form-control" />
    </>
  );
}

export default App;

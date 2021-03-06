import { useEffect, useRef, useCallback } from "react";

export default function Test() {
  const workRef = useRef<Worker>();
  useEffect(() => {
    workRef.current = new Worker('../workers/SocketIoWorker.js');
    workRef.current.onmessage = evt => {
      alert(`WebWorker Response => ${evt}`);
    }
    return () => {
      workRef.current.terminate();
    }
  }, []);

  const handleWork = useCallback(async () => {
    workRef.current.postMessage(100000);
  }, []);

  const WebWorkerTest = useCallback(async () => {
    workRef.current.postMessage(JSON.stringify({id:0, sender:'aabbcc'}));
  }, []);

  return (
    <div>
      <button onClick={handleWork}>worker Test</button>
      <button onClick={WebWorkerTest}>packet test</button>
    </div>
  )
}
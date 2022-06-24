import { useState, useEffect, useRef } from 'react';
import './App.css';
import BinaryTreeCanvas from './components/binary-tree-canvas';
import BinaryTree from './components/binary-tree-canvas/binary-tree';

function App() {


  const [treeStr, setTreeStr] = useState<string>('[]');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleParse = () => {
    if (!inputRef.current?.value || inputRef.current?.value.trim() === '') return;
    setTreeStr(inputRef.current?.value);
  }

  const tree = BinaryTree.generate<string>(JSON.parse(treeStr));
  return (
    <div className="App">
      <div>
        <input ref={inputRef} />
        <button onClick={handleParse}>parse</button>
      </div>
      <div>
        {tree && <BinaryTreeCanvas binaryTree={tree} key={treeStr} />}
      </div>
    </div>
  );
}

export default App;

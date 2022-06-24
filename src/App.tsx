import { useState, useRef, useEffect } from 'react';
import BinaryTreeCanvas from './components/binary-tree-canvas';
import BinaryTree from './components/binary-tree-canvas/binary-tree';
import './App.scss';

function App() {


  const [treeStr, setTreeStr] = useState<string>('');
  const [showType, setShowType] = useState<'canvas' | 'code'>('canvas');

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      setTreeStr('1,2,3,null,4,5');
      textareaRef.current.value = '1,2,3,null,4,5';
    }
  }, []);

  const handleParse = () => {
    if (!textareaRef.current?.value || textareaRef.current?.value.trim() === '') return;
    setTreeStr(textareaRef.current?.value);
  }

  const origin = treeStr.split(',').map(item => item.trim() === 'null' ? null : item.trim());
  const tree = treeStr.trim().length > 0 ? BinaryTree.generate<string>(origin) : null;
  const code = treeStr.trim().length > 0 ? BinaryTree.generate<string>(origin)?.toCPP() : '';

  return (
    <div className="container">
      <div className='lanchpad'>

        <div className='statusBar'>
          <p>当前节点数： {origin.length}</p>
          <ul>
            <li title={tree?.dfs('pre').toString()}>先序遍历序列： {tree?.dfs('pre')}</li>
            <li title={tree?.dfs('in').toString()}>中序遍历序列： {tree?.dfs('in')}</li>
            <li title={tree?.dfs('post').toString()}>后序遍历序列： {tree?.dfs('post')}</li>
          </ul>
          <button className="toggle" onClick={() => setShowType(showType === 'canvas' ? 'code' : 'canvas')}>查看 {{ 'canvas': '图', 'code': '代码' }[showType]}</button>
        </div>

        <div className='submitter'>
          <textarea ref={textareaRef} placeholder='1,2,3' rows={5} />
          <button onClick={handleParse}>提交</button>
        </div>
      </div>
      {showType === "canvas" ? (
        <div className='canvas'>
          {tree
            ? <BinaryTreeCanvas binaryTree={tree} key={treeStr} />
            : (
              <div className='canvasEmpty'>
                <p>在左侧输入层次遍历序列以绘制二叉树</p>
              </div>
            )}
        </div>
      ) : <pre>{code}</pre>}
    </div>
  );
}

export default App;

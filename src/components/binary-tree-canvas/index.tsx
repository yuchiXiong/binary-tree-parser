import { useEffect, useRef } from 'react'
import { BinaryTreeNode, drawBinaryTree, VisualizationType } from 'binary-tree-visualizer';
import BinaryTree from './binary-tree';

interface BinaryTreeCanvasProps {
  binaryTree: BinaryTree<string>;
}

const BinaryTreeCanvas: React.FC<BinaryTreeCanvasProps> = ({
  binaryTree
}) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    draw(binaryTree as BinaryTree<string>);
  }, []);

  const draw: (root: BinaryTree<string>) => void = root => {
    const rootNode = new BinaryTreeNode<string>(root.val);
    canvasRef.current && drawBinaryTree(_draw(root, rootNode), canvasRef.current, {
      maxHeight: 100,
      maxWidth: 100,
      type: VisualizationType.PRETTY
    });
  }

  const _draw: (root: BinaryTree<string>, rootNode: BinaryTreeNode<string>) => BinaryTreeNode<string> = (root, rootNode) => {

    if (root.left) {
      rootNode.setLeft(new BinaryTreeNode(root.left.val));
      _draw(root.left, rootNode.left as BinaryTreeNode<string>);
    }

    if (root.right) {
      root.right && rootNode.setRight(new BinaryTreeNode(root.right.val));
      _draw(root.right, rootNode.right as BinaryTreeNode<string>);
    }

    return rootNode;
  }


  return (
    <canvas ref={canvasRef} />
  )
}

export default BinaryTreeCanvas;
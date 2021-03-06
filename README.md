# 项目说明
`leetcode` 关于二叉树的题目中，给定的 `case` 通常是层次遍历二叉树的序列。

例如：`1, 2, 3, null, null, 4` 实际描述的是如下图所示的二叉树

![image](https://user-images.githubusercontent.com/48373109/175571586-a7220c51-d36f-4b0e-a354-24279ca94dde.png)

`leetcode` 使用这种方式描述二叉树时，看起来给定的是一个同时包含数字与 `null` 的数组，但实际的函数入参依然是标准的 `TreeNode` 实例，在解题过程中有时候需要一些更高效的办法以通过给定的 `case` 进行二叉树的构建与调试。

本工具实现了一个基于层次遍历序列还原二叉树的函数，它提供了一个 **聊胜于无** 的绘制功能，可以 **有限** 的帮助你了解 `case` 所描述的二叉树结构；另外工具还提供了一个根据解析结果自动生成 `CPP` 标准创建代码的功能，使你可以快速的在代码中创建 `case` 所描述的二叉树并进行更细致的调试（效果如下图）。

![image](https://user-images.githubusercontent.com/48373109/175572598-399e9cc2-10e9-4268-a687-7e2c1920fd30.png)

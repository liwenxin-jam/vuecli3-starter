## 本地关联远程仓库

1. 初始化
```
git init // 或者直接vscode的源代码管理器点击+号为当前目录生成一个名为.git的隐藏文件夹
```

2. 关联远程仓库
```
// origin 是远程仓库名，默认是origin，最后一个参数是仓库地址url
// 可以在vs code查看-》面令面板操作，找到git add remote命令，依次输入以下两个参数
git add remote origin https://github.com/liwenxin-jam/vuecli3-starter.git
```

3. 创建本地分支名称
```
git checkout -b test-demo
```

4. 根据本地分支创建远程分支推送
```
// 假设想远程仓库已经有对应的分支，可以先执行以下命令删除
// 1. git push origin :test-demo  2. git push origin --delete test-demo
// 把新建的本地分支push到远程服务器，远程分支与本地分支同名
git push origin test-demo:test-demo
```
---
layout: doc
---

# 为什么选择MercurySQL

MercurySQL（M.SQL）是一个Python数据库ORM框架，提供了一种更Pythonic的方式操作数据库。

你是否……

 - 被复杂无比的SQL语句弄懵？
 - 因没有commit而导致数据丢失？
 - 在终端里调试了几个小时的SQL？

别怕，我们也是。所以MercurySQL诞生了。

## 优点

MercurySQL有以下优点 ....

 - **更Pythonic的操作方式**：更符合Python风格的API，使得操作SQL数据库更加简洁易懂。
 - **避免复杂的SQL语句**：避免编写复杂的SQL语句，从而减少了学习和理解SQL语法的负担。
 - **数据库更安全**：使用安全查询、自动处理事务提交，保护数据库安全，防止数据丢失。
 - **直接使用Python进行调试**：可以在Python代码中直接调试和查看数据库操作，无需在终端中进行SQL调试。
 - **强扩展性**：只需少许实现即可适配不同数据库，无需考虑数据库SQL差异，实现一码多用。
 - **轻量快速**：原生支持Sqlite，内置编写好的 Sqlite 驱动，轻量快速，迅速编写和测试后端。

## 快速上手

### 1. 安装MercurySQL

可以通过PIP安装最新版MercurySQL。

```bash
# PIP安装最新版
pip install MercurySQL
```

### 2. 导入MercurySQL，设置驱动



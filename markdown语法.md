[Markdown语法][1]
[1]:https:://github.com/younghz/Markdown "Markdown"

## 1 标题
一级标题
===
二级标题
--------
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 2 段落

段落前后有空行。  \r段落的前后要有空行，所谓的空行是指没有文字内容。  \n
若想在段内强制换行的方式是使用两个以上空格加上回车（引用中换行省略回车）。  \n

## 3 区块引用
>区块引用
>>嵌套引用
>>
>>>多层嵌套
## 4 代码区块
    每行加上4个空格 or a Tab
    就像这样
## 5 强调
*斜体*，_斜体_
**粗体**，__粗体__
___sdfsdf粗斜体___
***sdfsdf粗斜体***
~~删除线~~
<u>下划线</u>
## 6 列表
使用`*`、`+`、或`-`标记无序列表
- 第一项
- 第二项
- 第三项
* sdfsdf
+ sdfsdf
1. 第一项
2. 第二项
3. 第三项
## 7 分割线
分割线最常使用就是三个或以上`*`，还可以使用`-`和`_`。
***********************
-----------------------
_______________________
## 8 链接
[younghz的Markdown库](https:://github.com/younghz/Markdown "Markdown")是属于younghz的Markdown库。
[younghz的Markdown库1][1]
[younghz的Markdown库2][2]
[1]:https:://github.com/younghz/Markdown "Markdown"
[2]:https:://github.com/younghz/Markdown "Markdown"
archive from <https://mosquitto.org/download/>
Master: [![Travis Build Status (master)](https://travis-ci.org/eclipse/mosquitto.svg?branch=master)](https://travis-ci.org/eclipse/mosquitto)

## 9 图片
形式和链接相似，只需在链接的基础上前方加一个！。
![younghz的Markdown图](https:://github.com/younghz/Markdown "Markdown")是属于younghz的Markdown图。
![图片alt](图片链接 "图片title")
链接图片：
[![沙漠中的岩石图片](/assets/img/shiprock.jpg "Shiprock")](https://markdown.com.cn)
## 其他符号
反斜杠`\`起到反转义作用，如\*
符号\`起到标记作用，如`a`

```data
sdfsdf
代码块
sdfsdf
```
~~~sdf
jkl
代码块
jkl
~~~
内嵌HTML：前后需加空行

<table>
    <tr>
        <td>
            <footer>
                <select>
                    sdf
                </select>
            </footer>
        </td>
    </tr>
</table>

## 其他
未明原因的代码提示：
<noframes>sdf</noframes>
<noscript>sdf</noscript>
<nav>sdf</nav>
制表：
用|表示表格纵向边界，表头和表内容用`-`隔开，并可用`:`进行对齐设置，两边都有`:`则表示居中，若不加`:`则默认左对齐。

|代码库|链接|
-----------------
:MarkDown:|:https://github.com/younghz/Markdown:

|MarkDown|https://github.com/younghz/Markdown|

```
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
```

```
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```
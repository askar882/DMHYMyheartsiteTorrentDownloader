# 动漫花园Myheartsite镜像站种子重命名下载助手
## 功能
从[动漫花园镜像站](https://dongmanhuayuan.myheartsite.com) 下载种子时文件名默认使用服务器提供的种子Hash值，不打开种子无法知道种子对应的资源名称。为了解决这个问题，这个小脚本应运而生。

脚本使用`XMLHttpRequest`下载种子文件并保存到`Blob`对象里，通过调用`URL.createObjectURL`方法生成`Blob`对象的URL并赋值给下载`<a>`标签的`href`属性，将`download`属性设置为资源标题并追加".torrent"后缀，实现对种子文件的重命名。

## 效果图
### 主页
![主页](https://raw.staticdn.net/askar882/DMHYMyheartsiteTorrentDownloader/master/img/myheartsite-home.png)

### 使用脚本前
![使用脚本前](https://raw.staticdn.net/askar882/DMHYMyheartsiteTorrentDownloader/master/img/myheartsite-download-before.png)

### 使用脚本后
![使用脚本后](https://raw.staticdn.net/askar882/DMHYMyheartsiteTorrentDownloader/master/img/myheartsite-download-after.png)

## 开源许可证
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?longCache=true)](https://github.com/askar882/DMHYMyheartsiteDownloader/blob/master/LICENSE)

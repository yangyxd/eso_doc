# eso

## 官网地址

- http://yangyxd.gitee.io/eso
- [文档地址](http://yangyxd.gitee.io/eso/wiki)
- [蓝奏云](https://pc.woozooo.com)
- [小飞机网盘](https://www.feijipan.com/)

## Flutter版本

### 3.7.4

Flutter 3.7.4 • channel stable • https://gitee.com/mirrors/Flutter
SHA-1: b4bce91dd0f168179d46a7ae5eceb3572ba9637a
Framework • revision b4bce91dd0 (3 months ago) • 2023-02-21 09:50:50 +0800
Engine • revision 248290d6d5
Tools • Dart 2.19.2 • DevTools 2.20.1

#### Git强制还原本地文件到特定的版本

https://www.cnblogs.com/yangyxd/p/14134752.html

#### 错误解决：Cannot run with sound null safety

在运行/调试配置中，增加  `--no-sound-null-safety`

```
flutter run --no-sound-null-safety
flutter build apk --no-sound-null-safety
flutter build macos --no-sound-null-safety
flutter build ios --no-sound-null-safety
```

## 打包

### 打包 Android
```shell
flutter build apk
flutter build apk --target-platform android-arm
flutter build apk --target-platform android-arm64
flutter build apk --target-platform android-x64

// 分隔包
flutter build apk --split-per-abi --no-sound-null-safety
flutter build apk --target-platform android-arm64 --split-per-abi
```

#### 打包TV
```shell
flutter build apk --dart-define=APP_MODE=tv --split-per-abi
```

### 打包 ios

```shell
flutter build ios --release
// 再到xcode下进行打包
```

### 启用桌面应用开关

```shell
flutter config --enable-linux-desktop // to enable Linux.
flutter config --enable-macos-desktop // to enable macOS.
flutter config --enable-windows-desktop // to enable Windows.

pod install

flutter build windows -v
flutter build macos
flutter build linux
```

## 调试

### 连接安卓电视调试

```dart
// adb connect 电视机IP地址
adb connect 192.168.1.6
```

### dart_vlc 编译问题

增加 dart-vlc 库，如果因为此库编译失败，可能是解压失败了。
可以到 7z 官方下载一个解压器（因为有一个包是7z格式）
https://www.7-zip.org/

如果还是编译失败，可能是 libvlcpp.zip 有问题，将根目录中的 libvlcpp.zip 复制到
eso\windows\flutter\ephemeral\.plugin_symlinks\dart_vlc\windows\bin 中后尝试

### win 平台编译

使用 build_win64.bat 进行编译，然后使用 make_win_package.bat 进行打包。

#### 环境要求

- Visual Studio 2019 或更高版本
- 建议 Windows 10 或更高版本

#### video_down.dll

此dll用于调用ffmpeg转换m3u8视频为mp4，开源地址 [https://gitee.com/yangyxd/video_downloader](https://gitee.com/yangyxd/video_downloader)。

#### 因为 webview_windows 编译失败

请检查 Visual Studio 版本，最低要求 vs2019 16.8.0 或更新版本。
Version 0.2.2 requires the Windows 11 SDK.
https://visualstudio.microsoft.com/zh-hans/vs/older-downloads/

NuGet 安装依赖：
Microsoft.Windows.ImplementationLibrary  1.0.220914.1
Microsoft.Web.WebView2  1.0.1210.39

参考：
https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/how-to/machine-setup#install-a-preview-channel-of-microsoft-edge

### macos 平台编译

#### flutter 3.3 macOS 支持情况

[macos-1011-和-1012-的支持进入尾声](https://flutter.cn/posts/whats-new-in-flutter-3-3#macos-1011-和-1012-的支持进入尾声)
在即将到来的 2022 第四季度的正式版发行计划中，我们将放弃对 macOS 版本 10.11 和 10.12 的支持。
这意味着在此之后的 Flutter SDK 稳定版将不能在这些版本上运行，Flutter 最低支持的 macOS 版将上升为 10.13 High Sierra。

### android 平台编译

#### 网络原因打包失败



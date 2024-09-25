@echo off
del /q /a /f /s ".\src\.vuepress\dist\*.map"
del /q /a /f /s "..\website\wiki\*.*"
rd /s /q "..\website\wiki\"

XCOPY .\src\.vuepress\dist\* ..\website\wiki\ /s/e/y

pause
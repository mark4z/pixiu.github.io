---
title: 新贡献者向导
keywords: Pixiu
description: 这篇向导旨在给正在准备向 Pixiu 提交贡献的新手提供指导。
---

# 新贡献者向导

这篇向导旨在给正在准备向 Pixiu 提交贡献的新手提供指导。


### 报告问题

您始终可以通过Github [Issues](https://github.com/apache/dubbo-go-pixiu/issues) 向 Pixiu 报告问题。


### 发送 pull request

* 参考[pull request template](https://github.com/seata/seata/blob/develop/.github/PULL_REQUEST_TEMPLATE.md)
* 在您发送pull request之前，请在本地进行相应的 CI 检查，具体操作请看如下所示步骤：

#### import 拆分
社区推荐代码的 import 块按照所属进行拆分，有一个工具可以自动将import拆分 
imports-formatter -path . -module github.com/apache/dubbo-go-pixiu -bl false 

#### 证书检查

社区代码必须有 apache的 license，可以通过下列命令自动判断检查或增加license
https://github.com/apache/skywalking-eyes

#### ci 相关命令
排版检查
go fmt ./... && git status && [[ -z `git status -s` ]]

golint 静态检查
GO111MODULE=on golangci-lint run --timeout=10m -v --disable-all --enable=govet --enable=staticcheck --enable=ineffassign --enable=misspell

#### 单测
go mod vendor && go test ./pkg/... -coverprofile=coverage.txt -covermode=atomic

#### 集成测试

chmod +x start_integrate_test.sh && chmod +x integrate_test.sh && ./start_integrate_test.sh



### 编码规范

代码约定
我们的代码风格几乎和标准 Java 约定一致（流行IDE的默认设置满足这一点），主要有以下附加限制：

如果当前行中有超过 120 个字符，则起一个新的行。

确保所有新的 .java 文件都有一个简单的 JavaDoc 类注释，其中至少有一个标识创建日期的标签，最好至少有一个关于该类的解释说明。

将ASF许可注释添加到所有新的 .java 文件（从项目中的现有文件复制）

请确保没有将 @author 标记添加到您所贡献的文件中，因为 Apache 不使用 @author 标记，其他方式（如cvs）将公平地记录所有您的贡献。

为代码添加一些 JavaDoc，如果您更改命名空间，则需要一些 XSD DOC 元素。

对于新的特征或重要的修复程序，应该添加单元测试。

如果没有其他人使用您的分支，请将它与 master（或主项目中的其他目标分支）同步。

当编写提交消息时，请遵循这些约定，如果您正在修复一个现有问题，请在提交消息的末尾添加 Fixes XXX（其中XXX是问题编号）。


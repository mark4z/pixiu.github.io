---
title: 谈谈Pixiu的Filter
keywords: Pixiu 介绍
description: Filter通常是网关最重要的一部分，那Pixiu的过滤器链是如何运行的呢
author: mark4z
date: 2022-02-19
---

## Filter的生命周期

Pixiu作为一个面向云原生的gateway，通过简单的配置即可代理Http to Dubbo 2、Tripe甚至是Spring Cloud的请求，这些功能皆是通过Filter的机制实现的，那Pixiu的Filter运行机制是怎样的？

首先来看



## 怎样编写一个自定义Filter
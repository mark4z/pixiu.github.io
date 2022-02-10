export default {
    'en-us': {
        sidemenu: [
            {
                title: 'Overview',
                children: [
                    {
                        title: 'What is Pixiu?',
                        link: '/en-us/docs/overview/what-is-pixiu.html',
                    },
                    {
                        title: 'Terminology',
                        link: '/en-us/docs/overview/terminology.html',
                    },
                    {
                        title: 'FAQ',
                        link: '/en-us/docs/overview/faq.html',
                    }
                ],
            },

            {
                title: 'User Doc',
                children: [
                    {
                        title: 'Quick Start',
                        link: '/en-us/docs/user/quickstart.html',
                    },
                    {
                        title: 'API Guide',
                        link: '/en-us/docs/user/api.html',
                    },
                    {
                        title: 'Microservices Framework Supports',
                        link: '/en-us/docs/user/microservice.html',
                    }
                ],
            },
            {
                title: 'Developer Guide',
                children: [
                    {
                        title: 'Transaction Mode',
                        children: [
                            {
                                title: 'Seata AT mode',
                                link: '/en-us/docs/dev/mode/at-mode.html',
                            },
                            {
                                title: 'Seata TCC mode',
                                link: '/en-us/docs/dev/mode/tcc-mode.html',
                            },
                            {
                                title: 'Seata Saga mode',
                                link: '/en-us/docs/dev/mode/saga-mode.html',
                            }
                        ],
                    },
                    {
                        title: 'Metrics design',
                        link: '/en-us/docs/dev/seata-mertics.html',
                    },
                ],
            },
            {
                title: 'Ops Guide',
                children: [
                    {
                        title: 'Configuration Isolation',
                        link: '/en-us/docs/ops/multi-configuration-isolation.html',
                    },
                    {
                        title: 'Deploy',
                        children: [
                            {
                                title: 'Deploy Directly',
                                link: '/en-us/docs/ops/deploy-server.html',
                            },
                            {
                                title: 'Deploy by Docker',
                                link: '/en-us/docs/ops/deploy-by-docker.html',
                            },
                            {
                                title: 'Deploy by Kubernetes',
                                link: '/en-us/docs/ops/deploy-by-kubernetes.html',
                            },
                            {
                                title: 'Deploy by Helm',
                                link: '/en-us/docs/ops/deploy-by-helm.html',
                            },
                            {
                                title: 'Deploy in High Available Usage',
                                link: '/en-us/docs/ops/deploy-ha.html',
                            },
                        ]
                    }
                ]
            },
        ],
        barText: 'Documentation'
    },
    'zh-cn': {
        sidemenu: [
            {
                title: '概述',
                children: [
                    {
                        title: 'Pixiu 是什么？',
                        link: '/zh-cn/docs/overview/what-is-pixiu.html',
                    },
                    {
                        title: '术语表',
                        link: '/zh-cn/docs/overview/terminology.html',
                    },
                    {
                        title: 'FAQ',
                        link: '/zh-cn/docs/overview/faq.html',
                    }
                ],
            },
            {
                title: '用户文档',
                children: [
                    {
                        title: '快速启动',
                        link: '/zh-cn/docs/user/quickstart.html',
                    },
                    {
                        title: '启动参数和配置简介',
                        link: '/zh-cn/docs/user/configurations.html',
                    },
                    {
                        title: 'Listener 介绍',
                        children: [
                            {
                                title: 'HTTP Listener 介绍',
                                link: '/zh-cn/docs/user/listener/http.html',
                            },
                            {
                                title: 'HTTP2 Listener 介绍',
                                link: '/zh-cn/docs/user/listener/http2.html',
                            },
                            {
                                title: 'TCP Listener 介绍',
                                link: '/zh-cn/docs/user/listener/tcp.html',
                            },
                            {
                                title: 'Triple Listener 介绍',
                                link: '/zh-cn/docs/user/listener/triple.html',
                            }
                        ]
                    },
                    {
                        title: 'NetworkFilter 介绍',
                        children: [
                            {
                                title: 'HttpConnectionManager 介绍',
                                link: '/zh-cn/docs/user/networkfilter/http.md',
                            },
                            {
                                title: 'GrpcConnectionManager 介绍',
                                link: '/zh-cn/docs/user/networkfilter/grpc.md',
                            },
                            {
                                title: 'DubboConnectionManager 介绍',
                                link: '/zh-cn/docs/user/networkfilter/dubbo.md',
                            }
                        ]
                    },
                    {
                        title: 'HttpFilter 介绍',
                        children: [
                            {
                                title: '事务分组介绍',
                                link: '/zh-cn/docs/user/txgroup/transaction-group.html',
                            },
                            {
                                title: '事务分组与高可用',
                                link: '/zh-cn/docs/user/txgroup/transaction-group-and-ha.html',
                            }
                        ]
                    },
                    {
                        title: 'Adapter 介绍',
                        children: [
                            {
                                title: '事务分组介绍',
                                link: '/zh-cn/docs/user/txgroup/transaction-group.html',
                            },
                            {
                                title: '事务分组与高可用',
                                link: '/zh-cn/docs/user/txgroup/transaction-group-and-ha.html',
                            }
                        ]
                    },
                    {
                        title: '案例介绍',
                        children: [
                            {
                                title: '事务分组介绍',
                                link: '/zh-cn/docs/user/txgroup/transaction-group.html',
                            },
                            {
                                title: '事务分组与高可用',
                                link: '/zh-cn/docs/user/txgroup/transaction-group-and-ha.html',
                            }
                        ]
                    },
                    {
                        title: '附录',
                        children: [
                            {
                                title: 'HTTP to Dubbo 默认转换协议',
                                link: '/zh-cn/docs/user/appendix/http-to-dubbo-default-stragety.html',
                            }
                        ]
                    }]
            },
            {
                title: '开发者指南',
                children: [
                    {
                        title: '各事务模式',
                        children: [
                            {
                                title: 'Seata AT 模式',
                                link: '/zh-cn/docs/dev/mode/at-mode.html',
                            },
                            {
                                title: 'Seata TCC 模式',
                                link: '/zh-cn/docs/dev/mode/tcc-mode.html',
                            },
                            {
                                title: 'Seata Saga 模式',
                                link: '/zh-cn/docs/user/saga.html',// zh-cn/docs/dev/mode/saga-mode.html
                            },
                            {
                                title: 'Seata XA 模式',
                                link: '/zh-cn/docs/dev/mode/xa-mode.html',
                            }
                        ],
                    },
                    {
                        title: 'Metrics设计',
                        link: '/zh-cn/docs/dev/seata-mertics.html',
                    },
                ],
            },
            {
                title: '运维指南',
                children: [
                    {
                        title: '版本升级指南',
                        link: '/zh-cn/docs/ops/upgrade.html',
                    },
                    {
                        title: '部署',
                        children: [
                            {
                                title: '新人文档',
                                link: '/zh-cn/docs/ops/deploy-guide-beginner.html',
                            },
                            {
                                title: '直接部署',
                                link: '/zh-cn/docs/ops/deploy-server.html',
                            },
                            {
                                title: 'Docker部署',
                                link: '/zh-cn/docs/ops/deploy-by-docker.html',
                            },
                            {
                                title: 'Docker compose部署',
                                link: '/zh-cn/docs/ops/deploy-by-docker-compose.html',
                            },
                            {
                                title: 'Kubernetes部署',
                                link: '/zh-cn/docs/ops/deploy-by-kubernetes.html',
                            },
                            {
                                title: 'Helm 部署',
                                link: '/zh-cn/docs/ops/deploy-by-helm.html',
                            },
                            {
                                title: '高可用部署',
                                link: '/zh-cn/docs/ops/deploy-ha.html',
                            },
                        ]
                    }
                ]

            },
        ],
        barText: '文档',
    },
};

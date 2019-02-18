module.exports = {
    title: 'Aloe UI',
    description: '做一个简单的UI框架',
    themeConfig: {
        //displayAllHeaders: true,
        sidebar: [
            {
                title: '快速入门',
                sidebarDepth:2,    // 路径深度, 默认值是 1
                collapsable: true, // 可折叠, 默认值是 true,
                children: ['/install/','/get-started/']
            },
            {
                title: '组件',   // 必要的
                path: '/foo/',       // 可选的, 应该是一个绝对路径
                collapsable: true, // 可折叠, 默认值是 true,
                sidebarDepth:1,    // 路径深度, 默认值是 1
                children: [
                    '/components/button'
                ]
            }
        ]
    }
};

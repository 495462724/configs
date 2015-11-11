Ext.ns("ext.sgx.general")

ext.sgx.general.leftNavPanel = function (cfg) {
    Ext.apply(this,cfg);
    var gridroot = new Ext.tree.AsyncTreeNode({
        expanded: true,
        children: [{
            text: '首页',
            leaf: true,
            id:'test-grid'
        }, {
            text: '上传案例',
            leaf: true,
            id:'second'
        }, {
            text: '可编辑表格',
            leaf: true,
            id:'editgrid'
        },{
            text: '表格',
            leaf: true,
            id:'mygrid'
        }, {
            text: '表单案例设计',
            leaf: true,
            id:'queryForm'
        }, {
            text: '通用搜索表单',
            leaf: true,
            id:'commonQueryForm'
        },{
            text: '软件使用关系',
            leaf: true,
            id:'softwareUsage'
        },{
            text: '树形表格',
            leaf: true,
            id:'treeGrid'
        }]
    });
    var item1 = new ext.sgx.general.leftNavigation({
        collapsible: true,
        title: '常用控件',
        width: 200,
        root:gridroot,
        listeners: {
            click: function(n) {
                Ext.getCmp('home-centent-panel').layout.setActiveItem(n.id + '-panel');
            }
        }
    })

    var item2 = new Ext.Panel({
        title: '系统管理',
        html: '&lt;empty panel&gt;',
        cls:'empty'
    });

    var item3 = new Ext.Panel({
        title: '权限控制',
        html: '&lt;empty panel&gt;',
        cls:'empty'
    });

    var item4 = new Ext.Panel({
        title: '系统配置',
        html: '&lt;empty panel&gt;',
        cls:'empty'
    });

    ext.sgx.general.leftNavPanel.superclass.constructor.call(this, {
        split:true,
        width: 210,
        layout:'accordion',
        items: [item1, item2, item3, item4]
    });
};
Ext.extend(ext.sgx.general.leftNavPanel, Ext.Panel, {

});
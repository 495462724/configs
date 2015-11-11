Ext.ns("ext.sgx.work")

ext.sgx.work.softwareUsagePanel = function (cfg) {
    Ext.apply(this,cfg);

    ext.sgx.work.softwareUsagePanel.superclass.constructor.call(this, {
        title:'软件使用关系',
        border : false,
        layout : 'border',
        frame:false,
        items:[
            new ext.sgx.general.commonQueryForm({region: 'north',columnWidth:1,height:140}),
            new ext.sgx.work.searchResult({region: 'center',columnWidth:1})
        ]
    });
};
Ext.extend(ext.sgx.work.softwareUsagePanel,Ext.Panel, {});
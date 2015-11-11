Ext.ns("ext.sgx.general")

ext.sgx.general.treeGrid = function (cfg) {
    Ext.apply(this,cfg);

    ext.sgx.general.treeGrid.superclass.constructor.call(this, {
        title:'树形表格',
        width: 500,
        height: 300,
        enableDD: true,
        autoShow:true,
        columns:[{
            header: 'Task',
            dataIndex: 'task',
            width: 230
        },{
            header: 'Duration',
            width: 100,
            dataIndex: 'duration',
            align: 'center',
            sortType: 'asFloat'
        },{
            header: 'Assigned To',
            width: 150,
            dataIndex: 'user'
        }],
        dataUrl: 'data/treegrid-data.json'
    });
};
Ext.extend(ext.sgx.general.treeGrid,Ext.ux.tree.TreeGrid, {

});
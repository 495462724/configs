Ext.ns("ext.sgx.general")

ext.sgx.general.myGrid = function (cfg) {
    Ext.apply(this,cfg);
    var reader = new Ext.data.ArrayReader({},[
        {name:'company'},
        {name:'price',type:'float'},
        {name:'change',type:'float'},
        {name:'pctChange',type:'float'}
    ]);
    var data = [
        ['h1',83.81,0.28,0.34],
        ['h2',52.55,0.01,0.02],
        ['h1',83.81,0.28,0.34],
        ['h2',52.55,0.01,0.02],
        ['h1',83.81,0.28,0.34],
        ['h2',52.55,0.01,0.02],
        ['h1',83.81,0.28,0.34],
        ['h2',52.55,0.01,0.02],
        ['h1',83.81,0.28,0.34],
        ['h2',52.55,0.01,0.02],
        ['h1',83.81,0.28,0.34],
        ['h2',52.55,0.01,0.02],
        ['h1',83.81,0.28,0.34],
        ['h2',52.55,0.01,0.02],
        ['h1',83.81,0.28,0.34],
        ['h2',52.55,0.01,0.02],
        ['h1',83.81,0.28,0.34],
        ['h2',52.55,0.01,0.02],
        ['h1',83.81,0.28,0.34],
        ['h2',52.55,0.01,0.02]
    ];
    var ds = new Ext.data.Store({
        reader:reader
    });

    //var sm = new Ext.grid.RowSelectionModel({singleSelect:true});
    var sm = new Ext.grid.CheckboxSelectionModel({singleSelect : false});
    var cm = new Ext.grid.ColumnModel([
        sm,
        {header:'company',width:40,dataIndex:'company',sortable:true},
        {header:'price',width:40,dataIndex:'price',sortable:true},
        {header:'change',width:40,dataIndex:'change'},
        {header:'pctChange',width:40,dataIndex:'pctChange'},
    ]);


    var view = new Ext.grid.GridView({forceFit:true});

    ds.loadData(data);

    var pagingBar = new Ext.PagingToolbar({
        pageSize:15,
        store:ds,
        displayMsg:'共有{2}，显示 {0}-{1} '
    });

    ext.sgx.general.myGrid.superclass.constructor.call(this, {
        ds:ds,
        cm:cm,
        sm:sm,
        view:view,
        bbar:pagingBar,
        title:'表格测试'
    });
};
Ext.extend(ext.sgx.general.myGrid, Ext.grid.GridPanel, {});
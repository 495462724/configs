Ext.ns("ext.sgx.work")

ext.sgx.work.searchResult = function (cfg) {
    Ext.apply(this,cfg);


    var myData = [
        ['','3m Co',71.72,0.02,0.03,'9/1 12:00am'],
        ['','Alcoa Inc',29.01,0.42,1.47,'9/1 12:00am'],
        ['','Altria Group Inc',83.81,0.28,0.34,'9/1 12:00am'],
        ['','American Express Company',52.55,0.01,0.02,'9/1 12:00am'],
        ['','American International Group, Inc.',64.13,0.31,0.49,'9/1 12:00am'],
        ['','AT&T Inc.',31.61,-0.48,-1.54,'9/1 12:00am'],
        ['','Boeing Co.',75.43,0.53,0.71,'9/1 12:00am'],
        ['','Caterpillar Inc.',67.27,0.92,1.39,'9/1 12:00am'],
        ['','Citigroup, Inc.',49.37,0.02,0.04,'9/1 12:00am'],
        ['','E.I. du Pont de Nemours and Company',40.48,0.51,1.28,'9/1 12:00am'],
        ['','Exxon Mobil Corp',68.1,-0.43,-0.64,'9/1 12:00am'],
        ['','General Electric Company',34.14,-0.08,-0.23,'9/1 12:00am'],
        ['','General Motors Corporation',30.27,1.09,3.74,'9/1 12:00am'],
        ['','Hewlett-Packard Co.',36.53,-0.03,-0.08,'9/1 12:00am'],
        ['','Honeywell Intl Inc',38.77,0.05,0.13,'9/1 12:00am'],
        ['','Intel Corporation',19.88,0.31,1.58,'9/1 12:00am'],
        ['','International Business Machines',81.41,0.44,0.54,'9/1 12:00am'],
        ['','Johnson & Johnson',64.72,0.06,0.09,'9/1 12:00am'],
        ['','JP Morgan & Chase & Co',45.73,0.07,0.15,'9/1 12:00am'],
        ['','McDonald\'s Corporation',36.76,0.86,2.40,'9/1 12:00am'],
        ['','Merck & Co., Inc.',40.96,0.41,1.01,'9/1 12:00am'],
        ['','Microsoft Corporation',25.84,0.14,0.54,'9/1 12:00am'],
        ['','Pfizer Inc',27.96,0.4,1.45,'9/1 12:00am'],
        ['','The Coca-Cola Company',45.07,0.26,0.58,'9/1 12:00am'],
        ['','The Home Depot, Inc.',34.64,0.35,1.02,'9/1 12:00am'],
        ['','The Procter & Gamble Company',61.91,0.01,0.02,'9/1 12:00am'],
        ['','United Technologies Corporation',63.26,0.55,0.88,'9/1 12:00am'],
        ['','Verizon Communications',35.57,0.39,1.11,'9/1 12:00am'],
        ['','Wal-Mart Stores, Inc.',45.45,0.73,1.63,'9/1 12:00am']
    ];

    function change(val){
        if(val > 0){
            return '<span style="color:green;">' + val + '</span>';
        }else if(val < 0){
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    }

    function pctChange(val){
        if(val > 0){
            return '<span style="color:green;">' + val + '%</span>';
        }else if(val < 0){
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    }

    // create the data store
    //var store = new Ext.data.ArrayStore({
    //    fields: [
    //        {name: 'company'},
    //        {name: 'price', type: 'float'},
    //        {name: 'change', type: 'float'},
    //        {name: 'pctChange', type: 'float'},
    //        {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
    //    ]
    //});

    var sm = new Ext.grid.CheckboxSelectionModel();

    var filters = new Ext.ux.grid.GridFilters({
        // encode and local configuration options defined previously for easier reuse
        encode: false, // json encode the filter query
        local: true,   // defaults to false (remote filtering)
        filters: [ {
            type: 'string',
            dataIndex: 'company'
        }, {
            type: 'string',
            dataIndex: 'price'
        }]
    });

    var model = [
        new Ext.grid.RowNumberer(),
        sm,
        {id:'company',header: 'Company', width: 160, sortable: true, dataIndex: 'company'},
        {header: 'Price', width: 75, sortable: true, renderer: 'usMoney', dataIndex: 'price'},
        {header: 'Change', width: 75, sortable: true, renderer: change, dataIndex: 'change'},
        {header: '% Change', width: 75, sortable: true, renderer: pctChange, dataIndex: 'pctChange'},
        {header: 'Last Updated', width: 85, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
    ]

    var fields = [];
    for(var i = 0;i<model.length;i++) {
        var dataIndex = model[i].dataIndex;
        var field = {name:dataIndex};
        fields.push(field);
    }

    var store = new Ext.data.ArrayStore({fields:fields});

    // manually load local data
    store.loadData(myData);

    var colModel = new Ext.grid.ColumnModel(model);

    ext.sgx.work.searchResult.superclass.constructor.call(this, {
        title:'软件使用关系',
        border : false,
        store: store,
        stripeRows: true,
        cm:colModel,
        sm:sm,
        plugins: [filters],
        autoExpandColumn: 'company',
        height: 350,
        width: 600,
        tbar :[{
            text : '<font color="red">新增</font>',
            scope : this,
            handler:this.viewUsages
        },new Ext.ux.form.SearchField({fieldLabel:'搜索',onTrigger2Click:function(){
            var st = this.ownerCt.ownerCt.store;
            st.filter('company',this.getRawValue(),false)
        }})],
        title: 'Array Grid',
        // config options for stateful behavior
        stateful: true,
        stateId: 'grid',
        bbar: new Ext.PagingToolbar({
            pageSize: 25,
            store: store,
            displayInfo: true,
            displayMsg: 'Displaying topics {0} - {1} of {2}',
            emptyMsg: "No topics to display",
            plugins: [filters],
            items:[
                '-', {
                    pressed: true,
                    enableToggle:true,
                    text: 'Show Preview',
                    cls: 'x-btn-text-icon details',
                    toggleHandler: function(btn, pressed){
                        var view = grid.getView();
                        view.showPreview = pressed;
                        view.refresh();
                    }
                }]
        })
    });
};
Ext.extend(ext.sgx.work.searchResult,Ext.grid.GridPanel, {
    viewUsages:function(_this,e){
        var gcm = this.getSelectionModel();
        var rows = gcm.getSelections();
    }
});
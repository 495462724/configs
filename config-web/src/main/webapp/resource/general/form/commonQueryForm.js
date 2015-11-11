Ext.ns("ext.sgx.general")

ext.sgx.general.commonQueryForm = function (cfg) {
    Ext.apply(this,cfg);

    var searchForm=new Ext.ux.form.SearchField({fieldLabel:'搜索'});

    var searchType = {
        xtype: 'radiogroup',
        fieldLabel: '搜索方式',
        defaults:{

        },
        items: [
            {boxLabel: '搜索', name: 'searchType', inputValue: 'defaultSearch', checked: true},
            {boxLabel: '高级搜索', name: 'searchType', inputValue: 'advanceSearch'}
        ],
        listeners:{
            change:function(_this,checked){
                var parent = _this.ownerCt;
                if(parent.items.get(1)) {
                    parent.items.get(1).destroy();
                }
                if(checked.inputValue =='defaultSearch') {
                    searchForm = new Ext.ux.form.SearchField({fieldLabel:'搜索'});
                }else{
                    searchForm = new Ext.form.FieldSet({
                        defaultType : 'textfield',
                        labelAlign : 'right',
                        layout:'form',
                        border:false,
                        labelWidth : 120,
                        items: [
                            {name:'P_version',fieldLabel:'版本号'},
                            {name:'Version',fieldLabel:'版本'},
                            {name:'name',fieldLabel:'名称'},
                            {xtype:'button',text:'搜索',width:40, style: {
                                float: 'right'
                            }}
                        ]
                    });
                }
                parent.add(searchForm);
                parent.doLayout();
            }
        }
    }


    ext.sgx.general.commonQueryForm.superclass.constructor.call(this, {
        title:'查询表单',
        border : false,
        layout : 'form',
        defaultType : 'textfield',
        labelAlign : 'right',
        labelWidth : 120,
        frame : false,
        items:[
            searchType,searchForm
        ]
    });
};
Ext.extend(ext.sgx.general.commonQueryForm,Ext.form.FormPanel, {});
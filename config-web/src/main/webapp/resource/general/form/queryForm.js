Ext.ns("ext.sgx.general")

ext.sgx.general.queryForm = function (cfg) {
    Ext.apply(this,cfg);

    ext.sgx.general.queryForm.superclass.constructor.call(this, {
        title:'表单设计案例',
        border : false,
        layout : 'form',
        fileUpload : true,
        defaultType : 'textfield',
        labelAlign : 'right',
        labelWidth : 120,
        frame : false,
        items:[
            new ext.sgx.general.linkCombox({}),
            new Ext.ux.form.SearchField({fieldLabel:'搜索'})
        ]
    });
};
Ext.extend(ext.sgx.general.queryForm,Ext.form.FormPanel, {});
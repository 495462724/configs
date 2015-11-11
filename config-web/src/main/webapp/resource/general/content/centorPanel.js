Ext.ns("ext.sgx.general")

ext.sgx.general.centorPanel = function (cfg) {
    Ext.apply(this,cfg);
    ext.sgx.general.centorPanel.superclass.constructor.call(this, {
        layout:'card',
        activeItem:0
    });
};
Ext.extend(ext.sgx.general.centorPanel, Ext.Panel, {});
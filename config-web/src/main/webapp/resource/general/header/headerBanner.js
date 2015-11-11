Ext.ns("ext.sgx.general")

ext.sgx.general.headerBanner = function (cfg) {
    Ext.apply(this,cfg);

    ext.sgx.general.headerBanner.superclass.constructor.call(this, {
        baseCls:'head-panel'
    });
};
Ext.extend(ext.sgx.general.headerBanner, Ext.Panel, {});
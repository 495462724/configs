Ext.ns("ext.sgx.general")

ext.sgx.general.leftNavigation = function (cfg) {
    Ext.apply(this,cfg);
    this.loader = new Ext.tree.TreeLoader();
    ext.sgx.general.leftNavigation.superclass.constructor.call(this, {
        rootVisible: false,
        autoScroll: true,
        autoShow:true
    });
};
Ext.extend(ext.sgx.general.leftNavigation, Ext.tree.TreePanel, {

});
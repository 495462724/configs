Ext.ns("ext.sgx.general")

ext.sgx.general.linkCombox = function (cfg) {
    Ext.apply(this,cfg);
    var comboxData = [
        [
            "3306",
            "江西师大",
            [["数学系", 33061265], ["外语系", 33061234],
                ["计算机系", 33061235], ["中文系", 33061237],
                ["法律系", 33061232]]],
        [
            "3307",
            "江西财大",
            [["生命科学系", 33071225], ["中外交流系", 33071434],
                ["舞蹈系", 33071264], ["药学系", 33071634],
                ["法律系", 33071134]]],
        [
            "3308",
            "南昌大学",
            [["食品化学", 33081295], ["日语系", 33081284],
                ["法语系", 33081264], ["中文系", 33081224],
                ["法律系", 33081274]]]];
    var store1 = this.storeTest = new Ext.data.SimpleStore({
        fields:["no","name"],
        data:comboxData
    });
    var store2 = new Ext.data.SimpleStore({
        fields:["no","name"]
    });
    var school = {
        xtype : 'combo',
        store : store1,
        mode : 'local',
        fieldLabel : '毕业大学',
        displayField : 'name',
        valueField : 'no',
        typeAhead : true,
        triggerAction : 'all',
        emptyText : '请选择...',
        listeners : {
            'select' : function(c, r, i) {
                store2.loadData(r.json[2]);
            }
        }
    };
    var depart = {
        xtype : 'combo',
        store : store2,
        mode : 'local',
        fieldLabel : '院系',
        displayField : 'name',
        valueField : 'no',
        typeAhead : true,
        triggerAction : 'all',
        emptyText : '请选择...'
    };
    ext.sgx.general.linkCombox.superclass.constructor.call(this, {
        fieldLabel:'请选择学校，垃圾',
        labelWidth: 120,
        defaults:{
            width:200
        },
        items:[ school,depart ]
    });
};
Ext.extend(ext.sgx.general.linkCombox, Ext.form.CompositeField, {});
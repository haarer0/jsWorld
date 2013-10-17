var BaseClass = new Class({
	constructor: function(params) {
		this.someParam = params;
	},

	testProp : 'MyTestClass1 test prop',
	getTestProp : function() { return this.testProp;}
});

var SubBaseClass1 = new Class({
	extend: [BaseClass],

	sbc1: 'SubBaseClass1'
});

var SubBaseClass2 = new Class({
	extend: [BaseClass],

	sbc2: 'SubBaseClass2'
});


var MultipleInheritanceClass = new Class({
	extend: [SubBaseClass1, SubBaseClass2]
});

var hBaseClass = new BaseClass("BaseClass");
var hSubBaseClass1 = new SubBaseClass1("SubBaseClass1");
var hSubBaseClass2 = new SubBaseClass2("SubBaseClass2");
var hMultipleInheritanceClass = new MultipleInheritanceClass("MultipleInheritanceClass");

console.log(hBaseClass);
console.log(hSubBaseClass1);
console.log(hSubBaseClass2);
console.log(hMultipleInheritanceClass);
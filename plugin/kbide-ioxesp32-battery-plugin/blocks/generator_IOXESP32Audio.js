Blockly.JavaScript['battery_setup'] = function(block) {
	var code = '';
	code += '#EXTINC#include <IOXESP32Battery.h>#END\n';
	code += '#SETUP Battery.begin();\n #END'
	return code;
};

Blockly.JavaScript['battery_volt'] = function(block) {
	var code = 'Battery.volt()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['battery_level'] = function(block) {
	var code = 'Battery.level()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
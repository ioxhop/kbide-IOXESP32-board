Blockly.JavaScript['digit_begin'] = function(block) {
	var code = '';
	code += '#EXTINC#include <IOXESP32_4Digit.h>#END\n';
	code += '#SETUP Display.begin();\n #END'
	return code;
};

Blockly.JavaScript['digit_show_number'] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	var value_decimal = Blockly.JavaScript.valueToCode(block, 'decimal', Blockly.JavaScript.ORDER_ATOMIC);

	var code = `Display.print((double)(${value_value}), ${value_decimal});\n`;
	return code;
};

Blockly.JavaScript['digit_show_celcius'] = function(block) {
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	var value_decimal = Blockly.JavaScript.valueToCode(block, 'decimal', Blockly.JavaScript.ORDER_ATOMIC);

	var code = `Display.showCelcius(${value_value}, ${value_decimal});\n`;
	return code;
};

Blockly.JavaScript['digit_show_time'] = function(block) {
	var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
	var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
	var dropdown_colon = block.getFieldValue('colon');

	var code = `Display.showTime(${value_a}, ${value_b}, ${dropdown_colon});\n`;
	return code;
};

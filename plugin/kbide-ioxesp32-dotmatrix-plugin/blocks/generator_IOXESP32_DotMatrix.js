Blockly.JavaScript['dot_matrix_begin'] = function(block) {
	var code = '';
	code += '#EXTINC#include <IOXESP32DotMatrix.h>#END\n';
	code += '#SETUP Display.begin();\n #END'
	return code;
};

Blockly.JavaScript['dot_matrix_raw'] = function (block) {
	var buf = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
	for (var x = 0; x < 16; x++) {
		var byte = 0;
		for (var y = 0; y < 8; y++) {
			var val = block.getFieldValue('POS_X' + x + '_Y' + y);
			if (val == 'TRUE') {
				byte |= (0x01 << y);
			};
		}
		buf[x] = byte;
	}

	var str = '';
	for (var i = 0; i < 16; i++) {
		str += '\\x' + buf[i].toString(16);
	}

	return 'Display.raw((uint8_t *)"' + str + '");\n';
};

Blockly.JavaScript['dot_matrix_clear'] = function (block) {
	var code = 'Display.clear();\n';
	return code;
};

Blockly.JavaScript['dot_matrix_show'] = function (block) {
	var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
	var code = 'Display.show(String(' + argument0 + '));\n';
	return code;
};

Blockly.JavaScript['dot_matrix_scroll'] = function (block) {
	var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
	var code = 'Display.scroll(String(' + argument0 + '));\n';
	return code;
};

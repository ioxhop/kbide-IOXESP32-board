Blockly.JavaScript['audio_setup'] = function(block) {
	var code = '';
	code += '#EXTINC#include <IOXESP32Audio.h>#END\n';
	code += '#SETUP Audio.begin();\n #END'
	return code;
};

Blockly.JavaScript['audio_playfile'] = function(block) {
	var value_file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC);
	var code = `Audio.play(String("SD:") + ${value_file});\n`;
	return code;
};

Blockly.JavaScript['audio_playurl'] = function(block) {
	var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
	var code = `Audio.play(${value_url});\n`;
	return code;
};

Blockly.JavaScript['audio_tts'] = function(block) {
	var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
	var dropdown_lang = block.getFieldValue('lang');
	var code = `Audio.play(${value_text}, "${dropdown_lang}");\n`;
	return code;
};

Blockly.JavaScript['audio_stop'] = function(block) {
	var code = 'Audio.stop();\n';
	return code;
};

Blockly.JavaScript['audio_pause'] = function(block) {
	var code = 'Audio.pause();\n';
	return code;
};

Blockly.JavaScript['audio_play'] = function(block) {
	var code = 'Audio.play();\n';
	return code;
};

Blockly.JavaScript['audio_isplaying'] = function(block) {
	var code = 'Audio.isPlaying()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['audio_set_volume'] = function(block) {
	var value_level = Blockly.JavaScript.valueToCode(block, 'level', Blockly.JavaScript.ORDER_ATOMIC);
	var code = `Audio.setVolume(${value_level});\n`;
	return code;
};

Blockly.JavaScript['audio_get_volume'] = function(block) {
	var code = 'Audio.getVolume()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

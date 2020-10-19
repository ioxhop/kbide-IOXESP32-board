Blockly.Blocks["dot_matrix_begin"] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Display: begin");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("https://docs.ioxesp32.com/");
	}
};

Blockly.Blocks["dot_matrix_raw"] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Display show")
			.appendField("                                ")
			.appendField(new Blockly.FieldImage("/static/block_icons/shift_left_24px.svg", 24, 24, "*", function (e) {
				for (var y = 0; y < 8; y++) {
					for (var x = 0; x < 16; x++) {
						if (x != 15) {
							var val = e.sourceBlock_.getFieldValue('POS_X' + (x + 1) + '_Y' + y);
							e.sourceBlock_.setFieldValue(val, 'POS_X' + x + '_Y' + y);
						} else {
							e.sourceBlock_.setFieldValue('false', 'POS_X' + x + '_Y' + y);
						}
					}
				}
			}, true))
			.appendField(new Blockly.FieldImage("/static/block_icons/shift_right_24px.svg", 24, 24, "*", function (e) {
				for (var y = 0; y < 8; y++) {
					for (var x = 15; x >= 0; x--) {
						if (x != 0) {
							var val = e.sourceBlock_.getFieldValue('POS_X' + (x - 1) + '_Y' + y);
							e.sourceBlock_.setFieldValue(val, 'POS_X' + x + '_Y' + y);
						} else {
							e.sourceBlock_.setFieldValue('false', 'POS_X' + x + '_Y' + y);
						}
					}
				}
			}, true))
			.appendField(new Blockly.FieldImage("/static/block_icons/shift_up_24px.svg", 24, 24, "*", function (e) {
				for (var y = 7; y >= 0; y--) {
					for (var x = 0; x < 16; x++) {
						if (y != 0) {
							var val = e.sourceBlock_.getFieldValue('POS_X' + x + '_Y' + (y - 1));
							e.sourceBlock_.setFieldValue(val, 'POS_X' + x + '_Y' + y);
						} else {
							e.sourceBlock_.setFieldValue('false', 'POS_X' + x + '_Y' + y);
						}
					}
				}
			}, true))
			.appendField(new Blockly.FieldImage("/static/block_icons/shift_down_24px.svg", 24, 24, "*", function (e) {
				for (var y = 0; y < 8; y++) {
					for (var x = 0; x < 16; x++) {
						if (y != 7) {
							var val = e.sourceBlock_.getFieldValue('POS_X' + x + '_Y' + (y + 1));
							e.sourceBlock_.setFieldValue(val, 'POS_X' + x + '_Y' + y);
						} else {
							e.sourceBlock_.setFieldValue('false', 'POS_X' + x + '_Y' + y);
						}
					}
				}
			}, true));

		for (var y = 7; y >= 0; y--) {
			var line = this.appendDummyInput();
			for (var x = 0; x < 16; x++) {
				line.appendField(new Blockly.FieldCheckbox('false', null, true), 'POS_X' + x + '_Y' + y);
			}
		}
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("https://docs.ioxesp32.com/");
	}
};

Blockly.Blocks["dot_matrix_clear"] = {
	init: function () {
		this.appendDummyInput()
			.appendField("Display: clear");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("https://docs.ioxesp32.com/");
	}
};

Blockly.Blocks["dot_matrix_show"] = {
	init: function () {
		this.appendValueInput('VALUE')
			.appendField("Display: show 2-char");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("https://docs.ioxesp32.com/");
	}
};

Blockly.Blocks["dot_matrix_scroll"] = {
	init: function () {
		this.appendValueInput('VALUE')
			.appendField("Display: scroll");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("https://docs.ioxesp32.com/");
	}
};

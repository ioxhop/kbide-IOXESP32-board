Blockly.Blocks['battery_setup'] = {
	init: function() {
		this.jsonInit({
			"type": "battery_setup",
			"message0": "Battery: begin",
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['battery_volt'] = {
	init: function() {
		this.jsonInit({
			"type": "battery_volt",
			"message0": "Battery: read voltage (V)",
			"output": "Number",
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['battery_level'] = {
	init: function() {
		this.jsonInit({
			"type": "battery_level",
			"message0": "Battery: read level (%%)",
			"output": "Number",
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

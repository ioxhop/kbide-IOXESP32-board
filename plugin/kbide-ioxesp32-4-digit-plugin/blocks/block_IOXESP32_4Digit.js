Blockly.Blocks['digit_begin'] = {
	init: function() {
		this.jsonInit({
			"type": "digit_begin",
			"message0": "Display: begin",
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['digit_show_number'] = {
	init: function() {
		this.jsonInit({
			"type": "digit_show_number",
			"message0": "Display: show number %1 decimal %2",
			"args0": [
			  {
				"type": "input_value",
				"name": "value",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "decimal",
				"check": "Number"
			  }
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['digit_show_celcius'] = {
	init: function() {
		this.jsonInit({
			"type": "digit_show_celcius",
			"message0": "Display: show celcius %1 decimal %2",
			"args0": [
			  {
				"type": "input_value",
				"name": "value",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "decimal",
				"check": "Number"
			  }
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['digit_show_time'] = {
	init: function() {
		this.jsonInit({
			"type": "digit_show_time",
			"message0": "Display: show time %1 : %2 colon %3",
			"args0": [
			  {
				"type": "input_value",
				"name": "a",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "b",
				"check": "Number"
			  },
			  {
				"type": "field_dropdown",
				"name": "colon",
				"options": [
				  [
					"Show",
					"true"
				  ],
				  [
					"Hide",
					"false"
				  ]
				]
			  }
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

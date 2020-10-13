Blockly.Blocks['audio_setup'] = {
	init: function() {
		this.jsonInit({
			"type": "audio_setup",
			"message0": "IOXESP32 Audio: begin",
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		  });
	}
};

Blockly.Blocks['audio_playfile'] = {
	init: function() {
		this.jsonInit({
			"type": "audio_playfile",
			"message0": "IOXESP32 Audio: play file %1 %2 on MicroSD Card",
			"args0": [
			  {
				"type": "input_dummy"
			  },
			  {
				"type": "input_value",
				"name": "file",
				"check": "String"
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

Blockly.Blocks['audio_playurl'] = {
	init: function() {
		this.jsonInit({
			"type": "audio_playurl",
			"message0": "IOXESP32 Audio: play url %1 %2",
			"args0": [
			  {
				"type": "input_dummy"
			  },
			  {
				"type": "input_value",
				"name": "url",
				"check": "String"
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

Blockly.Blocks['audio_tts'] = {
	init: function() {
		this.jsonInit({
			"type": "audio_tts",
			"message0": "IOXESP32 Audio: text to speech %1 %2 language %3",
			"args0": [
			  {
				"type": "input_dummy"
			  },
			  {
				"type": "input_value",
				"name": "text",
				"check": "String"
			  },
			  {
				"type": "field_dropdown",
				"name": "lang",
				"options": [
				  [
					"ภาษาไทย",
					"TH"
				  ],
				  [
					"English",
					"EN"
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

Blockly.Blocks['audio_stop'] = {
	init: function() {
		this.jsonInit({
			"type": "audio_stop",
			"message0": "IOXESP32 Audio: stop",
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['audio_pause'] = {
	init: function() {
		this.jsonInit({
			"type": "audio_pause",
			"message0": "IOXESP32 Audio: pause",
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['audio_play'] = {
	init: function() {
		this.jsonInit({
			"type": "audio_play",
			"message0": "IOXESP32 Audio: resume",
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['audio_isplaying'] = {
	init: function() {
		this.jsonInit({
			"type": "audio_isplaying",
			"message0": "IOXESP32 Audio: is playing ?",
			"inputsInline": true,
			"output": [
			  "Boolean",
			  "Number"
			],
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['audio_set_volume'] = {
	init: function() {
		this.jsonInit({
			"type": "audio_set_volume",
			"message0": "IOXESP32 Audio: set volume to %1 %2 %%",
			"args0": [
			  {
				"type": "input_dummy"
			  },
			  {
				"type": "input_value",
				"name": "level",
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

Blockly.Blocks['audio_get_volume'] = {
	init: function() {
		this.jsonInit({
			"type": "audio_get_volume",
			"message0": "IOXESP32 Audio: get volume",
			"inputsInline": true,
			"output": [
			  "Number"
			],
			"colour": 60,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

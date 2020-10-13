const app = require("electron").remote;
const nativeImage = require("electron").nativeImage;
const dialog = app.dialog;

Blockly.Blocks['mini_lcd_init'] = {
	init: function() {
		this.jsonInit({
			"type": "mini_lcd_init",
			"message0": "Mini LCD: begin",
			"previousStatement": null,
			"nextStatement": null,
			"colour": 135,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		  });
	}
};

Blockly.Blocks['mini_lcd_fill_screen'] = {
	init: function() {
		this.jsonInit({
			"type": "mini_lcd_fill_screen",
			"message0": "Mini LCD: Fill screen %1",
			"args0": [
			  {
				"type": "input_value",
				"name": "color",
				"check": "color",
				"align": "RIGHT"
			  }
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 135,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['mini_lcd_print'] = {
	init: function() {
		this.jsonInit({
			"type": "mini_lcd_print",
			"message0": "Mini LCD: Print %1 Size: %2 X: %3 Y: %4 Align: %5 Text Color: %6 Background Color: %7",
			"args0": [
			  {
				"type": "input_value",
				"name": "text",
				"check": [
				  "Boolean",
				  "Number",
				  "String"
				],
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "size",
				"check": "Number",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "x",
				"check": "Number",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "y",
				"check": "Number",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "align",
				"check": "obj_align",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "color",
				"check": "color",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "bg_color",
				"check": "color",
				"align": "RIGHT"
			  }
			],
			"inputsInline": false,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 135,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		  });
	}
};

Blockly.Blocks["mini_lcd_create_image"] = {
    init: function() {
		this.appendDummyInput()
			.appendField("create image from file");
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAIAAAARP+ljAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA4LTA2VDAxOjQxOjI3KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA4LTA2VDAxOjQxOjI3KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOC0wNlQwMTo0MToyNyswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzQ5NjE1OC0zNzcwLTE4NGQtYTk5YS02OGJkMjYyODAwYzkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjYTZkM2NiMS0zMTg2LTQyNDQtYmI3MC0xMmQwMTg4NGNlOTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZWEzODY0Ny1mYWNiLWQ0NDYtOTcwMS1lNWExNmU5NTkxNDgiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZWEzODY0Ny1mYWNiLWQ0NDYtOTcwMS1lNWExNmU5NTkxNDgiIHN0RXZ0OndoZW49IjIwMjAtMDgtMDZUMDE6NDE6MjcrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Mjc0OTYxNTgtMzc3MC0xODRkLWE5OWEtNjhiZDI2MjgwMGM5IiBzdEV2dDp3aGVuPSIyMDIwLTA4LTA2VDAxOjQxOjI3KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iY2hvb3NlIHlvdXIgaW1hZ2UiIHBob3Rvc2hvcDpMYXllclRleHQ9ImNob29zZSB5b3VyIGltYWdlIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz63xGQmAAAGK0lEQVR4nO2cv2/TWhTHj5/eVsSCFKYKqYA9sYBYKBKSO/AXAEn/AqRkQ+pW/oNkgqFSulX94eyVIxATiZAQVC4TBVtCFAl36GTPfsP39ejmXieP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",
			160,
			80,
			"click to upload",
			function(e) {
				let imageFileName = dialog.showOpenDialog({
					filters: [{ name: 'Images', extensions: ['jpg', 'png'] }],
					properties: ["openFile"]
				});

				console.log(imageFileName);

				if (imageFileName == undefined) {
					return;
				}

				imageFileName = imageFileName[0];

				//--- resize image ---//
				let image = nativeImage.createFromPath(imageFileName);
				let size = image.getSize();
				if (size.width > 160) {
					image = image.resize({ width: 160 });
					size = image.getSize();
				}
				if (size.height > 80) {
					image = image.resize({ height: 80 });
					size = image.getSize();
				}

				//---- display image ----//
				this.sourceBlock_.inputList[2].fieldRow[0].setValue(`image size ${size.width} x ${size.height}`);
				this.sourceBlock_.inputList[2].fieldRow[0].init();
				this.setValue(image.toDataURL());
				this.init();
			},
			true));
		this.appendDummyInput().appendField("image size 160 x 80");

		this.setOutput(true, "tft_image");
		this.setColour(135);
		this.setTooltip("create image from file (for best quality result please use size within 160x80 pixel otherwise, it'll resize)");
		this.setHelpUrl("https://docs.ioxesp32.com/");
    }
};

Blockly.Blocks["mini_lcd_draw_image"] = {
    init: function() {
		this.appendValueInput("img")
			.setCheck("tft_image")
			.appendField("Mini LCD: Draw image");
		this.appendValueInput("x")
			.setCheck("Number")
			.appendField("at (x:");
		this.appendValueInput("y")
			.setCheck("Number")
			.appendField("y:");
		this.appendDummyInput()
			.appendField(")");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("display image to display");
		this.setHelpUrl("https://docs.ioxesp32.com/");
    }
};

Blockly.Blocks['mini_lcd_draw_line'] = {
	init: function() {
		this.jsonInit({
			"type": "mini_lcd_draw_line",
			"message0": "Mini LCD: Draw line start at (x: %1 y: %2 ) end at (x: %3 y: %4 ) color: %5",
			"args0": [
			  {
				"type": "input_value",
				"name": "sx",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "sy",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "ex",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "ey",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "color",
				"check": "color"
			  }
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 135,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['mini_lcd_draw_rect'] = {
	init: function() {
		this.jsonInit({
			"type": "mini_lcd_draw_rect",
			"message0": "Mini LCD: Draw rectangle %1 X: %2 Y: %3 Width: %4 Height: %5 Radius: %6 Color: %7 Fill: %8",
			"args0": [
			  {
				"type": "input_dummy",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "x",
				"check": "Number",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "y",
				"check": "Number",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "w",
				"check": "Number",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "h",
				"check": "Number",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "radius",
				"check": "Number",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "color",
				"check": "color",
				"align": "RIGHT"
			  },
			  {
				"type": "input_value",
				"name": "fill",
				"check": "Boolean",
				"align": "RIGHT"
			  }
			],
			"inputsInline": false,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 135,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['mini_lcd_draw_circle'] = {
	init: function() {
		this.jsonInit({
			"type": "mini_lcd_draw_circle",
			"message0": "Mini LCD: Draw circle center at (x: %1 y: %2 ) radius: %3 color: %4 fill: %5",
			"args0": [
			  {
				"type": "input_value",
				"name": "sx",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "sy",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "radius",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "color",
				"check": "color"
			  },
			  {
				"type": "input_value",
				"name": "fill",
				"check": "Boolean"
			  }
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 135,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['color'] = {
	init: function() {
		this.jsonInit({
			"type": "color",
			"message0": "%1",
			"args0": [
			  {
				"type": "field_colour",
				"name": "color",
				"colour": "#ff0000"
			  }
			],
			"inputsInline": true,
			"output": "color",
			"colour": 285,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['hex_color'] = {
	init: function() {
		this.jsonInit({
			"type": "hex_color",
			"message0": "Hex color %1",
			"args0": [
			  {
				"type": "field_input",
				"name": "hex",
				"text": "#FFFFFF"
			  }
			],
			"inputsInline": true,
			"output": "color",
			"colour": 285,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['rgb_color'] = {
	init: function() {
		this.jsonInit({
			"type": "rgb_color",
			"message0": "RGB color %1 (Red: %2 Green: %3 Blue: %4 )",
			"args0": [
			  {
				"type": "input_dummy"
			  },
			  {
				"type": "input_value",
				"name": "red",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "green",
				"check": "Number"
			  },
			  {
				"type": "input_value",
				"name": "blue",
				"check": "Number"
			  }
			],
			"inputsInline": true,
			"output": "color",
			"colour": 285,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['mini_lcd_obj_align'] = {
	init: function() {
		this.jsonInit({
			"type": "mini_lcd_obj_align",
			"message0": "%1",
			"args0": [
			  {
				"type": "field_dropdown",
				"name": "align",
				"options": [
				  [
					"Top left",
					"TL_DATUM"
				  ],
				  [
					"Top center",
					"TC_DATUM"
				  ],
				  [
					"Top right",
					"TR_DATUM"
				  ],
				  [
					"Middle left",
					"ML_DATUM"
				  ],
				  [
					"Middle",
					"MC_DATUM"
				  ],
				  [
					"Middle right",
					"MR_DATUM"
				  ],
				  [
					"Bottom left",
					"BL_DATUM"
				  ],
				  [
					"Bottom center",
					"BC_DATUM"
				  ],
				  [
					"Bottom right",
					"BR_DATUM"
				  ]
				]
			  }
			],
			"output": "obj_align",
			"colour": 135,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};

Blockly.Blocks['button_event'] = {
	init: function() {
		this.jsonInit({
			"type": "button_event",
			"message0": "%1 on %2 %3 %4",
			"args0": [
			  {
				"type": "field_dropdown",
				"name": "var",
				"options": [
				  [
					"SW1",
					"_sw1"
				  ],
				  [
					"SW2",
					"_sw2"
				  ]
				]
			  },
			  {
				"type": "field_dropdown",
				"name": "fn",
				"options": [
				  [
					"Click",
					"onClick"
				  ],
				  [
					"Press",
					"onPress"
				  ],
				  [
					"Long Press",
					"onLong"
				  ],
				  [
					"Release",
					"onRelease"
				  ]
				]
			  },
			  {
				"type": "input_dummy"
			  },
			  {
				"type": "input_statement",
				"name": "callback"
			  }
			],
			"colour": 135,
			"tooltip": "",
			"helpUrl": "https://docs.ioxesp32.com/"
		});
	}
};


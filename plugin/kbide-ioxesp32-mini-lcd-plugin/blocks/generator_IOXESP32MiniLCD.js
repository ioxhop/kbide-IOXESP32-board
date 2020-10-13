const nativeImage = require("electron").nativeImage;

Blockly.JavaScript['mini_lcd_init'] = function(block) {
	var code = '';
	code += '#EXTINC#include <TFT_eSPI.h>#END\n';
	code += '#EXTINC#include <Image.h>#END\n';
	code += '#VARIABLE TFT_eSPI tft = TFT_eSPI(); #END\n';
	code += '#SETUP tft.init();\n #END'
	code += '#SETUP tft.setRotation(3);\n #END'
	return code;
};

Blockly.JavaScript['mini_lcd_print'] = function(block) {
	var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
	var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
	var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
	var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
	var value_align = Blockly.JavaScript.valueToCode(block, 'align', Blockly.JavaScript.ORDER_ATOMIC);
	var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
	var value_bg_color = Blockly.JavaScript.valueToCode(block, 'bg_color', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = `
	tft.setTextDatum(${value_align});
	tft.setTextSize(${value_size});
	tft.setTextColor(${value_color}, ${value_bg_color});
	tft.drawString(String(${value_text}), ${value_x}, ${value_y});
	`;
	return code;
};

Blockly.JavaScript["mini_lcd_create_image"] = function(block) {
    var dataurl = block.inputList[1].fieldRow["0"].src_;
    var image = nativeImage.createFromDataURL(dataurl);
	var size = image.getSize();
	var hexImg = "";
	var imgData = image.getBitmap();
	// console.log(size);
	// console.log(imgData.length);

	for (let y=0;y<size.height;y++) {
		for (let x=0;x<size.width;x++) {
			let index = (y * size.width + x) * 4;

			let r = imgData[index + 2];
			let g = imgData[index + 1];
			let b = imgData[index + 0];
			let a = imgData[index + 3];
			
			let c16 = ((r & 0xF8) << 8) | ((g & 0xFC) << 3) | ((b & 0xF8) >> 3);	//RGB565

			hexImg += `0x${(((c16 & 0xFF) << 8) | ((c16 >> 8) & 0xFF)).toString(16)}, `;
		}
	}
	hexImg = hexImg.trim();

    var code = `{ 
		.width = ${size.width},
		.height = ${size.height},
		.data = (std::vector<uint16_t>{${hexImg}}) 
	}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["mini_lcd_draw_image"] = function(block) {
    var value_img = Blockly.JavaScript.valueToCode(block, "img", Blockly.JavaScript.ORDER_ATOMIC) || "NULL";
    var value_x = Blockly.JavaScript.valueToCode(block, "x", Blockly.JavaScript.ORDER_ATOMIC) || "0";
	var value_y = Blockly.JavaScript.valueToCode(block, "y", Blockly.JavaScript.ORDER_ATOMIC) || "0";
    var code = `tft.pushImage(${value_x}, ${value_y}, ${value_img}.width, ${value_img}.height, ${value_img}.data.data());\n`;
    return code;
  };

Blockly.JavaScript['mini_lcd_fill_screen'] = function(block) {
	var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = `tft.fillScreen(${value_color});\n`;
	return code;
};

Blockly.JavaScript['mini_lcd_draw_line'] = function(block) {
	var value_sx = Blockly.JavaScript.valueToCode(block, 'sx', Blockly.JavaScript.ORDER_ATOMIC);
	var value_sy = Blockly.JavaScript.valueToCode(block, 'sy', Blockly.JavaScript.ORDER_ATOMIC);
	var value_ex = Blockly.JavaScript.valueToCode(block, 'ex', Blockly.JavaScript.ORDER_ATOMIC);
	var value_ey = Blockly.JavaScript.valueToCode(block, 'ey', Blockly.JavaScript.ORDER_ATOMIC);
	var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = `tft.drawLine(${value_sx}, ${value_sy}, ${value_ex}, ${value_ey}, ${value_color});\n`;
	return code;
};

Blockly.JavaScript['mini_lcd_draw_rect'] = function(block) {
	var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
	var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
	var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
	var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
	var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
	var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
	var value_fill = Blockly.JavaScript.valueToCode(block, 'fill', Blockly.JavaScript.ORDER_ATOMIC);

	var code = `
	if (${value_fill}) {
		tft.fillRoundRect(${value_x}, ${value_y}, ${value_w}, ${value_h}, ${value_radius}, ${value_color});
	} else {
		tft.drawRoundRect(${value_x}, ${value_y}, ${value_w}, ${value_h}, ${value_radius}, ${value_color});
	}
	`;
	return code;
  };

Blockly.JavaScript['mini_lcd_draw_circle'] = function(block) {
	var value_sx = Blockly.JavaScript.valueToCode(block, 'sx', Blockly.JavaScript.ORDER_ATOMIC);
	var value_sy = Blockly.JavaScript.valueToCode(block, 'sy', Blockly.JavaScript.ORDER_ATOMIC);
	var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
	var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
	var value_fill = Blockly.JavaScript.valueToCode(block, 'fill', Blockly.JavaScript.ORDER_ATOMIC);

	var code = `
	if (${value_fill}) {
		tft.fillCircle(${value_sx}, ${value_sy}, ${value_radius}, ${value_color});
	} else {
		tft.drawCircle(${value_sx}, ${value_sy}, ${value_radius}, ${value_color});
	}
	`;
	return code;
  };

Blockly.JavaScript['color'] = function(block) {
	var colour_color = block.getFieldValue('color');
	var code = `tft.color24to16(0x${colour_color.replace("#", "")})`;
	return [code, Blockly.JavaScript.ORDER_NONE];
  };

Blockly.JavaScript['hex_color'] = function(block) {
	var text_hex = block.getFieldValue('hex');
	var code = `tft.color24to16(0x${text_hex.replace("#", "")})`;
	return [code, Blockly.JavaScript.ORDER_NONE];
  };

Blockly.JavaScript['rgb_color'] = function(block) {
	var value_red = Blockly.JavaScript.valueToCode(block, 'red', Blockly.JavaScript.ORDER_ATOMIC);
	var value_green = Blockly.JavaScript.valueToCode(block, 'green', Blockly.JavaScript.ORDER_ATOMIC);
	var value_blue = Blockly.JavaScript.valueToCode(block, 'blue', Blockly.JavaScript.ORDER_ATOMIC);
	var code = `tft.color565(${value_red}, ${value_green}, ${value_blue})`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mini_lcd_obj_align'] = function(block) {
	var dropdown_align = block.getFieldValue('align');
	var code = dropdown_align;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['button_event'] = function(block) {
	var dropdown_var = block.getFieldValue('var');
	var dropdown_fn = block.getFieldValue('fn');
	var statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
	var code = `
	#EXTINC #include <Button.h> #END
	#VARIABLE Button _sw1(33, INPUT, LOW); #END
	#VARIABLE Button _sw2(35, INPUT, LOW); #END
	#SETUP _sw1.begin(); #END
	#SETUP _sw2.begin(); #END
	#SETUP ${dropdown_var}.${dropdown_fn}([]() { ${statements_callback} }); #END
	`;
	return code;
};

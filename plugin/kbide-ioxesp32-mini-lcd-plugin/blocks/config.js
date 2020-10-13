module.exports = [
	{
		name : "IOXESP32 Mini LCD",
		blocks : [
			'mini_lcd_init',
			{
                xml:
                `<block type="mini_lcd_fill_screen">
                    <value name="color">
                        <shadow type="color">
                            <field name="color">#000000</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="mini_lcd_print">
                    <value name="text">
                        <shadow type="basic_string">
                            <field name="VALUE">Hello</field>
                        </shadow>
                    </value>
                    <value name="size">
                        <shadow type="math_number">
                            <field name="NUM">2</field>
                        </shadow>
                    </value>
                    <value name="x">
                        <shadow type="math_number">
                            <field name="NUM">80</field>
                        </shadow>
                    </value>
                    <value name="y">
                        <shadow type="math_number">
                            <field name="NUM">40</field>
                        </shadow>
                    </value>
                    <value name="align">
                        <block type="mini_lcd_obj_align">
                            <field name="align">MC_DATUM</field>
                        </block>
                    </value>
                    <value name="color">
                        <shadow type="color">
                            <field name="color">#FFFFFF</field>
                        </shadow>
                    </value>
                    <value name="bg_color">
                        <shadow type="color">
                            <field name="color">#000000</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="variables_set">
                    <field name="VAR">img1</field>
                    <value name="VALUE">
                        <block type="mini_lcd_create_image" inline="false"></block>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="mini_lcd_draw_image">
                    <value name="img">
                        <block type="variables_get">
                            <field name="VAR">img1</field>
                        </block>
                    </value>
                    <value name="x">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="y">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="w">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="h">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="mini_lcd_draw_line">
                    <value name="sx">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                    </value>
                    <value name="sy">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                    </value>
                    <value name="ex">
                        <shadow type="math_number">
                            <field name="NUM">150</field>
                        </shadow>
                    </value>
                    <value name="ey">
                        <shadow type="math_number">
                            <field name="NUM">70</field>
                        </shadow>
                    </value>
                    <value name="color">
                        <shadow type="color">
                            <field name="color">#FFFFFF</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="mini_lcd_draw_rect">
                    <value name="x">
                        <shadow type="math_number">
                            <field name="NUM">20</field>
                        </shadow>
                    </value>
                    <value name="y">
                        <shadow type="math_number">
                            <field name="NUM">20</field>
                        </shadow>
                    </value>
                    <value name="w">
                        <shadow type="math_number">
                            <field name="NUM">60</field>
                        </shadow>
                    </value>
                    <value name="h">
                        <shadow type="math_number">
                            <field name="NUM">60</field>
                        </shadow>
                    </value>
                    <value name="radius">
                        <shadow type="math_number">
                            <field name="NUM">6</field>
                        </shadow>
                    </value>
                    <value name="color">
                        <shadow type="color">
                            <field name="color">#FFFFFF</field>
                        </shadow>
                    </value>
                    <value name="fill">
                        <shadow type="logic_boolean"></shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="mini_lcd_draw_circle">
                    <value name="sx">
                        <shadow type="math_number">
                            <field name="NUM">80</field>
                        </shadow>
                    </value>
                    <value name="sy">
                        <shadow type="math_number">
                            <field name="NUM">40</field>
                        </shadow>
                    </value>
                    <value name="radius">
                        <shadow type="math_number">
                            <field name="NUM">20</field>
                        </shadow>
                    </value>
                    <value name="color">
                        <shadow type="color">
                            <field name="color">#FFFFFF</field>
                        </shadow>
                    </value>
                    <value name="fill">
                        <shadow type="logic_boolean"></shadow>
                    </value>
                </block>`
            },
            {
                xml: `
                <block type="color">
                    <value name="color">#FFFFFF</value>
                </block>`
            },
            {
                xml: `
                <block type="hex_color">
                    <value name="hex">#FFFFFF</value>
                </block>`
            },
            {
                xml: `
                <block type="rgb_color">
                    <value name="red">
                        <shadow type="math_number">
                            <field name="NUM">255</field>
                        </shadow>
                    </value>
                    <value name="green">
                        <shadow type="math_number">
                            <field name="NUM">255</field>
                        </shadow>
                    </value>
                    <value name="blue">
                        <shadow type="math_number">
                            <field name="NUM">255</field>
                        </shadow>
                    </value>
                </block>`
            },
            "button_event"
		]
	}
];

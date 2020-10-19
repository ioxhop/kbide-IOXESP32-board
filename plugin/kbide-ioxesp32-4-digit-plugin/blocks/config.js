module.exports = [
    {
        name : "IOXESP32 4-Digit",
        blocks : [
            'digit_begin',
            {
                xml: `
                    <block type="digit_show_number">
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">1234</field>
                            </shadow>
                        </value>
                        <value name="decimal">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>
                `
            },
            {
                xml: `
                    <block type="digit_show_celcius">
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">1234</field>
                            </shadow>
                        </value>
                        <value name="decimal">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>
                `
            },
            {
                xml: `
                    <block type="digit_show_time">
                        <value name="a">
                            <shadow type="math_number">
                                <field name="NUM">12</field>
                            </shadow>
                        </value>
                        <value name="b">
                            <shadow type="math_number">
                                <field name="NUM">34</field>
                            </shadow>
                        </value>
                    </block>
                `
            }
        ]
    }
];

module.exports = [
    {
        name : "IOXESP32 DotMatrix",
        blocks : [
            'dot_matrix_begin',
            'dot_matrix_raw',
            'dot_matrix_clear',
            {
                xml: `
                    <block type="dot_matrix_show">
                      <value name="VALUE">
                          <shadow type="basic_string">
                            <field name="VALUE">Hello world!</field>
                          </shadow>
                      </value>
                    </block>
                ` 
            }, {
                xml: `
                    <block type="dot_matrix_scroll">
                      <value name="VALUE">
                          <shadow type="basic_string">
                            <field name="VALUE">Hello world!</field>
                          </shadow>
                      </value>
                    </block>
                `
            }
        ]
    }
];

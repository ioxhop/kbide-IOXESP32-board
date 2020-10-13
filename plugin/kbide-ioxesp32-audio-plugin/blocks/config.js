module.exports = [
	{
		name : "IOXESP32 Audio",
		blocks : [
			'audio_setup',
			{
                xml:
                `<block type="audio_playfile">
                    <value name="file">
                        <shadow type="basic_string">
                            <field name="VALUE">/1.mp3</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="audio_playurl">
                    <value name="url">
                        <shadow type="basic_string">
                            <field name="VALUE">http://111.223.51.7:8100/;</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="audio_tts">
                    <value name="text">
                        <shadow type="basic_string">
                            <field name="VALUE">สวัสดี</field>
                        </shadow>
                    </value>
                    <value name="lang">TH</value>
                </block>`
            },
            "audio_stop",
            "audio_pause",
            "audio_play",
            "audio_isplaying",
            {
                xml:
                `<block type="audio_set_volume">
                    <value name="level">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>`
            },
			'audio_get_volume',
		]
	}
];

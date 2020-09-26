module.exports = {
	Guides: {
		'Getting Started': [ 'doc1', 'doc2', 'doc3' ],  
        'API References': 
        [ 
            'api_overview',
            { 
                'Fresponze Resampler': 
                [
                    'fresponze_resampler',
                    'fresponze_resampler_destroy', 
                    'fresponze_resampler_initialize', 
                    'fresponze_resampler_resample', 
                    'fresponze_resampler_resampledouble', 
                    'fresponze_resampler_reset'
                ],
            }, 
            { 
                'Fresponze Hardware': 
                [
                    'fresponze_hardware',
                    'fresponze_hardware_enumerate',
                    'fresponze_hardware_close',
                    'fresponze_hardware_getdeviceslist',
                    'fresponze_hardware_getdevicescount',
                    'fresponze_hardware_getdeviceformat',   
                    'fresponze_hardware_getvolume',
                    'fresponze_hardware_getendpointinfo',
                    'fresponze_hardware_getrawptr',
                    'fresponze_hardware_open_default',
                    'fresponze_hardware_open_idx',
                    'fresponze_hardware_open_uuid',
                    'fresponze_hardware_restart_default',
                    'fresponze_hardware_restart_idx',
                    'fresponze_hardware_restart_uuid',
                    'fresponze_hardware_start',
                    'fresponze_hardware_stop',
                    'fresponze_hardware_setvolume'
                ],
            }, 
        ]
	},
};

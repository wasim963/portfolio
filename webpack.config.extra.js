const path = require('path');

exports.alias = {
    'constants': path.resolve( __dirname, 'src/js/constants' ),

    // ui components
    'views': path.resolve( __dirname, 'src/js/components/views' ),
    'hoc': path.resolve( __dirname, 'src/js/hoc' ),
    'modules': path.resolve( __dirname, 'src/js/modules' ),
    'containers': path.resolve( __dirname, 'src/js/components/containers' ),
    'pages': path.resolve( __dirname, 'src/js/pages' ),
    'utils': path.resolve( __dirname, 'src/js/utils' ),
    'data': path.resolve( __dirname, 'data' ),

    // scss globals
    'scss-globals': path.resolve( __dirname, 'src/scss/globals/index.scss' )
}
const path = require('path');

exports.alias = {
    'constants': path.resolve( __dirname, 'src/js/constants' ),

    // ui components
    'components': path.resolve( __dirname, 'src/js/components' ),
    'hoc': path.resolve( __dirname, 'src/js/hoc' ),
    'modules': path.resolve( __dirname, 'src/js/modules' ),
    'containers': path.resolve( __dirname, 'src/js/containers' ),
    'pages': path.resolve( __dirname, 'src/js/pages' ),

    // scss globals
    'scss-globals': path.resolve( __dirname, 'src/scss/globals/index.scss' )
}
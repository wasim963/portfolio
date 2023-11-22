const path = require('path');

exports.alias = {
    // ui components
    'components': path.resolve( __dirname, 'src/js/components' ),
    'hoc': path.resolve( __dirname, 'src/js/hoc' ),
    'modules': path.resolve( __dirname, 'src/js/modules' ),

    // scss globals
    'scss-globals': path.resolve( __dirname, 'src/scss/globals/index.scss' )
}
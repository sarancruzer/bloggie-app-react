// webpack.config.js
'use strict';

// ...
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );

module.exports = {
    // ...

    plugins: [
        // ....

        new CKEditorWebpackPlugin( {
            // The UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
            language: 'de',
            addMainLanguageTranslationsToAllAssets: true
        } ),

        // ....
    ],

    // ...
};

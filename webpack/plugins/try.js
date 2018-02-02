/**
 * Created by diyews on 2017/12/22.
 *
 * Version 1.0.0
 */
function HelloWorldPlugin(options) {
    // Setup the plugin instance with options...
}

HelloWorldPlugin.prototype.apply = function(compiler) {
    compiler.plugin("compilation", function(compilation) {

        // Now setup callbacks for accessing compilation steps:
        compilation.plugin("optimize", function() {
            console.log("Assets are being optimized.");
        });
    });
};

module.exports = HelloWorldPlugin;

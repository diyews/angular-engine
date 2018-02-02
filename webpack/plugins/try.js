/**
 * Created by diyews on 2017/12/22.
 *
 * Version 1.0.0
 */
function HelloWorldPlugin(options) {
    // Setup the plugin instance with options...
    this.jsChunksToBeRemoved = ['style'];
}

HelloWorldPlugin.prototype.apply = function(compiler) {
    debugger
    
    /*compiler.plugin('make', (compilation, cb) => {
        let a = 1 + 1;
    
        cb();
    });*/
    
    compiler.plugin('should-emit', (compilation) => {
        // Now setup callbacks for accessing compilation steps:
        /*compilation.plugin("optimize", function() {
            console.log("Assets are being optimized.");
        });*/
        
        // remove assets
        const assetNames = Object.keys(compilation.assets);
        const chunks = compilation.chunks;
        console.log(compilation);
        this.jsChunksToBeRemoved.forEach(chunkFileName => {
            let hit = false;
            const rule = new RegExp(`^${chunkFileName}(\..*)?\.js$`);
            
            for (let i = 0, iLength = assetNames.length; i < iLength; i++) {
                let assetName = assetNames[i];
                hit = rule.test(assetName);
                
                if (hit) {
                    delete compilation.assets[assetName];
                    break;
                }
            }
            
            // not hit then go next loop
            if (!hit) return;
            for (let i = 0, iLength = chunks.length; i < iLength; i++) {
                let chunk = chunks[i];
                
                if (chunk.name === chunkFileName) {
                    for (let j = 0, jLength = chunk.files.length; j < jLength; j++) {
                        const fileName = chunk.files[j];
                        if ( rule.test(fileName) ) {
                            chunk.files.splice(j, 1);
                            break;
                        }
                    }
                    break;
                }
            }
        });
    });
};

module.exports = HelloWorldPlugin;

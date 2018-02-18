/**
 * Created by diyews on 2017/12/20.
 *
 * Version 1.0.0
 */
const path = require('path');

const _root = path.resolve(__dirname, '..');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

exports.root = root;

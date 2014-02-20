var ob = require('component-object')
  , isArray = require('yields-isArray');

var build = function(root,obj){
  if (typeof obj == 'object' && !isArray(obj)) {
    for (var k in obj){
      build( root.addBranch(k), obj[k]);
    }
  } else if (isArray(obj)) {
    for (var i=0;i<obj.length;++i) {
      build( root, obj[i]);
    }
  } else {
    root.addLeaf(obj.toString());
  }
}

module.exports = build;

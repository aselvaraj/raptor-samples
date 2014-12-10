var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function(req, res) {
    var asyncDataProvider = function asyncDataProvider(args, cb){
      setTimeout(function (){
        cb(null, {});
      }, 1000);
    };

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    template
        .stream({
            name: 'John',
            asyncDP: asyncDataProvider
        })
        .pipe(res);
};

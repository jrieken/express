
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log('write to output trying out logging');
  res.render('index', { title: 'Express' })
};
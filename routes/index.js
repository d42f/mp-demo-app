module.exports = function (app) {
  app.get('/', pageIndex);
};

function pageIndex (req, res) {
  res.render('pages/index');
}

module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home');
   });

   app.get('/product', (reg, res, next) => {
      res.render('product');
   });

   app.get('/contact', (reg, res, next) => {
      res.render('contact');
   });
};
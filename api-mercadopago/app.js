var config = require('./config')
var express = require('express')
var bodyParser = require('body-parser');
var mercadopago = require('./index');


var app = express()
app.use(bodyParser.urlencoded({
    extended: true
}));


mercadopago.configure({
    client_id: config.client_id,
    client_secret: config.client_secret
});
console.log('entro1');

app.get('/payment', (req, res) => {

    console.log('entro 2');
        console.log('entro 3');
        
       // Create a preference structure
    var preference = {
        items: [
          item = {
            id: '1234',
            title: 'Rustic Wool Bottle',
            quantity: 7,
            currency_id: 'MXN',
            unit_price: 60.12
          }
        ],
        // payers:[
        //     payer = {
        //         email: 'velda@yahoo.com'
        //       }
        // ]
      };
     
      mercadopago.preferences.create(preference)
        .then(function (preference) {
            console.log(preference.response.init_point);
            
          // Do something if preference has been created successfully
        }).catch(function (error) {
          // If an error has occurred
        });
})

app.post('/data', (req,res) =>{
    console.log(req.body)
    res.status(200).send(req.body)
})

app.listen(config.port, () => {
    console.log(`Escuchando peticiones en el puerto ${config.port}`);

})


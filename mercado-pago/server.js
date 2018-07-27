const express = require('express')
const app = express()
var mercadopago = require('mercadopago');

mercadopago.configure({
    sandbox: true,
    access_token: 'TEST-2218095308403663-090711-df1751854cebbc46546d617b10340a25__LC_LB__-233259289'
});

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/payment' ,(req,res) =>{
    mercadopago.payment.update({
        id: 1,
        status: 'cancelled'
      }).then().catch();
})
 
app.listen(3000, ()=>{
  console.log('Escuchando peticiones en el puerto 3000');
  
})
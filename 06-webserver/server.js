const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))

// app.get('/', function (req, res) {
//   // res.send('Hello World')
//   let salida = {
//     nombre:'Moises',
//     edad:32,
//     url:req.url
//   }

//   res.send(salida)
// });

app.get('/data', function (req, res) {
  res.send('Hello World')
});
 
app.listen(3000, ()=>{
  console.log('Escuchando peticiones en el puerto 3000');
  
})
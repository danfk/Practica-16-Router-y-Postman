let express = require('express');
// inyección de la dependencia de express
let app = express();
// app que hace la función de servidor
let personsRoute = require('./routes/person');
// incluimos el router que viene en persons

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', espress.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000;
// definición del puerto de escucha

app.listen(PORT, ()=>{
    console.log('escuchando en el puerto 3000')
});
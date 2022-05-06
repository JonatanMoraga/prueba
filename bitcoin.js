const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        console.log('Precio del Bitcoin');

        var data = response.data.bpi
        var valores = [
                    `${data.USD.code} `+`${data.USD.rate}`,
                    `${data.EUR.code} `+`${data.EUR.rate}`,
                    `GBP `+`${data.GBP.rate}`,
                ]
        

       console.log("El valor es")
       valores.forEach(datos=>console.log(datos))
        

       
    })
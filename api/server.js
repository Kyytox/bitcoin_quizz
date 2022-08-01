const express = require('express');
const axios = require('axios');
const fs = require('fs');
const app = express()
const http = require('http');
const https = require('https');
const cors = require("cors")
const bodyParser = require('body-parser');
require('dotenv').config();
const LNBits = require('lnbits').default; // using require

app.use(cors())
app.use(bodyParser.json());

// const hostname = 'localhost';
// const hostname = 'bitcoinquiz.fr';
const port = 6500;
let withdrawBal = Number()
let IPuser = ""
let IPexistJSON = false
let IPauthoriz = true


http
    .createServer(
        // Provide the private and public key to the server by reading each
        // file's content with the readFileSync() method.
        // {
        //     key: fs.readFileSync("/etc/letsencrypt/live/bitcoinquiz.fr/privkey.pem"),
        //     cert: fs.readFileSync("/etc/letsencrypt/live/bitcoinquiz.fr/fullchain.pem"),
        // },
        app
    )
    .listen(port, () => {
        console.log(`Server running at http://${port}/`)
    });



app.get("/", function (req, res) {
    res.send("It's working!")
})

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../bitcoin_quiz/build', 'index.html'));
// });

app.post('/dataWithdraw', function (req, res) {
    withdrawBal = req.body.bal
    IPuser = req.body.IP
    res.json()
});

app.get('/details', function (req, res) {
    axios.get("https://www.lnbits.com/api/v1/wallet",
        { headers: { "X-Api-Key": process.env.REACT_APP_API_INV_KEY } })
        .then(response => {
            res.json(JSON.stringify(response.data));
        })
        .catch(error => {
            console.log(error);
        });
});


app.post('/invoce', function (req, res) {

    console.log('invoce')
    console.log('amount: ', req.body.amount)
    // fs.readFile("output.json", (err, data) => {
    //     if (data != '') {
    //         products = JSON.parse(data);
    //         products = [];
    //     }
    //     fs.writeFile("output.json", JSON.stringify(products), 'utf8', function (err) {
    //         if (err) {
    //             console.log("An error occured while writing JSON Object to File.");
    //             return console.log(err);
    //         }
    //         console.log("JSON file has been saved.");
    //     });
    // });

    // Config
    const { wallet } = LNBits({
        adminKey: process.env.REACT_APP_API_ADM_KEY,
        invoiceReadKey: process.env.REACT_APP_API_INV_KEY,
        endpoint: 'https://www.lnbits.com', //default
    });

    const newInvoice = async () => {
        console.log('newInvoice')
        const Invoice = await wallet.createInvoice({
            amount: req.body.amount,
            memo: 'Send ' + req.body.amount + ' statoshis to wallet Bitcoin Quizz',
            out: false,
        });
        res.json(Invoice['payment_request']);
    }

    newInvoice()
});


app.get('/withdraw', function (req, res) {
    axios.post("https://www.lnbits.com/withdraw/api/v1/links",
        { "title": "Claim " + withdrawBal + " satoshis - Bitcoin Quizz", "min_withdrawable": 2, "max_withdrawable": withdrawBal, "uses": 1, "wait_time": 4, "is_unique": true, "webhook_url": "" },
        { headers: { "X-Api-Key": process.env.REACT_APP_API_ADM_KEY } })
        .then(response => {
            res.json(JSON.stringify(response.data));
        })
        .catch(error => {
            console.log(error);
        });
});



app.get('/dataIP', function (req, res) {

    if (IPuser) {
        console.log('test')
        var infosIP = { IP: IPuser, bal: withdrawBal }

        fs.readFile("output.json", (err, data) => {

            products = JSON.parse(data);
            for (let i = 0; i < products.length; i++) {
                if (IPuser === products[i].IP) {
                    IPexistJSON = true

                    if (products[i].bal < 101) {
                        products[i].bal = products[i].bal + withdrawBal
                        IPauthoriz = true
                    } else {
                        IPauthoriz = false
                    }
                }
            }

            if (!IPexistJSON) {
                products.push(infosIP);
            }

            fs.writeFile("output.json", JSON.stringify(products), 'utf8', function (err) {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }
                console.log("JSON file has been saved.");
            });

            res.json(IPauthoriz);
        });
    }
});
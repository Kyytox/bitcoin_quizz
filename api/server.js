const express = require('express');
const axios = require('axios');
const fs = require('fs');
const app = express()
const PORT = process.env.PORT || 5000;
const cors = require("cors")
const bodyParser = require('body-parser');
require('dotenv').config();
const LNBits = require('lnbits').default; // using require

app.use(cors())
app.use(bodyParser.json());

let withdrawBal = Number()
let IPexistJSON = false
let IPauthoriz = true


app.post('/dataWithdraw', function (req, res) {
    withdrawBal = req.body.bal
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
    axios.get("https://geolocation-db.com/json/")
        .then(response => {
            const IPuser = response.data['IPv4']

            var test = { IP: response.data["IPv4"], bal: withdrawBal }

            fs.readFile("output.json", (err, data) => {
                if (data != '') {
                    products = JSON.parse(data);
                    for (let i = 0; i < products.length; i++) {
                        if (IPuser === products[i].IP) {
                            IPexistJSON = true

                            if (products[i].bal < 120) {
                                products[i].bal = products[i].bal + withdrawBal
                                IPauthoriz = true
                            } else {
                                IPauthoriz = false
                            }
                        }
                    }

                    if (!IPexistJSON) {
                        products.push(test);
                    }

                    fs.writeFile("output.json", JSON.stringify(products), 'utf8', function (err) {
                        if (err) {
                            console.log("An error occured while writing JSON Object to File.");
                            return console.log(err);
                        }
                        console.log("JSON file has been saved.");
                    });
                }
                res.json(IPauthoriz);
            });
        })
        .catch(error => {
            console.log(error);
        });
});


app.listen(PORT, () => { console.log("app listening on port 5000") })
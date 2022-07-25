const express = require('express');
const axios = require('axios');
const fs = require('fs');
const app = express()
const PORT = process.env.PORT || 5000;
const cors = require("cors")
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());

let withdrawBal = Number()
let IPexistJSON = false
let IPauthoriz = true


app.post('/dataWithdraw', function (req, res) {
    withdrawBal = req.body.bal
    // console.log('withdrawBal: ', withdrawBal)
});

app.get('/details', function (req, res) {
    axios.get("https://www.lnbits.com/api/v1/wallet",
        { headers: { "X-Api-Key": "xxxxx" } })
        .then(response => {
            res.json(JSON.stringify(response.data));
        })
        .catch(error => {
            console.log(error);
        });
});


app.get('/invoce', function (req, res) {
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

    axios.post("https://www.lnbits.com/api/v1/payments",
        { "out": false, "amount": 0, "memo": "test", "unit": "", "webhook": "", "internal": true },
        { headers: { "X-Api-Key": "xxxxx" } })
        .then(response => {
            res.json(JSON.stringify(response.data));
        })
        .catch(error => {
            console.log(error);
        });
});


app.get('/withdraw', function (req, res) {
    axios.post("https://www.lnbits.com/withdraw/api/v1/links",
        { "title": "test " + withdrawBal + " satoshis - Bitcoin Quizz", "min_withdrawable": 2, "max_withdrawable": withdrawBal, "uses": 1, "wait_time": 4, "is_unique": true, "webhook_url": "" },
        { headers: { "X-Api-Key": "xxxx" } })
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

                            if (products[i].bal < 20) {
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

export const mainRulesElt1 = {
    FR: "Decouvrez ou tester vos connaissances sur Bitcoin et son ecosysteme",
    EN: "Discover or test your knowledge of Bitcoin and its ecosystem",
}
export const mainRulesElt2 = {
    FR: "Questions au total",
    EN: "Total Questions",
}
export const mainRulesElt3 = {
    FR: "Questions par game",
    EN: "Questions by game",
}
export const mainRulesElt4 = {
    FR: "Satoshis par bonne reponse",
    EN: "Satoshis by correct answer",
}
export const mainRulesElt5 = {
    FR: "Envoyer des satoshis au wallet Bitcoin Quiz",
    EN: "Send satoshis to Bitcoin Quiz wallet",
}
export const mainRulesElt6 = {
    FR: "Balance",
    EN: "Balance",
}
export const mainRulesElt7 = {
    FR: "Proposer une question",
    EN: "Suggest a question",
}
export const mainRulesElt8 = {
    FR: "Entrer un montant :",
    EN: "Enter a amount :",
}
export const mainRulesElt9 = {
    FR: "100 satoshis par jour",
    EN: "100 satoshis per day",
}
export const mainRulesElt10 = {
    FR: "Adblock est activé, désactivé le pour recevoir des satoshis",
    EN: "Adblock is activated, deactivated on to receive satoshis",
}
export const mainRulesElt11 = {
    FR: "Penser a desactiver le shield Brave pour gagner des sats",
    EN: "Remember to deactivate the Brave shield to win sats",
}


// RESULT QUESTION 
export const resultQuestElt1 = {
    FR: "Question",
    EN: "Question",
}
export const resultQuestElt2 = {
    FR: "Bonne Réponse :",
    EN: "Right answer :",
}
export const resultQuestElt3 = {
    FR: "Mauvaise réponse, la réponse était",
    EN: "Wrong answer, the answer was",
}
export const resultQuestElt4 = {
    FR: "Question suivante",
    EN: "Next Question",
}




// IP Authoriz 
export const ipAuthorizElt1 = {
    FR: "Tu as obtenu le nombre max de satoshis pour aujourd'hui",
    EN: "You got won maximum satoshis for today",
}
export const ipAuthorizElt2 = {
    FR: "Laisse un peu pour les autres",
    EN: "Leave some for others",
}
export const ipAuthorizElt3 = {
    FR: "Reviens demain",
    EN: "Come back tomorrow",
}
export const ipAuthorizElt4 = {
    FR: "Rejouer",
    EN: "Replay",
}



// resultQuizz
export const resultQuizElt1 = {
    FR: "Montant",
    EN: "Amount",
}
export const resultQuizElt2 = {
    FR: "Titre",
    EN: "Title",
}
export const resultQuizElt3 = {
    FR: "Pas de Wallet Lightning ?",
    EN: "No Wallet Lightning ?",
}
export const resultQuizElt4 = {
    FR: "Rejouer",
    EN: "Replay",
}
export const resultQuizElt5 = {
    FR: "Votre score",
    EN: "Your score",
}
export const resultQuizElt6 = {
    FR: "bonnes reponses",
    EN: "Right answers",
}
export const resultQuizElt7 = {
    FR: "Vous remportez",
    EN: "You win",
}
export const resultQuizElt8 = {
    FR: "Verifie bien que tout tes adblocks soient desactives pour generer le QRcode",
    EN: "Check that all your adblocks are disabled to generate the QRcode",
}



// Box Ressources
export const boxRessElt1 = {
    FR: "En savoir plus",
    EN: "More informations",
}



// Box Question
export const boxQuestElt1 = {
    FR: "Question",
    EN: "Question",
}



export const listRandomNb = []

// Questions when player begin the  quizz
export const Questions = [
    {
        id: 0,
        fr: {
            question: "Quelle abréviation est utilisée pour le bitcoin ?",
            answers: ["BTT", "BTC", "BCOIN", "BCC"],
            correct: "BTC",
            ressources: ["https://bitcoin.fr/BTC-XBT/", "Bitcoin.fr - BTC-XBT"]
        },
        en: {
            question: "What abbreviation is used for bitcoin ?",
            answers: ["BTT", "BTC", "BCOIN", "BCC"],
            correct: "BTC",
            ressources: ["https://cointelegraph.com/news/how-should-we-abbreviate-bitcoin-and-ether", "CoinTelegraph - How Should We Abbreviate Bitcoin and Ether ?"]
        }
    },
    {
        id: 1,
        fr: {
            question: "Quelle est le pseudo utilise par le/les créateur(s) du Bitcoin ?",
            answers: ["Elon Musk", "Satoshi Nakamoto", "M.Bitcoin", "Craig Wright"],
            correct: "Satoshi Nakamoto",
            ressources: ["https://journalducoin.com/analyses/crypto-portrait-satoshi-nakamoto-bitcoin/", "Journal du Coin.com - Portrait Satoshi Nakamoto",
                "https://www.youtube.com/watch?v=h5pzl7wlEgw", "Youtube - RFI : Portrait de Satoshi Nakamoto"]
        },
        en: {
            question: "What is the nickname used by Bitcoin creator(s) ?",
            answers: ["Elon Musk", "Satoshi Nakamoto", "M.Bitcoin", "Craig Wright"],
            correct: "Satoshi Nakamoto",
            ressources: ["https://cointelegraph.com/bitcoin-for-beginners/who-is-satoshi-nakamoto-the-creator-of-bitcoin", "CoinTelegraph - Who is the mysterious Bitcoin creator Satoshi Nakamoto?"]
        }
    },
    {
        id: 2,
        fr: {
            question: "Quand a été crée le premier bloc Bitcoin ?",
            answers: ["Décembre 2008", "Décembre 2009", "Janvier 2009", "Janvier 2010"],
            correct: "Janvier 2009",
            ressources: ["https://bitcoin.fr/Bloc-Genesis/", "Bitcoin.fr - Bloc Genesis"]
        },
        en: {
            question: "When was created the first Bitcoin block ?",
            answers: ["December 2008", "December 2009", "January 2009", "January 2010"],
            correct: "January 2009",
            ressources: ["https://decrypt.co/56934/the-bitcoin-genesis-block-how-it-all-started", "Decrypt - The Bitcoin Genesis Block",
                "https://www.youtube.com/watch?v=fWIw6H1wMFc", "Youtube : Anthony Pompliano - The History Of Bitcoin: Genesis Block"]
        }
    },
    {
        id: 3,
        fr: {
            question: "Qu'est-ce que le halving ?",
            answers: ["Evènement qui multiplie les récompenses accordées aux mineurs", "Ca ne veut rien dire", "Evènement qui réduit de moitié les récompenses accordées aux mineurs", "C'est le nom du premier bloc bitcoin"],
            correct: "Evènement qui réduit de moitie les récompenses accordées aux mineurs",
            ressources: ["https://www.cointribune.com/guides-crypto/bien-debuter/bitcoin-btc-quest-ce-que-le-halving/", "Cointribune.com - Le halving",
                "https://www.youtube.com/watch?v=gl6JIA8zt90", "YouTube : Découvre Bitcoin - Bitcoin Q&A N°22 : Pourquoi un Halving tous les 4 ans ?",
                "https://academy.binance.com/fr/halving", "Binance.com - Halving"]
        },
        en: {
            question: "What is the Bitcoin Halving ?",
            answers: ["Is an event where mining rewards are multiplied", "It means nothing", "Is an event where mining rewards cut in half", "It's name of the first Bitcoin block"],
            correct: "Is an event where mining rewards cut in half",
            ressources: ["https://decrypt.co/resources/what-is-the-bitcoin-halving", "Decrypt - What is the Bitcoin Halving?",
                "https://www.youtube.com/watch?v=rT3szqSykVU", "Youtube : CoinDesk - What is the Bitcoin Halving?"]
        }
    },
    {
        id: 4,
        fr: {
            question: "Un halving se produit tous les :",
            answers: ["210 000 blocs (~ 4 ans)", "100 000 blocs (~ 2 ans)", "1 000 000 blocs (~ 20 ans)", "420 000 (~ 8 ans)"],
            correct: "210 000 blocs (~ 4 ans)",
            ressources: ["https://cryptoast.fr/halving-explication-impacts-bitcoin-crypto/", "Cryptoast - halving",
                "https://www.youtube.com/watch?v=TpKo8U3DWU0", "Hasheur - Qu'est-ce qu'un Halving Day? Rareté et Inflation d'une cryptomonnaie."]
        },
        en: {
            question: "The Bitcoin halving happens all the :",
            answers: ["210 000 blocs (~ 4 years)", "100 000 blocs (~ 2 years)", "1 000 000 blocs (~ 20 years)", "420 000 (~ 8 years)"],
            correct: "210 000 blocs (~ 4 years)",
            ressources: ["https://decrypt.co/resources/what-is-the-bitcoin-halving", "Decrypt - What is the Bitcoin Halving?",
                "https://www.youtube.com/watch?v=rT3szqSykVU", "Youtube : CoinDesk - What is the Bitcoin Halving?"]
        }
    },
    {
        id: 5,
        fr: {
            question: "Quelle sera le nombre maximum de Bitcoin en circulation ?",
            answers: ["20 Millions", "21 Millions", "Infini", "1 Milliard "],
            correct: "21 Millions",
            ressources: ["https://cryptoast.fr/pourquoi-21-millions-de-bitcoins/", "Cryptoast - 21 Millions de Bitcoin",
                "https://fr.cryptonews.com/exclusives/pourquoi-21-millions-bitcoins.html", "Crypto News - Pourquoi 21 Millions",
                "https://www.youtube.com/watch?v=Y92R4EWk5uo&t=41s", "Découvre Bitcoin - 21 millions de bitcoins - Chapitre 1.4 - Formation Bitcoin 101"]
        },
        en: {
            question: "What will be the maximum number of Bitcoin in circulation ?",
            answers: ["20 Million", "21 Million", "infinite", "1 Billion "],
            correct: "21 Million",
            ressources: ["https://www.buybitcoinworldwide.com/how-many-bitcoins-are-there/", "Buy Bitcoin WolrdWilde - How Many Bitcoins Are There Now in Circulation?",
                "https://www.youtube.com/watch?v=rnKdpf-P1TI", "Coin Bureau - Will BITCOIN Collapse At The 21 Million Limit??"]
        }
    },
    {
        id: 6,
        fr: {
            question: "Qui contrôle Bitcoin ?",
            answers: ["La totalité des membres du réseaux", "Satoshi Nakamoto", "Les USA", "Les développeurs"],
            correct: "La totalité des membres du réseaux",
            ressources: ["https://journalducoin.com/bitcoin/qui-controle-bitcoin/", "Journal du coin - Qui contrôle Bitcoin ?",
                "https://www.youtube.com/watch?v=XtsCqlCpVOQ", "Cryptoast - Podcast #3 - L'histoire du Bitcoin : Qui contrôle le Bitcoin et comment fonctionne-t-il ?",
                "https://bitcoin.fr/qui-controle-bitcoin/", "Bitcoin.fr - Qui contrôle Bitcoin ?"]
        },
        en: {
            question: "Who controls Bitcoin ?",
            answers: ["All members of network", "Satoshi Nakamoto", "USA", "Developers"],
            correct: "All members of network",
            ressources: ["https://cryptonews.com/guides/who-controls-bitcoin.htm", "CryptoNews - Who Controls Bitcoin ?"]
        }
    },
    {
        id: 7,
        fr: {
            question: "Qu’est-ce que le minage de Bitcoin ?",
            answers: ["Activité qui va sauvegarder l’historique des transactions", "Activité qui polluent", "Ça ne sert à rien", "Activité qui consiste a confirmer les transactions en les incluant dans des blocs en échange de bitcoins"],
            correct: "Activité qui consiste a confirmer les transactions en les incluant dans des blocs en échange de bitcoins",
            ressources: ["https://journalducoin.com/analyses/premiers-mineurs-bitcoin/", "Journal du coin - Les premier mineurs",
                "https://cryptonymous.fr/quel-role-mineur-bitcoin", "Cryptonymous.fr - Le role du mineur",]
        },
        en: {
            question: "What is Bitcoin mining ?",
            answers: ["Activity who save transactions history", "Activity who destroy planet", "Useless activity", "Refers to the transaction validation process"],
            correct: "Refers to the transaction validation process",
            ressources: ["https://www.bitcoin.com/get-started/what-is-bitcoin-mining/", "Bitcoin.com - What is bitcoin mining?",
                "https://www.youtube.com/watch?v=BODyqM-V71E", "Youtube: 99Bitcoins - What is Bitcoin Mining?",]
        }
    },
    {
        id: 8,
        fr: {
            question: "Qui peut utiliser bitcoin ?",
            answers: ["Les riches", "Les pays Occidentaux", "Tout le monde", "Les hommes entre 18 - 30 ans"],
            correct: "Tout le monde",
            ressources: []
        },
        en: {
            question: "Who can used Bitcoin ?",
            answers: ["Rich people", "Developped countries", "Everyone", "Guys between 18 - 30 years"],
            correct: "Everyone",
            ressources: []
        }
    }
    ,
    {
        id: 9,
        fr: {
            question: "Quels pays ont adoptes bitcoin comme monnaie légale ?",
            answers: ["France - USA", "El Salvador - République Centrafricaine", "Congo - Argentine", "Chine"],
            correct: "El Salvador - République Centrafricaine",
            ressources: ["https://cryptoast.fr/salvador-loi-bitcoin-adoptee-crypto-nation/", "Cryptoast - El Savador",
                "https://coinacademy.fr/actu/bitcoin/centrafrique-adoption-bitcoin/", "Coin Academy - République Centrafricaine",]
        },
        en: {
            question: "Which countries haved adopt Bitcoin like legal currency ?",
            answers: ["France - USA", "El Salvador - Central African Republic", "Congo - Argentina", "China"],
            correct: "El Salvador - Central African Republic",
            ressources: ["https://news.bitcoin.com/central-africa-republic-has-adopted-bitcoin-as-reference-currency-office-of-presidency/", "Bitcoin.com - Central African Republic Has Adopted Bitcoin",
                "https://bitcoinmagazine.com/markets/el-salvador-first-country-to-adopt-bitcoin", "Bitcoin magazine - EL SALVADOR BECOMES THE FIRST COUNTRY TO ADOPT BITCOIN",]
        }
    }
    ,
    {
        id: 10,
        fr: {
            question: "Quand atteindrons nous le nombre maximum de BTC en circulation ?",
            answers: ["Vers 2140", "Dans 50 ans", "Jamais le nombre de Bitcoin est infini", "En 2100"],
            correct: "Vers 2140",
            ressources: ["https://www.cointribune.com/analyses/personnalites/satoshi-nakamoto-le-dernier-bitcoin-btc-ne-sera-mine-que-dans-100-ans/", "Cointribune - dernier Bitcoin miner dans 100 ans ",
                "https://cryptoast.fr/que-va-t-il-se-passer-lorsque-le-dernier-bitcoin-sera-mine/", "Cryptoast - Que va-t-il se passer lorsque le dernier Bitcoin sera mine ?",]
        },
        en: {
            question: "When will we reach the maximum number of BTC ?",
            answers: ["About 2140", "In 50 years", "Never", "In 2100"],
            correct: "About 2140",
            ressources: ["https://www.investopedia.com/tech/what-happens-bitcoin-after-21-million-mined/", "Investopedia - What Happens to Bitcoin After All 21 Million Are Mined?"]
        }
    }
    ,
    {
        id: 11,
        fr: {
            question: "Qu'est ce que le Lightning Network ?",
            answers: ["Réseau décentralisé bâti en surcouche du réseau Bitcoin", "Blockchain indépendante a Bitcoin", "Autre nom donne au réseau Bitcoin", "Layer 2 d'Etherum"],
            correct: "Réseau décentralisé bâti en surcouche du réseau Bitcoin",
            ressources: ["https://cryptoast.fr/qu-est-ce-que-lightning-network/", "Cryptoast - Qu'est ce que Lightning Network",
                "https://decouvrebitcoin.com/le-parcours-bitcoin/chapitre-5-introduction-au-lightning-network/", "Découvre Bitcoin - Lightning Network",
                "https://www.youtube.com/watch?v=XZc9sQH3VWY&t=2928s", "Découvre Bitcoin - Comprendre le Lightning Network ! (Crash course complet)"]
        },
        en: {
            question: "What is Lightning Network ?",
            answers: ["Decantralized network built on top of Bitcoin", "A Blockchain", "Other name gived at Bitcoin network", "Layer 2 of Etherum"],
            correct: "Decantralized network built on top of Bitcoin",
            ressources: ["https://thebitcoinrabbithole.com/journey/chapter-5-lightning-network/", "Decouvre Bitcoin - Lightning Network"]
        }
    }
    ,
    {
        id: 12,
        fr: {
            question: "Le minage est-il un danger pour l'environnement ?",
            answers: ["Non", "Oui"],
            correct: "Non",
            ressources: ["http://www.coincentraliz.fr/environnement/", "CoinCentraliz - catégorie Environnement"]
        },
        en: {
            question: "Bitcoin mining is it a danger for environnment ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["https://thebitcoinrabbithole.com/topics/ecology/", "Découvre Bitcoin - Ecology"]
        }
    }
    ,
    {
        id: 13,
        fr: {
            question: "Quel est le nom de la fonction de hachage utilise pour Bitcoin ?",
            answers: ["SHA-256", "Etash", "Scrypt", "X11"],
            correct: "SHA-256",
            ressources: ["https://bitcoin.fr/quest-ce-quune-fonction-de-hachage/", "Bitcoin.fr - Fonction de Hashage"]
        },
        en: {
            question: "What is the hash function used for Bitcoin ? ",
            answers: ["SHA-256", "Etash", "Scrypt", "X11"],
            correct: "SHA-256",
            ressources: ["https://themoneymongers.com/bitcoin-hash/", "The money mogers - Bitcoin Hash Functions Explained Simply !!"]
        }
    }
    ,
    {
        id: 14,
        fr: {
            question: "Quel algorithme de consensus est utilisé pour Bitcoin ?",
            answers: ["Proof-of-Importance", "Proof-of-Stake", "Proof-of-Activity", "Proof-of-Work"],
            correct: "Proof-of-Work",
            ressources: ["https://www.briefcrypto.com/les-differents-algorithmes-de-consensus-blockchain/", "Brief Crypto - Algo de consensus",
                "https://coinacademy.fr/academie/algorithme-consensus-blockchain/", "Coin Academy - Algo consensus Blockchain",
                "https://www.youtube.com/watch?v=gtpOytEONOQ", "Coin Station - Le Proof of Work du Bitcoin explique (Preuve de Travail)"]
        },
        en: {
            question: "What is the consensus algorithm used for Bitcoin ",
            answers: ["Proof-of-Importance", "Proof-of-Stake", "Proof-of-Activity", "Proof-of-Work"],
            correct: "Proof-of-Work",
            ressources: ["https://academy.binance.com/en/articles/proof-of-work-explained", "Binance Academy - What Is Proof of Work (PoW)?"]
        }
    }
    ,
    {
        id: 15,
        fr: {
            question: "Quand a eut lieu le pizza Day ? ",
            answers: ["25 Décembre 2010", "22 Mai 2010", "1 Janvier 2009", "14 Juin 2011"],
            correct: "22 Mai 2010",
            ressources: ["https://bitcoin.fr/bitcoin-pizza-day-2/", "Bitcoin.fr - Pizza Day"]
        },
        en: {
            question: "When was pizza day ? ",
            answers: ["25 December 2010", "22 May 2010", "1 January 2009", "14 June 2011"],
            correct: "22 May 2010",
            ressources: ["https://www.coindesk.com/learn/what-is-bitcoin-pizza-day/", "CoinDesk - What Is Bitcoin Pizza Day?"]
        }
    }
    ,
    {
        id: 16,
        fr: {
            question: "Qui est Craig Wright ?",
            answers: ["Banquier", "Imposteur, affirmant être Satoshis Nakamoto", "Créateur du Bitcoin", "CEO d'un exchange"],
            correct: "Imposteur, affirmant être Satoshis Nakamoto",
            ressources: ["https://journalducoin.com/bitcoin/craig-wright-inventeur-bitcoin/", "Journal du Coin - Craig Wright"]
        },
        en: {
            question: "Who is Craig Wright ?",
            answers: ["Banker", "Impostor, claiming is it Satoshis Nakamoto", "Creator of Bitcoin", "CEO of exchange"],
            correct: "Impostor, claiming is it Satoshis Nakamoto",
            ressources: ["https://www.investopedia.com/terms/c/craig-wright.asp", "Investopedia - Who Is Craig Wright?"]
        }
    }
    ,
    {
        id: 17,
        fr: {
            question: "Le modèle économique du bitcoin est ?",
            answers: ["Inflationniste", "Déflationniste"],
            correct: "Déflationniste",
            ressources: []
        },
        en: {
            question: "Economic model of Bitooin is ?",
            answers: ["Inflationary", "Deflationary"],
            correct: "Deflationary",
            ressources: ["https://www.skalex.io/deflationary-economics-bitcoin/", "Skalex - The Deflationary Economics of the Bitcoin"]
        }
    }
    ,
    {
        id: 18,
        fr: {
            question: "Comment s'appelle le registre qui recense toutes des transactions Bitcoin ?",
            answers: ["Le grand Livre", "La Blockchain", "Le wallet", "La Base de données Bitcoin"],
            correct: "La Blockchain",
            ressources: ["https://bitcoin.fr/Blockchain/", "Bitcoin.fr - La blockchain",
                "https://www.youtube.com/watch?v=6uYRN6b5EMU", "Cryptoast - COMPRENDRE LA BLOCKCHAIN EN 7 MINUTES"]
        },
        en: {
            question: "What is the name of the register who lists all Bitcoin transactions ?",
            answers: ["The big book", "Blockchain", "Wallet", "Bitcoin Database"],
            correct: "Blockchain",
            ressources: ["https://www.investopedia.com/terms/b/blockchain.asp", "Investopedia - What Is a Blockchain ?"]
        }
    }
    ,
    {
        id: 19,
        fr: {
            question: "Qu'est-ce qu'un white paper ?",
            answers: ["C'est un recueil d'informations factuelles concernant un projet", "C'est un synonyme de Blockchain", "C'est l'algo de consensus de Bitcoin"],
            correct: "C'est un recueil d'informations factuelles concernant un projet",
            ressources: ["https://cryptoast.fr/quest-ce-quun-white-paper-livre-blanc/", "Cryptoast - Qu'est-ce qu'un white paper ?",
                "https://bitcoin.org/files/bitcoin-paper/bitcoin_fr.pdf", " Le White Paper Bitcoin "]
        },
        en: {
            question: "What is a white paper ?",
            answers: ["It is a report or guide of factual information about a project", "It's synonym of Blockchain", "It's consensu algorithm of Bticoin"],
            correct: "It is a report or guide of factual information about a project",
            ressources: ["https://www.investopedia.com/terms/w/whitepaper.asp", "Investopedia - White Paper"]
        }
    }
    ,
    {
        id: 20,
        fr: {
            question: "Quel a été le premier objet réel acheté avec du bitcoin ?",
            answers: ["Une Maison", "La Drogue", "Une Pizza", "Une Bière"],
            correct: "Une Pizza",
            ressources: ["https://journalducoin.com/bitcoin/premiere-transaction-bitcoin-douze-ans-revolution/", "Journal du Coin - Premier achat en Bitcoin "]
        },
        en: {
            question: "What is the first real object bought by Bitcoin ?",
            answers: ["A house", "Drugs", "A Pizza", "A Beer"],
            correct: "A Pizza",
            ressources: ["https://www.coindesk.com/learn/what-is-bitcoin-pizza-day/", "CoinDesk - What Is Bitcoin Pizza Day?"]
        }
    }
    ,
    {
        id: 21,
        fr: {
            question: "Comment se nomme le premier hard fork du Bitcoin",
            answers: ["Etherum", "Bitcoin Gold", "Bitcoin XT", "Bitcoin Cash"],
            correct: "Bitcoin XT",
            ressources: ["https://journalducoin.com/analyses/bitcoin-forks-histoire/", "Journal du Coin - Bitcoin Forks Histoire"]
        },
        en: {
            question: "What is the first hard fork Bitcoin ?",
            answers: ["Etherum", "Bitcoin Gold", "Bitcoin XT", "Bitcoin Cash"],
            correct: "Bitcoin XT",
            ressources: ["https://fullycrypto.com/bitcoin-xt-the-forgotten-first-bitcoin-hard-fork", "Fully Crypto - Bitcoin XT – The Forgotten First Bitcoin Hard Fork"]
        }
    }
    ,
    {
        id: 22,
        fr: {
            question: "Quelle est la plus petite unité du Bitcoin ?",
            answers: ["Le Satoshi", "Le Dollar", "Le Micro Bitcoin", "Le MiniBit"],
            correct: "Le Satoshi",
            ressources: ["https://cryptoast.fr/satoshi-definition-explication/", "Cryptoast - Satoshi définition"]
        },
        en: {
            question: "What is the smallest unit of Bitcoin ?",
            answers: ["A Satoshi", "A Dollar", "Micro Bitcoin", "A MiniBit"],
            correct: "A Satoshi",
            ressources: ["https://www.investopedia.com/terms/s/satoshi.asp", "Investopedia - Satoshi"]
        }
    }
    ,
    {
        id: 23,
        fr: {
            question: "Un nouveau bloc est mine toutes les",
            answers: ["5 Minutes", "10 Minutes", "1 Minutes", "1 Heure"],
            correct: "10 Minutes",
            ressources: ["https://bitcoin.fr/comment-la-blockchain-se-constitue-t-elle/", "Bitcoin.fr - Comment la blockchain se constitue-t-elle ?",
                "https://cryptoast.fr/bloc-blockchain-crypto-explication/", "Cryptoast - Qu'est-ce qu'un bloc dans la technologie blockchain ?"]
        },
        en: {
            question: "A new block is mined every",
            answers: ["5 Minutes", "10 Minutes", "1 Minutes", "1 hour"],
            correct: "10 Minutes",
            ressources: ["https://www.bitcoinmining.com/what-is-the-bitcoin-block-reward/", "BitcoinMinnig.com - What is the Bitcoin Mining Block Reward ?"]
        }
    }
    ,
    {
        id: 24,
        fr: {
            question: "Quel appareil permet de miner du Bitcoin ?",
            answers: ["Un Raspberry Pi", "Un ASICS", "Une carte graphique", "De la mémoire vive"],
            correct: "Un ASICS",
            ressources: ["https://www.cointribune.com/tribunes/tribune-du-mining/mining-de-bitcoins-btc-les-asics-sont-ils-indetronables/", "Cointribune - Les ASICS",
                "https://www.youtube.com/watch?v=otgvo2G9ekw", "Monsieur TK - Miner Bitcoin : Quel algorithme et ASIC choisir ?"]
        },
        en: {
            question: "What machin can mined Bitcoin ?",
            answers: ["A Raspberry Pi", "A ASICS", "Graphic card", "Ram"],
            correct: "A ASICS",
            ressources: ["https://www.investopedia.com/tech/how-does-bitcoin-mining-work/", "Investopedia - How Does Bitcoin Mining Work?"]
        }
    }
    ,
    {
        id: 25,
        fr: {
            question: "Quel type de clé il ne faut surtout pas partager ?",
            answers: ["La clé Privée", "La clé Publique"],
            correct: "La clé Privée",
            ressources: ["https://decouvrebitcoin.fr/thematique/securite/", "Decouvre Bitcoin - La sécurité"]
        },
        en: {
            question: "What is the type of keys that you don't to must share ?",
            answers: ["A private key", "A public key"],
            correct: "A private key",
            ressources: ["https://thebitcoinrabbithole.com/topics/security/", "Decouvre Bitcoin - Bitcoin security"]
        }
    }
    ,
    {
        id: 26,
        fr: {
            question: "Quel terme fait référence à des entités ou à des individus qui détiennent de grandes quantités de Bitcoin ?",
            answers: ["Un Phoenix", "Une baleine (whale)", "Un lion", "Un Exchange"],
            correct: "Une baleine (whale)",
            ressources: ["https://www.cointribune.com/guides-crypto/bien-debuter/bitcoin-btc-quest-ce-quune-whale/", "Cointribune - Une Whale"]
        },
        en: {
            question: "What term refers to entities or individuals who hold large amounts of Bitcoin ?",
            answers: ["A Phoenix", "A whale", "A lion", "A Exchange"],
            correct: "A whale",
            ressources: ["https://academy.binance.com/en/glossary/whale", "Binance Academy - Whale"]
        }
    }
    ,
    {
        id: 27,
        fr: {
            question: "Quel est le titre original du White Paper Bitcoin ?",
            answers: ["Bitcoin: A Peer-to-Peer Electronic Cash System", "Bitcoin: A Disruptive Digital Currency", "Bitcoin: A Decentralised Cash Network"],
            correct: "Bitcoin: A Peer-to-Peer Electronic Cash System",
            ressources: ["https://bitcoin.org/files/bitcoin-paper/bitcoin_fr.pdf", " Le White Paper Bitcoin "]
        },
        en: {
            question: "What is the original title of Bitcoin White Paper ?",
            answers: ["Bitcoin: A Peer-to-Peer Electronic Cash System", "Bitcoin: A Disruptive Digital Currency", "Bitcoin: A Decentralised Cash Network"],
            correct: "Bitcoin: A Peer-to-Peer Electronic Cash System",
            ressources: ["https://bitcoin.org/bitcoin.pdf", "Bitcoin.org - White paper Bitcoin"]
        }
    }
    ,
    {
        id: 28,
        fr: {
            question: "Quelle a été la première société cotée en bourse à acheter du Bitcoin en 2020 ?",
            answers: ["MicroStrategy", "Tesla", "Paypal", "Apple"],
            correct: "MicroStrategy",
            ressources: ["https://fr.cryptonews.com/exclusives/les-societes-cotees-en-bourse-qui-detiennent-bitcoin-btc-dans-leurs-reserves.htm", "CryptoNews - sociétés cotées en bourse détiennent le plus de bitcoins (BTC) dans leurs réserves"]
        },
        en: {
            question: "What is the first stock market company who buyed bitcoins in 2020 ?",
            answers: ["MicroStrategy", "Tesla", "Paypal", "Apple"],
            correct: "MicroStrategy",
            ressources: ["https://www.theblock.co/linked/74534/microstrategy-becomes-first-listed-company-to-buy-bitcoin", "The Block - Microstrategy"]
        }
    }
    ,
    {
        id: 29,
        fr: {
            question: "De quoi avez-vous besoin pour accéder à un portefeuille Bitcoin ?",
            answers: ["Un mot de Passe", "La clé public", "La seed Phrase", "Ligne de code"],
            correct: "La seed Phrase",
            ressources: ["https://coinacademy.fr/academie/definition-seed-phrase/", "Coin Academy - Qu’est-ce qu’une seed phrase en crypto ?"]
        },
        en: {
            question: "What do you need to get access to a Bitcoin wallet ?",
            answers: ["A Password", "Public key", "A seed Phrase", "Line of code"],
            correct: "A seed Phrase",
            ressources: ["https://thebitcoinrabbithole.com/topics/security/", "Decouvre Bitcoin - Bitcoin security"]
        }
    }
    ,
    {
        id: 30,
        fr: {
            question: "Qu'est-ce qu'un Soft Fork ?",
            answers: ["Une modification rétrocompatible des règles de consensus", "Une modification non rétrocompatible du protocole"],
            correct: "Une modification rétrocompatible des règles de consensus",
            ressources: ["https://www.youtube.com/watch?v=lH_JlXH2OZw", "Cryptoast - Qu’est-ce qu’un fork dans la crypto-monnaie ? Exemple avec Bitcoin (BTC)",
                "https://cryptoast.fr/qu-est-ce-qu-un-soft-hard-fork/", "Cryptoast - Quelles sont les différences entre un hard fork et un soft fork ?"]
        },
        en: {
            question: "What is a Soft Fork ?",
            answers: ["A backward compatible modification of the consensus rules", "A no-backward compatible modification of the protocol"],
            correct: "A backward compatible modification of the consensus rules",
            ressources: ["https://learn.bybit.com/blockchain/what-is-a-soft-fork/", "Bybit Learn - What Is a Soft Fork and How Does It Work?"]
        }
    }
    ,
    {
        id: 31,
        fr: {
            question: "Qu'est-ce qu'un Hard Fork ?",
            answers: ["Une modification rétrocompatible des règles de consensus", "Une modification non rétrocompatible du protocole"],
            correct: "Une modification non rétrocompatible du protocole",
            ressources: ["https://www.youtube.com/watch?v=lH_JlXH2OZw", "Cryptoast - Qu’est-ce qu’un fork dans la crypto-monnaie ? Exemple avec Bitcoin (BTC)",
                "https://cryptoast.fr/qu-est-ce-qu-un-soft-hard-fork/", "Cryptoast - Quelles sont les différences entre un hard fork et un soft fork ?"]
        },
        en: {
            question: "What is a Hard Fork ?",
            answers: ["A backward compatible modification of the consensus rules", "A no-backward compatible modification of the protocol"],
            correct: "A no-backward compatible modification of the protocol",
            ressources: ["https://learn.bybit.com/blockchain/what-is-a-hard-fork/", "Bybit Learn - What Is a Hard Fork & How Does it Work?"]
        }
    }
    ,
    {
        id: 32,
        fr: {
            question: "Quel débat a été mis en avant lors de la Bloc Size War (guerre des blocs) ?",
            answers: ["Le débat sur le nom Bitcoin", "Le débat sur la DEFI", "Le débat sur l'adoption", "Le débat sur la scalabilité"],
            correct: "Le débat sur la scalabilité",
            ressources: ["https://journalducoin.com/analyses/passage-echelle-bitcoin-impossible-compromis/", "Journal du Coin - Bitcoin et la guerre des blocs",
                "https://bitconseil.fr/bitcoin-guerre-blocs/", "Bit Conseil - Guerre des blocs #1",
                "https://bitconseil.fr/guerre-des-blocs-2/", "Bit Conseil - Guerre des blocs #2"]
        },
        en: {
            question: "What debate has been highlighted during Bloc Size War ?",
            answers: ["About Bitcoin name", "About DEFI", "About adoption", "About scalability"],
            correct: "About scalability",
            ressources: ["https://steemit.com/bitcoin/@tobixen/a-brief-history-of-the-bitcoin-block-size-war", "Steemit - A brief history of the Bitcoin block size war"]
        }
    }
    ,
    {
        id: 33,
        fr: {
            question: "Faut-il faire un prêt bancaire pour investir dans Bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: []
        },
        en: {
            question: "Do you need a bank loan to invest in bitcoin ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: []
        }
    }
    ,
    {
        id: 34,
        fr: {
            question: "Faut-il mettre la totalité de ces revenus dans Bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: []
        },
        en: {
            question: "Should all of this revenue be put into Bitcoin ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: []
        }
    }
    ,
    {
        id: 35,
        fr: {
            question: "Qu'est-ce que le DCA ( Dollar Cost Averaging) ? ",
            answers: ["Stratégie qui consiste à acheter une cryptomonnaie de façon aléatoire", "Stratégie qui consiste à acheter une cryptomonnaie pour la même somme à des intervalles réguliers", "Stratégie qui consiste à acheter une cryptomonnaie en début de journée et de vendre en fin de journée"],
            correct: "Le DCA est une stratégie qui consiste à acheter une cryptomonnaie pour la même somme à des intervalles réguliers",
            ressources: ["https://coinacademy.fr/guides/linvestissement-programme-dca-la-methode-la-plus-sure-pour-investir-en-crypto/", "Coin Academy - Methode DCA"]
        },
        en: {
            question: "What is DCA ( Dollar Cost Averaging) ? ",
            answers: ["Strategy where you bought cryptocurrency randomly", "Strategy where you bought cryptocurrency for the same amount at regular intervals", "Strategie where you bought a cryptocurrency at the beginning of the day and sell at the end of the day"],
            correct: "Strategy where you bought cryptocurrency for the same amount at regular intervals",
            ressources: ["https://www.investopedia.com/terms/d/dollarcostaveraging.asp", "Inestopedia - Dollar-Cost Averaging (DCA)"]
        }
    }
    ,
    {
        id: 36,
        fr: {
            question: "Bitcoin est-il :",
            answers: ["Anonyme", "Pseudonyme", "Transparent"],
            correct: "Pseudonyme",
            ressources: ["https://cryptoast.fr/bitcoin-n-est-pas-anonyme-mais-pseudonyme/", "Cryptoast - Contrairement aux idées reçues, Bitcoin n'est PAS anonyme..."]
        },
        en: {
            question: "Bitcoin is it :",
            answers: ["Anonymous", "Pseudonym", "Transparent"],
            correct: "Pseudonym",
            ressources: ["https://www.buybitcoinworldwide.com/anonymity/", "BuyBitcoin Worldwilde - Bitcoin Anonymity - Is Bitcoin Anonymous?"]
        }
    }
    ,
    {
        id: 37,
        fr: {
            question: "Qu’est-ce qu’une seed phrase ?",
            answers: ["Un mot de passe choisit par vous", "Suite de mots, 12 ou 24 vous servant de clé de récupération de votre wallet", "Suite de caractères aléatoires", "Suite de mots, souvent 12 ou 24 vous servant a valider des transactions"],
            correct: "Suite de mots, 12 ou 24 vous servant de clé de récupération de votre wallet",
            ressources: ["https://coinacademy.fr/academie/definition-seed-phrase/", "Coin Academy - Qu’est-ce qu’une seed phrase en crypto ?"]
        },
        en: {
            question: "What is a seed phrase ?",
            answers: ["A password chosen by you", "Sequence of words, 12 or 24 serving as your wallet recovery key", "Sequence of random characters", "Sequence of words, 12 or 24 serving as validate transactions"],
            correct: "Sequence of words, 12 or 24 serving as your wallet recovery key",
            ressources: ["https://www.coindesk.com/learn/what-is-a-seed-phrase/", "CoinDesk - What Is a Seed Phrase?"]
        }
    }
    ,
    {
        id: 38,
        fr: {
            question: "Y a-t-il eu d'autres crypto-monnaie avant Bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://www.espritcrypto.com/histoire-bitcoin/", "Esprit Crypto - Histoire du Bitcoin",
                "https://bitcoin.fr/Histoire/", "Bitcoin.fr - Les grandes dates de Bitcoin"]
        },
        en: {
            question: "Were there other cryptocurrencies before Bitcoin ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: ["https://www.investopedia.com/tech/were-there-cryptocurrencies-bitcoin/", "Inestopedia - What Was the First Cryptocurrency?"]
        }
    }
    ,
    {
        id: 39,
        fr: {
            question: "Que sont les Altcoins ?",
            answers: ["Toutes les crypto sauf Bitcoin", "Toutes les crypto et Bitcoin", "Autre nom donné à Bitcoin"],
            correct: "Toutes les crypto sauf Bitcoin",
            ressources: ["https://fr.cryptonews.com/guides/what-are-altcoins.htm", "Crypto News - Qu'est ce qu'un Altcoin"]
        },
        en: {
            question: "What is Altcoins ?",
            answers: ["All crypto except Bitcoin", "All crypto and Bitcoin", "Other name gived to Bitcoin"],
            correct: "All crypto except Bitcoin",
            ressources: ["https://academy.binance.com/en/glossary/altcoin", "Binance Academy - Altcoin"]
        }
    }
    ,
    {
        id: 40,
        fr: {
            question: "A quoi sert un nœud ?",
            answers: ["Valider des transactions - Miner du Bitcoin", "Décentraliser le réseau - Décider des règles du consensus - Recevoir et envoyer des transactions", "Décentraliser le réseau - Miner du Bitcoin"],
            correct: "Décentraliser le réseau - Décider des règles du consensus - Recevoir et envoyer des transactions",
            ressources: ["https://decouvrebitcoin.fr/thematique/noeud/", "Découvre Bitcoin - Noeud"]
        },
        en: {
            question: "What is a node for ?",
            answers: ["Valid transactions and mined Bitcoin", "Decentralized network - Decided on consensus rules - Receive and send transactions", "Decentralized network - Mined Bitcoin"],
            correct: "Decentralized network - Decided on consensus rules - Receive and send transactions",
            ressources: ["https://thebitcoinrabbithole.com/topics/bitcoin-node/", "Decouvre Bitcoin - Nodes"]
        }
    }
    ,
    {
        id: 41,
        fr: {
            question: "Peut-on faire tourner un nœud Bitcoin sur son ordinateur perso ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://decouvrebitcoin.fr/thematique/noeud/", "Découvre Bitcoin - Noeud"]
        },
        en: {
            question: "Can you run a Bitcoin node on your personal computer ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: ["https://thebitcoinrabbithole.com/topics/bitcoin-node/", "Decouvre Bitcoin - Nodes"]
        }
    }
    ,
    {
        id: 42,
        fr: {
            question: "Quel type de wallet est le plus sécurise ?",
            answers: ["Cold Wallet", "Wallet Multi-signature", "Hot Wallet"],
            correct: "Wallet Multi-signature",
            ressources: ["https://decouvrebitcoin.fr/thematique/securite/", "Découvre Bitcoin - Sécurité",
                "https://www.youtube.com/watch?v=UhiclrzZ7A8", "Hasheur - Quel portefeuille crypto choisir ? Wallet"]
        },
        en: {
            question: "What type of wallet is safer ?",
            answers: ["Cold Wallet", "Wallet Mutli-signature", "Hot Wallet"],
            correct: "Wallet Mutli-signature",
            ressources: ["https://thebitcoinrabbithole.com/topics/security/", "Découvre Bitcoin - Bitcoin security"]
        }
    }
    ,
    {
        id: 43,
        fr: {
            question: "Combien y-a-t-il de satoshis dans un Bitcoin ?",
            answers: ["100 Mille", "1 Million", "100 Millions", "1 Milliard"],
            correct: "100 Millions",
            ressources: ["https://www.cointribune.com/guides-crypto/bien-debuter/bitcoin-btc-quest-ce-quun-satoshi/", "Cointribune - Qu’est-ce qu’un satoshi ?"]
        },
        en: {
            question: "How many satoshis there in 1 bitcoin ?",
            answers: ["100 Thousand", "1 Million", "100 Million", "1 Billion"],
            correct: "100 Million",
            ressources: ["https://www.investopedia.com/terms/s/satoshi.asp", "Investopedia - Satoshi"]
        }
    }
    ,
    {
        id: 44,
        fr: {
            question: "Le Lightning Network permet-il de faire des transactions immédiates ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Découvre Bitcoin - Lightning Network"]
        },
        en: {
            question: "Lightning Network does it allow doing immediate transactions ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: ["https://thebitcoinrabbithole.com/journey/chapter-5-lightning-network/", "Decouvre Bitcoin - Lightning Network"]
        }
    }
    ,
    {
        id: 45,
        fr: {
            question: "Le Lightning Network permet d'appliquer des frais de transaction :",
            answers: ["En fonction du montant de la transaction", "En fonction du poids de la transaction", "Ce sont les mineurs et nœuds qui fixe les frais"],
            correct: "En fonction du montant de la transaction",
            ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Découvre Bitcoin - Lightning Network"]
        },
        en: {
            question: "Lightning Network allows you to apply transaction fees :",
            answers: ["On the amount of the transaction", "On the weight of the transaction", "This is miners and nodes who set fees"],
            correct: "On the amount of the transaction",
            ressources: ["https://thebitcoinrabbithole.com/journey/chapter-5-lightning-network/", "Découvre Bitcoin - Lightning Network"]
        }
    }
    ,
    {
        id: 46,
        fr: {
            question: "Le réseau Bitcoin applique les frais de transaction en fonction ?",
            answers: ["Du montant de la transaction", "Du poids de la transaction", "Du prix de l'électricité"],
            correct: "En fonction du poids de la transaction",
            ressources: ["https://bitcoin.fr/bitcoin-comprendre-les-frais-de-transaction/", "Bitcoin.fr - Comprendre les frais de transaction",
                "https://www.cointribune.com/blockchain/ecosysteme/les-frais-moyens-de-transaction-de-bitcoins-btc-sont-a-104-une-premiere-depuis-deux-ans/", "Cointribune - Frais de transaction"]
        },
        en: {
            question: "The Bitcoin network set transaction fees based on ?",
            answers: ["The amount of the transaction", "The weight of the transaction", "Electicity price"],
            correct: "The weight of the transaction",
            ressources: ["https://river.com/learn/how-bitcoin-fees-work/", "River Financial - How Bitcoin Fees Work"]
        }
    }
    ,
    {
        id: 47,
        fr: {
            question: "Les bitcoins présents sur votre compte dans un Exchange, vous appartiennent-ils ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://www.cointribune.com/analyses/strategie/laisser-ses-btc-sur-les-exchanges-revient-a-shorter-le-bitcoin/", "Cointribune - Laisser ses BTC sur les exchanges revient à shorter le bitcoin",
                "https://cryptoast.fr/est-ce-dangereux-de-laisser-coins-exchange/", "Cryptoast - Est-ce dangereux de laisser ses cryptomonnaies sur un exchange"]
        },
        en: {
            question: "Bitcoins in your account on exchange, do they belong to you ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["https://www.ledger.com/academy/not-your-keys-not-your-coins-why-it-matters", "Ledger - Not Your Keys, Not Your Coins. It’s That Simple."]
        }
    }
    ,
    {
        id: 48,
        fr: {
            question: "Un Hardware Wallet est-il connecte à internet ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://www.cointribune.com/analyses/cybersecurite/les-differents-types-de-wallets-crypto/", "Cointribune - Type de wallets",
                "https://www.youtube.com/watch?v=UhiclrzZ7A8", "Hasheur - Quel portefeuille crypto choisir ? Wallet"]
        },
        en: {
            question: "A hardware wallet it is connect to internet ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["https://bitcoinmagazine.com/culture/using-a-bitcoin-hardware-wallet", "Bitcoin Magazin - HOW BITCOINERS SHOULD USE THEIR HARDWARE WALLETS"]
        }
    }
    ,
    {
        id: 49,
        fr: {
            question: "Les Etats peuvent-ils arrêter Bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://www.youtube.com/watch?v=C2da4NiMPF0", "Découvre Bitcoin - Bitcoin Q&A N°26 - Et si Bitcoin se fait bannir ?"]
        },
        en: {
            question: "States can stop Bitcoin ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["https://decrypt.co/37366/can-a-country-actually-ban-bitcoin", "Decrypt - Can A Country Actually Ban Bitcoin?"]
        }
    }
    ,
    {
        id: 50,
        fr: {
            question: "Mixer ses coins permet :",
            answers: ["Faire des transactions gratuite", "Plus de traçabilité", "Plus de vie privée", "Plus de sécurité"],
            correct: "Plus de vie privée",
            ressources: ["https://decouvrebitcoin.fr/tutoriels/mixage/", "Découvre Bitcoin - Tuto Mixage (John on Chain)"]
        },
        en: {
            question: "Mixing coins allows :",
            answers: ["Make free transactions", "More tracability", "More private life", "More secure"],
            correct: "More private life",
            ressources: ["https://news.bitcoin.com/how-to-mix-your-bitcoins-using-coinjoin/", "Bitcoin.com - How to Mix Your Bitcoins Using Coinjoin for Greater Privacy"]
        }
    }
    ,
    {
        id: 51,
        fr: {
            question: "Un nœud Bitcoin permet :",
            answers: ["De vérifier l'intégrité des transactions", "Miner du Bitcoin", "Contrôler le prix du Bitcoin", "Interdire des transactions"],
            correct: "De vérifier l'intégrité des transactions",
            ressources: ["https://decouvrebitcoin.fr/thematique/noeud/", "Découvre Bitcoin - Noeud"]
        },
        en: {
            question: "A Bitcoin node allows :",
            answers: ["Verify transactions integrity", "Mined Bitcoin", "Control Bitcoin price", "ban transactions"],
            correct: "Verify transactions integrity",
            ressources: ["https://thebitcoinrabbithole.com/topics/bitcoin-node/", "Decouvre Bitcoin - Nodes"]
        }
    }
    ,
    {
        id: 52,
        fr: {
            question: "Lorsque vous ouvrez un canal Lightning Network pouvez-vous recevoir des Bitcoins immédiatement ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Découvre Bitcoin - Lightning Network",
                "https://academie.decouvrebitcoin.fr/courses/ln-201-introduction-theorique-au-lightning-network/", "Découvre Bitcoin - Introduction théorique au Lightning Network"]
        },
        en: {
            question: "When you open a lightning network canal can you receive bitcoins immediately ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["https://thebitcoinrabbithole.com/journey/chapter-5-lightning-network/", "Découvre Bitcoin - Lightning Network"]
        }
    }
    ,
    {
        id: 53,
        fr: {
            question: "Le réseau Lightning Network est-il aussi sécurise que le réseau Bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Découvre Bitcoin - Lightning Network",]
        },
        en: {
            question: "Lightning Network it is as secure than Bitcoin network ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["https://thebitcoinrabbithole.com/journey/chapter-5-lightning-network/", "Découvre Bitcoin - Lightning Network"]
        }
    }
    ,
    {
        id: 54,
        fr: {
            question: "Quelle implémentation n'est pas liée au Lightning Network ?",
            answers: ["C-Lightning", "Eclair", "LND", "RGB"],
            correct: "RGB",
            ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Découvre Bitcoin - Lightning Network",
                "https://www.youtube.com/watch?v=Yv3H_Yi9TPM&t=2s", "Surfin Bitcoin - La finance de demain avec Lightning Network & Bitcoin"]
        },
        en: {
            question: "What implementation is not related to Lightning Network ?",
            answers: ["C-Lightning", "Eclair", "LND", "RGB"],
            correct: "RGB",
            ressources: ["https://thebitcoinrabbithole.com/journey/chapter-5-lightning-network/", "Découvre Bitcoin - Lightning Network"]
        }
    }
    ,
    {
        id: 55,
        fr: {
            question: "Sur quel protocole Bitcoin pourra-t-on exécuter des 'contrats intelligents - smart contracts' ? ",
            answers: ["Lightning Network", "Liquid", "RGB", "Réseau principal Bitcoin"],
            correct: "RGB",
            ressources: ["https://bitcoin.fr/fonctionnement-du-protocole-rgb/", "Bitcoin.fr - Fonctionnement protocole RGB",
                "https://www.youtube.com/watch?v=-6pZrQQ8uks", "Univers Bitcoin - RGB : DeFi sur Bitcoin ? Avec Julien Guitton de Condensat - UBP#46"]
        },
        en: {
            question: "On which Bitcoin protocol the smarts contracts will be able they be executed ?",
            answers: ["Lightning Network", "Liquid", "RGB", "principal bitcoin network"],
            correct: "RGB",
            ressources: ["https://www.rgbfaq.com/what-is-rgb", "RGB - What is RGB ?"]
        }
    }
    ,
    {
        id: 56,
        fr: {
            question: "Le Bitcoin est souvent comparer ",
            answers: ["Aux Monnaies fiat", "à l'Or", "Aux Actions", "Aux pierres précieuses"],
            correct: "à l'Or",
            ressources: ["https://cryptoast.fr/comparaison-bitcoin-et-or/", "Cryptoast - Comparaison du Bitcoin et de l'or"]
        },
        en: {
            question: "Bitcoin is often a comparator to ",
            answers: ["Fiat currency", "Gold", "Stocks", "precious stones"],
            correct: "Gold",
            ressources: ["https://www.investopedia.com/news/should-you-buy-gold-or-bitcoin/", "Inestopedia - Gold vs. Bitcoin"]
        }
    }
    ,
    {
        id: 57,
        fr: {
            question: "Quelle est la meilleure stratégie d'investissement pour du long terme ?",
            answers: ["Le trading", "Le gambling", "DCA (Dollar Cost Averaging)", "Faucet Bitcoin"],
            correct: "DCA (Dollar Cost Averaging)",
            ressources: ["https://www.youtube.com/watch?v=ZrAXTXpMFvs", "Surfin Bitcoin - Bitcoin : trader ou investir, il faut choisir !",
                "https://www.cointribune.com/analyses/investissements/le-dca-une-technique-efficace-en-temps-de-crise/", "Cointribune - DCA technique efficace en temps de crise"]
        },
        en: {
            question: "What is the best investment strategy for long term ?",
            answers: ["Trading", "gambling", "DCA (Dollar Cost Averaging)", "Faucet Bitcoin"],
            correct: "DCA (Dollar Cost Averaging)",
            ressources: ["https://www.buybitcoinworldwide.com/dollar-cost-averaging/", "BuyBitcoin WorldWide - What is Dollar Cost Averaging (DCA) in Bitcoin ?"]
        }
    }
    ,
    {
        id: 58,
        fr: {
            question: "Si j'achète du Bitcoin et que je n'y touche pas (je Hold), dois-je déclarer mes Bitcoins ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://decouvrebitcoin.fr/thematique/juridique/", "Découvre Bitcoin - Juridique"]
        },
        en: {
            question: "If i bought bitcoin but I don't touch it, I declare my bitcoins ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["https://www.bitcoin.com/get-started/cryptocurrency-taxation-in-the-us/", "Bitcoin.com - Cryptocurrency taxation in the US"]
        }
    }
    ,
    {
        id: 59,
        fr: {
            question: "Est-ce qu'on peut stopper une transaction Bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://bitcoin.fr/ce-que-vous-devez-savoir/", "Bitcoin.fr - Choses à Savoir "]
        },
        en: {
            question: "Can we stop Bitcoin transaction ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["https://bitcoin.org/en/you-need-to-know", "Bitcoin.org - Some things you need to know"]
        }
    }
    ,
    {
        id: 60,
        fr: {
            question: "Comment s'appelle l'algorithme de cryptographie utilise sur Bitcoin ?",
            answers: ["DSE", "RSA", "AES", "ECDSA"],
            correct: "ECDSA",
            ressources: ["https://academy.bit2me.com/fr/que-es-ecdsa-curva-eliptica/", "Bit2Me Academy - Algorithme ECDSA"]
        },
        en: {
            question: "What is the name cryptography algorithm used in Bitcoin ?",
            answers: ["DSE", "RSA", "AES", "ECDSA"],
            correct: "ECDSA",
            ressources: ["https://www.pluralsight.com/guides/the-cryptography-of-bitcoin", "Pluralsight - The Cryptography of Bitcoin"]
        }
    }
    ,
    {
        id: 61,
        fr: {
            question: "La cryptographie asymétrique est-elle utilise pour Bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://bitcoin.fr/la-cryptographie-asymetrique-cest-quoi-a-quoi-ca-sert/", "Bitcoin.fr - La cryptographie asymétrique, c’est quoi ? A quoi ca sert ?",
                "https://cryptoast.fr/cryptographie-asymetrique-bitcoin/", "Cryptoast - Cryptographie asymétrique : quel lien avec Bitcoin ?"]
        },
        en: {
            question: "Asymmetric cryptography is it used in Bitcoin ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: ["https://www.bitpanda.com/academy/en/lessons/what-is-asymmetric-encryption/", "BitPanda - What is asymmetric encryption ?"]
        }
    }
    ,
    {
        id: 62,
        fr: {
            question: "Quelle est la taille maximum d'un bloc Bitcoin ?",
            answers: ["1 Ko", "1 Mo", "4 Mo", "1 Go"],
            correct: "1 Mo",
            ressources: ["https://thecrypto.app/fr/knowledge/why-is-the-bitcoin-block-size-limited/", "The Crypto app - Pourquoi la taille du bloc Bitcoin est-elle limitée ?",
                "https://journalducoin.com/bitcoin/secret-de-satoshi-blocs-de-bitcoin-limites-a-1-mo/", "Journal du Coin - Pourquoi les blocs Bitcoin ont une taille limite ?"]
        },
        en: {
            question: "What is the maximum size of a bitcoin block ?",
            answers: ["1 Ko", "1 Mo", "4 Mo", "1 Go"],
            correct: "1 Mo",
            ressources: ["https://blog.bitstamp.net/post/what-is-block-size/", "Bitstamp - What is block size ?"]
        }
    }
    ,
    {
        id: 63,
        fr: {
            question: "Grace au protocole SegWit, théoriquement, la taille maximum d'un bloc Bitcoin peut être de :",
            answers: ["1 Mo", "36 Mo", "4 Mo", "1 Go"],
            correct: "4 Mo",
            ressources: ["https://cryptoast.fr/segwit-bitcoin-explication-definition/", "Cryptoast - Segwit explication",
                "https://journalducoin.com/bitcoin/segwit-la-modification-de-bitcoin-que-personne-ne-comprenait/", "Journal du Coin - Segwit"]
        },
        en: {
            question: "With SegWit protocol, theoretically, the maximum size of a bitcoin block can be :",
            answers: ["1 Mo", "36 Mo", "4 Mo", "1 Go"],
            correct: "4 Mo",
            ressources: ["https://blog.bitstamp.net/post/what-is-block-size/", "Bitstamp - What is block size ?"]
        }
    }
    ,
    {
        id: 64,
        fr: {
            question: "Bitcoin est-il utilise uniquement pour du paiement ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://bitcoin.fr/les-applications-de-bitcoin-la-propriete-intellectuelle/", "Bitcoin.fr - La propriété intellectuelle",
                "https://bitcoin.fr/une-application-de-bitcoin-le-certificat-d-authenticite/", "Bitcoin.fr - Le certificat d’authenticité",
                "https://bitcoin.fr/shocard/", "Bitcoin.fr - Bitcoin prouve votre identité"]
        },
        en: {
            question: "Bitcoin is it used uniquely for payments ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["https://www.investopedia.com/ask/answers/100314/why-do-bitcoins-have-value.asp", "Investopedia - Why Do Bitcoins Have Value ?"]
        }
    }
    ,
    {
        id: 65,
        fr: {
            question: "Qu’est-ce qu’une DAO ?",
            answers: ["Organisation Autonome Décentralisée", "Organisation Autonome Centralisée", "Organisation Anonyme Centralisée", "Organisation Anonyme Décentralisée"],
            correct: "Organisation Autonome Décentralisée",
            ressources: ["https://cryptoast.fr/dao-organisation-decentralisee/", "Cryptoast - Qu'est-ce qu'une DAO ?",
                "https://fr.cryptonews.com/exclusives/quest-ce-quune-organisation-autonome-decentralisee-dao.htm", "CryptoNews - Qu'est-ce qu'une DAO ?"]
        },
        en: {
            question: "What is a DAO ?",
            answers: ["A decentralized autonomous organization", "A Centralized autonomous organization", "Centralized anonymous organization", "Decentralized anonymous organization"],
            correct: "A decentralized autonomous organization",
            ressources: ["https://www.coindesk.com/learn/what-is-a-dao/", "CoinDesk - What Is a DAO?"]
        }
    }
    ,
    {
        id: 66,
        fr: {
            question: "Bitcoin utilise une blockchain :",
            answers: ["Privée", "Publique"],
            correct: "Publique",
            ressources: ["https://cryptoast.fr/differences-blockchain-publique-blockchain-privee/", "Cryptoast - Blockchain publique et blockchain privée : quelles différences ?"]
        },
        en: {
            question: "Bitcoin used blockchain :",
            answers: ["Private", "Public"],
            correct: "Public",
            ressources: ["https://www.investopedia.com/terms/b/blockchain.asp", "Investopedia - What Is a Blockchain ?"]
        }
    }
    ,
    {
        id: 67,
        fr: {
            question: "En quoi consiste une attaque 51% ?",
            answers: ["Prendre le contrôle de + 50% des bitcoins", "Prendre le contrôle de + 50% de la puissance de calcul du réseau", "Prendre le contrôle de + 50% des nœud du réseau", "Prendre le contrôle de + 50% des wallets Bitcoin"],
            correct: "Prendre le contrôle de + 50% de la puissance de calcul du réseau",
            ressources: ["https://www.youtube.com/watch?v=b1HU-cQ9Pds", "Grand Angle Crypto - L'attaque des 51% : mort du bitcoin ou pas ?",
                "https://bitcoin.fr/quest-ce-quune-attaque-des-51/", "Bitdcoin.fr - Qu’est-ce qu’une attaque des 51% ?"]
        },
        en: {
            question: "What is a 51% attack ?",
            answers: ["Take control more than 50% of bitcoins", "Take control more than 50% of the network's mining hash rate", "Take control more than 50% of network's nodes", "Take control more than 50% of Bitcoin wallets"],
            correct: "Take control more than 50% of the network's mining hash rate",
            ressources: ["https://www.coindesk.com/learn/what-is-a-51-attack/", "CoinDesk - What Is a 51% Attack ?"]
        }
    }
    ,
    {
        id: 68,
        fr: {
            question: "Que signifie le Hashrate ?",
            answers: ["Le nombre de transaction par seconde", "La puissance de calcul par minute", "La puissance de calcul par seconde", "La rapidité de validation d'un transaction"],
            correct: "La puissance de calcul par seconde",
            ressources: ["https://cryptonaute.fr/quest-ce-que-le-hashrate-en-cryptomonnaie/", "Cryptonaute - Qu’est-ce que le hashrate en cryptomonnaie ?"]
        },
        en: {
            question: "What is the Hashrate ?",
            answers: ["Number of transactions by secondes", "Computing power by minute", "Computing power by seconde", "Validation speed of transaction"],
            correct: "Computing power by seconde",
            ressources: ["https://www.coindesk.com/tech/2021/02/05/what-does-hashrate-mean-and-why-does-it-matter/", "CoinDesk - What Does Hashrate Mean and Why Does It Matter ?"]
        }
    }
    ,
    {
        id: 69,
        fr: {
            question: "Qu'est-ce qu'un BIP ?",
            answers: ["Une proposition d'amélioration de Bitcoin", "Un protocole Bitcoin", "Une crypto", "Un Wallet"],
            correct: "Une proposition d'amélioration de Bitcoin",
            ressources: ["https://cryptoast.fr/bip-bitcoin-improvement-proposal/", "Cryptoast - Qu'est-ce qu'un BIP ?"]
        },
        en: {
            question: "What is a BIP ?",
            answers: ["Bitcoin improvement proposal", "A Bitcoin protocol", "A cryptocurrency", "A Wallet"],
            correct: "Bitcoin improvement proposal",
            ressources: ["https://cointelegraph.com/explained/what-are-bitcoin-improvement-proposals-bips-and-how-do-they-work", "CoinTelegraph - What are Bitcoin improvement proposals (BIPs)"]
        }
    }
    ,
    {
        id: 70,
        fr: {
            question: "Par quelle méthode on peut partager l'accès à un wallet entre plusieurs personnes de manière sécurisée ?",
            answers: ["En partageant sa clé privée", "En partageant sa clé public", "Grâce au multi-sig"],
            correct: "Grâce au multi-sig",
            ressources: ["https://academy.binance.com/fr/articles/what-is-a-multisig-wallet", "Binance Academy - Qu'est-ce qu'un Portefeuille Multisig?",
                "https://www.youtube.com/watch?v=mb6R2POi3vQ", "Hasheur - Portefeuille crypto multi-signature (Multisig) | Tutoriel, comment ca marche ?"]
        },
        en: {
            question: "How can we share access to a wallet between people securely ?",
            answers: ["Share your private key", "Share your public key", "with multi-sig"],
            correct: "with multi-sig",
            ressources: ["https://coinguides.org/multisig-multi-signature-wallet/", "Coin Guides - What is a Multisig?"]
        }
    }
    ,
    {
        id: 71,
        fr: {
            question: "Combien de bitcoins sont mines en ce moment dans chaque bloc ?",
            answers: ["3.125", "6,25", "10", "12.5"],
            correct: "6,25",
            ressources: ["https://bitcoin.fr/evolution-du-nombre-de-bitcoins-a-travers-le-temps/", "Bitcoin.fr - Evolution du nombre de bitcoins a travers le temps"]
        },
        en: {
            question: "How many bitcoins are mined right now in each block ?",
            answers: ["3.125", "6,25", "10", "12.5"],
            correct: "6,25",
            ressources: ["https://academy.binance.com/en/halving", "Binance - Bitcoin Halving Countdown"]
        }
    }
    ,
    {
        id: 72,
        fr: {
            question: "En quelle année interviendra le prochain halving ?",
            answers: ["2024", "2025", "2026", "2028"],
            correct: "2024",
            ressources: ["https://www.cointribune.com/guides-crypto/bien-debuter/bitcoin-btc-quest-ce-que-le-halving/", "Cointribune.com - Le halving",
                "https://www.youtube.com/watch?v=gl6JIA8zt90", "Découvre Bitcoin - Bitcoin Q&A N°22 : Pourquoi un Halving tous les 4 ans ?",
                "https://academy.binance.com/fr/halving", "Binance.com - Halving"]
        },
        en: {
            question: "In which year will the next halving ?",
            answers: ["2024", "2025", "2026", "2028"],
            correct: "2024",
            ressources: ["https://academy.binance.com/en/halving", "Binance - Bitcoin Halving Countdown"]
        }
    }
    ,
    {
        id: 73,
        fr: {
            question: "Combien de mots différents contient le dictionnaire utilise pour générer les seeds phrases ?",
            answers: ["1024", "2048", "4096", "10 000"],
            correct: "2048",
            ressources: ["https://journalducoin.com/actualites/phrases-mnemoniques/", "Journal du coin - Comment fonctionnent les Seeds ?",
                "https://www.bitcoinsafety.com/blogs/bitcoin/seed-phrase-list", "Bitcoin Safety - Complete list of 2048 BIP-39"]
        },
        en: {
            question: "How many words contains dictionary used for seed phrase generation ?",
            answers: ["1024", "2048", "4096", "10 000"],
            correct: "2048",
            ressources: ["https://www.bitcoinsafety.com/blogs/bitcoin/seed-phrase-list", "Bitcoin Safety - Complete list of 2048 BIP-39"]
        }
    }
    ,
    {
        id: 74,
        fr: {
            question: "Quel nom a été donne à la mise à jour du protocole Bitcoin qui a introduit les signatures de Schnorr ?",
            answers: ["Liquid", "SegWit", "Lightning Network", "Taproot"],
            correct: "Taproot",
            ressources: ["https://bitcoin.fr/activation-de-taproot/", "Bitcoin.fr - Activation de Taproot",
                "https://cryptoast.fr/mise-a-niveau-taproot-bitcoin-btc-activee/", "Cryptoast - La mise a niveau Taproot de Bitcoin"]
        },
        en: {
            question: "What is the name of the Bitcoin protocol who introduced Schnorr's signatures ?",
            answers: ["Liquid", "SegWit", "Lightning Network", "Taproot"],
            correct: "Taproot",
            ressources: ["https://themoneymongers.com/bitcoin-schnorr-signatures/", "The Money mongers - Bitcoin Schnorr Signatures: A Beginner’s Introduction ",
                "https://medium.com/interdax/how-will-schnorr-signatures-benefit-bitcoin-b4482cf85d40", "Medium - How will Schnorr Signatures Benefit Bitcoin ?"]
        }
    }
    ,
    {
        id: 75,
        fr: {
            question: "Quelle est l'atout principal du consensus Proof-of-Work de Bitcoin ?",
            answers: ["La scalabilité du réseau", "La sécurité du réseau", "Des frais de transaction faible", "Le contrôle du réseau"],
            correct: "La sécurité du réseau",
            ressources: ["https://journalducoin.com/lexique/proof-of-work/", "Journal du Coin - Proof-of-work : définition et explication",
                "https://www.youtube.com/watch?v=0uYJQpuNxDs&t=590s", "Cryptoast - Qu’est-ce que le minage de crypto-monnaies ?"]
        },
        en: {
            question: "What is the main advantage of the Bitcoin proof-of-work consensus ?",
            answers: ["Network scalability", "Network security", "Low transaction fees", "Network control"],
            correct: "Network security",
            ressources: ["https://99bitcoins.com/proof-of-work-proof-of-stake/", "99Bitcoins - What is Proof of Work?"]
        }
    }
    ,
    {
        id: 76,
        fr: {
            question: "A partir de quel cout d'électricité il devient rentable de miner des bitcoins ?",
            answers: ["1 € / kWh", "0,06 € / kWh", "0,04 € / kWh", "0,1 € / kWh"],
            correct: "0,06 € / kWh",
            ressources: []
        },
        en: {
            question: "From what electricity cost it becomes profitable to mined bitcoins ?",
            answers: ["1 € / kWh", "0,06 € / kWh", "0,04 € / kWh", "0,1 € / kWh"],
            correct: "0,06 € / kWh",
            ressources: ["https://river.com/learn/is-bitcoin-mining-profitable/", "River - Is Bitcoin Mining Profitable ?"]
        }
    }
    ,
    {
        id: 77,
        fr: {
            question: "Combien de transactions contient généralement un bloc plein ?",
            answers: ["1000-2000", "2000-3000", "5000", "10 000"],
            correct: "2000-3000",
            ressources: ["https://academy.bit2me.com/fr/que-es-escalabilidad-de-bitcoin/", "Bit2me Academy - Qu'est-ce que l'évolutivité Bitcoin?"]
        },
        en: {
            question: "How many transactions usually contains a full block ?",
            answers: ["1000-2000", "2000-3000", "5000", "10 000"],
            correct: "2000-3000",
            ressources: ["https://blog.bitstamp.net/post/what-is-block-size/", "Bitstamp - What is block size ?"]
        }
    }
    ,
    {
        id: 78,
        fr: {
            question: "Est-ce qu'une même transaction on-Chain peut être utilisée pour payer plusieurs destinataires ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://thecrypto.app/fr/knowledge/how-bitcoin-transactions-work/#One_Input_8211_Multiple_Outputs", "The crypto App - Comment fonctionnent les transactions Bitcoin ?"]
        },
        en: {
            question: "The same on-chain transaction can be used for paid several recipients ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: ["https://thecrypto.app/knowledge/how-bitcoin-transactions-work/", "The crypto App - How Bitcoin Transactions Work? ?"]
        }
    }
    ,
    {
        id: 79,
        fr: {
            question: "Combien de temps met généralement un nœud pour synchroniser l'intégralité de la blockchain Bitcoin ?",
            answers: ["1 heure", "1 jour", "2-3 jours", "8-10 jours"],
            correct: "2-3 jours",
            ressources: ["https://decouvrebitcoin.com/thematique/noeud/", "Découvre Bitcoin - Les Nœuds"]
        },
        en: {
            question: "How long does a node usually take to fully sync Bitcoin blockchain ?",
            answers: ["1 hours", "1 days", "2-3 days", "8-10 days"],
            correct: "2-3 days",
            ressources: ["https://bitcoin.org/en/full-node#what-is-a-full-node", "Bitcoin.org - Running A Full Node",
                "https://thebitcoinrabbithole.com/topics/bitcoin-node/", "Decouvre Bitcoin - Nodes"]
        }
    }
    ,
    {
        id: 80,
        fr: {
            question: "En moyenne, combien de transactions par seconde est-il possible de réaliser sur Bitcoin ?",
            answers: ["Environ 3 par seconde", "Environ 7", "Environ 100", "Environ 1000"],
            correct: "Environ 7",
            ressources: ["https://academy.bit2me.com/fr/que-es-escalabilidad-de-bitcoin/", "Bit2me Academy - Qu'est-ce que l'évolutivité Bitcoin?"]
        },
        en: {
            question: "On average, how many transactions per second is it possible to make on Bitcoin ?",
            answers: ["About 3 par seconde", "About 7", "About 100", "About 1000"],
            correct: "About 7",
            ressources: ["https://coinformant.com.au/how-many-transactions-per-second-bitcoin/", "CoinFormant - How Many Transactions Per Second"]
        }
    }
    ,
    {
        id: 81,
        fr: {
            question: "Combien coute généralement une transaction Lightning ?",
            answers: ["1000 satoshis", "1 Bitcoin", "Quelques satoshis"],
            correct: "Quelques satoshis",
            ressources: ["https://cryptoast.fr/qu-est-ce-que-lightning-network/", "Cryptoast - Qu'est ce que Lightning Network",
                "https://decouvrebitcoin.com/le-parcours-bitcoin/chapitre-5-introduction-au-lightning-network/", "Découvre Bitcoin - Lightning Network",
                "https://www.youtube.com/watch?v=XZc9sQH3VWY&t=2928s", "Decouvre Bitcoin - Comprendre le Lightning Network ! (Crash course complet)"]
        },
        en: {
            question: "Usually, how many cost a lighting transaction ?",
            answers: ["1000 satoshis", "1 Bitcoin", "A few satoshis"],
            correct: "A few satoshis",
            ressources: ["https://thebitcoinrabbithole.com/journey/chapter-5-lightning-network/", "Decouvre Bitcoin - Lightning Network"]
        }
    }
    ,
    {
        id: 82,
        fr: {
            question: "Dois-je envoyer une pièce d'identité pour ouvrir un wallet Lightning ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://cryptoast.fr/qu-est-ce-que-lightning-network/", "Cryptoast - Qu'est ce que Lightning Network",
                "https://decouvrebitcoin.com/le-parcours-bitcoin/chapitre-5-introduction-au-lightning-network/", "Découvre Bitcoin - Lightning Network",
                "https://www.youtube.com/watch?v=XZc9sQH3VWY&t=2928s", "Découvre Bitcoin - Comprendre le Lightning Network ! (Crash course complet)"]
        },
        en: {
            question: "Should I send an identity card for open lighting wallet ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["https://thebitcoinrabbithole.com/journey/chapter-5-lightning-network/", "Decouvre Bitcoin - Lightning Network"]
        }
    },
    {
        id: 83,
        fr: {
            question: "Y a-t-il une différence entre Bitcoin et bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://blog.bitnovo.com/fr/quelle-est-la-difference-entre-bitcoin-et-bitcoin/", "Bitnovo.blog - Quelle est la différence entre Bitcoin et bitcoin ?"]
        },
        en: {
            question: "Is there a difference between Bitcoin et bitcoin ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: ["https://blog.bitnovo.com/en/difference-bitcoin-and-bitcoin-uppercase-lowercase/", "Bitnovo.blog - What is the difference between Bitcoin and bitcoin?"]
        }
    },
    {
        id: 84,
        fr: {
            question: "Quelles sont les 3 fonctions de hashage les plus utilisées dans Bitcoin ?",
            answers: ["SHA-256 / SHA-512 / RIPEMD", "SHA-256 / SHA-384 / SHA-3", "RIPEMD / RIPEMD-128 / SHA-256", "UMAC / MD6 / Buzhash"],
            correct: "SHA-256 / SHA-512 / RIPEMD",
            ressources: ["https://academy.binance.com/fr/articles/what-is-hashing", "Binance - Qu'est-ce que le hachage?",
                "https://www.bitpanda.com/academy/fr/lecons/quest-ce-que-le-hachage-dans-une-transaction-blockchain/", "BitPanda - Qu'est ce que le hashage"]
        },
        en: {
            question: "What are the 3 most used hash functions in Bitcoin ?",
            answers: ["SHA-256 / SHA-512 / RIPEMD", "SHA-256 / SHA-384 / SHA-3", "RIPEMD / RIPEMD-128 / SHA-256", "UMAC / MD6 / Buzhash"],
            correct: "SHA-256 / SHA-512 / RIPEMD",
            ressources: ["https://academy.binance.com/en/articles/what-is-hashing", "Binance - What Is Hashing?",
                "https://www.bitpanda.com/academy/en/lessons/what-is-a-hash-function-in-a-blockchain-transaction/", "BitPanda - What is hash function"]
        }
    },
    {
        id: 85,
        fr: {
            question: "Quel est l'un des problèmes initiaux de tout moyen de paiement pair-a-pair ?",
            answers: ["La scalabilité", "La taille des blocks", "La double dépense", "Les frais"],
            correct: "La double dépense",
            ressources: ["https://www.bitpanda.com/academy/fr/lecons/quest-ce-que-la-double-depense/", "BitPanda - Qu'est-ce que la double dépense"]
        },
        en: {
            question: "What is one of the initial problems of any peer-to-peer payment method ?",
            answers: ["Scalability", "The blocks size", "Double spending", "Fees"],
            correct: "Double spending",
            ressources: ["https://www.bitpanda.com/academy/en/lessons/what-is-double-spending-and-why-is-it-such-a-problem", "BitPanda - What is double-spending ?"]
        }
    },
    {
        id: 86,
        fr: {
            question: "Qu'est-ce que Bitcoin ?",
            answers: ["Un réseau de paiement physique pair-a-pair", "Un réseau de paiement électronique pair-a-pair", "Un réseau de paiement électronique pour professionnel"],
            correct: "Un réseau de paiement électronique pair-a-pair",
            ressources: ["https://bitcoin.fr/bitcoin-explique-par-son-inventeur/", "Bitcoin.fr - White paper Bitcoin"]
        },
        en: {
            question: "What is Bitcoin ?",
            answers: ["A Peer-to-Peer physical Cash System", "A Peer-to-Peer Electronic Cash System", "A Professionnal Electronic Cash System"],
            correct: "A Peer-to-Peer Electronic Cash System",
            ressources: ["https://bitcoin.org/bitcoin.pdf", "Bitcoin.org - White paper Bitcoin"]
        }
    },
    {
        id: 87,
        fr: {
            question: "Qu'est-ce que le mixage de bitcoins ?",
            answers: ["Technique pour mélanger des clés privées", "Technique pour mélanger des wallets", "Technique pour mélanger des UTXO"],
            correct: "Technique pour mélanger des UTXO",
            ressources: ["https://www.pandul.fr/post/comprendre-et-utiliser-le-coinjoin-sur-bitcoin", "Pandul - Comprendre et utiliser le CoinJoin sur Bitcoin"]
        },
        en: {
            question: "What is bitcoins mixing ?",
            answers: ["Technique for private keys mixing", "Technique for wallets mixing", "Technique for UTXO mixing"],
            correct: "Technique for UTXO mixing",
            ressources: ["https://bitcoinmagazine.com/technical/a-comprehensive-bitcoin-coinjoin-guide", "Bitcoin Magazine - A COMPREHENSIVE BITCOIN COINJOIN GUIDE"]
        }
    },
    {
        id: 88,
        fr: {
            question: "Lors d'un CoinJoin de bitcoins, le coordinateur a-t-il accès au fond ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://www.pandul.fr/post/comprendre-et-utiliser-le-coinjoin-sur-bitcoin", "Pandul - Comprendre et utiliser le CoinJoin sur Bitcoin"]
        },
        en: {
            question: "During a CoinJoin of bitcoins, the coordinator have access to the fund ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["https://bitcoinmagazine.com/technical/a-comprehensive-bitcoin-coinjoin-guide", "Bitcoin Magazine - A COMPREHENSIVE BITCOIN COINJOIN GUIDE"]
        }
    },
    {
        id: 89,
        fr: {
            question: "Que désigne 'Anonymity sets' ?",
            answers: ["Paramètre permettant de calculer la vitesse d'une transaction", "Paramètre permettant de calculer le niveau de sécurité d'un UTXO", "Paramètre permettant de calculer le niveau d'anonymat d'un UTXO"],
            correct: "Paramètre permettant de calculer le niveau d'anonymat d'un UTXO",
            ressources: ["https://www.pandul.fr/post/comprendre-et-utiliser-le-coinjoin-sur-bitcoin", "Pandul - Comprendre et utiliser le CoinJoin sur Bitcoin"]
        },
        en: {
            question: "What does 'Anonymity sets' ?",
            answers: ["Parameter for calculate the speed of a transaction", "Parameter for calculate the UTXO security level", "Parameter for calculate the UTXO anonymous level"],
            correct: "Parameter for calculate the UTXO anonymous level",
            ressources: ["https://bitcoinmagazine.com/technical/how-bitcoin-anonymity-sets-work", "Bitcoin Magazine - HOW BITCOIN FORWARD-LOOKING ANONYMITY SETS WORK"]
        }
    },
    {
        id: 90,
        fr: {
            question: "Y a-t-il une différence entre Bitcoin et bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://blog.bitnovo.com/fr/quelle-est-la-difference-entre-bitcoin-et-bitcoin/", "Bitnovo.blog - Quelle est la différence entre Bitcoin et bitcoin ?"]
        },
        en: {
            question: "Is there a difference between Bitcoin et bitcoin ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: ["https://blog.bitnovo.com/en/difference-bitcoin-and-bitcoin-uppercase-lowercase/", "Bitnovo.blog - What is the difference between Bitcoin and bitcoin?"]
        }
    },
    {
        id: 91,
        fr: {
            question: "Les CBDC (monnaie numérique de banque centrale) sont-elles un danger pour nos libertés ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://www.cointribune.com/tribunes/tribune-cryptomonnaies-geopolitique/bitcoin-btc-et-liberte-ou-cbdc-et-apartheid-covidienne/", "Cointribune - Bitcoin et Liberté ou CBDC et Apartheid Virale ?"]
        },
        en: {
            question: "Are CBDCs a danger to our freedoms ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: ["https://bitcoinmagazine.com/culture/digital-dollar-threat-civil-liberties", "Bitcoin Magazine - THE DIGITAL U.S. DOLLAR IS A THREAT TO CIVIL LIBERTIES"]
        }
    },
    {
        id: 92,
        fr: {
            question: "Peut-on acheter du Bitcoin sur une borne physique (borne ATM) ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://www.cointribune.com/analyses/investissements/3-000-atm-bitcoin-btc-ont-ete-installes-dans-le-monde-depuis-debut-2022/", "Cointribune - 3 000 ATM bitcoin (BTC) ont été installés dans le monde depuis début 2022"]
        },
        en: {
            question: "Can you buy Bitcoin on physical terminals (terminals ATM) ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: ["https://99bitcoins.com/bitcoin/atm/", "99Bitcoins - Bitcoin ATMs – A Beginner’s Guide"]
        }
    },
    {
        id: 93,
        fr: {
            question: "Quel est le pourcentage de ''minage vert'' (minage avec énergie renouvelable) ?",
            answers: ["2%", "20%", "60%", "80%"],
            correct: "60%",
            ressources: ["https://cryptoast.fr/energie-utilisee-miner-bitcoin-renouvelable/", "Cryptoast - L’énergie utilisée pour miner du Bitcoin serait désormais à 60% renouvelable"]
        },
        en: {
            question: "What is the percentage of ''green mining'' (mining with renewable energy) ?",
            answers: ["2%", "20%", "60%", "80%"],
            correct: "60%",
            ressources: ["https://cointelegraph.com/news/this-earth-day-analysts-say-bitcoin-mining-is-naturally-gravitating-to-green-energy", "Cointelegraph - Earth Day analysts say Bitcoin mining is naturally gravitating to green energy"]
        }
    },
    {
        id: 94,
        fr: {
            question: "Quel pays possède le plus de puissance de calcul (hashrate) ?",
            answers: ["Chine", "USA", "Japon", "Russie"],
            correct: "USA",
            ressources: ["https://ccaf.io/cbeci/mining_map", "Bitcoin mining Map"]
        },
        en: {
            question: "Which country has the most network hashrate ?",
            answers: ["China", "USA", "Japan", "Russia"],
            correct: "USA",
            ressources: ["https://ccaf.io/cbeci/mining_map", "Bitcoin mining Map"]
        }
    },
    {
        id: 95,
        fr: {
            question: "Quel pays a interdit Bitcoin est 2021?",
            answers: ["Chine", "USA", "Japon", "Russie"],
            correct: "Chine",
            ressources: ["https://cryptoast.fr/chine-interdit-onzieme-fois-cryptomonnaies/", "Cryptoast - La Chine interdit pour la onzième fois les cryptomonnaies"]
        },
        en: {
            question: "Which country have ban Bitcoin in 2021 ?",
            answers: ["China", "USA", "Japan", "Russia"],
            correct: "China",
            ressources: ["https://www.coindesk.com/learn/china-crypto-bans-a-complete-history/", "CoinDesk - China Crypto Bans: A Complete History"]
        }
    },
    {
        id: 96,
        fr: {
            question: "Que signifie UTXO ?",
            answers: ["Unspent Transaction Output", "Spent Transaction Output", "Unspent Transaction Exit Output", "Unspent Transaction Exit"],
            correct: "Unspent Transaction Output",
            ressources: ["https://blog.bitnovo.com/fr/quest-ce-quun-utxo-dans-bitcoin/", "Bitnovo - Qu’est-ce qu’un UTXO dans Bitcoin ?"]
        },
        en: {
            question: "What does UTXO mean ?",
            answers: ["Unspent Transaction Output", "Spent Transaction Output", "Unspent Transaction Exit Output", "Unspent Transaction Exit"],
            correct: "Unspent Transaction Output",
            ressources: ["https://coincentral.com/utxo-beginners-explainer/", "CoinCentral - What Is a UTXO ?"]
        }
    },
    {
        id: 97,
        fr: {
            question: "Qu'est-ce que les UTXO ?",
            answers: ["Les sorties d’une opération qui ont été dépensées", "Les entrées d’une opération qui n’ont pas encore été dépensées", "Les sorties d’une opération qui n’ont pas été dépensées", "Les sorties d’une opération en cours"],
            correct: "Les sorties d’une opération qui n’ont pas été dépensées",
            ressources: ["https://blog.bitnovo.com/fr/quest-ce-quun-utxo-dans-bitcoin/", "Bitnovo - Qu’est-ce qu’un UTXO dans Bitcoin ?"]
        },
        en: {
            question: "What is a UTXO ?",
            answers: ["The outputs of an operation that have been spent", "Inputs to an operation that have not yet been spent", "The outputs of an operation that have not been spent", "The outputs of an operation in progress"],
            correct: "The outputs of an operation that have not been spent",
            ressources: ["https://coincentral.com/utxo-beginners-explainer/", "CoinCentral - What Is a UTXO ?"]
        }
    },
    {
        id: 98,
        fr: {
            question: "De combien de sorties est composée une transaction effectuée ?",
            answers: ["1", "2", "3", "4"],
            correct: "2",
            ressources: ["https://blog.bitnovo.com/fr/quest-ce-quun-utxo-dans-bitcoin/", "Bitnovo - Qu’est-ce qu’un UTXO dans Bitcoin ?"]
        },
        en: {
            question: "how many outputs are made up of a transaction ?",
            answers: ["1", "2", "3", "4"],
            correct: "2",
            ressources: ["https://coincentral.com/utxo-beginners-explainer/", "CoinCentral - What Is a UTXO ?"]
        }
    }
]



    // ,
    // {
    //     id: ,
    //     fr: {
    //         question: " ?",
    //         answers: ["", "", "", ""],
    //         correct: "",
    //         ressources: []
    //     },
    //     en: {
    //         question: " ?",
    //         answers: ["", "", "", ""],
    //         correct: "",
    //         ressources: []
    //     }
    // }


export const mainRulesElt1 = {
    FR: "Decouvrez ou tester vos connaissances sur Bitcoin et son ecosysteme",
    EN: "Discover or test your knowledge of Bitcoin and its ecosystem",
}
export const mainRulesElt2 = {
    FR: "Questions au total",
    EN: "Total Questions",
}
export const mainRulesElt3 = {
    FR: "questions par game",
    EN: "questions by game",
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



// RESULT QUESTION 
export const resultQuestElt1 = {
    FR: "Question",
    EN: "Question",
}
export const resultQuestElt2 = {
    FR: "Bonne Reponse :",
    EN: "Right answer :",
}
export const resultQuestElt3 = {
    FR: "Mauvaise reponse, la reponse etait",
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
            question: "Quelle abreviation est utilisee pour le bitcoin ?",
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
            question: "Quelle est le pseudo utilise par le/les createur(s) du Bitcoin ?",
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
            question: "Quand a ete cree le premier bloc Bitcoin ?",
            answers: ["Decembre 2008", "Decembre 2009", "Janvier 2009", "Janvier 2010"],
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
            answers: ["Evenement qui multiplie les recompenses accordees aux mineurs", "ca veut rien dire", "Evenement qui reduit de moitie les recompenses accordees aux mineurs", "c'est le nom du premier bloc bitcoin"],
            correct: "Evenement qui reduit de moitie les recompenses accordees aux mineurs",
            ressources: ["https://www.cointribune.com/guides-crypto/bien-debuter/bitcoin-btc-quest-ce-que-le-halving/", "Cointribune.com - Le halving",
                "https://www.youtube.com/watch?v=gl6JIA8zt90", "Youtube : Decouvre Bitcoin - Bitcoin Q&A N°22 : Pourquoi un Halving tous les 4 ans ?",
                "https://academy.binance.com/fr/halving", "Binance.com - Halving"]
        },
        en: {
            question: "What is the Bitcoin Halving ?",
            answers: ["Is an event where mining rewards are multiplied", "It means nothing", "Is an event where mining rewards are cut in half", "It's name of the first Bitcoin block"],
            correct: "Is an event where mining rewards are cut in half",
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
                "https://www.youtube.com/watch?v=TpKo8U3DWU0", "Hasheur - Qu'est ce qu'un Halving Day? Rarete et Inflation d'une cryptomonnaie."]
        },
        en: {
            question: "the Bitcoin halving happens all the :",
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
                "https://www.youtube.com/watch?v=Y92R4EWk5uo&t=41s", "Decouvre Bitcoin - 21 millions de bitcoins - Chapitre 1.4 - Formation Bitcoin 101"]
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
            question: "Qui controle Bitcoin ?",
            answers: ["La totalite des membres du reseaux", "Satoshi Nakamoto", "Les USA", "Les developpeurs"],
            correct: "La totalite des membres du reseaux",
            ressources: ["https://journalducoin.com/bitcoin/qui-controle-bitcoin/", "Journal du coin - Qui controle Bitcoin ?",
                "https://www.youtube.com/watch?v=XtsCqlCpVOQ", "Cryptoast - Podcast #3 - L'histoire du Bitcoin : Qui controle le Bitcoin et comment fonctionne-t-il ?",
                "https://bitcoin.fr/qui-controle-bitcoin/", "Bitcoin.fr - Qui controle Bitcoin ?"]
        },
        en: {
            question: "Who controls Bitcoin ?",
            answers: ["All members of network", "Satoshi Nakamoto", "USA", "developers"],
            correct: "All members of network",
            ressources: ["https://cryptonews.com/guides/who-controls-bitcoin.htm", "CryptoNews - Who Controls Bitcoin ?"]
        }
    },
    {
        id: 7,
        fr: {
            question: "Qu’est-ce que le minage de Bitcoin ?",
            answers: ["Activite qui va sauvegarder l’historique des transactions", "Activite qui polluent", "Ca ne sert a rien", "Activite qui consiste a confirmer les transactions en les incluant dans des blocs en echange de bitcoins"],
            correct: "Activite qui consiste a confirmer les transactions en les incluant dans des blocs en echange de bitcoins",
            ressources: ["https://journalducoin.com/analyses/premiers-mineurs-bitcoin/", "Journal du coin - Les premier mineurs",
                "https://cryptonymous.fr/quel-role-mineur-bitcoin", "Cryptonymous.fr - Le role du mineur",]
        },
        en: {
            question: "What is Bitcoin mining ?",
            answers: ["Activity who save transactions history", "Activity who destroy planet", "useless activity", "refers to the transaction validation process"],
            correct: "refers to the transaction validation process",
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
            answers: ["rich people", "Developped countries", "everyone", "guys between 18 - 30 years"],
            correct: "everyone",
            ressources: []
        }
    }
    ,
    {
        id: 9,
        fr: {
            question: "Quels pays ont adoptes bitcoin comme monnaie legale ?",
            answers: ["France - USA", "El Salvador - Republique Centrafricaine", "Congo - Argentine", "Chine"],
            correct: "El Salvador - Republique Centrafricaine",
            ressources: ["https://cryptoast.fr/salvador-loi-bitcoin-adoptee-crypto-nation/", "Cryptoast - El Savador",
                "https://coinacademy.fr/actu/bitcoin/centrafrique-adoption-bitcoin/", "Coin Academy - Republique Centraficaine",]
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
            answers: ["vers 2140", "dans 50 ans", "Jamais le nombre de Bictoin est infini", "en 2100"],
            correct: "vers 2140",
            ressources: ["https://www.cointribune.com/analyses/personnalites/satoshi-nakamoto-le-dernier-bitcoin-btc-ne-sera-mine-que-dans-100-ans/", "Cointribune - dernier Bitcoin miner dans 100 ans ",
                "https://cryptoast.fr/que-va-t-il-se-passer-lorsque-le-dernier-bitcoin-sera-mine/", "Cryptoast - Que va-t-il se passer lorsque le dernier Bitcoin sera mine ?",]
        },
        en: {
            question: "When will we reach the maximum number of BTC ?",
            answers: ["about 2140", "in 50 years", "Never", "in 2100"],
            correct: "about 2140",
            ressources: ["https://www.investopedia.com/tech/what-happens-bitcoin-after-21-million-mined/", "Investopedia - What Happens to Bitcoin After All 21 Million Are Mined?"]
        }
    }
    ,
    {
        id: 11,
        fr: {
            question: "Qu'est ce que le lighting network ?",
            answers: ["Reseau decentralise bâti en surcouche du reseau Bitcoin", "Blockchain independante a Bitcoin", "Autre nom donne au reseau Bitcoin", "Layer 2 d'Etherum"],
            correct: "Reseau decentralise bâti en surcouche du reseau Bitcoin",
            ressources: ["https://cryptoast.fr/qu-est-ce-que-lightning-network/", "Cryptoast - Qu'est ce que Lightning Network",
                "https://decouvrebitcoin.com/le-parcours-bitcoin/chapitre-5-introduction-au-lightning-network/", "Decouvre Bitcoin - Lightning Network",
                "https://www.youtube.com/watch?v=XZc9sQH3VWY&t=2928s", "Decouvre Bitcoin - Comprendre le Lightning Network ! (Crash course complet)"]
        },
        en: {
            question: "What is Lightning Network ?",
            answers: ["Decantralized network built on top of Bitcoin", "a Blockchain", "other name gived at Bitcoin network", "Layer 2 of Etherum"],
            correct: "Decantralized network built on top of Bitcoin",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 12,
        fr: {
            question: "Le minage est-il un danger pour l'environnement ?",
            answers: ["Non", "Oui"],
            correct: "Non",
            ressources: ["http://www.coincentraliz.fr/environnement/", "CoinCentraliz - categorie Environnement"]
        },
        en: {
            question: "Bitcoin mining is it a danger for environnment ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: ["", ""]
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
            question: "what is the hash function used for Bitcoin ? ",
            answers: ["SHA-256", "Etash", "Scrypt", "X11"],
            correct: "SHA-256",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 14,
        fr: {
            question: "Quel algorithme de consensus est utilise pour Bitcoin ?",
            answers: ["Proof-of-Importance", "Proof-of-Stake", "Proof-of-Activity", "Proof-of-Work"],
            correct: "Proof-of-Work",
            ressources: ["https://www.briefcrypto.com/les-differents-algorithmes-de-consensus-blockchain/", "Brief Crypto - Algo de consensus",
                "https://coinacademy.fr/academie/algorithme-consensus-blockchain/", "Coin Academy - Algo consensus Blockchain",
                "https://www.youtube.com/watch?v=gtpOytEONOQ", "Coin Station - Le Proof of Work du Bitcoin explique (Preuve de Travail)"]
        },
        en: {
            question: "what is the consensus algorithm used for Bitcoin ",
            answers: ["Proof-of-Importance", "Proof-of-Stake", "Proof-of-Activity", "Proof-of-Work"],
            correct: "Proof-of-Work",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 15,
        fr: {
            question: "Quand a eut lieu le pizza day ? ",
            answers: ["25 Decembre 2010", "22 Mai 2010", "1 Janvier 2009", "14 Juin 2011"],
            correct: "22 Mai 2010",
            ressources: ["https://bitcoin.fr/bitcoin-pizza-day-2/", "Bitcoin.fr - Pizza Day"]
        },
        en: {
            question: "when was pizza day ? ",
            answers: ["25 December 2010", "22 May 2010", "1 January 2009", "14 June 2011"],
            correct: "22 May 2010",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 16,
        fr: {
            question: "Qui est Craig Wrightt ?",
            answers: ["Banquier", "Imposteur, affirmant etre Satoshis Nakamoto", "Createur du Bitcoin", "CEO d'un exchange"],
            correct: "Imposteur, affirmant etre Satoshis Nakamoto",
            ressources: ["https://journalducoin.com/bitcoin/craig-wright-inventeur-bitcoin/", "Journal du Coin - Craig Wright"]
        },
        en: {
            question: "Who is Craig Wright ?",
            answers: ["Banker", "Impostor, claiming is it Satoshis Nakamoto", "creator of Bitcoin", "CEO of exchange"],
            correct: "Impostor, claiming is it Satoshis Nakamoto",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 17,
        fr: {
            question: "Le modele economique du bitcoin est ?",
            answers: ["Inflationniste", "Deflationniste"],
            correct: "Deflationniste",
            ressources: []
        },
        en: {
            question: "Economic model of Bitooin is ?",
            answers: ["Inflationary", "deflationary"],
            correct: "deflationary",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 18,
        fr: {
            question: "Comment s'appelle le registre qui recense toutes des transactions Bitcoin ?",
            answers: ["Le grand Livre", "La Blockchain", "Le wallet", "La Base de donnees Bitcoin"],
            correct: "La Blockchain",
            ressources: ["https://bitcoin.fr/Blockchain/", "Bitcoin.fr - La blockchain",
                "https://www.youtube.com/watch?v=6uYRN6b5EMU", "Cryptoast - COMPRENDRE LA BLOCKCHAIN EN 7 MINUTES"]
        },
        en: {
            question: "What is the name of the register who lists all Bitcoin transactions ?",
            answers: ["the big book", "Blockchain", "Wallet", "Bitcoin Database"],
            correct: "Blockchain",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 19,
        fr: {
            question: "Qu'est-ce qu'un white paper ?",
            answers: ["C'est un recueil d'informations factuelles concernant un projet", "c'est un synonyme de Blockchain", "C'est l'algo de consensus de Bticoin"],
            correct: "C'est un recueil d'informations factuelles concernant un projet",
            ressources: ["https://cryptoast.fr/quest-ce-quun-white-paper-livre-blanc/", "Cryptoast - Qu'est-ce qu'un white paper ?",
                "https://bitcoin.org/files/bitcoin-paper/bitcoin_fr.pdf", " Le White Paper Bitcoin "]
        },
        en: {
            question: "What is a white paper ?",
            answers: ["It is a report or guide of factual information about a project", "it's synonym of Blockchain", "it's consensu algorithm of Bticoin"],
            correct: "It is a report or guide of factual information about a project",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 20,
        fr: {
            question: "Quel a ete le premier objet reel achete avec du bitcoin ?",
            answers: ["Une Maison", "La Drogue", "Une Pizza", "Une Biere"],
            correct: "Une Pizza",
            ressources: ["https://journalducoin.com/bitcoin/premiere-transaction-bitcoin-douze-ans-revolution/", "Journal du Coin - Premier achat en Bitcoin "]
        },
        en: {
            question: "What is the first real object bought by Bitcoin ?",
            answers: ["a house", "drugs", "a Pizza", "a Beer"],
            correct: "a Pizza",
            ressources: ["", ""]
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
            question: "what is the first hard fork Bitcoin ?",
            answers: ["Etherum", "Bitcoin Gold", "Bitcoin XT", "Bitcoin Cash"],
            correct: "Bitcoin XT",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 22,
        fr: {
            question: "Quelle est la plus petite unité du Bitcoin ?",
            answers: ["Le Satoshi", "Le Dollar", "le Micro Bitcoin", "Le MiniBit"],
            correct: "Le Satoshi",
            ressources: ["https://cryptoast.fr/satoshi-definition-explication/", "Cryptoast - Satoshi definition"]
        },
        en: {
            question: "What is the smallest unit of Bitcoin ?",
            answers: ["a Satoshi", "a Dollar", "Micro Bitcoin", "a MiniBit"],
            correct: "a Satoshi",
            ressources: ["", ""]
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
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 24,
        fr: {
            question: "Quel appareil permet de miner du Bitcoin ?",
            answers: ["un Raspberry Pi", "Un ASICS", "Une carte graphique", "De la memoire vive"],
            correct: "Un ASICS",
            ressources: ["https://www.cointribune.com/tribunes/tribune-du-mining/mining-de-bitcoins-btc-les-asics-sont-ils-indetronables/", "Cointribune - Les ASICS",
                "https://www.youtube.com/watch?v=otgvo2G9ekw", "Monsieur TK - Miner Bitcoin : Quel algorithme et ASIC choisir ?"]
        },
        en: {
            question: "what machin can mined Bitcoin ?",
            answers: ["a Raspberry Pi", "a ASICS", "Graphic card", "Ram"],
            correct: "a ASICS",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 25,
        fr: {
            question: "Quel type de cle il ne faut surtout pas partager ?",
            answers: ["La cle Privee", "La cle Publique"],
            correct: "La cle Privee",
            ressources: ["https://decouvrebitcoin.fr/thematique/securite/", "Decouvre Bitcoin - La securite"]
        },
        en: {
            question: "What is the type of keys that you don't to must share ?",
            answers: ["a private key", "a public key"],
            correct: "a private key",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 26,
        fr: {
            question: "Quel terme fait reference a des entites ou a des individus qui detiennent de grandes quantites de Bitcoin ?",
            answers: ["Un Phoenix", "Une baleine (whale)", "Un lion", "Un Exchange"],
            correct: "Une baleine (whale)",
            ressources: ["https://www.cointribune.com/guides-crypto/bien-debuter/bitcoin-btc-quest-ce-quune-whale/", "Cointribune - Une Whale"]
        },
        en: {
            question: "Quel terme fait reference a des entites ou a des individus qui detiennent de grandes quantites de Bitcoin ?",
            answers: ["Un Phoenix", "Une baleine (whale)", "Un lion", "Un Exchange"],
            correct: "Une baleine (whale)",
            ressources: ["", ""]
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
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 28,
        fr: {
            question: "Quelle a ete la premiere societe cotee en bourse a acheter du Bitcoin en 2020 ?",
            answers: ["MicroStrategy", "Tesla", "Paypal", "Apple"],
            correct: "MicroStrategy",
            ressources: ["https://fr.cryptonews.com/exclusives/les-societes-cotees-en-bourse-qui-detiennent-bitcoin-btc-dans-leurs-reserves.htm", "CryptoNews - societes cotees en bourse detiennent le plus de bitcoins (BTC) dans leurs reserves"]
        },
        en: {
            question: "what is the first stock market company who buyed bitcoins in 2020 ?",
            answers: ["MicroStrategy", "Tesla", "Paypal", "Apple"],
            correct: "MicroStrategy",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 29,
        fr: {
            question: "De quoi avez-vous besoin pour acceder a un portefeuille Bitcoin ?",
            answers: ["Un mot de Passe", "La cle public", "La seed Phrase", "Ligne de code"],
            correct: "La cle Privee",
            ressources: ["https://coinacademy.fr/academie/definition-seed-phrase/", "Coin Academy - Qu’est-ce qu’une seed phrase en crypto ?"]
        },
        en: {
            question: "what do you need to get acces at a Bitcoin wallet ?",
            answers: ["a Password", "Public key", "a seed Phrase", "line of code"],
            correct: "a seed Phrase",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 30,
        fr: {
            question: "Qu'est-ce qu'un Soft Fork ?",
            answers: ["Une modification retrocompatible des regles de consensus", "une modification non retrocompatible du protocole"],
            correct: "Une modification retrocompatible des regles de consensus",
            ressources: ["https://www.youtube.com/watch?v=lH_JlXH2OZw", "Cryptoast - Qu’est ce qu’un fork dans la crypto-monnaie ? Exemple avec Bitcoin (BTC)",
                "https://cryptoast.fr/qu-est-ce-qu-un-soft-hard-fork/", "Cryptoast - Quelles sont les differences entre un hard fork et un soft fork ?"]
        },
        en: {
            question: "What is a Soft Fork ?",
            answers: ["A backward compatible modification of the consensus rules", "a no-backward compatible modification of the protocol"],
            correct: "A backward compatible modification of the consensus rules",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 31,
        fr: {
            question: "Qu'est-ce qu'un Hard Fork ?",
            answers: ["Une modification retrocompatible des regles de consensus", "une modification non retrocompatible du protocole"],
            correct: "une modification non retrocompatible du protocole",
            ressources: ["https://www.youtube.com/watch?v=lH_JlXH2OZw", "Cryptoast - Qu’est ce qu’un fork dans la crypto-monnaie ? Exemple avec Bitcoin (BTC)",
                "https://cryptoast.fr/qu-est-ce-qu-un-soft-hard-fork/", "Cryptoast - Quelles sont les differences entre un hard fork et un soft fork ?"]
        },
        en: {
            question: "What is a Hard Fork ?",
            answers: ["A backward compatible modification of the consensus rules", "a no-backward compatible modification of the protocol"],
            correct: "a no-backward compatible modification of the protocol",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 32,
        fr: {
            question: "Quel debat a ete mis en avant lors de la Bloc Size War (guerre des blocs) ?",
            answers: ["Le debat sur le nom Bitcoin", "Le debat sur la DEFI", "Le debat sur l'adoption", "Le debat sur la scalabilite"],
            correct: "Le debat sur la scalabilite",
            ressources: ["https://journalducoin.com/analyses/passage-echelle-bitcoin-impossible-compromis/", "Journal du Coin - Bitcoin et la guerre des blocs",
                "https://bitconseil.fr/bitcoin-guerre-blocs/", "Bit Conseil - Guerre des blocs #1",
                "https://bitconseil.fr/guerre-des-blocs-2/", "Bit Conseil - Guerre des blocs #2"]
        },
        en: {
            question: "what debate has been highlighted during Bloc Size War ?",
            answers: ["about Bitcoin name", "about DEFI", "about adoption", "about scalability"],
            correct: "about scalability",
            ressources: ["", ""]
        }
    }
    ,
    {
        id: 33,
        fr: {
            question: "Faut-il faire un pret bancaire pour investir dans Bitcoin ?",
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
            question: "Faut-il mettre la totalite de ces revenus dans Bitcoin ?",
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
            question: "Qu'est ce que le DCA ( Dollar Cost Averaging) ? ",
            answers: ["Strategie qui consiste a acheter une cryptomonnaie de façon aleatoire", "Strategie qui consiste a acheter une cryptomonnaie pour la meme somme a des intervalles reguliers", "Strategie qui consiste a acheter une cryptomonnaie en debut de journee et de vendre en fin de journee"],
            correct: "Le DCA est une strategie qui consiste a acheter une cryptomonnaie pour la meme somme a des intervalles reguliers",
            ressources: ["https://coinacademy.fr/guides/linvestissement-programme-dca-la-methode-la-plus-sure-pour-investir-en-crypto/", "Coin Academy - Methode DCA"]
        },
        en: {
            question: "What is DCA ( Dollar Cost Averaging) ? ",
            answers: ["Strategy where you bought cryptocurrency randomly", "strategy where you bought cryptocurrency for the same amount at regular intervals", "Strategie where you bought a cryptocurrency at the beginning of the day and sell at the end of the day"],
            correct: "strategy where you bought cryptocurrency for the same amount at regular intervals",
            ressources: []
        }
    }
    ,
    {
        id: 36,
        fr: {
            question: "Bitcoin est-il :",
            answers: ["Anonyme", "Pseudonyme", "Transparent"],
            correct: "Pseudonyme",
            ressources: ["https://cryptoast.fr/bitcoin-n-est-pas-anonyme-mais-pseudonyme/", "Cryptoast - Contrairement aux idees reçues, Bitcoin n'est PAS anonyme..."]
        },
        en: {
            question: "Bitcoin is it :",
            answers: ["Anonymous", "Pseudonym", "Transparent"],
            correct: "Pseudonym",
            ressources: []
        }
    }
    ,
    {
        id: 37,
        fr: {
            question: "Qu’est-ce qu’une seed phrase ?",
            answers: ["Un mot de passe choisit par vous", "Suite de mots, 12 ou 24 vous servant de cle de recuperation de votre wallet", "Suite de carateres aleatoire", "Suite de mots, souvent 12 ou 24 vous servant a valider des transactions"],
            correct: "Suite de mots, 12 ou 24 vous servant de cle de recuperation de votre wallet",
            ressources: ["https://coinacademy.fr/academie/definition-seed-phrase/", "Coin Academy - Qu’est-ce qu’une seed phrase en crypto ?"]
        },
        en: {
            question: "What is a seed phrase ?",
            answers: ["a password chosen by you", "Sequence of words, 12 or 24 serving as your wallet recovery key", "Sequence of random characters", "Sequence of words, 12 or 24 serving as validate transactions"],
            correct: "Sequence of words, 12 or 24 serving as your wallet recovery key",
            ressources: []
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
            ressources: []
        }
    }
    ,
    {
        id: 39,
        fr: {
            question: "Que sont les Altcoins ?",
            answers: ["Toutes les crypto sauf Bitcoin", "Toutes les crypto et Bitcoin", "Autre nom donne a Bitcoin"],
            correct: "Toutes les crypto sauf Bitcoin",
            ressources: ["https://fr.cryptonews.com/guides/what-are-altcoins.htm", "Crypto News - Qu'est ce qu'un Altcoin"]
        },
        en: {
            question: "What is Altcoins ?",
            answers: ["all crypto except Bitcoin", "all crypto and Bitcoin", "other name gived to Bitcoin"],
            correct: "all crypto except Bitcoin",
            ressources: []
        }
    }
    ,
    {
        id: 40,
        fr: {
            question: "a quoi sert un nœud ?",
            answers: ["Valider des transactions - Miner du Bitcoin", "Decentraliser le reseau - Decider des regles du consensus - Recevoir et envoyer des transactions", "Decentraliser le reseau - Miner du Bitcoin"],
            correct: "Decentraliser le reseau - Decider des regles du consensus - Recevoir et envoyer des transactions",
            ressources: ["https://decouvrebitcoin.fr/thematique/noeud/", "Decouvre Bitcoin - Noeud"]
        },
        en: {
            question: "what is a node for ?",
            answers: ["Valid transactions and mined Bitcoin", "decentralized network - decided on consensus rules - receive and send transactions", "decentralized network - Mined Bitcoin"],
            correct: "decentralized network - decided on consensus rules - receive and send transactions",
            ressources: []
        }
    }
    ,
    {
        id: 41,
        fr: {
            question: "Peut-on faire tourner un noeud Bitcoin sur son ordinateur perso ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://decouvrebitcoin.fr/thematique/noeud/", "Decouvre Bitcoin - Noeud"]
        },
        en: {
            question: "Can you run a Bitcoin node on your personal computer ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: []
        }
    }
    ,
    {
        id: 42,
        fr: {
            question: "Quel type de wallet est le plus securise ?",
            answers: ["Cold Wallet", "Wallet Mutli-signature", "Hot Wallet"],
            correct: "Wallet Mutli-signature",
            ressources: ["https://decouvrebitcoin.fr/thematique/securite/", "Decouvre Bitcoin - Securite",
                "https://www.youtube.com/watch?v=UhiclrzZ7A8", "Hasheur - Quel portefeuille crypto choisir ? Wallet"]
        },
        en: {
            question: "what type of wallet is more safer ?",
            answers: ["Cold Wallet", "Wallet Mutli-signature", "Hot Wallet"],
            correct: "Wallet Mutli-signature",
            ressources: []
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
            question: "how many satoshis there in 1 bitcoin ?",
            answers: ["100 Thousand", "1 Million", "100 Million", "1 Billion"],
            correct: "100 Million",
            ressources: []
        }
    }
    ,
    {
        id: 44,
        fr: {
            question: "Le lighting network permet-il de faire des transactions immediate ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Decouvre Bitcoin - lighting network"]
        },
        en: {
            question: "lighting network does it allow to do immediate transactions ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: []
        }
    }
    ,
    {
        id: 45,
        fr: {
            question: "Le lighting network permet d'appliquer des frais de transaction :",
            answers: ["En fonction du montant de la transaction", "En fonction du poids de la transaction", "Ce sont les mineurs et noeuds qui fixe les frais"],
            correct: "En fonction du montant de la transaction",
            ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Decouvre Bitcoin - lighting network"]
        },
        en: {
            question: "lighting network allows you to apply transaction fees :",
            answers: ["on the amount of the transaction", "on the weight of the transaction", "this is miners and nodes who set fees"],
            correct: "on the amount of the transaction",
            ressources: []
        }
    }
    ,
    {
        id: 46,
        fr: {
            question: "Le reseau Bitcoin applique les frais de transaction en fonction ?",
            answers: ["Du montant de la transaction", "Du poids de la transaction", "Du prix de l'electricite"],
            correct: "En fonction du poids de la transaction",
            ressources: ["https://bitcoin.fr/bitcoin-comprendre-les-frais-de-transaction/", "Bitcoin.fr - Comprendre les frais de transaction",
                "https://www.cointribune.com/blockchain/ecosysteme/les-frais-moyens-de-transaction-de-bitcoins-btc-sont-a-104-une-premiere-depuis-deux-ans/", "Cointribune - Frais de transaction"]
        },
        en: {
            question: "The Bitcoin network set transaction fees based on ?",
            answers: ["the amount of the transaction", "the weight of the transaction", "electicity price"],
            correct: "the weight of the transaction",
            ressources: []
        }
    }
    ,
    {
        id: 47,
        fr: {
            question: "Les bitcoins presents sur votre compte dans un Exchange, vous appartiennent-ils ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://www.cointribune.com/analyses/strategie/laisser-ses-btc-sur-les-exchanges-revient-a-shorter-le-bitcoin/", "Cointribune - Laisser ses BTC sur les exchanges revient a shorter le bitcoin",
                "https://cryptoast.fr/est-ce-dangereux-de-laisser-coins-exchange/", "Cryptoast - Est-ce dangereux de laisser ses cryptomonnaies sur un exchange"]
        },
        en: {
            question: "bitcoins in your account on exchange do they belong to you ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: []
        }
    }
    ,
    {
        id: 48,
        fr: {
            question: "Un Hardware Wallet est-il connecte a internet ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://www.cointribune.com/analyses/cybersecurite/les-differents-types-de-wallets-crypto/", "Cointribune - Type de wallets",
                "https://www.youtube.com/watch?v=UhiclrzZ7A8", "Hasheur - Quel portefeuille crypto choisir ? Wallet"]
        },
        en: {
            question: "a hardware wallet it is connect to internet ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: []
        }
    }
    ,
    {
        id: 49,
        fr: {
            question: "Les Etats peuvent-ils arreter Bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://www.youtube.com/watch?v=C2da4NiMPF0", "Decouvre Bitcoin - Bitcoin Q&A N°26 - Et si Bitcoin se fait bannir ?"]
        },
        en: {
            question: "states can stop Bitcoin ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: []
        }
    }
    ,
    {
        id: 50,
        fr: {
            question: "Mixer ses coins permet :",
            answers: ["Faire des transactions gratuite", "Plus de tracabilite", "Plus de vie privee", "Plus de securite"],
            correct: "Plus de vie privee",
            ressources: ["https://decouvrebitcoin.fr/tutoriels/mixage/", "Decouvre Bitcoin - Tuto Mixage (John on Chain)"]
        },
        en: {
            question: "mixing coins allows :",
            answers: ["make free transactions", "more tracability", "more private life", "more secure"],
            correct: "more private life",
            ressources: []
        }
    }
    ,
    {
        id: 51,
        fr: {
            question: "Un nœud Bitcoin permet :",
            answers: ["De verifier l'integrite des transactions", "Miner du Bitcoin", "Controler le prix du Bitcoin", "interdire des transactions"],
            correct: "De verifier l'integrite des transactions",
            ressources: ["https://decouvrebitcoin.fr/thematique/noeud/", "Decouvre Bitcoin - Noeud"]
        },
        en: {
            question: "a Bitcoin node allows :",
            answers: ["verify transactions integrity", "mined Bitcoin", "control Bitcoin price", "ban transactions"],
            correct: "verify transactions integrity",
            ressources: []
        }
    }
    ,
    {
        id: 52,
        fr: {
            question: "Lorsque vous ouvrez un canal Lightning Network pouvez-vous recevoir des Bitcoins immediatement ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Decouvre Bitcoin - Lightning Network",
                "https://academie.decouvrebitcoin.fr/courses/ln-201-introduction-theorique-au-lightning-network/", "Decouvre Bitcoin - Introduction theorique au Lightning Network"]
        },
        en: {
            question: "when you open a lightning network canal can you receive bitoins immediately ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: []
        }
    }
    ,
    {
        id: 53,
        fr: {
            question: "Le reseau Lightning Network est-il aussi securise que le reseau Bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Decouvre Bitcoin - Lightning Network",]
        },
        en: {
            question: "lightning network it is as secure than Bitcoin network ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: []
        }
    }
    ,
    {
        id: 54,
        fr: {
            question: "Quelle implementation n'est pas liee au Lightning Network ?",
            answers: ["C-lightning", "Eclair", "LND", "RGB"],
            correct: "RGB",
            ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Decouvre Bitcoin - Lightning Network",
                "https://www.youtube.com/watch?v=Yv3H_Yi9TPM&t=2s", "Surfin Bitcoin - La finance de demain avec Lightning Network & Bitcoin"]
        },
        en: {
            question: "what implementation is not related to lightning network ?",
            answers: ["C-lightning", "Eclair", "LND", "RGB"],
            correct: "RGB",
            ressources: []
        }
    }
    ,
    {
        id: 55,
        fr: {
            question: "Sur quel protocole Bitcoin pourra-t-on executer des 'contrats intelligents - smart contracts' ? ",
            answers: ["Lightning Network", "Liquid", "RGB", "reseau principal Bitcoin"],
            correct: "RGB",
            ressources: ["https://bitcoin.fr/fonctionnement-du-protocole-rgb/", "Bitcoin.fr - Fonctionnement protocole RGB",
                "https://www.youtube.com/watch?v=-6pZrQQ8uks", "Univers Bitcoin - RGB : DeFi sur Bitcoin ? Avec Julien Guitton de Condensat - UBP#46"]
        },
        en: {
            question: "on which Bitcoin protocol the smarts contracts will be able they be executed ?",
            answers: ["Lightning Network", "Liquid", "RGB", "principal bitcoin network"],
            correct: "RGB",
            ressources: []
        }
    }
    ,
    {
        id: 56,
        fr: {
            question: "Le Bitcoin est souvent comparer ",
            answers: ["aux Monnaies fiat", "a l'Or", "aux Actions", "aux pierres precieuses"],
            correct: "a l'Or",
            ressources: ["https://cryptoast.fr/comparaison-bitcoin-et-or/", "Cryptoast - Comparaison du Bitcoin et de l'or"]
        },
        en: {
            question: "Le Bitcoin est souvent comparer ",
            answers: ["fiat currency", "Gold", "stocks", "precious stones"],
            correct: "Gold",
            ressources: []
        }
    }
    ,
    {
        id: 57,
        fr: {
            question: "Quelle est la meilleure strategie d'investissement pour du long terme ?",
            answers: ["Le trading", "Le gambling", "DCA (Dollar Cost Averaging)", "Faucet Bitcoin"],
            correct: "DCA (Dollar Cost Averaging)",
            ressources: ["https://www.youtube.com/watch?v=ZrAXTXpMFvs", "Surfin Bitcoin - Bitcoin : trader ou investir, il faut choisir !",
                "https://www.cointribune.com/analyses/investissements/le-dca-une-technique-efficace-en-temps-de-crise/", "Cointribune - DCA technique efficace en temps de crise"]
        },
        en: {
            question: "What is the best investment strategy for long term ?",
            answers: ["trading", "gambling", "DCA (Dollar Cost Averaging)", "Faucet Bitcoin"],
            correct: "DCA (Dollar Cost Averaging)",
            ressources: []
        }
    }
    ,
    {
        id: 58,
        fr: {
            question: "Si j'achete du Bitcoin et que je n'y touche pas (je Hold), dois-je declarer mes Bitcoins ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://decouvrebitcoin.fr/thematique/juridique/", "Decouvre Bitcoin - Juridique"]
        },
        en: {
            question: "if i bought bitcoin but i don't touch it, i declare my bitcoins ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: []
        }
    }
    ,
    {
        id: 59,
        fr: {
            question: "Est-ce qu'on peut stopper une transaction Bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://bitcoin.fr/ce-que-vous-devez-savoir/", "Bitcoin.fr - Choses a Savoir "]
        },
        en: {
            question: "Can we stop Bitcoin transaction ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: []
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
            question: "what is the name cryptograpy algorithm used in Bitcoin ?",
            answers: ["DSE", "RSA", "AES", "ECDSA"],
            correct: "ECDSA",
            ressources: []
        }
    }
    ,
    {
        id: 61,
        fr: {
            question: "La cryptographie asymetrique est-elle utilise pour Bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://bitcoin.fr/la-cryptographie-asymetrique-cest-quoi-a-quoi-ca-sert/", "Bitcoin.fr - La cryptographie asymetrique, c’est quoi ? A quoi ça sert ?",
                "https://cryptoast.fr/cryptographie-asymetrique-bitcoin/", "Cryptoast - Cryptographie asymetrique : quel lien avec Bitcoin ?"]
        },
        en: {
            question: "Asymmetric cryptography is it used in Bitcoin ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: []
        }
    }
    ,
    {
        id: 62,
        fr: {
            question: "Quelle est la taille maximum d'un bloc Bitcoin ?",
            answers: ["1 Ko", "1 Mo", "4 Mo", "1 Go"],
            correct: "1 Mo",
            ressources: ["https://thecrypto.app/fr/knowledge/why-is-the-bitcoin-block-size-limited/", "The Crypto app - Pourquoi la taille du bloc Bitcoin est-elle limitee ?",
                "https://journalducoin.com/bitcoin/secret-de-satoshi-blocs-de-bitcoin-limites-a-1-mo/", "Journal du Coin - Pourquoi les blocs Bitcoin ont une taille limite ?"]
        },
        en: {
            question: "What is the maximum size of a bitcoin block ?",
            answers: ["1 Ko", "1 Mo", "4 Mo", "1 Go"],
            correct: "1 Mo",
            ressources: []
        }
    }
    ,
    {
        id: 63,
        fr: {
            question: "Grace au protocole SegWit, theoriquement, la taille maximum d'un bloc Bitcoin peut etre de :",
            answers: ["1 Mo", "36 Mo", "4 Mo", "1 Go"],
            correct: "4 Mo",
            ressources: ["https://cryptoast.fr/segwit-bitcoin-explication-definition/", "Cryptoast - Segwit explication",
                "https://journalducoin.com/bitcoin/segwit-la-modification-de-bitcoin-que-personne-ne-comprenait/", "Journal du Coin - Segwit"]
        },
        en: {
            question: "With SegWit protocol, theoretically, the maximum size of a bitcoin block can be :",
            answers: ["1 Mo", "36 Mo", "4 Mo", "1 Go"],
            correct: "4 Mo",
            ressources: []
        }
    }
    ,
    {
        id: 64,
        fr: {
            question: "Bitcoin est-il utilise uniquement pour du paiement ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://bitcoin.fr/les-applications-de-bitcoin-la-propriete-intellectuelle/", "Bitcoin.fr - La propriete intellectuelle",
                "https://bitcoin.fr/une-application-de-bitcoin-le-certificat-d-authenticite/", "Bitcoin.fr - Le certificat d’authenticite",
                "https://bitcoin.fr/shocard/", "Bitcoin.fr - Bitcoin prouve votre identite"]
        },
        en: {
            question: "bitcoin is it used uniquely for paiements ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: []
        }
    }
    ,
    {
        id: 65,
        fr: {
            question: "Qu’est-ce qu’une DAO ?",
            answers: ["Organisation Autonome decentralisee", "Organisation Autonome Centralisee", "Organisation Anonyme Centralisee", "Organisation Anonyme Decentralisee"],
            correct: "Organisation Autonome decentralisee",
            ressources: ["https://cryptoast.fr/dao-organisation-decentralisee/", "Cryptoast - Qu'est-ce qu'une DAO ?",
                "https://fr.cryptonews.com/exclusives/quest-ce-quune-organisation-autonome-decentralisee-dao.htm", "CryptoNews - Qu'est-ce qu'une DAO ?"]
        },
        en: {
            question: "What is a DAO ?",
            answers: ["A decentralized autonomous organization", "A Centralized autonomous organization", "Centralized anonymous organization", "Decentralized anonymous organization"],
            correct: "A decentralized autonomous organization",
            ressources: []
        }
    }
    ,
    {
        id: 66,
        fr: {
            question: "Bitcoin utilise une blockchain :",
            answers: ["Privee", "Publique"],
            correct: "Publique",
            ressources: ["https://cryptoast.fr/differences-blockchain-publique-blockchain-privee/", "Cryptoast - Blockchain publique et blockchain privee : quelles differences ?"]
        },
        en: {
            question: "Bitcoin used blockchain :",
            answers: ["Private", "Public"],
            correct: "Public",
            ressources: []
        }
    }
    ,
    {
        id: 67,
        fr: {
            question: "En quoi consiste une attaque 51% ?",
            answers: ["Prendre le controle de + 50% des bitcoins", "Prendre le controle de + 50% de la puissance de calcul du reseau", "Prendre le controle de + 50% des noeud du reseau", "Prendre le controle de + 50% des wallets Bitcoin"],
            correct: "Prendre le controle de + 50% de la puissance de calcul du reseau",
            ressources: ["https://www.youtube.com/watch?v=b1HU-cQ9Pds", "Grand Angle Crypto - L'attaque des 51% : mort du bitcoin ou pas ?",
                "https://bitcoin.fr/quest-ce-quune-attaque-des-51/", "Bitdcoin.fr - Qu’est-ce qu’une attaque des 51% ?"]
        },
        en: {
            question: "What is a 51% attack ?",
            answers: ["take control more than 50% of bitcoins", "take control more than 50% of the network's mining hash rate", "take control more than 50% of network's nodes", "take control more than 50% of Bitcoin wallets"],
            correct: "take control more than 50% of the network's mining hash rate",
            ressources: []
        }
    }
    ,
    {
        id: 68,
        fr: {
            question: "Que signifie le Hashrate ?",
            answers: ["Le nombre de transaction par seconde", "La puissance de calcul par minute", "La puissance de calcul par seconde", "La rapidite de vallidation d'un transaction"],
            correct: "La puissance de calcul par seconde",
            ressources: ["https://cryptonaute.fr/quest-ce-que-le-hashrate-en-cryptomonnaie/", "Cryptonaute - Qu’est-ce que le hashrate en cryptomonnaie ?"]
        },
        en: {
            question: "What is the Hashrate ?",
            answers: ["number of transactions by secondes", "computing power by minute", "computing power by seconde", "validation speed of transaction"],
            correct: "computing power by seconde",
            ressources: []
        }
    }
    ,
    {
        id: 69,
        fr: {
            question: "Qu'est-ce qu'un BIP ?",
            answers: ["une proposition d'amelioration de Bitcoin", "Un protocole Bitcoin", "Une crypto", "Un Wallet"],
            correct: "une proposition d'amelioration de Bitcoin",
            ressources: ["https://cryptoast.fr/bip-bitcoin-improvement-proposal/", "Cryptoast - Qu'est-ce qu'un BIP ?"]
        },
        en: {
            question: "What is a BIP ?",
            answers: ["Bitcoin improvement proposal", "a Bitcoin protocol", "a cryptocurrency", "a Wallet"],
            correct: "Bitcoin improvement proposal",
            ressources: []
        }
    }
    ,
    {
        id: 70,
        fr: {
            question: "Par quelle methode on peut partager l'acces a un wallet entre plusieurs personnes de maniere securisee ?",
            answers: ["En partageant sa cle privee", "En partageant sa cle public", "Grace au multi-sig"],
            correct: "Grace au multi-sig",
            ressources: ["https://academy.binance.com/fr/articles/what-is-a-multisig-wallet", "Binance Academy - Qu'est-ce qu'un Portefeuille Multisig?",
                "https://www.youtube.com/watch?v=mb6R2POi3vQ", "Hasheur - Portefeuille crypto multi-signature (Multisig) | Tutoriel, comment ça marche ?"]
        },
        en: {
            question: "How can we share access to a wallet between people securely ?",
            answers: ["share your private key", "share your public key", "with multi-sig"],
            correct: "with multi-sig",
            ressources: []
        }
    }
    ,
    {
        id: 71,
        fr: {
            question: "Combien de bitcoins sont mines en ce moment dans chaque bloc ?",
            answers: ["3.125", "6,25", "10", "12.5"],
            correct: "6,25",
            ressources: ["https://bitcoin.fr/evolution-du-nombre-de-bitcoins-a-travers-le-temps/", "Bitcoin.fr - Evolution du nombre de bitcoins à travers le temps"]
        },
        en: {
            question: "How many bitcoins are mined right now in each block ?",
            answers: ["3.125", "6,25", "10", "12.5"],
            correct: "6,25",
            ressources: []
        }
    }
    ,
    {
        id: 72,
        fr: {
            question: "En quelle annee interviendra le prochain halving ?",
            answers: ["2024", "2025", "2026", "2028"],
            correct: "2024",
            ressources: ["https://www.cointribune.com/guides-crypto/bien-debuter/bitcoin-btc-quest-ce-que-le-halving/", "Cointribune.com - Le halving",
                "https://www.youtube.com/watch?v=gl6JIA8zt90", "Decouvre Bitcoin - Bitcoin Q&A N°22 : Pourquoi un Halving tous les 4 ans ?",
                "https://academy.binance.com/fr/halving", "Binance.com - Halving"]
        },
        en: {
            question: "In which year will the next halving ?",
            answers: ["2024", "2025", "2026", "2028"],
            correct: "2024",
            ressources: []
        }
    }
    ,
    {
        id: 73,
        fr: {
            question: "Combien de mots differents contient le dictionnaire utilise pour generer les seeds prhases ?",
            answers: ["1024", "2048", "4096", "10 000"],
            correct: "2048",
            ressources: ["https://journalducoin.com/actualites/phrases-mnemoniques/", "Journal du coin - Comment fonctionnent les Seeds ?"]
        },
        en: {
            question: "how many words contains dictionnary used for seed phrase generation ?",
            answers: ["1024", "2048", "4096", "10 000"],
            correct: "2048",
            ressources: []
        }
    }
    ,
    {
        id: 74,
        fr: {
            question: "Quel nom a ete donne a la mise a jour du protocole Bitcoin qui a introduit les signatures de Schnorr ?",
            answers: ["Liquid", "SegWit", "Lightning Network", "Taproot"],
            correct: "Taproot",
            ressources: ["https://bitcoin.fr/activation-de-taproot/", "Bitcoin.fr - Activation de Taproot",
                "https://cryptoast.fr/mise-a-niveau-taproot-bitcoin-btc-activee/", "Cryptoast - La mise à niveau Taproot de Bitcoin"]
        },
        en: {
            question: "what is the name of the Bitcoin protocol who introduced Schnorr's signatures ?",
            answers: ["Liquid", "SegWit", "Lightning Network", "Taproot"],
            correct: "Taproot",
            ressources: []
        }
    }
    ,
    {
        id: 75,
        fr: {
            question: "Quelle est l'atout principal du consensus Proof-of-Work de Bitcoin ?",
            answers: ["La scalabilite du reseau", "La securite du reseau", "Des frais de transaction faible", "Le controle du reseau"],
            correct: "La securite du reseau",
            ressources: ["https://journalducoin.com/lexique/proof-of-work/", "Journal du Coin - Proof-of-work : definition et explication",
                "https://www.youtube.com/watch?v=0uYJQpuNxDs&t=590s", "Cryptoast - Qu’est-ce que le minage de crypto-monnaies ?"]
        },
        en: {
            question: "What is the main advantage of the Bitcoin proof-of-work consensus  ?",
            answers: ["Network scalability", "network security", "low transaction fees", "Network control"],
            correct: "network security",
            ressources: []
        }
    }
    ,
    {
        id: 76,
        fr: {
            question: "A partir de quel cout d'electricite il devient rentable de miner des bitcoins ?",
            answers: ["1 € / kWh", "0,06 € / kWh", "0,04 € / kWh", "0,1 € / kWh"],
            correct: "0,06 € / kWh",
            ressources: []
        },
        en: {
            question: "from what electricity cost it become profitable to mined bitcoins ?",
            answers: ["1 € / kWh", "0,06 € / kWh", "0,04 € / kWh", "0,1 € / kWh"],
            correct: "0,06 € / kWh",
            ressources: []
        }
    }
    ,
    {
        id: 77,
        fr: {
            question: "Combien de transactions contient generalement un bloc plein ?",
            answers: ["1000-2000", "2000-3000", "5000", "10 000"],
            correct: "2000-3000",
            ressources: ["https://academy.bit2me.com/fr/que-es-escalabilidad-de-bitcoin/", "Bit2me Academy - Qu'est-ce que l'evolutivite Bitcoin?"]
        },
        en: {
            question: "how many transactions contains generalement usually a full block ?",
            answers: ["1000-2000", "2000-3000", "5000", "10 000"],
            correct: "2000-3000",
            ressources: []
        }
    }
    ,
    {
        id: 78,
        fr: {
            question: "Est-ce qu'une meme transaction on-chain peut être utilisee pour payer plusieurs destinataires ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: ["https://thecrypto.app/fr/knowledge/how-bitcoin-transactions-work/#One_Input_8211_Multiple_Outputs", "The crypto App - Comment fonctionnent les transactions Bitcoin ?"]
        },
        en: {
            question: "the same on-chain transaction can be used for paied several recipients ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: []
        }
    }
    ,
    {
        id: 79,
        fr: {
            question: "Combien de temps met generalement un nœud pour synchroniser l'integralite de la blockchain Bitcoin ?",
            answers: ["1 heure", "1 jour", "2-3 jours", "8-10 jours"],
            correct: "2-3 jours",
            ressources: ["https://decouvrebitcoin.com/thematique/noeud/", "Decouvre Bitcoin - Les Noeuds"]
        },
        en: {
            question: "How long does a node usually take to fully sync Bitcoin blockchain ?",
            answers: ["1 hours", "1 days", "2-3 days", "8-10 days"],
            correct: "2-3 days",
            ressources: []
        }
    }
    ,
    {
        id: 80,
        fr: {
            question: "En moyenne, combien de transactions par seconde est-il possible de realiser sur Bitcoin ?",
            answers: ["Environ 3 par seconde", "Environ 7", "Environ 100", "Environ 1000"],
            correct: "Environ 7",
            ressources: ["https://academy.bit2me.com/fr/que-es-escalabilidad-de-bitcoin/", "Bit2me Academy - Qu'est-ce que l'evolutivite Bitcoin?"]
        },
        en: {
            question: "On average, how many transactions per second is it possible to make on Bitcoin ?",
            answers: ["about 3 par seconde", "about 7", "about 100", "about 1000"],
            correct: "about 7",
            ressources: []
        }
    }
    ,
    {
        id: 81,
        fr: {
            question: "Combien coute generalement une transaction Lighting ?",
            answers: ["1000 satoshis", "1 Bitcoin", "Quelques satoshis"],
            correct: "Quelques satoshis",
            ressources: ["https://cryptoast.fr/qu-est-ce-que-lightning-network/", "Cryptoast - Qu'est ce que Lightning Network",
                "https://decouvrebitcoin.com/le-parcours-bitcoin/chapitre-5-introduction-au-lightning-network/", "Decouvre Bitcoin - Lightning Network",
                "https://www.youtube.com/watch?v=XZc9sQH3VWY&t=2928s", "Decouvre Bitcoin - Comprendre le Lightning Network ! (Crash course complet)"]
        },
        en: {
            question: "usually, how many cost a lighting transaction ?",
            answers: ["1000 satoshis", "1 Bitcoin", "a few satoshis"],
            correct: "a few satoshis",
            ressources: []
        }
    }
    ,
    {
        id: 82,
        fr: {
            question: "Dois-je envoyer une piece d'identite pour ouvrir un wallet Lightning ?",
            answers: ["Oui", "Non"],
            correct: "Non",
            ressources: ["https://cryptoast.fr/qu-est-ce-que-lightning-network/", "Cryptoast - Qu'est ce que Lightning Network",
                "https://decouvrebitcoin.com/le-parcours-bitcoin/chapitre-5-introduction-au-lightning-network/", "Decouvre Bitcoin - Lightning Network",
                "https://www.youtube.com/watch?v=XZc9sQH3VWY&t=2928s", "Decouvre Bitcoin - Comprendre le Lightning Network ! (Crash course complet)"]
        },
        en: {
            question: "should i send a identity card for open lighting wallet ?",
            answers: ["Yes", "No"],
            correct: "No",
            ressources: []
        }
    },
    {
        id: 83,
        fr: {
            question: "Y a-t-il une difference entre Bitcoin et bitcoin ?",
            answers: ["Oui", "Non"],
            correct: "Oui",
            ressources: []
        },
        en: {
            question: "Is there a difference between Bitcoin et bitcoin ?",
            answers: ["Yes", "No"],
            correct: "Yes",
            ressources: []
        }
    },
    {
        id: 84,
        fr: {
            question: "Quelles sont les 3 fonctions de hashage les plus utilisees dans Bitcoin ?",
            answers: ["SHA-256 / SHA-512 / RIPEMD", "SHA-256 / SHA-384 / SHA-3", "RIPEMD / RIPEMD-128 / SHA-256", "UMAC / MD6 / Buzhash"],
            correct: "SHA-256 / SHA-512 / RIPEMD",
            ressources: []
        },
        en: {
            question: "What are the 3 most used hash functions in Bitcoin ?",
            answers: ["SHA-256 / SHA-512 / RIPEMD", "SHA-256 / SHA-384 / SHA-3", "RIPEMD / RIPEMD-128 / SHA-256", "UMAC / MD6 / Buzhash"],
            correct: "SHA-256 / SHA-512 / RIPEMD",
            ressources: []
        }
    },
    {
        id: 85,
        fr: {
            question: "Quel est l'un des problemes initiaux de tout moyen de paiement pair-a-pair ?",
            answers: ["la scalabilite", "la taille des blocks", "La double depense", "les frais"],
            correct: "La double depense",
            ressources: []
        },
        en: {
            question: "What is one of the initial problems of any peer-to-peer payment method ?",
            answers: ["scalability", "the blocks size", "double spend", "fees"],
            correct: "double spend",
            ressources: []
        }
    },
    {
        id: 86,
        fr: {
            question: "Qu'est ce que Bitcoin ?",
            answers: ["Un reseau de paiement physique pair-a-pair", "Un reseau de paiement electronique pair-a-pair", "Un reseau de paiement electronique pour profesionnel"],
            correct: "Un reseau de paiement electronique pair-a-pair",
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
            question: "Qu'est ce que le mixage de bitcoins ?",
            answers: ["Technique pour melanger des clés privées", "Technique pour melanger des wallets", "Technique pour melanger des UTXO"],
            correct: "Technique pour melanger des UTXO",
            ressources: ["https://www.pandul.fr/post/comprendre-et-utiliser-le-coinjoin-sur-bitcoin", "Pandul - Comprendre et utiliser le CoinJoin sur Bitcoin"]
        },
        en: {
            question: "What is bitcoins mixing ?",
            answers: ["technique for private keys mixing", "technique for wallets mixing", "technique for UTXO mixing"],
            correct: "technique for UTXO mixing",
            ressources: []
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
            ressources: []
        }
    },
    {
        id: 89,
        fr: {
            question: "Que designe 'Anonymity sets' ?",
            answers: ["parametre permettant de calculer la vitesse d'une transaction", "parametre permettant de calculer le niveau de securite d'un UTXO", "parametre permettant de calculer le niveau d'anonymat d'un UTXO"],
            correct: "parametre permettant de calculer le niveau d'anonymat d'un UTXO",
            ressources: ["https://www.pandul.fr/post/comprendre-et-utiliser-le-coinjoin-sur-bitcoin", "Pandul - Comprendre et utiliser le CoinJoin sur Bitcoin"]
        },
        en: {
            question: "What does 'Anonymity sets' ?",
            answers: ["parameter for calculate the speed of a transaction", "parameter for calculate the UTXO security level", "parameter for calculate the UTXO anonymous level"],
            correct: "parameter for calculate the UTXO anonymous level",
            ressources: []
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


export const listRandomNb = []

// Questions when player begin the  quizz
export const Questions = [
    {
        id: 0,
        question: "Quelle abreviation est utilisee pour le bitcoin ?",
        answers: ["BTT", "BTC", "BCOIN", "BCC"],
        correct: "BTC",
        ressources: ["https://bitcoin.fr/BTC-XBT/", "Bitcoin.fr - BTC-XBT"]
    },
    {
        id: 1,
        question: "Quelle est le pseudo utilise par le concepteur du Bitcoin ?",
        answers: ["Elon Musk", "Satoshi Nakamoto", "M.Bitcoin", "Craig Wright"],
        correct: "Satoshi Nakamoto",
        ressources: ["https://journalducoin.com/analyses/crypto-portrait-satoshi-nakamoto-bitcoin/", "Journal du Coin.com - Portrait Satoshi Nakamoto",
            "https://www.youtube.com/watch?v=h5pzl7wlEgw", "Youtube - RFI : Portrait de Satoshi Nakamoto"]
    },
    {
        id: 2,
        question: "Quand a ete cree le premier bloc de transaction ?",
        answers: ["Decembre 2008", "Decembre 2009", "Janvier 2009", "Janvier 2010"],
        correct: "Janvier 2009",
        ressources: ["https://bitcoin.fr/Bloc-Genesis/", "Bitcoin.fr - Bloc Genesis"]
    }
    ,
    {
        id: 3,
        question: "Qu'est-ce que le halving ?",
        answers: ["Processus qui multiplie les recompenses accordees aux mineurs", "ça veut rien dire", "Processus qui reduit de moitie les recompenses accordees aux mineurs", "c'est le nom du premier bloc bitcoin "],
        correct: "Processus qui reduit de moitie les recompenses accordees aux mineurs",
        ressources: ["https://www.cointribune.com/guides-crypto/bien-debuter/bitcoin-btc-quest-ce-que-le-halving/", "Cointribune.com - Le halving",
            "https://www.youtube.com/watch?v=gl6JIA8zt90", "Decouvre Bitcoin - Bitcoin Q&A N°22 : Pourquoi un Halving tous les 4 ans ?",
            "https://academy.binance.com/fr/halving", "Binance.com - Halving"]
    }
    ,
    {
        id: 4,
        question: "Un halving se produit tous les :",
        answers: ["210 000 blocs (~ 4 ans)", "100 000 blocs (~ 2 ans)", "1 000 000 blocs (~ 20 ans)", "420 000 (~ 8 ans)"],
        correct: "210 000 blocs (~ 4 ans)",
        ressources: ["https://cryptoast.fr/halving-explication-impacts-bitcoin-crypto/", "Cryptoast - halving",
            "https://www.youtube.com/watch?v=TpKo8U3DWU0", "Hasheur - Qu'est ce qu'un Halving Day? Rarete et Inflation d'une cryptomonnaie."]
    },
    {
        id: 5,
        question: "Quelle sera le nombre maximum de Bitcoin en circulation ?",
        answers: ["20 Millions", "21 Millions", "Infini", "1 Milliard "],
        correct: "21 Millions",
        ressources: ["https://cryptoast.fr/pourquoi-21-millions-de-bitcoins/", "Cryptoast - 21 Millions de Bitcoin",
            "https://fr.cryptonews.com/exclusives/pourquoi-21-millions-bitcoins.htm", "Crypto News - Pourquoi 21 Millions",
            "https://www.youtube.com/watch?v=Y92R4EWk5uo&t=41s", "Decouvre Bitcoin - 21 millions de bitcoins - Chapitre 1.4 - Formation Bitcoin 101"]
    }
    ,
    {
        id: 6,
        question: "Qui contrôle bitcoin ?",
        answers: ["La totalite des membres du reseaux", "Satoshi Nakamoto", "Les USA", "Les developpeurs"],
        correct: "La totalite des membres du reseaux",
        ressources: ["https://journalducoin.com/bitcoin/qui-controle-bitcoin/", "Journal du coin - Qui contrôle Bitcoin ?",
            "https://www.youtube.com/watch?v=XtsCqlCpVOQ", "Cryptoast - Podcast #3 - L'histoire du Bitcoin : Qui contrôle le Bitcoin et comment fonctionne-t-il ?",
            "https://bitcoin.fr/qui-controle-bitcoin/", "Bitcoin.fr - Qui controle Bitcoin ?"]
    }
    ,
    {
        id: 7,
        question: "Qu’est-ce que le minage de Bitcoin ?",
        answers: ["Activite qui va sauvegarder l’historique des transactions", "Activite qui polluent", "Ca ne sert a rien", "Activite qui consiste a confirmer les transactions en les incluant dans des blocs en echange de bitcoins"],
        correct: "Activite qui consiste a confirmer les transactions en les incluant dans des blocs en echange de bitcoins",
        ressources: ["https://journalducoin.com/analyses/premiers-mineurs-bitcoin/", "Journal du coin - Les premier mineurs",
            "https://cryptonymous.fr/quel-role-mineur-bitcoin", "Cryptonymous.fr - Le rôle du mineur",]
    }
    ,
    {
        id: 8,
        question: "Qui peut utiliser bitcoin ?",
        answers: ["Les riches", "Les pays Occidentaux", "Tout le monde", "Les hommes entre 18 - 30 ans"],
        correct: "Tout le monde",
        ressources: []
    }
    ,
    {
        id: 9,
        question: "Quel pays ont adoptes bitcoin comme monnaie legale ?",
        answers: ["France - USA", "El Salvador - Republique Centrafricaine", "Congo - Argentine", "Chine"],
        correct: "El Salvador - Republique Centrafricaine",
        ressources: ["https://cryptoast.fr/salvador-loi-bitcoin-adoptee-crypto-nation/", "Cryptoast - El Savador",
            "https://coinacademy.fr/actu/bitcoin/centrafrique-adoption-bitcoin/", "Coin Academy - Republique Centraficaine",]
    }
    ,
    {
        id: 10,
        question: "Quand atteindrons nous le nombre maximum de BTC en circulation ?",
        answers: ["vers 2140", "dans 50 ans", "Jamais le nombre de Bictoin est infini", "en 2100"],
        correct: "vers 2140",
        ressources: ["https://www.cointribune.com/analyses/personnalites/satoshi-nakamoto-le-dernier-bitcoin-btc-ne-sera-mine-que-dans-100-ans/", "Cointribune - dernier Bitcoin miner dans 100 ans ",
            "https://cryptoast.fr/que-va-t-il-se-passer-lorsque-le-dernier-bitcoin-sera-mine/", "Cryptoast - Que va-t-il se passer lorsque le dernier Bitcoin sera mine ?",]
    }
    ,
    {
        id: 11,
        question: "Qu'est ce que le lighting network ?",
        answers: ["Reseau decentralise bâti en surcouche du reseau Bitcoin", "Blockchain independante a Bitcoin", "Autre nom donne au reseau Bitcoin", "Layer 2 d'Etherum"],
        correct: "Reseau decentralise bâti en surcouche du reseau Bitcoin",
        ressources: ["https://cryptoast.fr/qu-est-ce-que-lightning-network/", "Cryptoast - Qu'est ce que Lightning Network",
            "https://decouvrebitcoin.com/le-parcours-bitcoin/chapitre-5-introduction-au-lightning-network/", "Decouvre Bitcoin - Lightning Network",
            "https://www.youtube.com/watch?v=XZc9sQH3VWY&t=2928s", "Decouvre Bitcoin - Comprendre le Lightning Network ! (Crash course complet)"]
    }
    ,
    {
        id: 12,
        question: "Le minage est-il un danger pour l'environnement ?",
        answers: ["Non", "Oui"],
        correct: "Non",
        ressources: ["http://www.coincentraliz.fr/environnement/", "CoinCentraliz - categorie Environnement"]
    }
    ,
    {
        id: 13,
        question: "Quel est le nom de la fonction de hachage utilise pour Bitcoin ?",
        answers: ["SHA-256", "Etash", "Scrypt", "X11"],
        correct: "SHA-256",
        ressources: ["https://bitcoin.fr/quest-ce-quune-fonction-de-hachage/", "Bitcoin.fr - Fonction de Hashage"]
    }
    ,
    {
        id: 14,
        question: "Quel algorithme de consensus est utilise pour Bitcoin ?",
        answers: ["Proof-of-Importance", "Proof-of-Stake", "Proof-of-Activity", "Proof-of-Work"],
        correct: "Proof-of-Work",
        ressources: ["https://www.briefcrypto.com/les-differents-algorithmes-de-consensus-blockchain/", "Brief Crypto - Algo de consensus",
            "https://coinacademy.fr/academie/algorithme-consensus-blockchain/", "Coin Academy - Algo consensus Blockchain",
            "https://www.youtube.com/watch?v=gtpOytEONOQ", "Coin Station - Le Proof of Work du Bitcoin explique (Preuve de Travail)"]
    }
    ,
    {
        id: 15,
        question: "Quand a eut lieu le pizza day ? ",
        answers: ["25 Decembre 2010", "22 Mai 2010", "1 Janvier 2009", "14 Juin 2011"],
        correct: "22 Mai 2010",
        ressources: ["https://bitcoin.fr/bitcoin-pizza-day-2/", "Bitcoin.fr - Pizza Day"]
    }
    ,
    {
        id: 16,
        question: "Qui est Craig Wright ?",
        answers: ["Banquier", "Imposteur, affirmant etre Satoshis Nakamoto", "Createur du Bitcoin", "CEO d'un exchange"],
        correct: "Imposteur, affirmant etre Satoshis Nakamoto",
        ressources: ["https://journalducoin.com/bitcoin/craig-wright-inventeur-bitcoin/", "Journal du Coin - Craig Wright"]
    }
    ,
    {
        id: 17,
        question: "Le modele economique du bitcoin est ?",
        answers: ["Inflationniste", "Deflationniste"],
        correct: "Deflationniste",
        ressources: []
    }
    ,
    {
        id: 18,
        question: "Comment s'appelle le registre qui recense toutes des transactions en bitcoin ?",
        answers: ["Le grand Livre", "La Blockchain", "Le wallet", "La Base de donnes"],
        correct: "La Blockchain",
        ressources: ["https://bitcoin.fr/Blockchain/", "Bitcoin.fr - La blockchain",
            "https://www.youtube.com/watch?v=6uYRN6b5EMU", "Cryptoast - COMPRENDRE LA BLOCKCHAIN EN 7 MINUTES"]
    }
    ,
    {
        id: 19,
        question: "Qu'est-ce qu'un white paper ?",
        answers: ["C'est un recueil d'informations factuelles concernant un projet", "c'est un synonyme de Blockchain", "C'est l'algo de consensus de Bticoin"],
        correct: "C'est un recueil d'informations factuelles concernant un projet",
        ressources: ["https://cryptoast.fr/quest-ce-quun-white-paper-livre-blanc/", "Cryptoast - Qu'est-ce qu'un white paper ?",
            "https://bitcoin.org/files/bitcoin-paper/bitcoin_fr.pdf", " Le White Paper Bitcoin "]
    }
    ,
    {
        id: 20,
        question: "Quel a ete le premier objet reel achete avec du bitcoin ?",
        answers: ["Une Maison", "La Drogue", "Une Pizza", "Une Biere"],
        correct: "Une Pizza",
        ressources: ["https://journalducoin.com/bitcoin/premiere-transaction-bitcoin-douze-ans-revolution/", "Journal du Coin - Premier achat en Bitcoin "]
    }
    ,
    {
        id: 21,
        question: "Comment se nomme le premier hard fork du Bitcoin",
        answers: ["Etherum", "Bitcoin Gold", "Bitcoin XT", "Bitcoin Cash"],
        correct: "Bitcoin XT",
        ressources: ["https://journalducoin.com/analyses/bitcoin-forks-histoire/", "Journal du Coin - Bitcoin Forks Histoire"]
    }
    ,
    {
        id: 22,
        question: "Quelle est le nom de la plus petite denomination du Bitcoin ?",
        answers: ["Le Satoshi", "Le Dollar", "le Micro Bitcoin", "Le MiniBit"],
        correct: "Le Satoshi",
        ressources: ["https://cryptoast.fr/satoshi-definition-explication/", "Cryptoast - Satoshi definition"]
    }
    ,
    {
        id: 23,
        question: "Un nouveau bloc est mine toutes les",
        answers: ["5 Minutes", "10 Minutes", "1 Minutes", "1 Heure"],
        correct: "10 Minutes",
        ressources: ["https://bitcoin.fr/comment-la-blockchain-se-constitue-t-elle/", "Bitcoin.fr - Comment la blockchain se constitue-t-elle ?",
            "https://cryptoast.fr/bloc-blockchain-crypto-explication/", "Cryptoast - Qu'est-ce qu'un bloc dans la technologie blockchain ?"]
    }
    ,
    {
        id: 24,
        question: "Quel appareil permet de miner du Bitcoin ?",
        answers: ["un Raspberry Pi", "Un ASICS", "Une carte graphique", "De la memoire vive"],
        correct: "Un ASICS",
        ressources: ["https://www.cointribune.com/tribunes/tribune-du-mining/mining-de-bitcoins-btc-les-asics-sont-ils-indetronables/", "Cointribune - Les ASICS",
            "https://www.youtube.com/watch?v=otgvo2G9ekw", "Monsieur TK - Miner Bitcoin : Quel algorithme et ASIC choisir ?"]
    }
    ,
    {
        id: 25,
        question: "Quel type de cle il ne faut surtout pas partager a d'autres personnes ?",
        answers: ["La cle Privee", "La cle Publique"],
        correct: "La cle Privee",
        ressources: ["https://decouvrebitcoin.fr/thematique/securite/", "Decouvre Bitcoin - La securite"]
    }
    ,
    {
        id: 26,
        question: "Quel terme fait reference a des entites ou a des individus qui detiennent de grandes quantites de Bitcoin ?",
        answers: ["Un Phoenix", "Une baleine (whale)", "Un lion", "Un Exchange"],
        correct: "Une baleine (whale)",
        ressources: ["https://www.cointribune.com/guides-crypto/bien-debuter/bitcoin-btc-quest-ce-quune-whale/", "Cointribune - Une Whale"]
    }
    ,
    {
        id: 27,
        question: "Quel etait le titre original du White Paper Bitcoin ?",
        answers: ["Bitcoin: A Peer-to-Peer Electronic Cash System", "Bitcoin: A Disruptive Digital Currency", "Bitcoin: A Decentralised Cash Network"],
        correct: "Bitcoin: A Peer-to-Peer Electronic Cash System",
        ressources: ["https://bitcoin.org/files/bitcoin-paper/bitcoin_fr.pdf", " Le White Paper Bitcoin "]
    }
    ,
    {
        id: 28,
        question: "Quelle a ete la premiere societe cotee en bourse a acheter du Bitcoin en 2020 ?",
        answers: ["MicroStrategy", "Tesla", "Paypal", "Apple"],
        correct: "MicroStrategy",
        ressources: ["https://fr.cryptonews.com/exclusives/les-societes-cotees-en-bourse-qui-detiennent-bitcoin-btc-dans-leurs-reserves.htm", "CryptoNews - societes cotees en bourse detiennent le plus de bitcoins (BTC) dans leurs reserves"]
    }
    ,
    {
        id: 29,
        question: "De quoi avez-vous besoin pour acceder a une adresse de portefeuille Bitcoin ?",
        answers: ["Un mot de Passe", "La cle public", "La cle Privee", "Ligne de code"],
        correct: "La cle Privee",
        ressources: ["https://coinacademy.fr/academie/definition-seed-phrase/", "Coin Academy - Qu’est-ce qu’une seed phrase en crypto ?"]
    }
    ,
    {
        id: 30,
        question: "Qu'est-ce qu'un Soft Fork ?",
        answers: ["modification des regles de consensus qui vise a les rendre plus strictes; la nouvelle version du protocole reste donc compatible avec les anciennes.", "modification des regles de consensus qui a pour effet de rendre les nouvelles regles incompatibles avec les precedentes"],
        correct: "modification des regles de consensus qui vise a les rendre plus strictes; la nouvelle version du protocole reste donc compatible avec les anciennes.",
        ressources: ["https://www.youtube.com/watch?v=lH_JlXH2OZw", "Cryptoast - Qu’est ce qu’un fork dans la crypto-monnaie ? Exemple avec Bitcoin (BTC)",
            "https://cryptoast.fr/qu-est-ce-qu-un-soft-hard-fork/", "Cryptoast - Quelles sont les differences entre un hard fork et un soft fork ?"]
    }
    ,
    {
        id: 31,
        question: "Qu'est-ce qu'un Hard Fork ?",
        answers: ["modification des regles de consensus qui vise a les rendre plus strictes; la nouvelle version du protocole reste donc compatible avec les anciennes.", "modification des regles de consensus qui a pour effet de rendre les nouvelles regles incompatibles avec les precedentes"],
        correct: "modification des regles de consensus qui a pour effet de rendre les nouvelles regles incompatibles avec les precedentes",
        ressources: ["https://www.youtube.com/watch?v=lH_JlXH2OZw", "Cryptoast - Qu’est ce qu’un fork dans la crypto-monnaie ? Exemple avec Bitcoin (BTC)",
            "https://cryptoast.fr/qu-est-ce-qu-un-soft-hard-fork/", "Cryptoast - Quelles sont les differences entre un hard fork et un soft fork ?"]
    }
    ,
    {
        id: 32,
        question: "Quel debat a ete mis en avant lors de la Bloc Size War (guerre des blocs) ?",
        answers: ["Le debat sur le nom Bitcoin", "Le debat sur la DEFI", "Le debat sur l'adoption", "Le debat sur la scalabilite"],
        correct: "Le debat sur la scalabilite",
        ressources: ["https://journalducoin.com/analyses/passage-echelle-bitcoin-impossible-compromis/", "Journal du Coin - Bitcoin et la guerre des blocs",
            "https://bitconseil.fr/bitcoin-guerre-blocs/", "Bit Conseil - Guerre des blocs #1",
            "https://bitconseil.fr/guerre-des-blocs-2/", "Bit Conseil - Guerre des blocs #2"]
    }
    ,
    {
        id: 33,
        question: "Faut-il faire un pret bancaire pour investir dans Bitcoin ?",
        answers: ["Oui", "Non"],
        correct: "Non",
        ressources: []
    }
    ,
    {
        id: 34,
        question: "Faut-il mettre la totalite de ces revenus dans Bitcoin ?",
        answers: ["Oui", "Non"],
        correct: "Non",
        ressources: []
    }
    ,
    {
        id: 35,
        question: "Qu'est ce que le DCA ( Dollar Cost Averaging) ? ",
        answers: ["Strategie qui consiste a acheter une cryptomonnaie de façon aleatoire", "Le DCA est une strategie qui consiste a acheter une cryptomonnaie pour la meme somme a des intervalles reguliers", "Strategie qui consiste a acheter une cryptomonnaie en debut de journee et de vendre en fin de journee"],
        correct: "Le DCA est une strategie qui consiste a acheter une cryptomonnaie pour la meme somme a des intervalles reguliers",
        ressources: ["https://coinacademy.fr/guides/linvestissement-programme-dca-la-methode-la-plus-sure-pour-investir-en-crypto/", "Coin Academy - Methode DCA"]
    }
    ,
    {
        id: 36,
        question: "Bitcoin est-il :",
        answers: ["Anonyme", "Pseudonyme", "Transparant"],
        correct: "Pseudonyme",
        ressources: ["https://cryptoast.fr/bitcoin-n-est-pas-anonyme-mais-pseudonyme/", "Cryptoast - Contrairement aux idees reçues, Bitcoin n'est PAS anonyme..."]
    }
    ,
    {
        id: 37,
        question: "Qu’est-ce qu’une seed phrase ?",
        answers: ["Un mot de passe choisit par vous", "Suite de mots, souvent 12 ou 24 vous servant de cle de recuperation de votre wallet", "Suite de carateres aleatoire (chiffres lettres)", "Suite de mots, souvent 12 ou 24 vous servant a valider des transactions"],
        correct: "Suite de mots, souvent 12 ou 24 vous servant de cle de recuperation de votre wallet",
        ressources: ["https://coinacademy.fr/academie/definition-seed-phrase/", "Coin Academy - Qu’est-ce qu’une seed phrase en crypto ?"]
    }
    ,
    {
        id: 38,
        question: "Y a-t-il eut d'autres crypto-monnaie avant Bitcoin ?",
        answers: ["Oui", "Non"],
        correct: "Oui",
        ressources: ["https://www.espritcrypto.com/histoire-bitcoin/", "Esprit Crypto - Histoire du Bitcoin",
            "https://bitcoin.fr/Histoire/", "Bitcoin.fr - Les grandes dates de Bitcoin"]
    }
    ,
    {
        id: 39,
        question: "Que sont les Altcoins ?",
        answers: ["Toutes les crypto sauf Bitcoin", "Toutes les crypto et Bitcoin", "Autre nom donne a Bitcoin"],
        correct: "Toutes les crypto sauf Bitcoin",
        ressources: ["https://fr.cryptonews.com/guides/what-are-altcoins.htm", "Crypto News - Qu'est ce qu'un Altcoin"]
    }
    ,
    {
        id: 40,
        question: "a quoi sert un nœud ?",
        answers: ["Valider des transactions - Miner du Bitcoin", "Decentraliser le reseau - Decider des regles du consensus - Recevoir et envoyer des transactions", "Decentraliser le reseau - Miner du Bitcoin"],
        correct: "Decentraliser le reseau - Decider des regles du consensus - Recevoir et envoyer des transactions",
        ressources: ["https://decouvrebitcoin.fr/thematique/noeud/", "Decouvre Bitcoin - Noeud"]
    }
    ,
    {
        id: 41,
        question: "Combien coûtent un nœud Bitcoin ?",
        answers: ["10 000 - 12 000 €", "200 - 300 €", "1000 - 2000 €", "Gratuit"],
        correct: "200 - 300 €",
        ressources: ["https://decouvrebitcoin.fr/thematique/noeud/", "Decouvre Bitcoin - Noeud"]
    }
    ,
    {
        id: 42,
        question: "Quel type de wallet est le plus securise ?",
        answers: ["Cold Wallet", "Wallet Mutli-signature", "Hot Wallet"],
        correct: "Wallet Mutli-signature",
        ressources: ["https://decouvrebitcoin.fr/thematique/securite/", "Decouvre Bitcoin - Securite",
            "https://www.youtube.com/watch?v=UhiclrzZ7A8", "Hasheur - Quel portefeuille crypto choisir ? Wallet"]
    }
    ,
    {
        id: 43,
        question: "Combien y-a-t-il de satoshis dans un Bitcoin ",
        answers: ["100 Mille", "1 Million", "100 Millions", "1 Milliard"],
        correct: "100 Millions",
        ressources: ["https://www.cointribune.com/guides-crypto/bien-debuter/bitcoin-btc-quest-ce-quun-satoshi/", "Cointribune - Qu’est-ce qu’un satoshi ?"]
    }
    ,
    {
        id: 44,
        question: "Le lighting network permet-il de faire des transactions immediate ",
        answers: ["Oui", "Non"],
        correct: "Oui",
        ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Decouvre Bitcoin - lighting network"]
    }
    ,
    {
        id: 45,
        question: "Le lighting network permet d'appliquer des frais de transaction ",
        answers: ["En fonction du montant de la transaction", "En fonction du poids de la transaction", "Ce sont les mineurs et noeuds qui fixe les frais"],
        correct: "En fonction du montant de la transaction",
        ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Decouvre Bitcoin - lighting network"]
    }
    ,
    {
        id: 46,
        question: "Le reseau Bitcoin applique les frais de transaction en fonction",
        answers: ["Du montant de la transaction", "Du poids de la transaction", "Du prix de l'electricite"],
        correct: "En fonction du poids de la transaction",
        ressources: ["https://bitcoin.fr/bitcoin-comprendre-les-frais-de-transaction/", "Bitcoin.fr - Comprendre les frais de transaction",
            "https://www.cointribune.com/blockchain/ecosysteme/les-frais-moyens-de-transaction-de-bitcoins-btc-sont-a-104-une-premiere-depuis-deux-ans/", "Cointribune - Frais de transaction"]
    }
    ,
    {
        id: 47,
        question: "Les bitcoins presents sur votre compte dans un Exchange, vous appartiennent-ils",
        answers: ["Oui", "Non"],
        correct: "Non",
        ressources: ["https://www.cointribune.com/analyses/strategie/laisser-ses-btc-sur-les-exchanges-revient-a-shorter-le-bitcoin/", "Cointribune - Laisser ses BTC sur les exchanges revient a shorter le bitcoin",
            "https://cryptoast.fr/est-ce-dangereux-de-laisser-coins-exchange/", "Cryptoast - Est-ce dangereux de laisser ses cryptomonnaies sur un exchange"]
    }
    ,
    {
        id: 48,
        question: "Un Hardware Wallet est-il connecte a internet",
        answers: ["Oui", "Non"],
        correct: "Non",
        ressources: ["https://www.cointribune.com/analyses/cybersecurite/les-differents-types-de-wallets-crypto/", "Cointribune - Type de wallets",
            "https://www.youtube.com/watch?v=UhiclrzZ7A8", "Hasheur - Quel portefeuille crypto choisir ? Wallet"]
    }
    ,
    {
        id: 49,
        question: "Les Etats peuvent-ils arreter Bitcoin",
        answers: ["Oui", "Non"],
        correct: "Non",
        ressources: ["https://www.youtube.com/watch?v=C2da4NiMPF0", "Decouvre Bitcoin - Bitcoin Q&A N°26 - Et si Bitcoin se fait bannir ?"]
    }
    ,
    {
        id: 50,
        question: "Mixer ses coins permet :",
        answers: ["Faire des transactions gratuite", "Plus de tracabilite", "Plus de vie privee", "Plus de securite"],
        correct: "Plus de vie privee",
        ressources: ["https://decouvrebitcoin.fr/tutoriels/mixage/", "Decouvre Bitcoin - Tuto Mixage (John on Chain)"]
    }
    ,
    {
        id: 51,
        question: "Un nœud Bitcoin permet :",
        answers: ["De verifier l'integrite des transactions", "Miner du Bitcoin", "Contrôler le prix du Bitcoin", "interdire des transactions"],
        correct: "De verifier l'integrite des transactions",
        ressources: ["https://decouvrebitcoin.fr/thematique/noeud/", "Decouvre Bitcoin - Noeud"]
    }
    ,
    {
        id: 52,
        question: "Lorsque vous ouvrez un canal Lightning Network pouvez-vous recevoir des Bitcoins immediatement ?",
        answers: ["Oui", "Non"],
        correct: "Non",
        ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Decouvre Bitcoin - Lightning Network",
            "https://academie.decouvrebitcoin.fr/courses/ln-201-introduction-theorique-au-lightning-network/", "Decouvre Bitcoin - Introduction theorique au Lightning Network"]
    }
    ,
    {
        id: 53,
        question: "Le reseau Lightning Network est-il aussi securise que le reseau Bitcoin",
        answers: ["Oui", "Non"],
        correct: "Non",
        ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Decouvre Bitcoin - Lightning Network",]
    }
    ,
    {
        id: 54,
        question: "Quelle implementation n'est pas liee au Lightning Network ",
        answers: ["C-lightning", "Eclair", "LND", "RGB"],
        correct: "RGB",
        ressources: ["https://decouvrebitcoin.fr/thematique/lightning-network/", "Decouvre Bitcoin - Lightning Network",
            "https://www.youtube.com/watch?v=Yv3H_Yi9TPM&t=2s", "Surfin Bitcoin - La finance de demain avec Lightning Network & Bitcoin"]
    }
    ,
    {
        id: 55,
        question: "Sur quel protocole Bitcoin pourra-t-on executer des 'contrats intelligents - smart contracts'",
        answers: ["Lightning Network", "Liquid", "RGB", "reseau principal Bitcoin"],
        correct: "RGB",
        ressources: ["https://bitcoin.fr/fonctionnement-du-protocole-rgb/", "Bitcoin.fr - Fonctionnement protocole RGB",
            "https://www.youtube.com/watch?v=-6pZrQQ8uks", "Univers Bitcoin - RGB : DeFi sur Bitcoin ? Avec Julien Guitton de Condensat - UBP#46"]
    }
    ,
    {
        id: 56,
        question: "Le Bitcoin est souvent comparer ",
        answers: ["aux Monnaies fiat", "a l'Or", "aux Actions", "aux pierres precieuses"],
        correct: "a l'Or",
        ressources: ["https://cryptoast.fr/comparaison-bitcoin-et-or/", "Cryptoast - Comparaison du Bitcoin et de l'or"]
    }
    ,
    {
        id: 57,
        question: "Quelle est la meilleure strategie d'investissement pour du long terme ?",
        answers: ["Le trading", "Le gambling", "DCA (Dollar Cost Averaging)", "Faucet Bitcoin"],
        correct: "DCA (Dollar Cost Averaging)",
        ressources: ["https://www.youtube.com/watch?v=ZrAXTXpMFvs", "Surfin Bitcoin - Bitcoin : trader ou investir, il faut choisir !",
            "https://www.cointribune.com/analyses/investissements/le-dca-une-technique-efficace-en-temps-de-crise/", "Cointribune - DCA technique efficace en temps de crise"]
    }
    ,
    {
        id: 58,
        question: "Si j'achete du Bitcoin et que je n'y touche pas (je Hold), dois-je declarer mes Bitcoins",
        answers: ["Oui", "Non"],
        correct: "Non",
        ressources: ["https://decouvrebitcoin.fr/thematique/juridique/", "Decouvre Bitcoin - Juridique"]
    }
    // ,
    // {
    //     id: ,
    //     question: "",
    //     answers: ["", "", " ", " "],
    //     correct: "",
    //     ressources: ["", " - ",
    //         "", " - ",
    //         " ", " - ",
    //         " ", " - "]
    // }

]

    // ,
    // {
    //     id: ,
    //     question: "",
    //     answers: ["", "", " ", " "],
    //     correct: "",
    //     ressources: ["", " - ",
    //     "", " - ",
    //     " ", " - ",
    //     " ", " - "]
    // }
// import { Building } from 'typings/Building';

// Commented as dir ./it_IT does not exist currently
// const furtherFiles = require.context('./it_IT/', true, /.*(\/index)?\.js(on)?/);
const modules = {
    appstore: {
        save: 'Save',
        reset: 'Reset',
        noMapkit:
            'Questo modulo non funziona con il tipo di mappa "Mapkit" dovuto ad alcune limitazioni di Mapkit ',
        dev:
            "Questo modulo è attualmente ancora in fase di sviluppo. L'attivazione può portare a funzioni incomplete e difettose!",
        closeWarning: {
            title: 'Cambiamenti non salvati',
            text:
                "Hai apportato modifiche nell'AppStore che non sono state ancora salvate. Resettali o salvali per chiudere l'AppStore.",
            close: 'Chiudi il messaggio',
        },
    },
    settings: {
        name: 'Impostazioni',
        save: 'Salva',
        discard: 'Annulla i Cambiamenti',
        reset: 'Resetta',
        export: 'Esporta',
        import: 'Importa',
        resetWarning: {
            title: 'Resetta i cambiamenti',
            text:
                'Vuoi davvero ripristinare le impostazioni ai valori predefiniti? Questo non può essere annullato!',
            close: 'Annulla',
            total: 'All settings',
            module: 'Solo per questo modulo',
        },
        resetWarningSetting: {
            title: 'Reset impostazioni',
            text:
                'Volete davvero ripristinare questa impostazione <b>{setting}</b> del modulo <b>{modul}</b> al suo valore di default?',
            close: 'Annulla',
            reset: 'Resetta',
        },
        closeWarning: {
            title: 'Cambiamenti non salvati',
            text:
                'Hai apportato modifiche alle impostazioni che non sono ancora state salvate. Ripristinarli, eliminarli o salvarli per chiudere le impostazioni.',
            close: 'Chiudi messaggio',
        },
        changeList: {
            true: 'Su',
            false: 'Off',
        },
    },
} as { [moduleId: string]: { [key: string]: unknown } };

const t = {} as { [key: string]: unknown };

// Commented as dir ./it_IT does not exist currently
// furtherFiles
//     .keys()
//     .forEach(
//         key => (t[key.split('/')[1].replace(/\..*$/, '')] = furtherFiles(key))
//     );

export default {
    modules,
    ...t,
    error: {
        title: 'LSS Manager: Error',
        msg:
            'Se questo erraore avviene frequentamente, per cortesia contatta il Team di LSSM!',
    },
    warnings: {
        version: {
            title: 'Versione di LSS Manager sbagliata!',
            text:
                "Gentile utente, purtroppo abbiamo dovuto scoprire che non disponi dell'ultima versione di LSS Manager. L'ultima versione è {version}, ma prima hai {curver}. Ricarica il gioco senza cache (con Ctrl + F5, sui dispositivi Apple Command + R), questo dovrebbe risolvere il bug. Se l'errore persiste, segnalalo al team! Se utilizzi una versione sbagliata, non possiamo garantire la piena funzionalità di LSS-Manager.",
            close: 'Chiudi il messaggio e ricarica il gioco (Raccomandato)',
            abort: 'Chiudi il messaggio senza ricaricare il gioco.',
        },
    },
    globalSettings: {
        name: 'Impostazioni generali',
        labelInMenu: {
            title: "Etichetta al posto dell'icona nel menu",
            description:
                'Visualizza una semplice etichetta nella barra di navigazione al posto del logo LSSM',
        },
        allowTelemetry: {
            description:
                'Controlla se LSS-Manager è autorizzato a inviare dati che ci aiutano nello sviluppo di questa estensione.',
            title: 'Consenti telemetria',
        },
        iconBg: {
            description: 'Cambia il colore di sfondo di LSSM-Icon!',
            title: 'LSSM-Icon Colore di sfondo',
        },
        iconBgAsNavBg: {
            description:
                "Colora l'intera barra di navigazione con il colore di LSSM-Icon sfondo!",
            title: 'colorare la barra di navigazione',
        },
    },
    vehicles: {
        0: {
            caption: 'ABP',
            color: '#bf0a0a',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 3,
        },
        1: {
            caption: 'AS',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Richiesto dopo aver costruito 3 caserme dei pompieri',
        },
        2: {
            caption: 'AV/FNZ',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Richiesto dopo aver costruito 6 caserme dei pompieri',
        },
        3: {
            caption: 'CA/POLI',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 4,
            special: 'Richiesto dopo aver costruito 4 caserme dei pompieri',
        },
        4: {
            caption: 'Ambulanza BLSD',
            color: '#9c6d1c',
            coins: 25,
            credits: 5_000,
            minPersonnel: 2,
            maxPersonnel: 5,
        },
        5: {
            caption: 'KILO',
            color: '#990000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Richiesta dopo aver costruito 7 caserme dei pompieri',
        },
        6: {
            caption: 'AF/NBCR',
            color: '#770000',
            coins: 25,
            credits: 19_200,
            minPersonnel: 1,
            maxPersonnel: 6,
            special: 'Richiesto dopo aver costruito 11 caserme dei pompieri',
            schooling: 'Caserma dei vigili del fuoco - N.B.C.R.',
            shownSchooling: 'N.B.C.R.',
        },
        7: {
            caption: 'Volante',
            color: '#2c8123',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
        },
        8: {
            caption: 'Elisoccorso',
            color: '#e69b19',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 1,
        },
        9: {
            caption: 'APS',
            color: '#bb0000',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
        },
        10: {
            caption: 'AF/ARIA',
            color: '#aa0000',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Richiesto dopo aver cstruito 5 caserme dei pompieri.',
        },
        11: {
            caption: 'UCL',
            color: '#791515',
            coins: 25,
            credits: 20_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            schooling:
                'Caserma dei vigili del fuoco - Corso per funzionario (UCL)',
            shownSchooling: 'Comando mobile',
            special: 'Richiesto dopo aver costruito 13 caserme dei pompieri',
        },
        12: {
            caption: 'AG',
            color: '#dc1818',
            coins: 25,
            credits: 18_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling:
                'Caserma dei vigili del fuoco - Corso autista di Autogrù',
            shownSchooling: 'Autogrù',
            special: 'Richiesto dopo aver costruito 8 caserme dei pompieri',
        },
        13: {
            caption: 'Elicottero della Polizia',
            color: '#227723',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Polizia - Reparto volo della polizia',
            shownSchooling: 'Reparto volo della polizia',
            special:
                'Può essere acquistato con i crediti all raggiungimento del Rango:Caporeparto esperto.',
        },
        14: {
            caption: 'Furgone antisommossa',
            color: '#12a521',
            coins: 25,
            credits: 10_000,
            minPersonnel: 6,
            maxPersonnel: 9,
            schooling: 'Polizia - Specializzazione antisommossa/UOPI',
            shownSchooling: 'Specializzazione antisommossa/UOPI',
            special: 'Richiesto dopo aver costruito 8 stazioni di polizia ',
        },
        15: {
            caption: 'Unità cinofila antidroga',
            color: '#36aa22',
            coins: 25,
            credits: 7_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Polizia - Specializzazione unità cinoflia',
            shownSchooling: 'Specializzazione unità cinoflia',
            special: 'Richiesto dopo aver costruito 6 stazioni di polizia',
        },
        16: {
            caption: 'Moto della Polizia',
            color: '#296622',
            coins: 18,
            credits: 2_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: 'Polizia - Specializzazione motociclista',
            shownSchooling: 'Specializzazione motociclista',
        },
        17: {
            caption: 'UOPI SUV',
            color: '#178813',
            coins: 23,
            credits: 7_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            special: 'Richiesto dopo aver costruito 8 stazioni di polizia',
            schooling: 'Polizia - Specializzazione antisommossa/UOPI',
            shownSchooling: 'Specializzazione antisommossa/UOPI',
        },
        18: {
            caption: 'VLV',
            color: '#685d12',
            coins: 25,
            credits: 20_000,
            minPersonnel: 2,
            maxPersonnel: 3,
            special: 'Richiesto dopo aver costruito 3 stazioni di soccorso ',
            schooling: 'Soccorso - Corso medico di emergenza',
            shownSchooling: 'Medico di emergenza',
        },
        19: {
            caption: 'MSA',
            color: '#f59f00',
            coins: 25,
            credits: 25_000,
            minPersonnel: 2,
            maxPersonnel: 5,
            schooling: 'Soccorso - Corso medico di emergenza',
            shownSchooling: 'Medico di emergenza',
        },
        20: {
            caption: 'Ambulanza ordinaria',
            color: '#e09200',
            coins: 20,
            credits: 5_000,
            minPersonnel: 2,
            maxPersonnel: 4,
        },
        21: {
            caption: 'Volante Finanza',
            color: '#001bcc',
            coins: 10,
            credits: 15_000,
            minPersonnel: 1,
            maxPersonnel: 2,
        },
        22: {
            caption: 'Furgone artificieri',
            color: '#0a2bff',
            coins: 35,
            credits: 35_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Polizia - Corso Artificieri',
            shownSchooling: 'Corso Artificieri',
        },
        23: {
            caption: 'Camion NSSA',
            color: '#7181e7',
            coins: 25,
            credits: 10_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            schooling:
                'Caserma dei vigili del fuoco - Corso per operatore tecnico NSSA',
            shownSchooling: 'Corso per operatore tecnico NSSA',
        },
        24: {
            caption: 'Pickup SAF',
            color: '#6b7dee',
            coins: 25,
            credits: 10_000,
            minPersonnel: 3,
            maxPersonnel: 3,
            schooling:
                'Caserma dei vigili del fuoco - Corso per operatore tecnico SAF',
            shownSchooling: 'Corso per operatore tecnico SAF',
        },
        25: {
            caption: 'Barca',
            color: '#7187ff',
            coins: 12,
            credits: 6_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            special: 'Mezzo di rimorchio necessario (Pickup SAF, Camion NSSA)',
        },
        26: {
            caption: 'AF/BUS',
            color: '#9b1624',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 9,
        },
    },
    buildings: {
        0: {
            caption: 'Caserma dei vigili del fuoco',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Estensione ambulanze',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Giorni',
                },
				{
                    caption: 'Esentsione soccorso acquatico VVF',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Giorni',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: '4.400 together with small fire stations',
            maxLevel: 16,
            special:
                'Dalla 24° Caserma ,i costi aumentano con questa formula: <code>100.000+200.000*LOG<sub>2</sub>(Numero di caserme dei vigili del fuoco esistenti − 22)</code>. Il prezzo delle monete rimane costante!',
            startPersonnel: 10,
            startVehicles: ['ABP, APS'],
            maxBuildingsFunction: (): number => 4_400,
        },
        1: {
            caption: 'Scuola dei vigili del fuoco',
            color: '#992222',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Altre classi',
                credits: 400_000,
                coins: 40,
                duration: '7 giorni',
            }),
            levelcost: [],
            maxBuildings: 'nessun limite',
            maxLevel: 0,
            special:
                "L'amministratore Finanziario dell'alleanza può costruire ed espandere le accademie usando i fondi dell'Alleanza, L'educatore dell'alleanza può aprire i corsi all'interno dell'accademia",
            startPersonnel: 0,
            startVehicles: [],
        },
        2: {
            caption: 'Stazione ambulanze',
            color: '#ffa500',
            coins: 35,
            credits: 200_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: 'No limit',
            maxLevel: 16,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulanza BLSD'],
        },
        3: {
            caption: 'Scuola di formazione emergenza sanitaria (EMS)',
            color: '#ddc722',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Altre classi',
                credits: 400_000,
                coins: 40,
                duration: '7 giorni',
            }),
            levelcost: [],
            maxBuildings: 'nessun limite',
            maxLevel: 0,
            special:
                "L'amministratore Finanziario dell'alleanza può costruire ed espandere le accademie usando i fondi dell'Alleanza, L'educatore dell'alleanza può aprire i corsi all'interno dell'accademia",
            startPersonnel: 0,
            startVehicles: [],
        },
        4: {
            caption: 'Ospedale',
            color: '#bbe944',
            coins: 25,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Medicina interna generale',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 giorni',
                },
                {
                    caption: 'Chirurgia generale',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 giorni',
                },
                {
                    caption: 'Ginecologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Urologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Traumatologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Neurologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Neurochirurgia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Cardiologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Chirurgia Cardiaca',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Psichiatria',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Oncologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Gastroenterologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Oculistica',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Otorinolaringoiatria',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Dermatologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
                {
                    caption: 'Malattie infettive',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 giorni',
                },
            ],
            levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
            maxBuildings: 'No limit',
            maxLevel: 20,
            special:
                'Amministratore finanziario ed Admin Alleanza ,possono espandere e costruire gli ospedali usando i fondi alleanza',
            startPersonnel: 0,
            startVehicles: [],
        },
        5: {
            caption: 'Base elisoccorso',
            color: '#e7ad2f',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: [],
            maxBuildings: 'see specials',
            maxLevel: 0,
            special:
                'Fino al 125esimo edificio (di tutti i tipi) potranno essere solo 4, arrivati a questo numero sarà possibile aumentrali di uno ogni 25 edifici',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        6: {
            caption: 'Stazione di polizia',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Cella della prigione',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 giorni',
                },
                ...new Array(9).fill({
                    caption: 'Altra cella',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 giorni',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: '1.700 comprese stazioni di polizia piccole',
            maxLevel: 16,
            special:
                'Dalla 24° caserma i costi aumenteranno secondo la seguente formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Volante'],
            maxBuildingsFunction: (): number => 1_700,
        },
        7: {
            caption: 'Centrale operativa',
            color: '#24c3ae',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 'Ogni 25 edifici una centrale operativa',
            maxLevel: 0,
            special: 'La Centrale operativa è il centro amministrativo.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                Math.floor(buildingsAmountTotal / 25) + 1,
        },
        8: {
            caption: 'Accademia della Polizia',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Altre classi',
                credits: 400_000,
                coins: 40,
                duration: '7 giorni',
            }),
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "L'amministratore Finanziario dell'alleanza può costruire ed espandere le accademie usando i fondi dell'Alleanza, L'educatore dell'alleanza può aprire i corsi all'interno dell'accademia",
            startPersonnel: 0,
            startVehicles: [],
        },
        13: {
            caption: 'Elibase polizia',
            color: '#148423',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: ['1. 1.000.000 Credits / 50 Coins'],
            maxBuildings: 'see specials',
            maxLevel: 1,
            special:
                '2 piste di atterraggio possono essere costruite per stazione . Fino al 125esimo edificio (di tutti i tipi) potranno essere solo 4, arrivati a questo numero sarà possibile aumentrali di uno ogni 25 edifici.',
            startPersonnel: 3,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        14: {
            caption: 'Base temporanea',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 1,
            maxLevel: 0,
            special:
                "Puoi far stazionare quanti veicoli vuoi all'interno della base temporanea. Tuoi o dei membri della tua alleanza. Avrà una durata massima di ventiquattro  ore dopo di chie scadra rilasciando tutti i veicoli. potrai rinnovarla entro le 24 ore affinchè non sscada.",
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (): number => 1,
        },
        15: {
            caption: 'Caserma soccorso acquatico VVF',
            color: '#7fffd4',
            coins: 50,
            credits: 500_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
            maxBuildings: 'No Limit',
            maxLevel: 5,
            special: 'Avrete 10 persone e un Pickup SAF gratis.',
            startPersonnel: 10,
            startVehicles: ['Pickup SAF'],
        },
        16: {
            caption: 'Carcere',
            coins: 'x',
            credits: 100_000,
            extensions: [
                {
                    caption: 'Cella della prigione',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 giorni',
                },
                ...new Array(9).fill({
                    caption: 'Altra cella',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 giorni',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "Questo edificio può essere costruito solo dagli amministratori dell'alleanza",
            startPersonnel: 0,
            startVehicles: [],
        },
        18: {
            caption: 'Caserma dei vigili del fuoco (piccola)',
            color: '#aa1111',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Conversione a caserma grande ,il costo della caserma piccola',
            ],
            maxBuildings: '4.400 together with fire stations',
            maxLevel: 5,
            special:
                'A partire dalla 24° caserma i costi aumenteranno secondo la seguente formula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)) / 2</code>. max. 1 Million Credits. The Coins price remains constant!',
            startPersonnel: 10,
            startVehicles: ['ABP', 'APS'],
            maxBuildingsFunction: (): number => 4_400,
        },
        19: {
            caption: 'Stazione di polizia (piccola)',
            color: '#116611',
            coins: 25,
            credits: 50_000,
            extensions: [
                {
                    caption: 'Cella della prigione',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 giorni',
                },
                ...new Array(1).fill({
                    caption: 'Altra cella',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 giorni',
                }),
            ],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-4. 100.000',
                'Conversione a caserma grande ,il costo della caserma piccola',
            ],
            maxBuildings: '1.700 insieme alle stazioni di polizia',
            maxLevel: 4,
            special:
                'A partire dalla 24° caserma i costi aumenteranno secondo la seguente formula:<code>(100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)) / 2</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Volante'],
            maxBuildingsFunction: (): number => 1_700,
        },
        20: {
            caption: 'Stazione ambulanze (stazione piccola)',
            color: '#eeb611',
            coins: 25,
            credits: 100_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Conversione a caserma grande ,il costo della caserma piccola',
            ],
            maxBuildings: 'No limit',
            maxLevel: 5,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulanza BLSD'],
        },
        21: {
            caption: 'Caserma della Finanza',
            color: '#113a66',
            coins: 35,
            credits: 200_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
            maxBuildings: '',
            maxLevel: 5,
            startPersonnel: 4,
            startVehicles: ['Volante Finanza'],
        },
    },
    buildingCategories: {
        'Vigili del Fuoco': {
            buildings: [0, 1, 15, 18],
            color: '#ff2d2d',
        },
        'Soccorso': {
            buildings: [2, 3, 4, 5, 20],
            color: '#ffa500',
        },
        'Polizia': {
            buildings: [6, 8, 19, 13, 21],
            color: '#00ac00',
        },
        'Altro': {
            buildings: [7, 14],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Vigili del Fuoco': {
            vehicles: {
                'Autopompa': [0, 9],
                'Kilolitrica': [5],
                'Veicoli speciali': [1, 2, 3, 6, 10, 11, 12, 26],
                'soccorso in acqua': [23, 24, 25],
            },
            color: '#ff2d2d',
        },
        'Soccorso': {
            vehicles: {
                Ambulanza: [4, 20],
                Elisoccorso: [8],
                Medica: [18, 19],
            },
            color: '#ffa500',
        },
        'Polizia': {
            vehicles: {
                'Volante': [7],
                'UOPI': [14, 17, 22],
                'Moto Polizia': [16],
                'Elicottero': [13],
                'Antidroga': [15],
                'Finanza': [21],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    vehicleBuildings: [0, 2, 5, 6, 13, 14, 18, 19, 20, 21],
    cellBuildings: [6, 19],
    cellExtensions: [
        '6_0',
        '6_1',
        '6_2',
        '6_3',
        '6_4',
        '6_5',
        '6_6',
        '6_7',
        '6_8',
        '6_9',
        '19_0',
        '19_1',
    ],
    bedBuildings: [4],
    schoolBuildings: [1, 3, 8],
    dispatchCenterBuildings: [7],
    schoolings: {
        'Caserma dei vigili del fuoco': [
            {
                caption: 'N.B.C.R.',
                duration: '3 giorni',
            },
            {
                caption: 'Corso per funzionario (UCL)',
                duration: '5 giorni',
            },
            {
                caption: 'Servizio antincendio aeroportuale in addestramento',
                duration: '3 giorni',
            },
            {
                caption: 'Corso per operatore tecnico SAF',
                duration: '3 giorni',
            },
            {
                caption: 'Navigazione in oceano',
                duration: '5 giorni',
            },
            {
                caption: 'Corso autista di Autogrù',
                duration: '3 giorni',
            },
            {
                caption: 'Corso medico di emergenza',
                duration: '7 giorni',
            },
            {
                caption: 'Corso per operatore tecnico NSSA',
                duration: '5 giorni',
            },
        ],
        'Polizia': [
            {
                caption: 'Reparto volo della polizia',
                duration: '7 giorni',
            },
            {
                caption: 'Specializzazione antisommossa/UOPI',
                duration: '5 giorni',
            },
            {
                caption: 'Specializzazione unità cinoflia',
                duration: '5 giorni',
            },
            {
                caption: 'Specializzazione motociclista',
                duration: '3 giorni',
            },
            {
                caption: 'Corso Artificieri',
                duration: '3 giorni',
            },
        ],
        'Soccorso': [
            {
                caption: 'Corso medico di emergenza',
                duration: '7 giorni',
            },
        ],
    },
    amount: 'Quantità',
    search: 'Cerca',
    alliance: 'Alleanza',
    premiumNotice: "Quest'opzione è permessa solo ad utenti premium",
    credits: 'Crediti',
    close: 'Chiudi',
    fullscreen: {
        expand: 'Attiva modalità schermo intero',
        compress: 'Disabilita modalità schermo intero',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Cars | Car | Cars',
    building: 'Edifici',
    station: 'stazioni | Stazione | Stazioni',
    distance: 'Distanza | Distanze',
    vehicleType: 'Tipo di veicolo',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    buildingIcons: [
        'fire',
        'graduation-cap',
        'clinic-medical',
        'graduation-cap',
        'hospital',
        'hospital-symbol',
        'shield-alt',
        'rss',
        'graduation-cap',
        'building',
        'graduation-cap',
        'balance-scale',
        'ambulance',
        'helicopter',
        'warehouse',
        'water',
        'border-all',
        'balance-scale-left',
        'fire',
        'shield-alt',
        'clinic-medical',
        'paw',
    ],
    pois: [
        'Parco',
        'Lago',
        'Ospedale',
        'Bosco',
        "Fermata dell'autobus",
        'Fermata del tram',
        'Stazione ferroviaria (traffico regionale)',
        'Stazione ferroviaria (traffico regionale e viaggi a lunga distanza)',
        'Stazione merci',
        'Supermercato (piccolo)',
        'Supermercato (grande)',
        'Stazione di servizio',
        'Scuola',
        'Museo',
        'Centro commerciale',
        'Officina meccanica',
        'Uscita autostradale',
        'Mercatino di Natale',
        '',
        'Discoteca',
        'Stadio',
        'Azienda agricola',
        'Edificio adibito a uffici',
        'Piscina',
        '',
        'Teatro',
        'Luna park',
        'Fiume',
        'Piccolo aeroporto (pista)',
        'Grande aeroporto (pista)',
        'Terminal aeroporto',
        'Banca',
        'Magazzino',
        'Ponte',
        'Tavola calda',
        'Porto mercantile',
        'Piattaforma ecologica',
        'Grattacielo',
        'Molo navi da crociera',
        'Porticciolo',
        'Passaggio a livello',
        'Galleria',
        'Magazzino a celle frigorifere',
        'Centrale elettrica',
        'Fabbrica',
        'Deposito rottami',
        'Stazione metropolitana',
        'Piccolo serbatoio di accumulo sostanze chimiche',
        'Grande serbatoio di accumulo sostanze chimiche',
        'Hotel',
        'Bar',
        'Discarica',
        'Parcheggio coperto',
        'Silos',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [214],
};

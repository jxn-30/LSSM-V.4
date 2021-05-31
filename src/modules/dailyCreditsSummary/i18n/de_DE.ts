export default {
	amount: 'Anzahl',
	categories: {
		allianceMission: {
			regex: /^\[Verband\]/,
			title: 'Verbandseinsätze',
			backgroundColor: '#ff2800',
			textColor: 'white',
		},
		mission: {
			regex: '^%missions%',
			title: 'Eigene Einsätze',
			backgroundColor: '#ff2400',
			textColor: 'white',
		},
		buyVehicle: {
			regex: /Fahrzeug gekauft/,
			backgroundColor: '#007fff',
			textColor: 'white',
		},
		dailyLogin: {
			regex: /Täglicher Login-Bonus/,
			backgroundColor: '#8db600',
			textColor: 'black',
		},
		buildings: {
			regex: /(Gebäude gebaut|Rückerstattung Gebäude$|Gebäude abgerissen)/,
			title: 'Gebäude gebaut/abgerissen',
			backgroundColor: '#ed872d',
			textColor: 'black',
		},
		upgradeBuilding: {
			regex: /(Wache (erweitert( \(von Kleinwache\))?|ausgebaut)|Abbrechen:|Rückerstattung Gebäudeausbau)/,
			title: 'Gebäude ausgebaut',
			backgroundColor: '#000080',
			textColor: 'white',
		},
		task: {
			regex: /Erfüllte Aufgabe ".*?"/,
			title: 'Erfüllte Aufgabe',
			backgroundColor: '#bb3385',
			textColor: 'white',
		},
		patients: {
			regex: /Patienten Behandlung/,
			title: 'Patienten',
			backgroundColor: '#fff600',
			textColor: 'black',
		},
		alliancePatients: {
			regex: /Krankenhaus - Verbandseinlieferung/,
			backgroundColor: '#ffff99',
			textColor: 'black',
		},
		prisoners: {
			regex: /Gefangenen? transportiert/,
			title: 'Gefangene',
			backgroundColor: '#0bda51',
			textColor: 'black',
		},
		schoolings: {
			regex: /(Lehrgang|Ausbildung( fremdes)? Personal)/,
			title: 'Lehrgang',
			backgroundColor: '#ff00ff',
			textColor: 'white',
		},
		shitComplexes: {
			regex:
				/(An den Gebäudekomplex angehängte Gebäude|Aus(bau|gebaut) zu einem Gebäudekomplex)/,
			title: 'Gebäudekomplexe',
			backgroundColor: '#b5651d',
			textColor: 'white',
		},
		fireAlarmSystemCancel: {
			regex: /Fehlalarm/,
			backgroundColor: '#c80815',
			textColor: 'white',
		},
	},
	category: 'Kategorie',
	title: 'Zusammenfassung',
	total: 'Insgesamt',
	others: 'Sonstiges',
};
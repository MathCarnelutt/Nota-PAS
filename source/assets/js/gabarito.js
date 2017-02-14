var _gabarito = {
	'2016': {
		'1ano': {
			'conhecimentos-gerais': [5, 5, 11, 23, 22, 15, 11, 23, 14, 13, 6, 27, 29, 13, 19, 7, 11, 12, 26, 6, 27, 20, 17, 12, 10],
			'portugues-literatura': [11, 5, 20, 26, 23, 27, 30, 18, 11, 11],
			'espanhol': [21, 21, 6, 7, 25],
			'frances': [3, 26, 29, 13, 4],
			'ingles': [28, 17, 26, 21, 28]
		},

		'2ano': {
			'conhecimentos-gerais': [29, 21, 20, 27, 14, 18, 5, 26, 8, 14, 5, 30, 28, 23, 5, 6, 20, 25, 8, 2, 21, 11, 28, 29, 16],
			'portugues-literatura': [24, 4, 6, 29, 18, 20, 10, 21, 18, 16],
			'espanhol': [23, 10, 17, 6, 10],
			'frances': [13, 18, 22, 14, 25],
			'ingles': [9, 14, 17, 11, 22]
		},

		'3ano': {
			'conhecimentos-gerais': [7, 19, 13, 18, 4, 14, 29, 16, 23, 10, 13, 3, 2, 14, 23, 1, 25, 18, 13],
			'portugues-literatura': [6, 10, 23, 5, 17, 18, 12],
			'espanhol': [18, 9, 3, 12],
			'frances': [17, 20, 30, 14],
			'ingles': [3, 9, 24, 22],
			'arte': [25, 25, 30, 5, 11],
			'biologia': [26, 17, 3, 15, 9],
			'educacao-fisica': [13, 14, 7, 22, 11],
			'filosofia': [14, 25, 23, 26, 15],
			'fisica': [17, 10, 25, 23, 28],
			'geografia': [14, 23, 27, 7, 30],
			'historia': [23, 10, 25, 4, 10],
			'matematica': [18, 28, 12, 29, 20],
			'quimica': [17, 28, 11, 20, 13],
			'sociologia': [15, 21, 13, 17, 19]
		}
	}
};

var _categorias = {
	'2016': {
		'3ano': {
			'conhecimentos-gerais': [0, 18],
			'portugues-literatura': [19, 25],
			'lingua-estrangeira': [26, 29],
			'especifica-1': [30, 34],
			'especifica-2': [35, 39],
		},
		'2ano': {
			'conhecimentos-gerais': [0, 24],
			'portugues-literatura': [25, 34],
			'lingua-estrangeira': [35, 39]
		},
		'1ano': {
			'conhecimentos-gerais': [0, 24],
			'portugues-literatura': [25, 34],
			'lingua-estrangeira': [35, 39]
		}
	}
};

var _especificas = {
	'administracao': ['historia', 'matematica'],
	'agronomia': ['biologia', 'quimica'],
	'arquitetura-e-urbanismo': ['arte', 'matematica'],
	'artes-cenicas': ['arte', 'historia'],
	'artes-visuais': ['arte', 'historia'],
	'biomedicina': ['biologia', 'quimica'],
	'bioquimica': ['biologia', 'quimica'],
	'ciencia-da-computacao': ['fisica', 'matematica'],
	'ciencias-biologicas': ['biologia', 'quimica'],
	'ciencias-contabeis': ['historia', 'matematica'],
	'ciencias-econômicas': ['historia', 'matematica'],
	'ciencias-sociais': ['historia', 'sociologia'],
	'comunicacao-e-multimeios': ['arte', 'sociologia'],
	'design': ['fisica', 'historia'],
	'direito': ['historia', 'sociologia'],
	'educacao-fisica': ['educacao-fisica', 'historia'],
	'enfermagem': ['biologia', 'sociologia'],
	'engenharia-agricola': ['fisica', 'matematica'],
	'engenharia-ambiental': ['fisica', 'matematica'],
	'engenharia-civil': ['fisica', 'matematica'],
	'engenharia-de-alimentos': ['matematica', 'quimica'],
	'engenharia-de-producao': ['fisica', 'matematica'],
	'engenharia-elétrica': ['fisica', 'matematica'],
	'engenharia-mecânica': ['fisica', 'matematica'],
	'engenharia-quimica': ['matematica', 'quimica'],
	'engenharia-textil': ['matematica', 'quimica'],
	'estatistica': ['fisica', 'matematica'],
	'farmacia': ['biologia', 'quimica'],
	'filosofia': ['filosofia', 'historia'],
	'fisica': ['fisica', 'matematica'],
	'geografia': ['geografia', 'matematica'],
	'historia': ['geografia', 'historia'],
	'informatica': ['fisica', 'matematica'],
	'letras': ['filosofia', 'historia'],
	'licenciatura-plena-em-ciencias': ['biologia', 'matematica'],
	'matematica': ['fisica', 'matematica'],
	'medicina': ['biologia', 'quimica'],
	'medicina veterinaria': ['biologia', 'quimica'],
	'moda': ['historia', 'matematica'],
	'música': ['arte', 'historia'],
	'odontologia': ['biologia', 'quimica'],
	'pedagogia': ['geografia', 'historia'],
	'psicologia': ['biologia', 'historia'],
	'quimica': ['matematica', 'quimica'],
	'secretariado-executivo-trilingue': ['historia', 'sociologia'],
	'servico-social': ['historia', 'sociologia'],
	'tecnologia-em-alimentos': ['fisica', 'quimica'],
	'tecnologia-em-biotecnologia': ['biologia', 'quimica'],
	'tecnologia-em-construcao-civil': ['fisica', 'matematica'],
	'tecnologia-em-meio-ambiente': ['matematica', 'quimica'],
	'zootecnia': ['biologia', 'matematica']
};
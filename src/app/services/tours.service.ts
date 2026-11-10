import { Injectable, inject } from '@angular/core';
import { LanguageService } from './language.service';

export interface ItinerarioSeccion {
  hora?: string;
  titulo: string;
  texto?: string;
  tabla?: { label: string; valor: string }[];
}

export interface ItinerarioDia {
  dia: number;
  titulo?: string;
  desc?: string;
  secciones?: ItinerarioSeccion[];
}

export interface Tour {
  id: string; // Slug
  cat: string;
  bg: string;
  icon: string;
  badge?: string;
  meta: string[];
  title: string;
  pdfUrl?: string;
  desc: string;
  intro?: { title: string; paragraphs: string[] };
  precio: string;
  waLink: string;
  // Detalle
  fullImg?: string;
  itinerario?: ItinerarioDia[];
  incluye?: string[];
  noIncluye?: string[];
  recomendaciones?: string[];
}

@Injectable({ providedIn: 'root' })
export class ToursService {
  private langService = inject(LanguageService);

  // Español (también se usa para el francés)
  private toursEs: Tour[] = [
    {
      id: 'trekking-cerro-kennedy-2-dias-1-noche',
      intro: {"title": "Cerro Kennedy: una aventura entre montañas, aves y naturaleza.", "paragraphs": ["Descubre la magia de la Sierra Nevada de Santa Marta a través de una experiencia que combina aventura, biodiversidad y conexión auténtica con las comunidades locales.", "Embárcate en un trekking por senderos naturales, fincas campesinas y reservas llenas de vida, mientras disfrutas del avistamiento de aves extraordinarias como el Periquito de Santa Marta, el Tucancito Esmeralda, el Inca Coliblanco, el Quetzal dorado y la Tángara Serrana.", "Lejos del turismo masivo, el Cerro Kennedy te invita a respirar aire puro, contemplar paisajes fascinantes y desconectarte de la rutina para reconectar con lo esencial.", "No es solo una caminata, es una experiencia para sentir, explorar y descubrir la naturaleza en su estado más auténtico."]},
      cat: 'trekking',
      bg: 'linear-gradient(135deg,#f0c98a,#b87333)',
      icon: '🏔️',
      badge: '⭐ Popular',
      meta: ['🗓️ 2 días', '🌙 1 noche', '🥾 Trekking', '⛰️ 2.860 msnm'],
      title: 'Trekking Cerro Kennedy 2D 1N',
      pdfUrl: '/documento/cerro-kennedy-san-lorenzo.pdf',
      desc: 'Durante dos días vivirás una experiencia inolvidable ascendiendo por las montañas de la imponente Sierra Nevada de Santa Marta, disfrutando del bosque nuboso donde habitan aves, anfibios, insectos y mamíferos. Interactuarás con las familias locales y sus historias. Desde la cumbre del Cerro Kennedy (2.860 msnm) obtendrás una vista mágica de los picos nevados Bolívar y Colón y toda su cadena montañosa, la montaña más alta del mundo cerca al mar (5.775 msnm). Recorrido total de 16 km, dificultad media. RNT280360.',
      precio: '$856.000',
      waLink: 'https://wa.me/573114054907?text=Hola!%20Quiero%20info%20del%20Trekking%20Cerro%20Kennedy%202D1N',
      fullImg: '/assets/img/img4.jpg',
      itinerario: [
        {
          dia: 1,
          titulo: 'De Santa Marta a la Finca Santa Elena',
          secciones: [
            { hora: '07:30 a. m.', titulo: 'Salida desde Santa Marta', texto: 'Salimos desde tu hotel en Santa Marta rumbo a Minca (650 m s. n. m.), recorriendo las montañas de la Sierra Nevada.' },
            { titulo: 'Experiencia cafetera', texto: 'Visitamos una finca cafetera tradicional, donde el señor José, conocedor de la cultura cafetera de la Sierra Nevada, nos comparte los secretos del cultivo y el proceso del café, una tradición que forma parte de la vida campesina de la región.' },
            { titulo: 'Camino a la montaña', texto: 'Continuamos en vehículo campero aproximadamente un kilómetro más, hasta la finca La María, en la vereda La Tagua, donde termina el recorrido en carro. Desde allí, emprendemos una caminata de 3 kilómetros, de aproximadamente 2 horas, entre senderos rurales y paisajes de montaña hasta llegar a la Finca Santa Elena.' },
            { titulo: 'Bienvenida en la Finca Santa Elena', texto: 'A nuestra llegada nos recibirá la familia anfitriona y el carisma de la señora Ana, cuya alegría, amabilidad y trato cercano hacen que cada visitante se sienta como en casa. Nos instalamos y disfrutamos de un refrigerio de bienvenida y un almuerzo de tradición campesina, con recetas llenas de sabor y algunos productos cultivados en nuestra tierra.\nPor la tarde, exploramos los alrededores de la finca y contemplamos un hermoso atardecer sobre las montañas, con vistas panorámicas hacia la Ciénaga Grande de Santa Marta y el mar Caribe.' },
            { titulo: 'Cena y alojamiento', texto: 'Cerramos el día con una cena de sabor casero, inspirada en las recetas campesinas de nuestra tierra, y una noche de descanso en medio de la tranquilidad de la montaña, disfrutando de la hospitalidad campesina y la conexión con la naturaleza.' }
          ]
        },
        {
          dia: 2,
          titulo: 'Amanecer y caminata al Cerro Kennedy',
          secciones: [
            { hora: '05:30 a. m.', titulo: 'Un amanecer especial', texto: 'Comenzamos el día contemplando el amanecer de la Sierra Nevada de Santa Marta, acompañado de una aromática taza de café de la Sierra y un desayuno tradicional con un toque diferente, preparado con el sabor de nuestra tierra y la calidez de nuestro hogar campesino.' },
            { hora: '06:30 a. m.', titulo: 'Caminata al Cerro Kennedy', texto: 'Iniciamos una caminata de aproximadamente 3 horas y 5 kilómetros hasta el mirador, ubicado a 3.100 m s. n. m. Desde allí, disfrutamos de una espectacular panorámica de los picos nevados Bolívar y Colón.\nDurante el recorrido por senderos privados, atravesamos quebradas y nacimientos de agua, rodeados de exuberante naturaleza y con la oportunidad de observar aves endémicas de la región.' },
            { titulo: 'Regreso a la Finca Santa Elena', texto: 'Retornamos por el mismo sendero hasta la finca, donde disfrutamos de un almuerzo de tradición campesina, con recetas llenas de sabor y algunos productos cultivados en nuestra tierra, antes de emprender el regreso por carretera hacia Santa Marta.' },
            { hora: '05:00 p. m.', titulo: 'Llegada aproximada a Santa Marta', texto: 'Finalizamos esta experiencia con recuerdos inolvidables de la montaña, sus paisajes, sus sabores y la hospitalidad de las familias campesinas de la Sierra Nevada.' },
            { titulo: 'Ficha técnica del recorrido', tabla: [
              { label: 'Duración', valor: '2 días y 1 noche' },
              { label: 'Tiempo estimado de caminata día 1', valor: '2 horas' },
              { label: 'Distancia del recorrido día 1', valor: '3 km' },
              { label: 'Tiempo estimado de caminata día 2', valor: '6 horas' },
              { label: 'Distancia del recorrido día 2', valor: '13 km' },
              { label: 'Distancia total', valor: '16 km' },
              { label: 'Nivel de dificultad', valor: 'Moderado' },
              { label: 'Alojamiento', valor: 'Finca campesina' }
            ] },
            { titulo: 'Nota importante', texto: 'El itinerario podrá presentar modificaciones por solicitud del cliente o debido a condiciones ambientales imprevistas, priorizando siempre la seguridad de los viajeros y el desarrollo responsable de la experiencia.' }
          ]
        }
      ],
      incluye: [
        'Una noche de alojamiento en la Finca Santa Elena en habitación múltiple (No Full house)',
        'Transporte en camionetas 4x4 tipo campero',
        'Tour del Café en una finca tradicional',
        'Alimentación: 2 almuerzos, 1 cena y 1 desayuno',
        'Frutas y agua para el camino',
        'Refrigerio de bienvenida',
        'Bebidas calientes ilimitadas (café y té)',
        'Trekking a la cumbre del Cerro Kennedy',
        'Guía local',
        'Entradas a sitios turísticos',
        'Seguro de viaje'
      ],
      noIncluye: [
        'Botella de agua para el primer día',
        'Caballos para portar maletas ($40.000 COP por trayecto utilizado)',
        'Guía en inglés u otro idioma (solicitar servicio en caso de ser requerido)',
        'Servicios no descritos'
      ],
      recomendaciones: [
        'Botas de trekking',
        'Chaqueta para el frío (10°C)',
        'Ropa para clima frío',
        'Impermeable para la lluvia',
        'Morral pequeño',
        'Artículos de uso personal',
        'Repelente y protector solar',
        'Bastones de trekking (si tienes)'
      ]
    },
    {
      id: 'ciudad-perdida-4-dias',
      cat: 'trekking',
      bg: 'linear-gradient(135deg,#fff9c4,#f9a825)',
      icon: '🏛️',
      badge: '⭐ Exclusivo',
      meta: ['🗓️ 4 días', '🌙 3 noches', '🥾 Trekking'],
      title: 'Ciudad Perdida 4 Días',
      desc: 'El trek más famoso de Colombia. Camina por la selva hasta llegar a la mítica Ciudad Perdida Tayrona.',
      precio: '$1.800.000',
      waLink: 'https://wa.me/573114054907?text=Hola!%20Quiero%20info%20de%20Ciudad%20Perdida%204%20Dias',
      fullImg: '/assets/img/img5.jpeg',
      itinerario: [
        { dia: 1, desc: 'Salida de Santa Marta hacia El Mamey. Almuerzo y caminata de 4 horas hacia el primer campamento. Cena y descanso en hamacas o camas.' },
        { dia: 2, desc: 'Caminata intensa de 7 horas pasando por comunidades indígenas Mutanyi. Baño en el río Buritaca y llegada al campamento Mumake.' },
        { dia: 3, desc: '¡El gran día! Ascenso de 1200 escalones hacia Teyuna (Ciudad Perdida). Recorrido histórico y ritual indígena. Regreso al campamento.' },
        { dia: 4, desc: 'Caminata de regreso hacia El Mamey. Almuerzo de despedida y transporte de vuelta a Santa Marta.' }
      ],
      incluye: [
        'Guía indígena y campesino',
        'Todas las comidas',
        'Entradas al Parque ICANH',
        'Alojamiento en campamentos',
        'Transporte'
      ],
      recomendaciones: [
        'Ropa de secado rápido',
        'Botas cómodas',
        'Repelente (mucho)',
        'Linterna y powerbank'
      ]
    },
    {
      id: 'trekking-cerro-kennedy-3-dias-2-noches',
      intro: {"title": "Cerro Kennedy: una aventura entre montañas, aves y naturaleza.", "paragraphs": ["Descubre la magia de la Sierra Nevada de Santa Marta a través de una experiencia que combina aventura, biodiversidad y conexión auténtica con las comunidades locales.", "Embárcate en un trekking por senderos naturales, fincas campesinas y reservas llenas de vida, mientras disfrutas del avistamiento de aves extraordinarias como el Periquito de Santa Marta, el Tucancito Esmeralda, el Inca Coliblanco, el Quetzal dorado y la Tángara Serrana.", "Lejos del turismo masivo, el Cerro Kennedy te invita a respirar aire puro, contemplar paisajes fascinantes y desconectarte de la rutina para reconectar con lo esencial.", "No es solo una caminata, es una experiencia para sentir, explorar y descubrir la naturaleza en su estado más auténtico."]},
      cat: 'trekking',
      bg: 'linear-gradient(135deg,#b2dfdb,#00796b)',
      icon: '⛺',
      meta: ['🗓️ 3 días', '🌙 2 noches', '🥾 Trekking'],
      title: 'Trekking Cerro Kennedy 3 Días',
      pdfUrl: '/documento/cerro-kennedy-san-lorenzo.pdf',
      desc: 'Adéntrate durante tres días en las montañas de la imponente Sierra Nevada descubriendo su gran riqueza natural y contemplando fabulosos amaneceres y atardeceres. Descansa en una casa rural conviviendo con una familia de campo, deleitando comida tradicional, queso hecho en casa y café local. Visitarás el Cerro Kennedy con su vista mágica de los picos nevados Bolívar y Colón (5.775 msnm), y en el tercer día la maravillosa Cascada Sagrada Panku, una de las caídas de agua más hermosas de la Sierra Nevada donde podrás refrescarte en sus aguas cristalinas. aventura, dificultad medio-alta. RNT280360.',
      precio: '$1.225.000',
      waLink: 'https://wa.me/573114054907?text=Hola!%20Quiero%20info%20del%20Cerro%20Kennedy%203D2N',
      fullImg: '/assets/img/img1.jpeg',
      itinerario: [
        { dia: 1, desc: 'Santa Marta – Finca Santa Elena. Salida a las 07:30 am desde tu hotel en Santa Marta, tomando la carretera que comunica con Minca (650 msnm). Visita a una finca cafetera tradicional donde conocerás el proceso del café. Al terminar el recorrido iniciamos la caminata de 3 kilómetros (2 horas) hasta la Finca Santa Elena. Llegada, instalación, refrigerio de bienvenida, almuerzo típico colombiano y recorrido por los alrededores con vista al atardecer sobre las montañas, la Ciénaga Grande y el mar Caribe. Cena y noche.' },
        { dia: 2, desc: 'Trekking Finca Santa Elena – Cerro Kennedy. Iniciamos el día contemplando el amanecer de la Sierra Nevada con una taza de café colombiano. Desayuno tradicional. 06:30 am: caminata en ascenso al Cerro Kennedy (5 km por trayecto, aprox. 3 horas según tu estado físico, nivel de dificultad alto) hasta el mirador a 3.000 msnm, con excelente vista sobre los picos nevados Bolívar y Colón. Se cruzan quebradas y áreas de bosque nublado con oportunidad de observar aves endémicas. El retorno a la Finca Santa Elena se realiza en 2 horas para almorzar, descansar y aprovechar la tarde disfrutando del atardecer, la hamaca y el columpio.' },
        { dia: 3, desc: 'Trekking Finca Santa Elena – Cascada Panku. Vista del amanecer de la Sierra Nevada degustando una taza de café. Desayuno típico colombiano. Caminata de 4,5 km por trayecto hasta la Cascada Sagrada Panku, donde disfrutaremos de un refrescante baño; la topografía del sendero es variable y exigente, recomendada para expertos. Retorno a la Finca Santa Elena para el almuerzo. Regreso a la carretera (45 min) y retorno a Santa Marta. Hora de llegada: 05:00 pm.' }
      ],
      incluye: [
        'Hospedaje 2 noches en la Finca Santa Elena en habitación múltiple (No Full house)',
        'Transporte en camionetas 4x4 tipo campero desde Santa Marta o Minca, ida y regreso',
        'Tour del Café en finca tradicional',
        'Alimentación: 3 almuerzos, 2 cenas y 2 desayunos',
        'Frutas para el camino, refrigerio y bebidas calientes, suministro de agua',
        'Trekking a la cima del Cerro Kennedy (5 km por trayecto)',
        'Trekking a la Cascada Sagrada Panku (4,5 km por trayecto)',
        'Guía local',
        'Seguro de viaje',
        'Entradas'
      ],
      noIncluye: [
        'Botella de agua para el primer día',
        'Caballos para portar maletas ($40.000 COP por trayecto utilizado)',
        'Guía en inglés u otro idioma (solicitar servicio en caso de ser requerido)',
        'Servicios no descritos'
      ],
      recomendaciones: [
        'Ropa para frío',
        'Botas de montaña',
        'Cámara fotográfica',
        'Bastones de trekking'
      ]
    },
    {
      id: 'trekking-cascada-sagrada-panku',
      cat: 'trekking',
      bg: 'linear-gradient(135deg,#e1f5fe,#0288d1)',
      icon: '💦',
      meta: ['🗓️ 2 días', '🌿 Espiritual'],
      title: 'Cascada Sagrada Panku',
      desc: 'Visita el guardián de las aguas de la Sierra Nevada. Una caminata espiritual y refrescante.',
      precio: '$840.000',
      waLink: 'https://wa.me/573114054907?text=Hola!%20Quiero%20info%20de%20Cascada%20Panku',
      fullImg: '/assets/img/img2.jpeg',
      itinerario: [
        { dia: 1, desc: 'Traslado a Minca y La Tagua. Caminata por bosque de niebla hasta la finca. Avistamiento de aves.' },
        { dia: 2, desc: 'Descenso a la Cascada Panku (50m de altura). Baño ceremonial y regreso a Santa Marta.' }
      ],
      incluye: [
        'Transporte 4x4',
        'Guía',
        'Alimentación',
        'Hospedaje 1 noche'
      ],
      recomendaciones: [
        'Protector solar',
        'Traje de baño',
        'Zapatos acuáticos'
      ]
    },
    {
      id: 'full-day-trekking-cerro-kennedy',
      intro: {"title": "Cerro Kennedy: una aventura entre montañas, aves y naturaleza.", "paragraphs": ["Descubre la magia de la Sierra Nevada de Santa Marta a través de una experiencia que combina aventura, biodiversidad y conexión auténtica con las comunidades locales.", "Embárcate en un trekking por senderos naturales, fincas campesinas y reservas llenas de vida, mientras disfrutas del avistamiento de aves extraordinarias como el Periquito de Santa Marta, el Tucancito Esmeralda, el Inca Coliblanco, el Quetzal dorado y la Tángara Serrana.", "Lejos del turismo masivo, el Cerro Kennedy te invita a respirar aire puro, contemplar paisajes fascinantes y desconectarte de la rutina para reconectar con lo esencial.", "No es solo una caminata, es una experiencia para sentir, explorar y descubrir la naturaleza en su estado más auténtico."]},
      cat: 'un-dia',
      bg: 'linear-gradient(135deg,#c8e6c9,#388e3c)',
      icon: '⚡',
      badge: '💪 Extremo',
      meta: ['☀️ 1 día', '🏃 Intenso'],
      title: 'Kennedy Extremo 1 Día',
      desc: 'Para caminantes de alto rendimiento. Conquista la cima en una jornada épica.',
      precio: '$599.000',
      waLink: 'https://wa.me/573114054907?text=Hola!%20Quiero%20info%20Kennedy%20Extremo',
      fullImg: '/assets/img/img3.jpeg',
      itinerario: [
        { dia: 1, desc: 'Salida 4:00 am. Desayuno en la montaña. Ascenso al mirador principal (3000m). Almuerzo y regreso tarde noche.' }
      ],
      incluye: [
        'Transporte 4x4',
        'Desayuno y Almuerzo',
        'Guía profesional',
        'Seguro'
      ],
      recomendaciones: [
        'Excelente condición física',
        'Capa de agua',
        'Mucha agua'
      ]
    },
    {
      id: 'full-day-san-lorenzo',
      cat: 'un-dia',
      bg: 'linear-gradient(135deg,#fce4ec,#880e4f)',
      icon: '🦜',
      badge: '🌿 Naturaleza',
      meta: ['☀️ 1 día', '🔭 Mirador', '🌊 Cascadas'],
      title: 'Full Day San Lorenzo',
      pdfUrl: '/documento/cerro-kennedy-san-lorenzo.pdf',
      desc: 'La Cuchilla de San Lorenzo es el lugar ideal para descubrir la inmensidad de la montaña costera más alta del mundo a orillas del mar Caribe. La Sierra Nevada de Santa Marta es refugio de más de 26 especies de aves endémicas, comunes y migratorias que llegan desde las costas de Canadá y Estados Unidos. Plan ideal para quienes no cuentan con el estado físico para caminatas de alto rendimiento o no tienen tiempo para un plan de varios días. Haremos paradas en los miradores para observar los picos nevados Simón Bolívar y Cristóbal Colón (5.775 msnm) y la inmensidad del mar azul sobre las bahías de Santa Marta y el Parque Nacional Natural Tayrona. RNT280360.',
      precio: '$421.000',
      waLink: 'https://wa.me/573114054907?text=Hola!%20Quiero%20info%20San%20Lorenzo',
      fullImg: '/assets/img/img4.jpg',
      itinerario: [
        { dia: 1, desc: 'Salida a las 03:00 am desde tu hotel o dirección donde te encuentres alojado. ¿Por qué tan temprano? Lo ideal es llegar muy temprano a la cima para observar la salida del sol sobre la Sierra Nevada de Santa Marta. Luego del avistamiento de los picos nevados y de tomar fotografías, disfrutaremos de un rico desayuno con frutas y cereal. Si estás en condiciones, se realiza una caminata hasta el mirador de Cerro Kennedy (3.000 msnm); de lo contrario, todo el recorrido se hace en carro. Durante el retorno visitaremos la hacienda cafetera La Victoria, fundada en 1892, una de las más antiguas del Caribe, donde conocerás el proceso de producción del café y disfrutarás una taza de café de la Sierra Nevada. Si no estás muy cansado, podremos disfrutar de las piscinas naturales de Pozo Azul (caminata de 20 min). Finalizamos en Minca para el almuerzo y regreso al hotel. Hora de llegada: 04:00 pm.' }
      ],
      incluye: [
        'Almuerzo',
        'Desayuno',
        'Transporte en vehículo 4x4 tipo campero',
        'Guía acompañante personalizado',
        'Visita al mirador ecoturístico San Lorenzo',
        'Caminata ecológica a la cima del Cerro Kennedy',
        'Tour del Café en la hacienda La Victoria',
        'Visita a las cascadas de Marinca'
      ],
      noIncluye: [
        'Servicios no especificados'
      ],
      recomendaciones: [
        'Binoculares',
        'Chaqueta liviana',
        'Pantalón largo',
        'Calzado cómodo'
      ]
    },
    {
      id: 'aventura-rio-don-diego',
      cat: 'un-dia',
      bg: 'linear-gradient(135deg,#e3f2fd,#1565c0)',
      icon: '🐒',
      meta: ['☀️ 1 día', '🛶 Tubing'],
      title: 'Aventura Río Don Diego',
      desc: 'Mezcla perfecta de cultura Tayrona y aventura en el río.',
      precio: '$451.500',
      waLink: 'https://wa.me/573114054907?text=Hola!%20Quiero%20info%20Rio%20Don%20Diego',
      fullImg: '/assets/img/img5.jpeg',
      itinerario: [
        { dia: 1, desc: 'Salida 7:00 am. Caminata por bosque tropical. Avistamiento de monos aulladores. Descenso en tubing por el río.' }
      ],
      incluye: [
        'Transporte',
        'Guía',
        'Refrigerio',
        'Tubing y Chaleco',
        'Tour arqueológico'
      ],
      recomendaciones: [
        'Repelente',
        'Ropa cómoda',
        'Cámara sumergible'
      ]
    },
    {
      id: 'cabo-de-lavela-2-dias-1-noche',
      cat: 'guajira',
      bg: 'linear-gradient(135deg,#fff3e0,#e65100)',
      icon: '🏜️',
      meta: ['🗓️ 2 días', '🧡 Cultura Wayuu'],
      title: 'Cabo de la Vela 2D 1N',
      desc: 'El desierto y el mar se unen en una experiencia cultural única.',
      precio: '$450.000',
      waLink: 'https://wa.me/573114054907?text=Hola!%20Quiero%20info%20Cabo%20Vela',
      fullImg: '/assets/img/img1.jpeg',
      itinerario: [
        { dia: 1, desc: 'Mina de sal Manaure. Llegada al Cabo. Pilón de Azúcar y Ojo de Agua. Atardecer en el Faro.' },
        { dia: 2, desc: 'Desayuno. Visita a Uribia. Almuerzo en Riohacha y regreso.' }
      ],
      incluye: [
        'Transporte climatizado',
        'Guía',
        'Hospedaje en hamaca',
        'Alimentación'
      ],
      noIncluye: [
        'Bebidas adicionales',
        'Alojamiento en cama (opcional)'
      ]
    },
    {
      id: 'punta-gallinas-3-dias',
      cat: 'guajira',
      bg: 'linear-gradient(135deg,#e8eaf6,#283593)',
      icon: '🌅',
      badge: '🌟 Imperdible',
      meta: ['🗓️ 3 días', '🌙 2 noches', '🏜️ Guajira'],
      title: 'Punta Gallinas 3 Días',
      desc: 'El punto más septentrional de Sudamérica. Dunas salvajes y cielos estrellados.',
      precio: '$750.000',
      waLink: 'https://wa.me/573114054907?text=Hola!%20Quiero%20info%20de%20Punta%20Gallinas',
      fullImg: '/assets/img/img2.jpeg',
      itinerario: [
        { dia: 1, desc: 'Riohacha - Cabo de la Vela. Playas y atardecer.' },
        { dia: 2, desc: 'Cruce del desierto. Dunas de Taroa. Faro de Punta Gallinas.' },
        { dia: 3, desc: 'Visita a Bahía Honda. Regreso a Manaure y Riohacha.' }
      ],
      incluye: [
        'Camioneta 4x4',
        'Guía',
        'Hospedaje',
        'Alimentación completa'
      ]
    }
  ];

  // Inglés
  private toursEn: Tour[] = [
    {
      id: 'trekking-cerro-kennedy-2-dias-1-noche',
      intro: {"title": "Cerro Kennedy: an adventure among mountains, birds and nature.", "paragraphs": ["Discover the magic of the Sierra Nevada de Santa Marta through an experience that combines adventure, biodiversity and authentic connection with local communities.", "Set out on a trek along natural trails, farms and reserves full of life, while enjoying the sighting of extraordinary birds such as the Santa Marta Parakeet, the Emerald Toucanet, the White-tailed Starfrontlet, the Golden-headed Quetzal and the Santa Marta Mountain Tanager.", "Far from mass tourism, Cerro Kennedy invites you to breathe pure air, take in fascinating landscapes and disconnect from routine to reconnect with what matters.", "It is not just a hike, it is an experience to feel, explore and discover nature in its most authentic state."]},
      cat: 'trekking',
      bg: 'linear-gradient(135deg,#f0c98a,#b87333)',
      icon: '🏔️',
      badge: '⭐ Popular',
      meta: ['🗓️ 2 days', '🌙 1 night', '🥾 Trekking', '⛰️ 2,860 masl'],
      title: 'Trekking Cerro Kennedy 2D 1N',
      pdfUrl: '/documento/cerro-kennedy-san-lorenzo.pdf',
      desc: 'Over two days you will live an unforgettable experience ascending the mountains of the imposing Sierra Nevada de Santa Marta, enjoying the cloud forest home to birds, amphibians, insects and mammals. You will meet local families and hear their stories. From the summit of Cerro Kennedy (2,860 masl) you will get a magical view of the snow-capped peaks Bolívar and Colón and their entire mountain range, the highest mountain in the world near the sea (5,775 masl). Total route of 16 km, medium difficulty. RNT280360.',
      precio: '$856,000 COP',
      waLink: 'https://wa.me/573114054907?text=Hi!%20I%20want%20info%20about%20Cerro%20Kennedy%20Trek%202D1N',
      fullImg: '/assets/img/img4.jpg',
      itinerario: [
        {
          dia: 1,
          titulo: 'From Santa Marta to Santa Elena Farm',
          secciones: [
            { hora: '07:30 a.m.', titulo: 'Departure from Santa Marta', texto: 'We leave from your hotel in Santa Marta heading to Minca (650 masl), traveling through the mountains of the Sierra Nevada.' },
            { titulo: 'Coffee experience', texto: 'We visit a traditional coffee farm, where Mr. José, an expert in the coffee culture of the Sierra Nevada, shares with us the secrets of growing and processing coffee, a tradition that is part of rural life in the region.' },
            { titulo: 'On the way to the mountain', texto: 'We continue by campero vehicle for about one more kilometer to La María farm, in the village of La Tagua, where the drive ends. From there, we set off on a 3-kilometer hike of about 2 hours, along rural trails and mountain landscapes, until we reach Santa Elena Farm.' },
            { titulo: 'Welcome to Santa Elena Farm', texto: 'On arrival, we will be welcomed by the host family and the charisma of Mrs. Ana, whose joy, kindness and warmth make every visitor feel at home. We settle in and enjoy a welcome snack and a traditional country-style lunch, with flavorful recipes and some products grown on our land.\nIn the afternoon, we explore the surroundings of the farm and watch a beautiful sunset over the mountains, with panoramic views of the Ciénaga Grande de Santa Marta and the Caribbean Sea.' },
            { titulo: 'Dinner and overnight', texto: 'We end the day with a home-style dinner, inspired by the country recipes of our land, and a restful night in the tranquility of the mountain, enjoying rural hospitality and the connection with nature.' }
          ]
        },
        {
          dia: 2,
          titulo: 'Sunrise and hike to Cerro Kennedy',
          secciones: [
            { hora: '05:30 a.m.', titulo: 'A special sunrise', texto: 'We begin the day watching the sunrise over the Sierra Nevada de Santa Marta, with an aromatic cup of Sierra coffee and a traditional breakfast with a different touch, prepared with the flavor of our land and the warmth of our country home.' },
            { hora: '06:30 a.m.', titulo: 'Hike to Cerro Kennedy', texto: 'We start a hike of about 3 hours and 5 kilometers to the viewpoint, located at 3,100 masl. From there, we enjoy a spectacular panoramic view of the snow-capped peaks Bolívar and Colón.\nAlong the private trails, we cross streams and water springs, surrounded by lush nature and with the chance to observe endemic birds of the region.' },
            { titulo: 'Return to Santa Elena Farm', texto: 'We return along the same trail to the farm, where we enjoy a traditional country-style lunch, with flavorful recipes and some products grown on our land, before heading back by road to Santa Marta.' },
            { hora: '05:00 p.m.', titulo: 'Estimated arrival in Santa Marta', texto: 'We end this experience with unforgettable memories of the mountain, its landscapes, its flavors and the hospitality of the rural families of the Sierra Nevada.' },
            { titulo: 'Tour technical details', tabla: [
              { label: 'Duration', valor: '2 days and 1 night' },
              { label: 'Estimated hiking time day 1', valor: '2 hours' },
              { label: 'Hiking distance day 1', valor: '3 km' },
              { label: 'Estimated hiking time day 2', valor: '6 hours' },
              { label: 'Hiking distance day 2', valor: '13 km' },
              { label: 'Total distance', valor: '16 km' },
              { label: 'Difficulty level', valor: 'Moderate' },
              { label: 'Accommodation', valor: 'Rural farm' }
            ] },
            { titulo: 'Important note', texto: 'The itinerary may be modified at the client\'s request or due to unforeseen environmental conditions, always prioritizing the safety of travelers and the responsible development of the experience.' }
          ]
        }
      ],
      incluye: [
        'One night accommodation at Santa Elena Farm in a shared room (No Full house)',
        '4x4 campero transport',
        'Coffee Tour at a traditional farm',
        'Meals: 2 lunches, 1 dinner and 1 breakfast',
        'Fruits and water for the trail',
        'Welcome snack',
        'Unlimited hot drinks (coffee and tea)',
        'Trekking to the summit of Cerro Kennedy',
        'Local guide',
        'Entrances to tourist sites',
        'Travel insurance'
      ],
      noIncluye: [
        'Water bottle for the first day',
        'Horses for luggage ($40,000 COP per route used)',
        'Guide in English or another language (request service if required)',
        'Unspecified services'
      ],
      recomendaciones: [
        'Trekking boots',
        'Jacket for the cold (10°C)',
        'Cold weather clothing',
        'Rain jacket',
        'Small backpack',
        'Personal care items',
        'Insect repellent and sunscreen',
        'Trekking poles (if you have them)'
      ]
    },
    {
      id: 'ciudad-perdida-4-dias',
      cat: 'trekking',
      bg: 'linear-gradient(135deg,#fff9c4,#f9a825)',
      icon: '🏛️',
      badge: '⭐ Exclusive',
      meta: ['🗓️ 4 days', '🌙 3 nights', '🥾 Trekking'],
      title: 'Lost City 4 Days',
      desc: 'The most famous trek in Colombia. Hike through the jungle until you reach the mythical Tayrona Lost City.',
      precio: '$1,800,000 COP',
      waLink: 'https://wa.me/573114054907?text=Hi!%20I%20want%20info%20about%20Lost%20City%204%20Days',
      fullImg: '/assets/img/img5.jpeg',
      itinerario: [
        { dia: 1, desc: 'Departure from Santa Marta to El Mamey. Lunch and 4-hour hike to the first camp. Dinner and rest in hammocks or beds.' },
        { dia: 2, desc: 'Intense 7-hour hike passing through Mutanyi indigenous communities. Swim in the Buritaca River and arrival at Mumake camp.' },
        { dia: 3, desc: 'The big day! Ascent of 1200 steps to Teyuna (Lost City). Historical tour and indigenous ritual. Return to camp.' },
        { dia: 4, desc: 'Hike back to El Mamey. Farewell lunch and transport back to Santa Marta.' }
      ],
      incluye: [
        'Indigenous and peasant guide',
        'All meals',
        'Entrances to ICANH Park',
        'Accommodation in camps',
        'Transportation'
      ],
      recomendaciones: [
        'Quick-dry clothing',
        'Comfortable boots',
        'Repellent (plenty)',
        'Flashlight and powerbank'
      ]
    },
    {
      id: 'trekking-cerro-kennedy-3-dias-2-noches',
      intro: {"title": "Cerro Kennedy: an adventure among mountains, birds and nature.", "paragraphs": ["Discover the magic of the Sierra Nevada de Santa Marta through an experience that combines adventure, biodiversity and authentic connection with local communities.", "Set out on a trek along natural trails, farms and reserves full of life, while enjoying the sighting of extraordinary birds such as the Santa Marta Parakeet, the Emerald Toucanet, the White-tailed Starfrontlet, the Golden-headed Quetzal and the Santa Marta Mountain Tanager.", "Far from mass tourism, Cerro Kennedy invites you to breathe pure air, take in fascinating landscapes and disconnect from routine to reconnect with what matters.", "It is not just a hike, it is an experience to feel, explore and discover nature in its most authentic state."]},
      cat: 'trekking',
      bg: 'linear-gradient(135deg,#b2dfdb,#00796b)',
      icon: '⛺',
      meta: ['🗓️ 3 days', '🌙 2 nights', '🥾 Trekking'],
      title: 'Trekking Cerro Kennedy 3 Days',
      pdfUrl: '/documento/cerro-kennedy-san-lorenzo.pdf',
      desc: 'Over three days, venture into the mountains of the imposing Sierra Nevada, discovering its great natural richness and contemplating fabulous sunrises and sunsets. Rest in a rural house living alongside a country family, enjoying traditional food, homemade cheese and local coffee. You will visit Cerro Kennedy with its magical view of the snow-capped peaks Bolívar and Colón (5,775 masl), and on the third day the wonderful Sacred Panku Waterfall, one of the most beautiful falls in the Sierra Nevada where you can refresh yourself in its crystal-clear waters. of adventure, medium-high difficulty. RNT280360.',
      precio: '$1,225,000 COP',
      waLink: 'https://wa.me/573114054907?text=Hi!%20I%20want%20info%20about%20Cerro%20Kennedy%203D2N',
      fullImg: '/assets/img/img1.jpeg',
      itinerario: [
        { dia: 1, desc: 'Santa Marta – Santa Elena Farm. Departure at 07:30 am from your hotel in Santa Marta, taking the road to Minca (650 masl). Visit to a traditional coffee farm where you will learn the coffee process. Afterwards we begin the 3-kilometer hike (2 hours) to Santa Elena Farm. Arrival, check-in, welcome snack, typical Colombian lunch and a tour of the surroundings with sunset views over the mountains, the Ciénaga Grande and the Caribbean Sea. Dinner and overnight.' },
        { dia: 2, desc: 'Trekking Santa Elena Farm – Cerro Kennedy. We begin the day watching the sunrise over the Sierra Nevada with a cup of Colombian coffee. Traditional breakfast. 06:30 am: uphill hike to Cerro Kennedy (5 km each way, approx. 3 hours depending on your fitness, high difficulty) to the viewpoint at 3,000 masl, with excellent views of the snow-capped peaks Bolívar and Colón. We cross streams and cloud forest areas with the chance to observe endemic birds. The return to Santa Elena Farm takes 2 hours for lunch, rest and to enjoy the afternoon with the sunset, hammock and swing.' },
        { dia: 3, desc: 'Trekking Santa Elena Farm – Panku Waterfall. Sunrise view over the Sierra Nevada while tasting a cup of coffee. Typical Colombian breakfast. A 4.5 km hike each way to the Sacred Panku Waterfall, where we will enjoy a refreshing swim; the trail topography is variable and demanding, recommended for experts. Return to Santa Elena Farm for lunch. Return to the road (45 min) and back to Santa Marta. Arrival time: 05:00 PM.' }
      ],
      incluye: [
        '2 nights accommodation at Santa Elena Farm in a shared room (No Full house)',
        '4x4 campero transport from Santa Marta or Minca, round trip',
        'Coffee Tour at a traditional farm',
        'Meals: 3 lunches, 2 dinners and 2 breakfasts',
        'Fruits for the trail, snack and hot drinks, water supply',
        'Trekking to the summit of Cerro Kennedy (5 km each way)',
        'Trekking to the Sacred Panku Waterfall (4.5 km each way)',
        'Local guide',
        'Travel insurance',
        'Entrances'
      ],
      noIncluye: [
        'Water bottle for the first day',
        'Horses for luggage ($40,000 COP per route used)',
        'Guide in English or another language (request service if required)',
        'Unspecified services'
      ],
      recomendaciones: [
        'Cold weather clothing',
        'Mountain boots',
        'Camera',
        'Trekking poles'
      ]
    },
    {
      id: 'trekking-cascada-sagrada-panku',
      cat: 'trekking',
      bg: 'linear-gradient(135deg,#e1f5fe,#0288d1)',
      icon: '💦',
      meta: ['🗓️ 2 days', '🌿 Spiritual'],
      title: 'Panku Sacred Waterfall',
      desc: 'Visit the guardian of the waters of the Sierra Nevada. A spiritual and refreshing hike.',
      precio: '$840,000 COP',
      waLink: 'https://wa.me/573114054907?text=Hi!%20I%20want%20info%20about%20Panku%20Waterfall',
      fullImg: '/assets/img/img2.jpeg',
      itinerario: [
        { dia: 1, desc: 'Transfer to Minca and La Tagua. Hike through cloud forest to the farm. Bird watching.' },
        { dia: 2, desc: 'Descent to Panku Waterfall (50m high). Ceremonial bath and return to Santa Marta.' }
      ],
      incluye: [
        '4x4 Transportation',
        'Guide',
        'Meals',
        '1 night accommodation'
      ],
      recomendaciones: [
        'Sunscreen',
        'Swimsuit',
        'Water shoes'
      ]
    },
    {
      id: 'full-day-trekking-cerro-kennedy',
      intro: {"title": "Cerro Kennedy: an adventure among mountains, birds and nature.", "paragraphs": ["Discover the magic of the Sierra Nevada de Santa Marta through an experience that combines adventure, biodiversity and authentic connection with local communities.", "Set out on a trek along natural trails, farms and reserves full of life, while enjoying the sighting of extraordinary birds such as the Santa Marta Parakeet, the Emerald Toucanet, the White-tailed Starfrontlet, the Golden-headed Quetzal and the Santa Marta Mountain Tanager.", "Far from mass tourism, Cerro Kennedy invites you to breathe pure air, take in fascinating landscapes and disconnect from routine to reconnect with what matters.", "It is not just a hike, it is an experience to feel, explore and discover nature in its most authentic state."]},
      cat: 'un-dia',
      bg: 'linear-gradient(135deg,#c8e6c9,#388e3c)',
      icon: '⚡',
      badge: '💪 Extreme',
      meta: ['☀️ 1 day', '🏃 Intense'],
      title: 'Kennedy Extreme 1 Day',
      desc: 'For high-performance hikers. Conquer the summit in an epic single-day journey.',
      precio: '$599,000 COP',
      waLink: 'https://wa.me/573114054907?text=Hi!%20I%20want%20info%20about%20Kennedy%20Extreme',
      fullImg: '/assets/img/img3.jpeg',
      itinerario: [
        { dia: 1, desc: 'Departure at 4:00 am. Breakfast in the mountains. Ascent to the main viewpoint (3000m). Lunch and return in the evening.' }
      ],
      incluye: [
        '4x4 Transportation',
        'Breakfast and Lunch',
        'Professional guide',
        'Insurance'
      ],
      recomendaciones: [
        'Excellent physical condition',
        'Raincoat',
        'Plenty of water'
      ]
    },
    {
      id: 'full-day-san-lorenzo',
      cat: 'un-dia',
      bg: 'linear-gradient(135deg,#fce4ec,#880e4f)',
      icon: '🦜',
      badge: '🌿 Nature',
      meta: ['☀️ 1 day', '🔭 Viewpoint', '🌊 Waterfalls'],
      title: 'Full Day San Lorenzo',
      pdfUrl: '/documento/cerro-kennedy-san-lorenzo.pdf',
      desc: 'The Cuchilla de San Lorenzo is the ideal place to discover the vastness of the highest coastal mountain in the world on the shores of the Caribbean Sea. The Sierra Nevada de Santa Marta is a refuge for more than 26 species of endemic, common and migratory birds that arrive from the coasts of Canada and the United States. An ideal plan for those who lack the fitness for high-performance hikes or do not have time for a multi-day plan. We will make stops at the viewpoints to observe the snow-capped peaks Simón Bolívar and Cristóbal Colón (5,775 masl) and the vastness of the blue sea over the bays of Santa Marta and Tayrona National Natural Park. RNT280360.',
      precio: '$421,000 COP',
      waLink: 'https://wa.me/573114054907?text=Hi!%20I%20want%20info%20about%20San%20Lorenzo',
      fullImg: '/assets/img/img4.jpg',
      itinerario: [
        { dia: 1, desc: 'Departure at 03:00 am from your hotel or accommodation. Why so early? The idea is to reach the summit very early to watch the sunrise over the Sierra Nevada de Santa Marta. After watching the snow-capped peaks and taking photographs, we will enjoy a nice breakfast with fruits and cereal. If you are able, a hike is made to the Cerro Kennedy viewpoint (3,000 masl); otherwise, the entire route is done by car. On the way back we will visit the La Victoria coffee hacienda, founded in 1892, one of the oldest in the Caribbean, where you will learn the coffee production process and enjoy a cup of Sierra Nevada coffee. If you are not too tired, we can enjoy the natural pools of Pozo Azul (20-minute walk). We finish in Minca for lunch and return to the hotel. Arrival time: 04:00 PM.' }
      ],
      incluye: [
        'Lunch',
        'Breakfast',
        '4x4 campero transportation',
        'Personalized accompanying guide',
        'Visit to the San Lorenzo ecotourism viewpoint',
        'Ecological hike to the summit of Cerro Kennedy',
        'Coffee Tour at La Victoria hacienda',
        'Visit to the Marinca waterfalls'
      ],
      noIncluye: [
        'Unspecified services'
      ],
      recomendaciones: [
        'Binoculars',
        'Light jacket',
        'Long pants',
        'Comfortable footwear'
      ]
    },
    {
      id: 'aventura-rio-don-diego',
      cat: 'un-dia',
      bg: 'linear-gradient(135deg,#e3f2fd,#1565c0)',
      icon: '🐒',
      meta: ['☀️ 1 day', '🛶 Tubing'],
      title: 'Aventura Río Don Diego',
      desc: 'Perfect mix of Tayrona culture and river adventure.',
      precio: '$451,500 COP',
      waLink: 'https://wa.me/573114054907?text=Hi!%20I%20want%20info%20about%20Don%20Diego%20River',
      fullImg: '/assets/img/img5.jpeg',
      itinerario: [
        { dia: 1, desc: 'Departure at 7:00 am. Hike through tropical forest. Sighting of howler monkeys. Tubing descent down the river.' }
      ],
      incluye: [
        'Transportation',
        'Guide',
        'Snack',
        'Tubing & Life jacket',
        'Archaeological tour'
      ],
      recomendaciones: [
        'Repellent',
        'Comfortable clothing',
        'Waterproof camera'
      ]
    },
    {
      id: 'cabo-de-lavela-2-dias-1-noche',
      cat: 'guajira',
      bg: 'linear-gradient(135deg,#fff3e0,#e65100)',
      icon: '🏜️',
      meta: ['🗓️ 2 days', '🧡 Wayuu Culture'],
      title: 'Cabo de la Vela 2D 1N',
      desc: 'The desert and the sea come together in a unique cultural experience.',
      precio: '$450,000 COP',
      waLink: 'https://wa.me/573114054907?text=Hi!%20I%20want%20info%20about%20Cabo%20Vela',
      fullImg: '/assets/img/img1.jpeg',
      itinerario: [
        { dia: 1, desc: 'Manaure salt mine. Arrival at the Cabo. Pilon de Azucar and Ojo de Agua beaches. Sunset at the Lighthouse.' },
        { dia: 2, desc: 'Breakfast. Visit to Uribia. Lunch in Riohacha and return.' }
      ],
      incluye: [
        'A/C Transportation',
        'Guide',
        'Hammock accommodation',
        'Meals'
      ],
      noIncluye: [
        'Additional drinks',
        'Bed accommodation (optional)'
      ]
    },
    {
      id: 'punta-gallinas-3-dias',
      cat: 'guajira',
      bg: 'linear-gradient(135deg,#e8eaf6,#283593)',
      icon: '🌅',
      badge: '🌟 Must-see',
      meta: ['🗓️ 3 days', '🌙 2 nights', '🏜️ Guajira'],
      title: 'Punta Gallinas 3 Days',
      desc: 'The northernmost point of South America. Wild dunes and starry skies.',
      precio: '$750,000 COP',
      waLink: 'https://wa.me/573114054907?text=Hi!%20I%20want%20info%20about%20Punta%20Gallinas',
      fullImg: '/assets/img/img2.jpeg',
      itinerario: [
        { dia: 1, desc: 'Riohacha - Cabo de la Vela. Beaches and sunset.' },
        { dia: 2, desc: 'Desert crossing. Taroa Dunes. Punta Gallinas Lighthouse.' },
        { dia: 3, desc: 'Visit to Bahia Honda. Return to Manaure and Riohacha.' }
      ],
      incluye: [
        '4x4 Truck',
        'Guide',
        'Accommodation',
        'Full board meals'
      ]
    }
  ];

  private get tours(): Tour[] {
    return this.langService.currentLang() === 'en' ? this.toursEn : this.toursEs;
  }

  getAll(): Tour[] {
    return this.tours;
  }

  getTourById(id: string): Tour | undefined {
    return this.tours.find(t => t.id === id);
  }
}

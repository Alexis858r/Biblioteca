export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: any;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    description: "Una obra maestra de la literatura latinoamericana...",
    cover: require('../data/images/1.jpg'),
  },
 {
    id: 2,
    title: "Este dolor no es mío",
    author: "Mark Wolynn",
    description: "La evidencia científica muestra que los traumas pueden ser heredados....",
    cover: require('../data/images/2.jpg'), 
  },
   {
    id: 3,
    title: "No te creas todo lo que piensas",
    author: "Josepgh Nguyen",
    description: "Pensar es la raíz del sufrimiento ¿Por qué creemos lo que creemos?...",
    cover: require('../data/images/3.jpg'), 
  },
   {
    id: 4,
    title: "Hermanos de sangre",
    author: "John Gwynne",
    description: "El hambre de los dioses es la continuación de la aclamada saga de fantasía épica de John Gwynn...",
    cover: require('../data/images/4.jpg'), 
  },
   {
    id: 5,
    title: "La reina Roja",
    author: "Victoria Aveyard",
    description: "Ambientada en un reino imaginario, esta novela nos muestra a una sociedad dividida...",
    cover: require('../data/images/5.jpg'), 
  },
   {
    id: 6,
    title: "La promesa del dragon",
    author: "Elizabeth Lim",
    description: "La princesa Shiori prometió a La Reina Sin Nombre devolver la perla del dragón...",
    cover: require('../data/images/6.jpg'), 
  },
   {
    id: 7,
    title: "Asesino de brujas",
    author: "Shelley Mahurin",
    description: "Lou lleva toda su vida huyendo. Pero ahora, después de un golpe demoledor por parte...",
    cover: require('../data/images/7.jpg'), 
  },
   {
    id: 8,
    title: "El libro Troll",
    author: "El rubius",
    description: "Tu vida es un libro a medio construir , u aventura espontánea...",
    cover: require('../data/images/8.jpg'), 
  },
   {
    id: 9,
    title: "WTF con el SAT",
    author: "Paulina Casso",
    description: "La materia que todos debimos tener en la escuela, lo que debimos aprender en lugar del trinomio cuadrado perfecto...",
    cover: require('../data/images/9.jpg'), 
  },
   {
    id: 10,
    title: "De mi para mi ",
    author: "Nacarid Portal Arráez ",
    description: "Nunca es tarde para otorgarte una segunda oportunidad. Cada día puedes empezar de nuevo, aprender...",
    cover: require('../data/images/10.jpg'), 
  },
   {
    id: 11,
    title: "El extraño caso del Dr. Jekyll y Mr. Hyde",
    author: "Robert Louis Stevenson",
    description: "El extraño caso del Dr. Jekyll y Mr. Hyde, la máxima contribución de Stevenson a la literatura...",
    cover: require('../data/images/11.jpg'), 
  },
   {
    id: 12,
    title: "El extranjero",
    author: "Albert Camus",
    description: "El extranjero es una novela publicada en 1942, la primera del escritor francés Albert Camus...",
    cover: require('../data/images/12.jpg'), 
  },
   {
    id: 13,
    title: "Los hornos de Hitler",
    author: "Olga Lengyel",
    description: "Una sobreviviente de los campos de concentración de Auschwitz y de Birkenau. La visión de cinco...",
    cover: require('../data/images/13.jpg'), 
  },
   {
    id: 14,
    title: "Al final mueren los dos",
    author: "Adam Silvera",
    description: "Una historia sobre la vida, la amistad y el amor. ¿Puede un solo día albergar toda una vida? En un presente...",
    cover: require('../data/images/14.jpg'), 
  },
   {
    id: 15,
    title: "Nunca es solo sexo",
    author: "Damian Leader",
    description: "“Fue solo sexo”. Hemos escuchado esta expresión infinidad de veces. Y sin embargo...",
    cover: require('../data/images/15.jpg'), 
  },
  
];
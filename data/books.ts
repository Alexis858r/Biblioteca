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
    cover: require('../data/images/1.png'), // Asegúrate de tener esta imagen en tu proyecto
  },
  
  // Agrega más libros aquí
];
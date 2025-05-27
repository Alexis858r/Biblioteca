import { FlatList } from 'react-native';
import { books } from '../../data/books';
import BookCard from '../../components/BookCard';
import AppHeader from '../../components/AppHeader';

export default function BooksScreen() {
  return (
    <>
      <AppHeader title="Todos los Libros" />
      <FlatList
        data={books}
        renderItem={({ item }) => <BookCard book={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
}
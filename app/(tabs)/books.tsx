import { FlatList, StyleSheet, View } from 'react-native';
import { books } from '../../data/books';
import BookCard from '../../components/BookCard';
import AppHeader from '../../components/AppHeader';

export default function BooksScreen() {
  return (
    <View style={styles.container}>
      <AppHeader title="Catálogo de Libros" />
      <FlatList
        data={books}
        renderItem={({ item }) => <BookCard book={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});
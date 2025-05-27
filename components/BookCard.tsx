import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { Book } from '../data/books';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 3 - 16; // 3 columnas con margen

type Props = {
  book: Book;
};

export default function BookCard({ book }: Props) {
  const router = useRouter();
  
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => router.push(`/book-details?id=${book.id}`)}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={book.cover} 
          style={styles.bookImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>{book.title}</Text>
        <Text style={styles.author} numberOfLines={1}>{book.author}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    margin: 6,
    borderRadius: 6,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    height: CARD_WIDTH * 1.4, // Proporción ajustada
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 4,
  },
  bookImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    padding: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  author: {
    fontSize: 10,
    color: '#666',
  },
});
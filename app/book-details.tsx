import { useLocalSearchParams } from 'expo-router';
import { books } from '../data/books';
import { Text, useTheme, Card, Divider } from 'react-native-paper';
import { View, StyleSheet, Image, ScrollView } from 'react-native';

export default function BookDetails() {
  const theme = useTheme();
  const { id } = useLocalSearchParams();
  const book = books.find(b => b.id.toString() === id);

  if (!book) {
    return (
      <View style={styles.notFoundContainer}>
        <Text>Libro no encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {/* Portada del libro */}
      <View style={styles.coverContainer}>
        <Image 
          source={book.cover} 
          style={styles.coverImage}
          resizeMode="contain"
        />
      </View>

      {/* Contenido */}
      <Card style={styles.contentCard}>
        <Card.Content>
          <Text 
            variant="headlineLarge" 
            style={[styles.title, { color: theme.colors.primary }]}
          >
            {book.title}
          </Text>
          
          <Text 
            variant="titleMedium" 
            style={[styles.author, { color: theme.colors.secondary }]}
          >
            Por {book.author}
          </Text>

          <Divider style={styles.divider} />

          <Text 
            variant="bodyLarge" 
            style={[styles.description, { color: theme.colors.onSurface }]}
          >
            {book.description}
          </Text>

          {/* Detalles adicionales */}
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Text variant="labelMedium">Género:</Text>
              <Text variant="bodyMedium">Ficción literaria</Text>
            </View>
            <View style={styles.detailItem}>
              <Text variant="labelMedium">Año:</Text>
              <Text variant="bodyMedium">1967</Text>
            </View>
            <View style={styles.detailItem}>
              <Text variant="labelMedium">Valoración:</Text>
              <Text variant="bodyMedium">★★★★☆ (4.5)</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  coverContainer: {
    height: 350,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  coverImage: {
    width: '60%',
    height: '100%',
  },
  contentCard: {
    margin: 16,
    borderRadius: 12,
    paddingBottom: 20,
    elevation: 4,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },
  author: {
    marginBottom: 16,
    fontStyle: 'italic',
  },
  divider: {
    marginVertical: 16,
    height: 1,
  },
  description: {
    lineHeight: 24,
    marginBottom: 20,
  },
  detailsContainer: {
    marginTop: 12,
    gap: 12,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
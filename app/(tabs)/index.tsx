import { Link } from 'expo-router';
import { Button, Text, useTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const theme = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text 
        variant="displayMedium" 
        style={[styles.title, { color: theme.colors.primary }]}
      >
        Biblioteca Virtual
      </Text>
      <Text 
        variant="titleMedium" 
        style={[styles.subtitle, { color: theme.colors.secondary }]}
      >
        Descubre tu próxima lectura favorita
      </Text>
      
      <Link href="/(tabs)/books" asChild>
        <Button 
          mode="contained" 
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Explorar Libros
        </Button>
      </Link>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 40,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  button: {
    width: '80%',
    borderRadius: 25,
    paddingVertical: 8,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6200EE', // Color activo (morado)
        tabBarInactiveTintColor: '#757575', // Color inactivo (gris)
      }}
    >
      {/* Pantalla de Inicio */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name="home-account" 
              size={size} 
              color={color} 
            />
          ),
        }}
      />

      {/* Pantalla de Biblioteca */}
      <Tabs.Screen
        name="books"
        options={{
          title: 'Biblioteca',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons 
              name="my-library-books" 
              size={size} 
              color={color} 
            />
          ),
        }}
      />

      {/* Pantalla de Estantería */}
      <Tabs.Screen
        name="shelf"
        options={{
          title: 'Estantería',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name="bookshelf" 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6200EE', // Color morado cuando está activo
        tabBarInactiveTintColor: '#757575', // Color gris cuando está inactivo
      }}
    >
      {/* Pantalla de Inicio */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons 
              name="home-account" 
              size={24} 
              color={color} 
            />
          ),
        }}
      />

      {/* Pantalla de Libros */}
      <Tabs.Screen
        name="books"
        options={{
          title: 'Biblioteca',
          tabBarIcon: ({ color }) => (
            <MaterialIcons 
              name="my-library-books" 
              size={24} 
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons 
              name="bookshelf" 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
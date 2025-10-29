import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useRouter } from 'expo-router';


const { width, height } = Dimensions.get('window');

const HomePage: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('@/assets/images/logo-livraria.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Texto sobre o app */}
      <Text style={styles.description}>
        Bem-vindo à nossa livraria! Aqui você encontra os melhores livros, clássicos e lançamentos, todos cuidadosamente selecionados para inspirar sua leitura.
      </Text>

      {/* Botão Comprar */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => router.push('/(tabs)/cadastro')} 
        >
          <Text style={styles.buttonText}>Iniciar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: width * 0.5,
    height: height * 0.2,
    marginBottom: 30,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 50,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: '#ff4c3b',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;

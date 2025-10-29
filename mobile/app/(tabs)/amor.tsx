import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';

export default function BookPurchaseScreen() {
  const navigation = useNavigation();

  function handleBuy(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A8DADC', dark: '#457B9D' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo-livraria.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Amor Teoricamente</ThemedText>

        {/* Imagem do livro adicionada */}
        <Image
          source={require('@/assets/images/amor-teoricamente.png')}
          style={styles.bookImage}
        />

        <ThemedText type="subtitle">Ali Hazelwood </ThemedText>

        <ThemedText style={styles.description}>
          Sinopse:
Elsie Hannaway é uma física teórica que se vê em uma situação complicada. Ela trabalha como professora adjunta, mas seu salário é insuficiente para cobrir suas despesas. Para complementar a renda, ela se torna uma "namorada de mentira", oferecendo seus serviços através de um aplicativo. Sua vida toma um rumo inesperado quando Jack Smith, o irmão do seu cliente favorito, entra em cena. Jack é um físico experimental e um dos principais obstáculos para o emprego dos sonhos de Elsie. A tensão entre eles cresce à medida que se veem forçados a conviver, e Elsie descobre que não precisa fingir ser outra pessoa quando está com Jack. A história explora temas de rivalidade acadêmica, romance e autodescoberta, enquanto Elsie tenta equilibrar suas ambições profissionais com seus sentimentos por Jack. 
        </ThemedText>

        <ThemedText type="defaultSemiBold" style={styles.price}>
          R$ 54,90
        </ThemedText>
      </ThemedView>
      
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => router.push('/alan')}
        >
          <ThemedText type="subtitle" style={styles.buttonText}>
           comprar
          </ThemedText>
        </Pressable>
      </View>
    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    padding: 16,
  },
  bookImage: {
    width: 150,
    height: 220,
    alignSelf: 'center',
    marginVertical: 12,
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  price: {
    fontSize: 20,
    color: '#89CFF0',
  },
  reactLogo: {
    height: 178,
    width: 290,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#003366',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: '#336699',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});

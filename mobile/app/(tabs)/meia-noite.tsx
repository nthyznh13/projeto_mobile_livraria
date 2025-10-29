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
        <ThemedText type="title">A Biblioteca da meia-noite</ThemedText>

        {/* Imagem do livro adicionada */}
        <Image
          source={require('@/assets/images/biblioteca-meia-noite.png')}
          style={styles.bookImage}
        />

        <ThemedText type="subtitle">Matt Haig </ThemedText>

        <ThemedText style={styles.description}>
O livro segue a história de Nora Seed, uma mulher de 35 anos que, após uma série de eventos trágicos, incluindo a perda de seu emprego e a morte de seu gato, se vê sem propósito e decide acabar com sua vida. No entanto, em vez de morrer, ela é transportada para a Biblioteca da Meia-Noite, um lugar mágico entre a vida e a morte, onde cada livro representa uma versão alternativa de sua vida, baseada nas escolhas que poderia ter feito. Com a ajuda da bibliotecária Mrs. Elm, Nora tem a oportunidade de explorar essas vidas alternativas e descobrir se alguma delas é realmente melhor do que a que ela já viveu.         </ThemedText>

        <ThemedText type="defaultSemiBold" style={styles.price}>
          R$ 38,50
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

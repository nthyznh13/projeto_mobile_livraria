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
        <ThemedText type="title">Tempestade de Ônix</ThemedText>

        {/* Imagem do livro adicionada */}
        <Image
          source={require('@/assets/images/tempestade.png')}
          style={styles.bookImage}
        />

        <ThemedText type="subtitle">Rebecca Yarros </ThemedText>

        <ThemedText style={styles.description}>
Sinopse
"Tempestade de Ônix" é a sequência da série "Empíreo", onde a protagonista Violet Sorrengail enfrenta novos desafios após sobreviver ao primeiro ano na Academia de Guerra. Neste livro, Violet deve lidar com perigos ainda maiores, tanto físicos quanto políticos, enquanto busca aliados em terras desconhecidas para enfrentar inimigos poderosos que ameaçam seu mundo. A narrativa é rica em ação, com sequências emocionantes de voos com dragões e batalhas intensas, mantendo o ritmo acelerado que cativou os leitores no primeiro volume.        </ThemedText>

        <ThemedText type="defaultSemiBold" style={styles.price}>
          R$ 59,64
        </ThemedText>
      </ThemedView>
     
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => router.push('/tempestade2')}
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
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
        <ThemedText type="title">A Empregada</ThemedText>

        {/* Imagem do livro adicionada */}
        <Image
          source={require('@/assets/images/a-empregada.png')}
          style={styles.bookImage}
        />

        <ThemedText type="subtitle">Freida McFadden </ThemedText>

        <ThemedText style={styles.description}>
A história de "A Empregada" de Freida McFadden é um thriller psicológico que explora a vida de Millie, uma ex-presidiária que aceita um emprego doméstico na mansão de Nina Winchester. A trama se desenvolve com a instabilidade emocional de Nina, a manipulação de Andrew e a tensão entre os personagens. O livro é narrado por Millie e segue suas tentativas de se adaptar à nova vida enquanto lida com segredos e reviravoltas inesperadas.        </ThemedText>

        <ThemedText type="defaultSemiBold" style={styles.price}>
          R$ 41,53
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

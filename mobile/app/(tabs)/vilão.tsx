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
        <ThemedText type="title">Assistente do Vilão</ThemedText>

        {/* Imagem do livro adicionada */}
        <Image
          source={require('@/assets/images/assistente-vilao.png')}
          style={styles.bookImage}
        />

        <ThemedText type="subtitle">Hannah Nicole </ThemedText>

        <ThemedText style={styles.description}>
Evie Sage, em busca de um emprego para sustentar sua família, acaba esbarrando acidentalmente no temido Vilão de Rennedawn. Sem pensar duas vezes, ela aceita a oferta de trabalho, mesmo sabendo que o ambiente pode ser caótico e sombrio, com cabeças decepadas e globos oculares pelo chão. Ao longo do tempo, Evie começa a desenvolver sentimentos por seu chefe aterrorizante e charmoso, enquanto descobre que alguém está tentando sabotar o império do Vilão. Agora, além de lidar com seus sentimentos, ela precisa proteger seu emprego e desvendar a conspiração.        </ThemedText>

        <ThemedText type="defaultSemiBold" style={styles.price}>
          R$ 47,45
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

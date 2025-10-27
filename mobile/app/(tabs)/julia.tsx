import { Image } from 'expo-image';
import { Alert, Button, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function BookPurchaseScreen() {
  const handleBuy = () => {
    Alert.alert('Compra realizada', 'Obrigado por comprar "Teoricamente Amor"!');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A8DADC', dark: '#457B9D' }} // azul pastel claro e um pouco mais escuro para dark mode
      headerImage={
        <Image
          source={require('@/assets/images/logo-livraria.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Verity</ThemedText>
        <ThemedText type="subtitle">Colleen Hoover </ThemedText>

        <ThemedText style={styles.description}>
        "Verity", de Colleen Hoover, é um suspense psicológico sobre Lowen Ashleigh, uma escritora contratada para terminar a série de livros da autora Verity Crawford após um acidente. Ao vasculhar os manuscritos de Verity, Lowen encontra um diário que revela segredos perturbadores e chocantes sobre a verdadeira natureza da autora, sua família e o que pode ter acontecido com sua filha. A história combina elementos de suspense, romance e mistério, questionando a verdade por trás das revelações e o que pode estar escondido na mente das pessoas. "
        </ThemedText>

        <ThemedText type="defaultSemiBold" style={styles.price}>
          R$ 68,90
        </ThemedText>

        <View style={styles.buttonContainer}>
          <Button title="Comprar" onPress={handleBuy} color="#89CFF0" /> {/* Azul pastel */}
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    padding: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  price: {
    fontSize: 20,
    color: '#89CFF0', // azul pastel
  },
  buttonContainer: {
    marginTop: 16,
    alignSelf: 'stretch',
  },
  reactLogo: {
    height: 178,
    width: 290,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
});

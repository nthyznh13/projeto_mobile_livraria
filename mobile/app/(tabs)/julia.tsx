import { Image } from 'expo-image';
import { StyleSheet, Button, Alert, View } from 'react-native';

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
        <ThemedText type="title">Teoricamente Amor</ThemedText>
        <ThemedText type="subtitle">Ali Hazelwood</ThemedText>

        <ThemedText style={styles.description}>
          Elsie Hannaway é uma física teórica — e também uma falsa namorada nas horas vagas.
          Mas seu mundo desmorona quando ela descobre que o irmão da cliente é um professor
          super rígido que pode acabar com sua carreira. Uma comédia romântica divertida e nerd!
        </ThemedText>

        <ThemedText type="defaultSemiBold" style={styles.price}>
          R$ 59,90
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

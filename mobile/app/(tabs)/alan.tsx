import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E0F7FA', dark: '#0D3B40' }}
      headerImage={

        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.heroImage}
        />
      }>
      
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Descubra o Futuro
        </ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Um app moderno com tecnologia de ponta.
        </ThemedText>

        <View style={styles.card}>
          <ThemedText>
            Este app foi criado com Expo, React Native e tudo que há de mais moderno no
            desenvolvimento mobile.
          </ThemedText>
        </View>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.8,
  },
  card: {
    backgroundColor: '#ffffff10',
    padding: 16,
    borderRadius: 12,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#00BCD4',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  heroImage: {
    height: 180,
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
  },
});
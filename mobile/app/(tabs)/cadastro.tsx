import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1a1e1fff' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo-livraria.png')}
          style={styles.reactLogo}
        />
      }>
     
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">BookStore</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Name</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Username</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <TextInput
          style={styles.input}
          placeholder="Choose a username"
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Email</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          keyboardType="email-address"
        />
      </ThemedView>

      {/* Botão Finalizar Inscrição estilizado */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => router.push('/explore')}
        >
          <ThemedText type="subtitle" style={styles.buttonText}>
            Finalizar Inscrição
          </ThemedText>
        </Pressable>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    alignSelf: 'center',
    position: 'absolute',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    color: '#000',
  },
  buttonContainer: {
    marginTop: 30,
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
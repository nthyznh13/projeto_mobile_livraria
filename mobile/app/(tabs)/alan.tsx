import { Image, TouchableOpacity, View, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  const router = useRouter();

  const books = [
    { title: 'Verity', author: 'Colleen Hoover', price: '68,90', image: require('@/assets/images/verity.png'), route: '/verity' },
    { title: 'Tempestade de Ônix', author: 'Rebecca Yarros', price: '59,64', image: require('@/assets/images/tempestade.png'), route: '/tempestade' },
    { title: 'Amor Teoricamente', author: 'Ali Hazelwood', price: '54,90', image: require('@/assets/images/amor-teoricamente.png'), route: '/amor' },
    { title: 'A Empregada', author: 'Freida McFadden', price: '41,53', image: require('@/assets/images/a-empregada.png'), route: '/empregada' },
    { title: 'Assistente do Vilão', author: 'Hannah Nicole', price: '47,45', image: require('@/assets/images/assistente-vilao.png'), route: '/vilao' },
    { title: 'A Biblioteca da Meia-Noite', author: 'Matt Haig', price: '38,50', image: require('@/assets/images/biblioteca-meia-noite.png'), route: '/meia-noite' },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo-livraria.png')}
          style={styles.image}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          Livraria Bookstore
        </ThemedText>
      </ThemedView>

      <ThemedText>Meu Carrinho:</ThemedText>

      <ScrollView>
        {books.map((book, index) => (
          <View key={index} style={styles.bookContainer}>
            <Image source={book.image} style={styles.bookImage} />
            <View style={styles.bookInfo}>
              <ThemedText style={styles.bookTitle}>{book.title}</ThemedText>
              <ThemedText>Autor: {book.author}</ThemedText>
              <ThemedText type="defaultSemiBold">R$ {book.price}</ThemedText>
              <ThemedText>2x sem juros</ThemedText>

              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/gabriel')}
              >
                <ThemedText style={styles.buttonText}>Ver detalhes</ThemedText>
              </TouchableOpacity>

              <ExternalLink href={`https://exemplo.com/remover-${book.title.replace(/\s+/g, '-').toLowerCase()}`}>
                <ThemedText type="link">Excluir da lista</ThemedText>
              </ExternalLink>
            </View>
          </View>
        ))}

        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">learn more</ThemedText>
        </ExternalLink>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  image: {
    height: 178,
    width: 290,
    bottom: 0,
    alignSelf: 'center',
    position: 'absolute',
  },
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bookImage: {
    width: 90,
    height: 130,
    borderRadius: 6,
    marginRight: 12,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#1D3D47',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

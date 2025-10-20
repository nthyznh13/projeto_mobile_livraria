import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabTwoScreen() {
  const books = [
    {
      title: 'Verity',
      author: 'Colleen Hoover',
      price: '68,90',
      image: require('@/assets/images/verity.png'),
    },
    {
      title: 'Tempestade de Ônix',
      author: 'Rebecca Yarros',
      price: '59,64',
      image: require('@/assets/images/tempestade.png'),
    },
    {
      title: 'Amor Teoricamente',
      author: 'Ali Hazelwood',
      price: '54,90',
      image: require('@/assets/images/amor-teoricamente.png'),
    },
    {
      title: 'A Empregada',
      author: 'Freida McFadden',
      price: '41,53',
      image: require('@/assets/images/a-empregada.png'),
    },
    {
      title: 'Assistente do Vilão',
      author: 'Hannah Nicole',
      price: '47,45',
      image: require('@/assets/images/assistente-vilao.png'),
    },
    {
      title: 'A Biblioteca da Meia-Noite',
      author: 'Matt Haig',
      price: '38,50',
      image: require('@/assets/images/biblioteca-meia-noite.png'),
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#6b6b6bff', dark: '#393a3aff' }}
      headerImage={
        <Image
                 source={require('@/assets/images/logo-livraria.png')}
                 style={styles.image}
                 />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: 'Oswald',
          }}>
          Procurar
        </ThemedText>
      </ThemedView>
      <ThemedText style={{ fontFamily: 'Oswald' }}>
        Aqui voce encontra todo tipo de livro✅
      </ThemedText>
       <TextInput
                style={styles.input}
                placeholder="Pesquisar" 
              />

      {/* Grid de livros */}
      <ThemedText
        type="title"
        style={{
          fontFamily: 'Oswald',
          marginTop: 20,
          marginBottom: 10,
        }}>
        Livros em Destaque
      </ThemedText>

      <ThemedView style={styles.bookGrid}>
        {books.map((book, index) => (
          <ThemedView key={index} style={styles.bookItem}>
            <Image source={book.image} style={styles.bookImage} />
            <ThemedText style={styles.bookTitle}>{book.title}</ThemedText>
            <ThemedText style={styles.bookAuthor}>{book.author}</ThemedText>
            <ThemedText style={styles.bookPrice}>R$ {book.price}</ThemedText>
          </ThemedView>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#c2c2c2ff',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  bookGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: 10,
  },
  bookItem: {
    width: '47%',
    backgroundColor: '#f0e9e9ff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#ffffffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    borderRadius: 4,
    marginBottom: 8,
  },
  bookTitle: {
    fontFamily: 'Oswald',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  bookAuthor: {
    fontFamily: 'Oswald',
    fontSize: 12,
    color: '#424141ff',
  },
  bookPrice: {
    fontFamily: 'Oswald',
    fontSize: 14,
    color: '#161515ff',
    marginTop: 4,
  },
  image: {
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
});

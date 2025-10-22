import { Image, TouchableOpacity, View } from 'react-native';
import { Platform, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
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
            fontFamily: Fonts.rounded,
          }}>
          Livraria bookstore
        </ThemedText>
      </ThemedView>

      <ThemedText>Meu Carrinho:</ThemedText>

      <Collapsible title="Meus Livros">
        {/* Livro Verity */}
        <Collapsible title="Verity">
          <View style={styles.bookContainer}>
            <Image
              source={require('@/assets/images/verity.png')}
              style={styles.bookImage}
            />
            <View style={styles.bookInfo}>
              <ThemedText style={styles.bookTitle}>Verity</ThemedText>
              <ThemedText>Autora: Colleen Hoover</ThemedText>
              <ThemedText type="defaultSemiBold">R$ 68,90</ThemedText>
              <ThemedText>2x sem juros</ThemedText>

              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/gabriel')}
              >
                <ThemedText style={styles.buttonText}>Ver detalhes</ThemedText>
              </TouchableOpacity>

              <ExternalLink href="https://exemplo.com/remover-verity">
                <ThemedText type="link">Excluir da lista</ThemedText>
              </ExternalLink>
            </View>
          </View>
        </Collapsible>

        {/* Livro Nada Pode Me Ferir */}
        <Collapsible title="Nada pode me ferir!">
          <View style={styles.bookContainer}>
            <Image
              source={require('@/assets/images/shopping 3.png')}
              style={styles.bookImage}
            />
            <View style={styles.bookInfo}>
              <ThemedText style={styles.bookTitle}>Nada pode me ferir!</ThemedText>
              <ThemedText>Autor: David Goggins</ThemedText>
              <ThemedText type="defaultSemiBold">R$ 39,90</ThemedText>
              <ThemedText>2x sem juros</ThemedText>

              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/gabriel')}
              >
                <ThemedText style={styles.buttonText}>Ver detalhes</ThemedText>
              </TouchableOpacity>

              <ExternalLink href="https://exemplo.com/remover-nada-pode-me-ferir">
                <ThemedText type="link">Excluir da lista</ThemedText>
              </ExternalLink>
            </View>
          </View>
        </Collapsible>

        {/* Livro A Arte da Guerra */}
        <Collapsible title="A Arte da Guerra">
          <View style={styles.bookContainer}>
            <Image
              source={require('@/assets/images/download.webp')}
              style={styles.bookImage}
            />
            <View style={styles.bookInfo}>
              <ThemedText style={styles.bookTitle}>A Arte da Guerra</ThemedText>
              <ThemedText>Autor: Sun Tzu</ThemedText>
              <ThemedText type="defaultSemiBold">R$ 36,99</ThemedText>
              <ThemedText>2x sem juros</ThemedText>

              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/gabriel')}
              >
                <ThemedText style={styles.buttonText}>Ver detalhes</ThemedText>
              </TouchableOpacity>

              <ExternalLink href="https://exemplo.com/remover-arte-da-guerra">
                <ThemedText type="link">Excluir da lista</ThemedText>
              </ExternalLink>
            </View>
          </View>
        </Collapsible>

        {/* Livro dos Cinco Anéis */}
        <Collapsible title="O Livro dos Cinco Anéis">
          <View style={styles.bookContainer}>
            <Image
              source={require('@/assets/images/baixados.webp')}
              style={styles.bookImage}
            />
            <View style={styles.bookInfo}>
              <ThemedText style={styles.bookTitle}>O Livro dos Cinco Anéis</ThemedText>
              <ThemedText>Autor: Miyamoto Musashi</ThemedText>
              <ThemedText type="defaultSemiBold">R$ 40,99</ThemedText>
              <ThemedText>2x sem juros</ThemedText>

              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/gabriel')}
              >
                <ThemedText style={styles.buttonText}>Ver detalhes</ThemedText>
              </TouchableOpacity>

              <ExternalLink href="https://exemplo.com/remover-5-aneis">
                <ThemedText type="link">Excluir da lista</ThemedText>
              </ExternalLink>
            </View>
          </View>
        </Collapsible>

        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Livros Excluidos">
        <ThemedText>
          aprenda ser programador em 5 minutos.{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            
          </ThemedText>{' '}
          
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
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

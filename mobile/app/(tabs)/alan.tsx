import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
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
      <Collapsible title="Nada pode me ferir!">
  <ThemedText>Autor: David Goggins</ThemedText>
  <ThemedText type="defaultSemiBold">R$39,90</ThemedText>
  <ThemedText>2x sem juros</ThemedText>
  <ExternalLink href="https://exemplo.com/remover-nada-pode-me-ferir">
    <ThemedText type="link">Excluir da lista</ThemedText>
  </ExternalLink>
</Collapsible>

<Collapsible title="A Arte da Guerra">
  <ThemedText>Autor: Sun Tzu</ThemedText>
  <ThemedText type="defaultSemiBold">R$36,99</ThemedText>
  <ThemedText>2x sem juros</ThemedText>
  <ExternalLink href="https://exemplo.com/remover-arte-da-guerra">
    <ThemedText type="link">Excluir da lista</ThemedText>
  </ExternalLink>
</Collapsible>

<Collapsible title="O Livro dos Cinco Anéis">
  <ThemedText>Autor: Miyamoto Musashi</ThemedText>
  <ThemedText type="defaultSemiBold">R$40,99</ThemedText>
  <ThemedText>2x sem juros</ThemedText>
  <ExternalLink href="https://exemplo.com/remover-5-aneis">
    <ThemedText type="link">Excluir da lista</ThemedText>
  </ExternalLink>
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
  }
});

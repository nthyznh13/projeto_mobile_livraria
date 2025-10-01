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
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Livraria
        </ThemedText>
      </ThemedView>
      <ThemedText>seus livros no carrinho.</ThemedText>
      <Collapsible title="Nada pode me ferir!">
        <ThemedText>
          Preço{' '}
          <ThemedText type="defaultSemiBold">R$</ThemedText> 
          <ThemedText type="defaultSemiBold">39,60</ThemedText>
        </ThemedText>
        <ThemedText>
          2x  <ThemedText type="defaultSemiBold">sem </ThemedText>{' '}
        sem juros.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">excluir de sua lista</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="A Arte da Guerra.">
        <ThemedText>
          R$49,90 {' '}
          <ThemedText type="defaultSemiBold">2x</ThemedText> sem juros no pix.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">excluir de sua lista</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="O livro dos 5 anéis.">
        <ThemedText>
          R$32,99 <ThemedText type="defaultSemiBold">2x sem juros</ThemedText> no pix.{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">excluir de sua lista</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="O ego é seu inimigo.">
        <ThemedText>
          R$45,99{' '}
          <ThemedText type="defaultSemiBold">3x</ThemedText> sem juros
        no pix.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">excluir de sua lista</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Poder e Manipulação.">
        <ThemedText>
          R$35,99{' '}
          <ThemedText type="defaultSemiBold">sem juros</ThemedText> no pix.
        {' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
          
          </ThemedText>{' '}
          </ThemedText>
          
        
      </Collapsible>
      
      <Collapsible title={'camundongo'}>
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
});


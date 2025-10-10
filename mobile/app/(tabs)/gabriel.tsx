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
          data de entrega 
        </ThemedText>
      </ThemedView>
      <ThemedText>inicio da compra</ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText>
          você comprou 1 livro{' '}
          <ThemedText type="defaultSemiBold">livro: meu pequeno principe</ThemedText>{' '}
          <ThemedText type="defaultSemiBold"> por R$ 29,00.</ThemedText>
        </ThemedText>
        <ThemedText>
          . <ThemedText type="defaultSemiBold">.</ThemedText>{' '}
          .
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">.</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          .{' '}
          <ThemedText type="defaultSemiBold">.</ThemedText> .
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          .. <ThemedText type="defaultSemiBold">.</ThemedText> . {' '}
          <ThemedText type="defaultSemiBold">.</ThemedText> ..
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">...</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          ...{' '}
          <ThemedText type="defaultSemiBold">....</ThemedText>...
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">;.</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          ...{' '}
          <ThemedText type="defaultSemiBold">...</ThemedText> ;,,,
          {' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            ..
          </ThemedText>{' '}
          ...
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              ... <ThemedText type="defaultSemiBold">...</ThemedText>{' '}
              ...
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

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
          fontFamily: 'Oswald', // Fonte alterada aqui
        }}>
        Explore
      </ThemedText>
    </ThemedView>
    <ThemedText style={{ fontFamily: 'Oswald' }}>This app includes example code to help you get started.</ThemedText>
    <Collapsible title="File-based routing">
      <ThemedText style={{ fontFamily: 'Oswald' }}>
        This app has two screens:{' '}
        <ThemedText type="defaultSemiBold" style={{ fontFamily: 'Oswald' }}>app/(tabs)/index.tsx</ThemedText> and{' '}
        <ThemedText type="defaultSemiBold" style={{ fontFamily: 'Oswald' }}>app/(tabs)/explore.tsx</ThemedText>
      </ThemedText>
      <ThemedText style={{ fontFamily: 'Oswald' }}>
        The layout file in <ThemedText type="defaultSemiBold" style={{ fontFamily: 'Oswald' }}>app/(tabs)/_layout.tsx</ThemedText>{' '}
        sets up the tab navigator.
      </ThemedText>
      <ExternalLink href="https://docs.expo.dev/router/introduction">
        <ThemedText type="link" style={{ fontFamily: 'Oswald' }}>Learn more</ThemedText>
      </ExternalLink>
    </Collapsible>
    <Collapsible title="Android, iOS, and web support">
      <ThemedText style={{ fontFamily: 'Oswald' }}>
        You can open this project on Android, iOS, and the web. To open the web version, press{' '}
        <ThemedText type="defaultSemiBold" style={{ fontFamily: 'Oswald' }}>w</ThemedText> in the terminal running this project.
      </ThemedText>
    </Collapsible>
    <Collapsible title="Images">
      <ThemedText style={{ fontFamily: 'Oswald' }}>
        For static images, you can use the <ThemedText type="defaultSemiBold" style={{ fontFamily: 'Oswald' }}>@2x</ThemedText> and{' '}
        <ThemedText type="defaultSemiBold" style={{ fontFamily: 'Oswald' }}>@3x</ThemedText> suffixes to provide files for
        different screen densities
      </ThemedText>
      <Image
        source={require('@/assets/images/logo-livraria.png')}
        style={{ width: 100, height: 100, alignSelf: 'center' }}
      />
      <ExternalLink href="https://reactnative.dev/docs/images">
        <ThemedText type="link" style={{ fontFamily: 'Oswald' }}>Learn more</ThemedText>
      </ExternalLink>
    </Collapsible>
    <Collapsible title="Light and dark mode components">
      <ThemedText style={{ fontFamily: 'Oswald' }}>
        This template has light and dark mode support. The{' '}
        <ThemedText type="defaultSemiBold" style={{ fontFamily: 'Oswald' }}>useColorScheme()</ThemedText> hook lets you inspect
        what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
      </ThemedText>
      <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
        <ThemedText type="link" style={{ fontFamily: 'Oswald' }}>Learn more</ThemedText>
      </ExternalLink>
    </Collapsible>
    <Collapsible title="Animations">
      <ThemedText style={{ fontFamily: 'Oswald' }}>
        This template includes an example of an animated component. The{' '}
        <ThemedText type="defaultSemiBold" style={{ fontFamily: 'Oswald' }}>components/HelloWave.tsx</ThemedText> component uses
        the powerful{' '}
        <ThemedText type="defaultSemiBold" style={{ fontFamily: 'Oswald', }}>
          react-native-reanimated
        </ThemedText>{' '}
        library to create a waving hand animation.
      </ThemedText>
      {Platform.select({
        ios: (
          <ThemedText style={{ fontFamily: 'Oswald' }}>
            The <ThemedText type="defaultSemiBold" style={{ fontFamily: 'Oswald' }}>components/ParallaxScrollView.tsx</ThemedText>{' '}
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

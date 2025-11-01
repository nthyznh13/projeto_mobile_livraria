import { useNavigation } from '@react-navigation/native';
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
          data de entrega 
        </ThemedText>
      </ThemedView>
      <ThemedText>inicio da compra</ThemedText>
      <Collapsible title=" compra ✅">
        <ThemedText>
          você comprou 1 livro
          <ThemedText type="defaultSemiBold"> livro: A Biblioteca da meia-noite</ThemedText>
          <ThemedText type="defaultSemiBold"> por   R$ 38,50.</ThemedText>
        </ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>
          
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="endereço de sua residencia e entrega✅ ">
        <ThemedText>
          Rua ourizona 1350, data de entrega: 15/10
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
      </Collapsible>
      <Collapsible title="o livro✅ ">
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>  
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <Image
          source={require('@/assets/images/biblioteca-meia-noite.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="descrição do livro✅">
        <ThemedText>
       O livro segue a história de Nora Seed, uma mulher de 35 anos que, após uma série de eventos trágicos, incluindo a perda de seu emprego e a morte de seu gato, se vê sem propósito e decide acabar com sua vida. No entanto, em vez de morrer, ela é transportada para a Biblioteca da Meia-Noite, um lugar mágico entre a vida e a morte, onde cada livro representa uma versão alternativa de sua vida, baseada nas escolhas que poderia ter feito. Com a ajuda da bibliotecária Mrs. Elm, Nora tem a oportunidade de explorar essas vidas alternativas e descobrir se alguma delas é realmente melhor do que a que ela já viveu.    
        </ThemedText>
      </Collapsible>
      <Collapsible title="agradecimentos✅">
        <ThemedText>
          <ThemedText type="defaultSemiBold">um agradecimento ao nosso cliente : gabriel ricardo</ThemedText> 
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
          </ThemedText>
          Muito obrigado por comprar na nossa loja.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
             <ThemedText type="defaultSemiBold">seu porduto esta entregue</ThemedText>
            </ThemedText>
          )
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

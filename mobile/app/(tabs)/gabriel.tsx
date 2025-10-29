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
          <ThemedText type="defaultSemiBold"> livro: Amor, Teoricamente</ThemedText>
          <ThemedText type="defaultSemiBold"> por   R$ 54,90.</ThemedText>
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
          source={require('@/assets/images/amor-teoricamente.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="descrição do livro✅">
        <ThemedText>
        Elsie Hannaway é uma física teórica que se vê em uma situação complicada. Ela trabalha como professora adjunta, mas seu salário é insuficiente para cobrir suas despesas.
         Para complementar a renda, ela se torna uma "namorada de mentira", oferecendo seus serviços através de um aplicativo. Sua vida toma um rumo inesperado quando Jack Smith, o irmão do seu cliente favorito, entra em cena. 
         Jack é um físico experimental e um dos principais obstáculos para o emprego dos sonhos de Elsie. A tensão entre eles cresce à medida que se veem forçados a conviver, e Elsie descobre que não precisa fingir ser outra pessoa quando está com Jack. 
         A história explora temas de rivalidade acadêmica, romance e autodescoberta, enquanto Elsie tenta equilibrar suas ambições profissionais com seus sentimentos por Jack. 
          <ThemedText type="defaultSemiBold"></ThemedText>
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

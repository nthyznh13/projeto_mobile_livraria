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
          <ThemedText type="defaultSemiBold"> livro: Assistente do Vilão</ThemedText>
          <ThemedText type="defaultSemiBold"> por  R$ 47,45.</ThemedText>
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
          source={require('@/assets/images/assistente-vilao.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="descrição do livro✅">
        <ThemedText>
        Evie Sage, em busca de um emprego para sustentar sua família, acaba esbarrando acidentalmente no temido Vilão de Rennedawn. Sem pensar duas vezes, ela aceita a oferta de trabalho, mesmo sabendo que o ambiente pode ser caótico e sombrio, com cabeças decepadas e globos oculares pelo chão. Ao longo do tempo, Evie começa a desenvolver sentimentos por seu chefe aterrorizante e charmoso, enquanto descobre que alguém está tentando sabotar o império do Vilão. Agora, além de lidar com seus sentimentos, ela precisa proteger seu emprego e desvendar a conspiração.        
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

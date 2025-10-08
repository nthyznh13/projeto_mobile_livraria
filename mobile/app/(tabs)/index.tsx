import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput } from 'react-native'; // 1. Importar TextInput

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
 return (
   <ParallaxScrollView
 headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
 headerImage={
 <Image
 source={require('@/assets/images/logo-livraria.png')}
 style={styles.reactLogo}
 />
 }>
 <ThemedView style={styles.titleContainer}>
 <ThemedText type="title">BookStore</ThemedText>
 <HelloWave />
 </ThemedView>
 
 {/* CAMPO NOME 
        Substituí o ThemedText com as instruções 
        por um TextInput estilizado.
      */}
 <ThemedView style={styles.stepContainer}>
 <ThemedText type="subtitle">Name</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name" // Texto de dica
        />
</ThemedView>
 
{/* CAMPO USERNAME 
        Mantenho a estrutura Link/Menu do seu código original, 
        mas substituo o texto de instrução pelo TextInput. 
        Você pode querer remover toda a lógica <Link> se for apenas um formulário de inscrição simples.
      */}
 <ThemedView style={styles.stepContainer}>
<Link href="/modal">
 <Link.Trigger>
 <ThemedText type="subtitle">Username</ThemedText>
 </Link.Trigger>
 <Link.Preview />
 <Link.Menu>
 <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
 <Link.MenuAction
 title="Share"
 icon="square.and.arrow.up"
 onPress={() => alert('Share pressed')}
 />
 <Link.Menu title="More" icon="ellipsis">
 <Link.MenuAction
 title="Delete"
 icon="trash"
 destructive
 onPress={() => alert('Delete pressed')}
 />
 </Link.Menu>
 </Link.Menu>
</Link>

        <TextInput
          style={styles.input}
          placeholder="Choose a username"
        />
 </ThemedView>
 {/* CAMPO EMAIL 
        Substituí o ThemedText com as instruções 
        por um TextInput estilizado.
      */}
 <ThemedView style={styles.stepContainer}>
 <ThemedText type="subtitle">Email</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          keyboardType="email-address" // Teclado otimizado para e-mail
        />
 </ThemedView>
 </ParallaxScrollView>
 );
}

const styles = StyleSheet.create({
 titleContainer: {
 flexDirection: 'row',
 alignItems: 'center',
 gap: 8,
 },
 stepContainer: {
 gap: 8,
 marginBottom: 8,
 },
  reactLogo: {
 height: 178,
 width: 290,
 bottom: 0,
 alignSelf: 'center', 
 position: 'absolute',
 },
 // 2. NOVO ESTILO PARA O INPUT
 input: {
 height: 40,
 borderWidth: 1,
 padding: 10,
 borderRadius: 5,
 // Cor da borda e fundo para combinar com o tema escuro/claro, se necessário.
 // Aqui, usando cores básicas. Você pode precisar ajustar as cores
 // para se adequar ao seu `ThemedView` escuro/claro.
 borderColor: '#ccc',
 backgroundColor: '#fff', // Fundo branco para destaque, como na imagem
 color: '#000', // Cor do texto preto
 // Estilo para campo de descrição maior (opcional, se um dos campos fosse maior)
 // Por exemplo: height: 100, textAlignVertical: 'top',
 },
});
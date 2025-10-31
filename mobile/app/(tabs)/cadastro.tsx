
import React, { useState } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, TextInput, Pressable, View, Text } from 'react-native';
import { useRouter } from 'expo-router';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const [tela, setTela] = useState<'cadastro' | 'login' | 'recuperar'>('cadastro');
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  // Validações individuais
  const validarNome = (text: string) => {
    setNome(text);
    if (text.length > 0 && text.length < 8) {
      setErro('O nome precisa ter mais de 8 caracteres');
    } else {
      setErro('');
    }
  };

  const validarUsuario = (text: string) => {
    setUsuario(text);
    const temLetra = /[A-Za-z]/.test(text);
    const temNumero = /\d/.test(text);
    const temPontuacao = /[!@#$%^&*(),.?":{}|<>]/.test(text);
    if (text.length > 0 && (!temLetra || !temNumero || !temPontuacao)) {
      setErro('O nome de usuário deve conter letras, números e pontuação');
    } else {
      setErro('');
    }
  };

  const validarEmail = (text: string) => {
    setEmail(text);
    if (text.length > 0 && !text.includes('@')) {
      setErro('O e-mail deve conter o símbolo "@"');
    } else {
      setErro('');
    }
  };

  const validarSenha = (text: string) => {
    setSenha(text);
    const temLetra = /[A-Za-z]/.test(text);
    const temNumero = /\d/.test(text);
    if (text.length > 0 && (text.length < 6 || !temLetra || !temNumero)) {
      setErro('A senha deve ter mais de 6 caracteres e conter letras e números');
    } else {
      setErro('');
    }
  };

  const handleFinalizar = () => {
    if (erro) return;
    if (!nome || !usuario || !email || !senha) {
      setErro('Preencha todos os campos corretamente');
      return;
    }
    alert('Cadastro concluído com sucesso!');
    setTela('login');
  };

  const handleLogin = () => {
    if (!email.includes('@') || senha.length < 6) {
      setErro('E-mail ou senha inválidos');
      return;
    }
    setErro('');
    router.push('/explore');
  };

  const handleRecuperar = () => {
    if (!email.includes('@')) {
      setErro('Digite um e-mail válido para recuperar a senha');
      return;
    }
    setErro('');
    alert('Link de recuperação enviado para o e-mail informado.');
    setTela('login');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1a1e1fff' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo-livraria.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">BookStore</ThemedText>
        <HelloWave />
      </ThemedView>

      {tela === 'cadastro' && (
        <>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Nome</ThemedText>
            <TextInput
              style={[styles.input, erro.includes('nome') ? styles.inputErro : null]}
              placeholder="Digite seu nome completo"
              value={nome}
              onChangeText={validarNome}
            />
          </ThemedView>

          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Usuário</ThemedText>
            <TextInput
              style={[styles.input, erro.includes('usuário') ? styles.inputErro : null]}
              placeholder="Escolha um nome de usuário"
              value={usuario}
              onChangeText={validarUsuario}
            />
          </ThemedView>

          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Email</ThemedText>
            <TextInput
              style={[styles.input, erro.includes('e-mail') ? styles.inputErro : null]}
              placeholder="Digite seu endereço de e-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={validarEmail}
            />
          </ThemedView>

          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Senha</ThemedText>
            <TextInput
              style={[styles.input, erro.includes('senha') ? styles.inputErro : null]}
              placeholder="Digite sua senha"
              secureTextEntry
              value={senha}
              onChangeText={validarSenha}
            />
          </ThemedView>

          {erro ? <Text style={styles.erroTexto}>{erro}</Text> : null}

          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleFinalizar}
            >
              <ThemedText type="subtitle" style={styles.buttonText}>
                Finalizar Inscrição
              </ThemedText>
            </Pressable>
            <Pressable onPress={() => setTela('login')}>
              <Text style={styles.linkTexto}>Já tem conta? Fazer login</Text>
            </Pressable>
          </View>
        </>
      )}

      {tela === 'login' && (
        <>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Email</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={setEmail}
            />
          </ThemedView>

          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Senha</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </ThemedView>

          {erro ? <Text style={styles.erroTexto}>{erro}</Text> : null}

          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleLogin}
            >
              <ThemedText type="subtitle" style={styles.buttonText}>
                Entrar
              </ThemedText>
            </Pressable>
            <Pressable onPress={() => setTela('recuperar')}>
              <Text style={styles.linkTexto}>Esqueci minha senha</Text>
            </Pressable>
            <Pressable onPress={() => setTela('cadastro')}>
              <Text style={styles.linkTexto}>Criar nova conta</Text>
            </Pressable>
          </View>
        </>
      )}

      {tela === 'recuperar' && (
        <>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Recuperar Senha</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail cadastrado"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </ThemedView>

          {erro ? <Text style={styles.erroTexto}>{erro}</Text> : null}

          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleRecuperar}
            >
              <ThemedText type="subtitle" style={styles.buttonText}>
                Enviar link de recuperação
              </ThemedText>
            </Pressable>
            <Pressable onPress={() => setTela('login')}>
              <Text style={styles.linkTexto}>Voltar ao login</Text>
            </Pressable>
          </View>
        </>
      )}
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
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    color: '#000',
  },
  inputErro: {
    borderColor: 'red',
  },
  erroTexto: {
    color: 'red',
    fontSize: 13,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#003366',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: '#336699',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  linkTexto: {
    color: '#003366',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

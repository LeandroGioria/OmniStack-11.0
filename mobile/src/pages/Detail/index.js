import React from 'react';
import { Linking } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import {
  Container,
  Header,
  LogoImg,
  BackButton,
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroDescription,
  HeroTitle,
  Actions,
  Action,
  ActionText,
} from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const message =
    'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$120,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Héroi do caso: Cadelinha atropelada',
      recipients: ['legioria@hotmail.com'],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+5519983456222&text=${message}`);
  }

  return (
    <Container>
      <Header>
        <LogoImg source={logoImg} />
        <BackButton onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </BackButton>
      </Header>

      <Incident>
        <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
        <IncidentValue>APAD</IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>Cadelinha atropelada</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>R$ 120,00</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>Whatsapp</ActionText>
          </Action>

          <Action onPress={sendMail}>
            <ActionText>E-Mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}

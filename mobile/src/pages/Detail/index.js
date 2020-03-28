import React from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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

  function navigateBack() {
    navigation.goBack();
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
          <Action onPress={() => {}}>
            <ActionText>Whatsapp</ActionText>
          </Action>

          <Action onPress={() => {}}>
            <ActionText>E-Mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}

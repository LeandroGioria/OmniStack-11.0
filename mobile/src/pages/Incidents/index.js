import React from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  LogoImg,
  IncidentList,
  Incident,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
} from './styles';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDefail() {
    navigation.navigate('Detail');
  }

  return (
    <Container>
      <Header>
        <LogoImg source={logoImg} />
        <HeaderText>
          Total de
          <HeaderTextBold> 0 casos</HeaderTextBold>.
        </HeaderText>
      </Header>

      <Title>Bem vindo!</Title>
      <Description>Escolha um dos casos e salve o dia.</Description>

      <IncidentList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={() => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>APAD</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>Cadelinha atropelada</IncidentValue>

            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>R$ 120,00</IncidentValue>

            <DetailsButton onPress={navigateToDefail}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}

import * as React from 'react';
import { Container, Header, Title, Content, Footer, 
    FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

function NotificationsScreen({ navigation }) {
    return (
        <Container>
        <Header>
          <Left>
            <Button 
            transparent
            onPress = {()=> navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            Pantalla 2
          </Text>
        </Content>
        <Footer>
        <FooterTab>
            <Button>
              <Icon name="md-arrow-back" />
            </Button>
            <Button>
              <Icon name="ios-briefcase" />
            </Button>
            <Button active>
              <Icon active name="ios-card" />
            </Button>
            <Button>
              <Icon name="md-add" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

export default NotificationsScreen;

  

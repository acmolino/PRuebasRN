import * as React from 'react';
import { Container, Header, Title, Footer, 
    FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import ListadoUsuarios from '../components/listado';

function HomeScreen({ navigation }) {

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
        <Container>
        <Grid>
          <Col><ListadoUsuarios /></Col>
          <Col><Text></Text></Col>
        </Grid>
          
         
        </Container>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

export default HomeScreen;
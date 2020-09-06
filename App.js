import * as React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Icon } from 'native-base';


import HomeScreen from './src/screens/Inicio';
import NotificationsScreen from './src/screens/pantalla2';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }



    return (
    <NavigationContainer>
      <Drawer.Navigator>
          <Drawer.Screen 
            name="Home" component={HomeScreen} 
            options ={{
              drawerIcon: ({ tintColor }) => {
                return <Icon name="ios-home" />;
              },
            }}/>
          <Drawer.Screen 
          name="Notifications" component={NotificationsScreen} 
          options ={{
            drawerIcon: ({ tintColor }) => {
              return <Icon name="ios-calculator" />;
            },
          }}/>
        </Drawer.Navigator>
    </NavigationContainer>

    );
  }
} 

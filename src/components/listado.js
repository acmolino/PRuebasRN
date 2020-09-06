import React, {Component } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

function getUsuarios() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
}

class ListadoUsuarios extends Component {
  constructor(props){
    super(props);
    this.state = {
      usuarios: []
      };
  }  
   

  componentDidMount() {
    getUsuarios().then(usuarios => {
      this.setState({ usuarios });
    });
  }


render(){ 
    return (
      <FlatList 
      data={this.state.usuarios}
      renderItem={({item}) => 
        <Text style={styles.item} onPress={() => {alert(item.name);}}>
          <Text style={styles.title}> 
          {item.name} 
          </Text>{"\n"}
          Telefono: {item.phone} {"\n"}
          Sitio: {item.website} {"\n"}
        </Text>
      }
      keyExtractor={item => String(item.id)}
  
  />
    );
  }

}

export default ListadoUsuarios;


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#3B7F98',
    color: '#FFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

});
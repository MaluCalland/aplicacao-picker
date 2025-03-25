import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pizza: 0, //so valor numerico
          pizzas: [ //lista
            {key: 1, nome: 'Portuguesa', valor: 25},
            {key: 1, nome: 'Chocolate', valor: 28},
            {key: 1, nome: 'Calabresa', valor: 20},
            {key: 1, nome: 'Banana', valor: 22},
            {key: 1, nome: 'Frango', valor: 24},
            {key: 1, nome: 'Napolitana', valor: 26},
          ]
        };
    }
    render() {
      let pizzasItem = this.state.pizzas.map( (v, k) => {
        return <Picker.Item key={k} value={k} label={v.nome}/> //label: o que vai ta na linha - obrigatorio(mostrar na interface)
      })

      return(
        //itemIndex : orinetação a objetos
        <View style={styles.container}>
          <Text style={styles.menu}></Text>
          <Picker>
            selectedValue = {this.state.pizza}
            onValueChange = {(itemValue, itemIndex) => this.setState({pizza: itemValue})}
            {pizzasItem}
          </Picker>
          <Text style={styles.pizzas}>Você escolheu o sabor:  
            {this.state.pizzas[this.state.pizza].nome}
          </Text>
          <Text style={styles.pizzas}> Valor: R$
            {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
          </Text>
        </View>     
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  menu:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  pizzas: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default App;
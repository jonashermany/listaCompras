import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      produto: '',
      qtd: '',
      lista: []
    }

    this.stateProduto = this.stateProduto.bind(this);
    this.stateQtd = this.stateQtd.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  stateProduto(produto) {
    let state = this.state;
    state.produto = produto;
    this.setState(state); //IMPORTANTE
  }

  stateQtd(qtd) {
    let state = this.state;
    state.qtd = parseInt(qtd);
    this.setState(state); //IMPORTANTE
  }

  addItem() {

    if(this.state.produto == "") {
      alert('Informe o produto.');
    } else if(this.state.qtd == "") {
      alert('Informe a quantidade.');
    } else {
      let lista = this.state.lista;
      lista.unshift({ produto: this.state.produto, quantidade: this.state.qtd });
      this.setState({ lista: lista.slice(0)});

      let state = this.state;
      state = {
        produto: '',
        qtd: ''
      }
      this.setState(state);
    }

  }

  render() {
    return (
      <View style={styles.principal}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.tituloApp}>Lista de Compras</Text>
        </View>

        {/* body */}
        <View style={styles.corpo}>
          <View style={styles.formAdd}>
            <TextInput placeholder="Produto" keyboardType='text' onChangeText={(produto) => this.stateProduto(produto)} style={styles.inputs}>{this.state.produto}</TextInput>
            <TextInput placeholder="Quantidade" keyboardType='numeric' onChangeText={(qtd) => this.stateQtd(qtd)} style={styles.inputs}>{this.state.qtd}</TextInput>
            <Button title="Adicionar" onPress={this.addItem} />
          </View>
          <View style={styles.lista}>
            <FlatList data={this.state.lista} renderItem={({item}) => 
                  <Text style={styles.textoLista}>{item.produto} ({item.quantidade})</Text>
                }
            />
          </View>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.textoFooter}>Jonas Daniel Hermany</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  header: {
    backgroundColor: '#ff7043',
    height: 45,
    justifyContent: 'center'
  },
  corpo: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  formAdd: {
    marginLeft: 10,
    marginRight: 10
  },
  inputs: {
    fontSize: 15,
    margin: 2
  },
  lista: {
    color: '#000000',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoLista: {
    textAlign: 'center',
    fontSize: 18
  },
  footer: {
    backgroundColor: '#90a4ae',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoFooter: {
    fontSize: 15,
    color: 'white'
  },
  tituloApp: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10
  }
});
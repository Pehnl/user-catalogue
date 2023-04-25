 import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Usuarios from './components/Usuarios';
const usuarios = {
  '01': {
    name: 'Pedro Henrique\n',
    email: 'email@unifran.com\n',
    age: '23'
  },
  '02': {
    name: 'Eduardo\n',
    email: 'eduardo@outlook.com\n',
    age: '30'
  },
  '03': {
    name: 'Alessandra\n',
    email: 'alessandra@gmail.com.br\n',
    age: '25'
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <Usuarios
        name={ usuarios['01'].name }
        email={ usuarios['01'].email }
        age={ usuarios['01'].age }
      />
      <Usuarios
        name={ usuarios['02'].name }
        email={ usuarios['02'].email }
        age={ usuarios['02'].age }
      />

      <Usuarios
        name={ usuarios['03'].name }
        email={ usuarios['03'].email }
        age={ usuarios['03'].age }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'colunm',
    flexWrap: 'wrap',
    alignContent: 'start',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
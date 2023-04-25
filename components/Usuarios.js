import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function (props) {
  return (
    <View style={styles.container}>
      <Text>
        { props.name }
        { props.email }
        { props.age }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 160,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    margin: 10
  },
});

import React, { Component } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class DashboardScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: <MaterialIcons name='menu' style={styles.iconStyle} onPress={() => { navigation.navigate('DrawerOpen'); }} />,
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#303F9F" animated barStyle="light-content" /> 
        <Image
          style={styles.logoStyle}
          source={require('../resources/images/logo.png')}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  iconStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: 'white',
    fontSize: 30
  },
  logoStyle: {
    alignSelf: 'center',
    width: 300,
    height: 300
  }
};

export default DashboardScreen;

import * as React from 'react';
import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import EmptySpace from '../components/EmptySpace';
import HogwartsButton from '../components/HogwartsButton';
import {getHouse} from '../services/UserInforProvider';

const screenSizeHeight = Dimensions.get('window').height;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house: getHouse(),
    };
    // switch case over houses and set background image with require to the background attribute
    switch (this.state.house) {
      case 'ravenclaw':
        this.state.backgroundImage = require(`../assets/images/` +
          `ravenclaw` +
          `.jpg`);
        break;
      case 'hufflepuff':
        this.state.backgroundImage = require(`../assets/images/` +
          `hufflepuff` +
          `.jpg`);
        break;
      case 'gryffindor':
        this.state.backgroundImage = require(`../assets/images/` +
          `gryffindor` +
          `.jpg`);
        break;
      case 'slytherin':
        this.state.backgroundImage = require(`../assets/images/` +
          `slytherin` +
          `.jpg`);
        break;
      default:
        this.state.backgroundImage = require(`../assets/images/` +
          `ravenclaw` +
          `.jpg`);
        break;
    }
  }

  render() {
    return (
      <ImageBackground
        source={this.state.backgroundImage}
        resizeMode="cover"
        style={{flex: 1, height: undefined, width: undefined}}>
        <View style={styles.container}>
          <HogwartsButton
            title="Spells"
            screen="Spells"
            navigation={this.props.navigation}
          />

          <Text>House: {getHouse()}</Text>
          <Text>Tela a ser implementada</Text>

          <HogwartsButton
            title="Join Common Room"
            screen="CommonRoom"
            navigation={this.props.navigation}
          />
          <EmptySpace />
          <HogwartsButton
            title="Join Great Hall"
            screen="GreatHall"
            navigation={this.props.navigation}
          />
        </View>
      </ImageBackground>
    );
  }
}

styles = StyleSheet.create({
  container: {},
});

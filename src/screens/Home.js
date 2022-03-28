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
import HeaderText from '../components/HeaderText';
import HogwartsButton from '../components/HogwartsButton';
import {getHouse} from '../services/UserInforProvider';

const screenSizeHeight = Dimensions.get('window').height;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house: getHouse(),
      name: 'NOME A SER IMPLEMENTADO',
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

  componentDidMount() {
    console.log('rendsesred');
  }

  render() {
    return (
      <ImageBackground
        source={this.state.backgroundImage}
        resizeMode="cover"
        style={{flex: 1, height: undefined, width: undefined}}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <View style={{flex: 4}}>
              <HeaderText text='Welcome again, ' end={this.state.name} />
            </View>
            <View style={{flex: 1}}>
              <HogwartsButton
                title="Spells 🪄"
                screen="Spells"
                navigation={this.props.navigation}
              />
            </View>
          </View>

          <View style={{flex: 1}}>
            <Text>House: {getHouse()}</Text>
            <Text>Tela a ser implementada</Text>
          </View>

          <HogwartsButton
            title="Join Common Room"
            screen="CommonRoom"
            navigation={this.props.navigation}
          />
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

const styles = StyleSheet.create({
  titleText: {
    textAlignVertical: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-start',
    height: 40,
    margin: 8,
  },
});

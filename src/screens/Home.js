import * as React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import EmptySpace from '../components/EmptySpace';
import HogwartsButton from '../components/HogwartsButton';
import {getHouse} from '../services/UserInforProvider';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house: getHouse(),
      backgroundImage: require(`../assets/images/`+`ravenclaw`+`.jpg`),
    };
    console.log(this.state.house);
    console.log(`../assets/images/${this.state.house}.jpg`);
    //console.log(require(`../assets/images/${this.state.house}.jpg`));
    // nao pode alocar imagem dinamicamente assim! O react nao tera como saber se a imagem existe
    
  }

  render() {
    return (
      <ImageBackground
        source={this.state.backgroundImage}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <HogwartsButton
            title="Spells"
            screen="Spells"
            navigation={this.props.navigation}
          />
        </View>

        <Text>House: {getHouse()}</Text>
        <Text>Tela a ser implementada</Text>
        <Button title="aaa" onPress={console.log(this.state.backgroundImage)} />

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
      </ImageBackground>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

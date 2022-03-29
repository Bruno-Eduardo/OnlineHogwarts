import * as React from 'react';
import {
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CharsList from '../components/CharsList';
import HeaderText from '../components/HeaderText';
import HogwartsButton from '../components/HogwartsButton';
import SpellsList from '../components/SpellsList';
import {allSpells, SpellsApi} from '../services/SpellsProvider';

export default class Spells extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSpells: [],
      spellCount: this.props.route.params.UserProps.spellCount,
    };
  }

  getData = () => {
    SpellsApi.get()
      .then(response => {
        this.setState({
          allSpells: response.data.slice(
            0,
            Math.min(this.state.spellCount, 92),
          ),
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/wand.jpg')}
        resizeMode="cover"
        style={{flex: 1, height: undefined, width: undefined}}>
        <View style={styles.container}>
          <HeaderText> Spells </HeaderText>
          <SpellsList
            chars={this.state.allSpells}
            navigation={this.props.navigation}
          />
          <HogwartsButton
            title="Return"
            screen="Return"
            navigation={this.props.navigation}
            UserProps={this.props.route.params.UserProps}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

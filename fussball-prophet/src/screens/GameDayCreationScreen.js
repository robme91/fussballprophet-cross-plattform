import React from 'react';
import {Text,ScrollView, View, Button, Picker} from 'react-native';
import {styles} from '../styles/GeneralStyles'
import GameComponent from '../ui-components/GameComponent'

export default class GameDayCreationScreen extends React.Component{
  static navigationOptions = {
    title: 'Neuer Spieltag',
  };

  constructor(props){
    super(props);
    this.state = {
      selectedGameday: null,
    }
  }

  handlePickerChange = (itemValue, itemIndex) => {
    this.setState({selectedGameday: itemValue});
  };

  renderGameComponents() {
    let gameComps = [];
    for(i=1; i <= 9; i++){
      gameComps.push(<GameComponent key={i} number={i} scoreIsVisible="false"/>);
    }
    return gameComps;
  }

  render(){
    return (
      <View style={styles.container}>
        <GameDayPicker
          selectedGameday={this.state.selectedGameday}
          onChange={(itemVal, itemIdx) => this.handlePickerChange(itemVal, itemIdx)}
        />
        <ScrollView horizontal>
          <ScrollView>
            {this.renderGameComponents()}
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

/*This component is a picker for the 34 game days*/
class GameDayPicker extends React.Component{

  renderPickerItem(){
    let gameDays = [];
    for(i=1; i < 35; i++){
      gameDays.push(<Picker.Item key={i} label={i + ". Spieltag"} value={i} />);
    }
    return gameDays;
  }

  render(){
    return (
      <Picker
        selectedValue={this.props.selectedGameday}
        style={{ height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => this.props.onChange(itemValue, itemIndex)}
      >
        {this.renderPickerItem()}
      </Picker>
    );
  }
}
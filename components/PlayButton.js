import {Text, View, Pressable, StyleSheet} from 'react-native';
import React, {PureComponent} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export class PlayButton extends PureComponent {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
        <Icon name={'caret-forward-circle-outline'} size={40} color={'#fff'} />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 60,
    padding: 10,
    backgroundColor: 'green',
  },
});
export default PlayButton;

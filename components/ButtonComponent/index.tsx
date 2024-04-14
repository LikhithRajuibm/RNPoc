import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonComponent = ({
  onBtnPress,
  btnTitle,
  btnColor,
}: any): React.JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.btnStyle, {backgroundColor: btnColor || '#20bf6b'}]}
      onPress={onBtnPress}>
      <Text style={styles.buttonText}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    borderRadius: 100,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default ButtonComponent;

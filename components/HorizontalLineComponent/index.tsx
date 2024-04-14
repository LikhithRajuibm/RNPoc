import React from 'react';
import {StyleSheet, View} from 'react-native';

const HorizontalLineComponent = (): React.JSX.Element => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.line} />
    </View>
  );
};
const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: '#d1d8e0',
    marginHorizontal: 8,
  },
});

export default HorizontalLineComponent;

import React from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {ButtonComponent, HorizontalLineComponent} from '../../components';
import {useDispatch} from 'react-redux';
import {removeItem} from '../../store/cartSlice';

const CartItem = ({item}: any): React.JSX.Element => {
  const {productName, imageSrc, id, price} = item;
  const dispatch = useDispatch();
  const windowWidth = useWindowDimensions().width;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      width: 0.95 * windowWidth,
    },
    productName: {fontSize: 25, textAlign: 'center', fontWeight: 'bold'},
    imgStyle: {
      width: '100%',
      height: 400,
      marginVertical: 10,
    },
    productPrice: {
      fontSize: 20,
      textAlign: 'center',
    },
    fontBold: {
      fontWeight: 'bold',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{productName}</Text>
      <HorizontalLineComponent />
      <Image
        resizeMode="contain"
        source={{uri: imageSrc}}
        style={styles.imgStyle}
      />
      <HorizontalLineComponent />
      <Text style={styles.productPrice}>
        <Text style={styles.fontBold}> Price: </Text>
        {price}Rs
      </Text>
      <ButtonComponent
        btnTitle="Remove Item"
        btnColor="#ff7675"
        onBtnPress={() => dispatch(removeItem(id))}
      />
    </View>
  );
};

export default CartItem;

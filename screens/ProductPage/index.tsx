import React, {useLayoutEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ButtonComponent} from '../../components';
import {useDispatch} from 'react-redux';
import {addItem} from '../../store/cartSlice';

const ProductPage = ({navigation, route, ...rest}: any): React.JSX.Element => {
  const {item} = route.params;
  const {productName, imageSrc, price} = item;
  const {setOptions} = navigation;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    setOptions({
      title: productName,
    });
  }, [navigation, productName]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.productName}>{productName}</Text>
        <Image
          resizeMode="contain"
          source={{uri: imageSrc}}
          style={styles.imgStyle}
        />
        <Text style={styles.productPrice}>
          <Text style={{fontWeight: 'bold'}}>Price:</Text>
          {price}Rs
        </Text>
        <View style={styles.addToCartContainer}>
          <ButtonComponent
            btnTitle="Add To Cart"
            onBtnPress={() => dispatch(addItem({...item}))}
            btnColor="#00b894"
            style={{paddingHorizontal: 10}}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  productName: {
    fontSize: 30,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  imgStyle: {
    width: 400,
    height: 400,
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    marginVertical: 10,
  },
  addToCartContainer: {
    width: '90%',
  },
});

export default ProductPage;

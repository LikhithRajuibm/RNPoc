import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {ButtonComponent, HorizontalLineComponent} from '../../components';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

const CartPage = (): React.JSX.Element => {
  const items = useSelector((state: any) => state?.cart);
  const totalPrice = items?.reduce((a: any, b: any) => a + b?.price, 0);
  const windowWidth = useWindowDimensions().width;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      width: windowWidth,
    },
    cartTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    cartSummaryCard: {
      backgroundColor: 'white',
      padding: 16,
      margin: 16,
      borderWidth: 1,
      borderRadius: 5,
      elevation: 5,
      width: '90%',
    },
    cartSummaryTitle: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    cartSummaryItem: {
      fontSize: 20,
      textAlign: 'center',
    },
    fontBold: {
      fontWeight: 'bold',
    },
    cartItemHeader: {
      marginVertical: 5,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => {
          return <CartItem item={item} />;
        }}
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorComponent={() => <HorizontalLineComponent />}
        ListHeaderComponent={
          <View style={styles.cartItemHeader}>
            <Text style={{fontSize: 40, textAlign: 'center'}}>Cart Items:</Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.cartItemHeader}>
            <Text style={{fontSize: 30, textAlign: 'center'}}>
              Your Shopping Cart is Empty
            </Text>
          </View>
        }
      />
      <View style={styles.cartSummaryCard}>
        <Text style={styles.cartSummaryTitle}>Cart Summary:</Text>
        <HorizontalLineComponent />
        <Text style={styles.cartSummaryItem}>
          <Text style={styles.fontBold}> Items: </Text>
          {items?.length}
        </Text>
        <Text style={styles.cartSummaryItem}>
          <Text style={styles.fontBold}> Price: </Text> {totalPrice}Rs
        </Text>
        <ButtonComponent btnTitle="Proceed to Checkout" />
      </View>
    </View>
  );
};

export default CartPage;

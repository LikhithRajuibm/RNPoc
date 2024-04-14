import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {CartPage, ProductListPage, ProductPage} from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppChild = (): React.JSX.Element => {
  const items = useSelector((state: any) => state?.cart);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="ProductListPage"
          screenOptions={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#81ecec',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
            },
            contentStyle: {backgroundColor: '#e8e4f3'},
            headerRight: () => {
              return (
                <Pressable onPress={() => navigation.navigate('Cart')}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                    }}>
                    View Cart
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                    }}>
                    ({items?.length}) items
                  </Text>
                </Pressable>
              );
            },
          })}>
          <Stack.Screen
            name="Home"
            component={ProductListPage}
            options={{title: 'E-Commerce'}}
          />
          <Stack.Screen
            name="Product"
            component={ProductPage}
            options={{title: 'Product Details'}}
          />
          <Stack.Screen
            name="Cart"
            component={CartPage}
            options={{title: 'Your Cart'}}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppChild;

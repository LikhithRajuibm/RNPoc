import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ButtonComponent, HorizontalLineComponent} from '../../components';
import productData from '../../mock-data/products.json';

const ProductListPage = ({navigation, route}: any): React.JSX.Element => {
  const {navigate} = navigation;

  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <FlatList
          data={productData}
          renderItem={({item}) => {
            return (
              <View style={styles.flatListItem}>
                <View style={{padding: 10}}>
                  <Text style={{fontSize: 25, textAlign: 'center'}}>
                    {item.productName}
                  </Text>
                  <ButtonComponent
                    btnTitle="View Product"
                    onBtnPress={() =>
                      navigate('Product', {
                        item,
                      })
                    }
                  />
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={() => <HorizontalLineComponent />}
          ListHeaderComponent={
            <Text style={{fontSize: 40, textAlign: 'center'}}>
              Products List
            </Text>
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  flatListItem: {
    backgroundColor: '#dfe6e9',
  },
  itemSeperator: {
    height: 16,
  },
  viewProduct: {
    width: '100%',
    height: 50,
    backgroundColor: '#20bf6b',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default ProductListPage;

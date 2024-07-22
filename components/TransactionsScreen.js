import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

function TransactionsScreen({ navigation }) {
  const transactions = useSelector(state => state.transactions);

  const displayItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}
    >
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemAmount}>{item.amount}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={displayItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemAmount: {
    fontSize: 16,
    color: '#2e8b57',
  },
  itemDate: {
    fontSize: 12,
    color: '#888',
  },
});

export default TransactionsScreen;

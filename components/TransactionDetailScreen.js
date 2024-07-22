import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.amount}>{transaction.amount}</Text>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.date}>Transaction Date: {transaction.date}</Text>
      <Text style={styles.location}>Location: North York, ON</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  amount: {
    fontSize: 36,
    color: '#2e8b57',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333',
  },
  date: {
    fontSize: 18,
    color: '#888',
    marginBottom: 5,
  },
  location: {
    fontSize: 18,
    color: '#888',
  },
});

export default TransactionDetailScreen;

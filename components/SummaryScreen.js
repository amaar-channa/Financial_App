import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen = () => {
  const totalTransactions = 10;
  const totalBalance = '$750.32';
  const highSpending = '$300.00 - Best Buy';
  const lowSpending = '$5.50 - McDonald\'s';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.item}>Transactions: {totalTransactions}</Text>
      <Text style={styles.item}>Balance: {totalBalance}</Text>
      <Text style={styles.item}>High Spending: {highSpending}</Text>
      <Text style={styles.item}>Low Spending: {lowSpending}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0fff4',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2e8b57',
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});

export default SummaryScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const SummaryScreen = () => {
  const transactions = useSelector(state => state.transactions);

  const totalTransactions = transactions.length;
  const totalBalance = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount.replace('$', '')), 0).toFixed(2);
  const highSpending = transactions.reduce((max, transaction) => parseFloat(transaction.amount.replace('$', '')) > max.amount ? { name: transaction.name, amount: parseFloat(transaction.amount.replace('$', '')).toFixed(2) } : max, { name: '', amount: 0 });
  const lowSpending = transactions.reduce((min, transaction) => parseFloat(transaction.amount.replace('$', '')) < min.amount ? { name: transaction.name, amount: parseFloat(transaction.amount.replace('$', '')).toFixed(2) } : min, { name: '', amount: Infinity });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.item}>Transactions: {totalTransactions}</Text>
      <Text style={styles.item}>Balance: ${totalBalance}</Text>
      <Text style={styles.item}>High Spending: ${highSpending.amount} - {highSpending.name}</Text>
      <Text style={styles.item}>Low Spending: ${lowSpending.amount} - {lowSpending.name}</Text>
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

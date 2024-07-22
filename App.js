import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import TransactionsScreen from './components/TransactionsScreen';
import SummaryScreen from './components/SummaryScreen';
import TransactionDetailScreen from './components/TransactionDetailScreen';
import { store } from './store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Transactions List" 
        component={TransactionsScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Transaction Detail" 
        component={TransactionDetailScreen} 
        options={{ title: 'Transaction Details' }} 
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Transactions"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Transactions') {
                iconName = 'list';
              } else if (route.name === 'Summary') {
                iconName = 'stats-chart';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2e8b57',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: '#f5f5f5' },
          })}
        >
          <Tab.Screen name="Transactions" component={TransactionsStack} />
          <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

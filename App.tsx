import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNav from './src/nav/StackNav';
import AuthNav from './src/nav/AuthNav';
import { useSelector } from 'react-redux';

function App(): React.JSX.Element {
  const userData = useSelector((state) => state.user);
  console.log("userData", userData);
  const [isLogin, setIsLogin] = useState(userData.isActive);
  useEffect(
    () => {
      setIsLogin(userData.isActive);
    },
    [userData, isLogin]

  );
  return <NavigationContainer>{isLogin ? <StackNav /> : <AuthNav />}</NavigationContainer>;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

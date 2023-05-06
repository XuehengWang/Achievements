import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import BadgerPreferencesContext from './contexts/BadgerPreferencesContext';
import NavTabs from './components/navigation/NavTabs';

export default function App() {

  const [pref, setPref] = useState({});

  return (
    <>
      <BadgerPreferencesContext.Provider value={[pref, setPref]}>
        <NavigationContainer>
          <NavTabs />
        </NavigationContainer>
      </BadgerPreferencesContext.Provider>
      <StatusBar style="auto" />
    </>
  );
}
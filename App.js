import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import {styles} from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.container}>
        <StatusBar style="auto" />
          <Text style={styles.title}>Start Trek Alliance Helper</Text>
          <Text style={styles.text}>
            So, you've purchased a Star Trek Alliance game and find some of the 
            housekeeping of rules, dice throws, turn steps daunting?  Thats where this 
            app can help.
          </Text>
          <Text style={styles.text}>
            Just press the START button below and this app will walk you through a Campaign Set up and Campaign Turn.
          </Text>
      </View>
      <View style={styles.boilerplate}>
        <Text style={styles.boilerplatetext}>
          Star Trek Alliance trademarked by WizKids.
        </Text>
      </View>
    </SafeAreaView>
  );
}


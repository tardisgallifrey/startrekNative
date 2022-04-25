import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import {styles} from '../css/styles';



export const CombatPhase = ({navigation})=>{


    return(
      <SafeAreaView style={styles.app}>
        <ScrollView>
          <Text style={styles.subtitle}>Combat Turn</Text>
          <Text style={styles.text}>   1. Declare Target</Text>
          <Text style={styles.text}>   2. Roll Attack Dice</Text>
          <Text style={styles.text}>   3. Modify Attack Dice</Text>
          <Text style={styles.text}>   4. Roll Defense Dice</Text>
          <Text style={styles.text}>   5. Modify Defense Dice</Text>
          <Text style={styles.text}>   6. Compare Results</Text>
          <Text style={styles.text}>   7. Deal Damage</Text>
          <Text style={styles.subtitle}>Actions</Text>
          <Text style={styles.text}>    1. Evasive Maneuvers</Text>
          <Text style={styles.text}>    2. Scan</Text>
          <Text style={styles.text}>    3. Battle Stations</Text>
          <Text style={styles.text}>    4. Cloak</Text>
          <Text style={styles.text}>    5. Sensor Echo</Text>
          <Text style={styles.text}>    6. Acquire Target Lock</Text>
     
        </ScrollView>
        <View style={styles.boilerplate}>
          <Text style={styles.boilerplatetext}>Star Trek Alliance trademarked by WizKids</Text>
        </View>
      </SafeAreaView>
    );
}
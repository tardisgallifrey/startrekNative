import { TouchableOpacity, View, SafeAreaView, Text, ScrollView } from 'react-native';
import {styles} from './styles';



export const GetStarted = ({navigation})=>{


    return(
      <SafeAreaView style={styles.app}>
        <ScrollView>
          <Text style={styles.subtitle}>1. Campaign Setup</Text>
          <Text style={styles.text}>   a. Choose a Mission</Text>
          <Text style={styles.text}>   b. Mission Setup</Text>
          <Text style={styles.text}>   c. Fleet Setup</Text>
          <Text style={styles.text}>   d. Federation Fleet Setup</Text>
          <Text style={styles.text}>   e. Dominion Fleet Setup</Text>

          <Text style={styles.subtitle} >2. Campaign Round</Text>
          <Text style={styles.text}>   a. Reinforcements Phase</Text>
          <Text style={styles.text}>   b. Planning Phase</Text>
          <Text style={styles.text}>   c. Activation Phase</Text>
          <Text style={styles.text}>   d. Combat Phase</Text>
          <TouchableOpacity style={styles.button} onPress={ ()=>{ navigation.navigate('Combat')}}>
              <Text>Go Here</Text></TouchableOpacity>
          <Text style={styles.text}>   e. End Phase</Text>
          <Text style={styles.text}>Repeat the campaign round to match the number of turns in the mission.</Text>
        </ScrollView>
        <View style={styles.boilerplate}>
          <Text style={styles.boilerplatetext}>Star Trek Alliance trademarked by WizKids</Text>
        </View>
      </SafeAreaView>
    );
}
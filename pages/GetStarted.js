import { TouchableOpacity, View, SafeAreaView, Text, ScrollView } from 'react-native';
import { BoilerPlate } from '../components/BoilerPlate';
import {styles} from '../css/styles';

//Since TouchableOpacity has to surround a Text component,
//there really isn't a need for Button comoponents.

//The Text becomes the Button

export const GetStarted = ({navigation})=>{


    return(
      <SafeAreaView style={styles.app}>
        <ScrollView>
          <Text style={styles.subtitle}>1. Campaign Setup</Text>
          <Text style={styles.text}>   a. Choose a Mission</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('MissionSetup')}}>
            <Text style={styles.text}>   b. Mission Setup</Text></TouchableOpacity>
          <Text style={styles.text}>   c. Fleet Setup</Text>
          <Text style={styles.text}>   d. Federation Fleet Setup</Text>
          <Text style={styles.text}>   e. Dominion Fleet Setup</Text>

          <Text style={styles.subtitle} >2. Campaign Round</Text>
          <Text style={styles.text}>   a. Reinforcements Phase</Text>
          <Text style={styles.text}>   b. Planning Phase</Text>
          <Text style={styles.text}>   c. Activation Phase</Text>
          <TouchableOpacity onPress={ ()=>{ navigation.navigate('Combat')}}>
              <Text style={styles.text}>   d. Combat Phase</Text></TouchableOpacity>
          <Text style={styles.text}>   e. End Phase</Text>
          <Text style={styles.text}>Repeat the campaign round to match the number of turns in the mission.</Text>
        </ScrollView>
        <BoilerPlate />
      </SafeAreaView>
    );
}
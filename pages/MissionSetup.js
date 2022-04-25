import { TouchableOpacity, View, SafeAreaView, Text, ScrollView } from 'react-native';
import {BoilerPlate} from '../components/BoilerPlate';
import {styles} from '../css/styles';


export const MissionSetup = ()=>{

    return(
        <SafeAreaView style={styles.app}>
            <ScrollView>
                <Text style={styles.subtitle}>Mission Setup</Text>
                <Text style={styles.text} >1. Briefing</Text>
                <Text style={styles.text} >2. Map Setup</Text>
            </ScrollView>
            <BoilerPlate />
        </SafeAreaView>

    );
}
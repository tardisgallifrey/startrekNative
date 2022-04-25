import { View, Text } from 'react-native';
import {styles} from '../css/styles';

export const BoilerPlate = ()=>{

    return(
        <View style={styles.boilerplate}>
          <Text style={styles.boilerplatetext}>Star Trek Alliance trademarked by WizKids</Text>
        </View>
    );
}
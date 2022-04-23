import { Button, View, SafeAreaView, Text } from 'react-native';
import {styles} from './styles';



export const HomePage = ({navigation})=>{


    return(
      <SafeAreaView style={styles.app}>
        <View style={styles.container}>
          <Text style={styles.title}>Star Trek Alliance Helper</Text>
          <Text style={styles.text}>So, you have a copy of Star Trek Alliance. Awesome! 
          But, the job of keeping up with ship data, dice throws, combat turns and such can 
          be daunting.  I understand.  That is why this helper app exists, to automate most of 
          the tasks in playing Alliance.  The board game is still needed, but we'll handle the 
          details. Come along and press BEGIN below to get started.</Text>
        </View>
        <Button title="Begin" onPress={()=>{ navigation.navigate('Start')}} />
        <View style={styles.boilerplate}>
          <Text style={styles.boilerplatetext}>Star Trek Alliance trademarked by WizKids</Text>
        </View>
      </SafeAreaView>
    );
}
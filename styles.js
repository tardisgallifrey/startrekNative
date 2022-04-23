import { RefreshControlComponent, StyleSheet } from "react-native";

//StyleSheet cannot use color names,
//but a quick-n-dirty object takes care of that
const Color = {
  black: "#000000",
  white: "#ffffff",
  blue: "#0000ff",
  red: "#ff0000",
  green: "#00ff00",
  teal: "#00ffff",
  turquoise: "#008888",
  yellow: "#ffff00"
}

//paddingVertical is best to locate the top things on the page
//JustifyContent flex-start with much padding is best.

// React Native Styles
export const styles = StyleSheet.create({

    app: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: Color.black
    },

    container: {
      flex: 4,
      justifyContent: 'flex-start',
      paddingVertical: 16,
      alignItems: 'center',
      padding: 16,
      backgroundColor: Color.black
    },

    boilerplate: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: Color.black
    },

    title: {
      marginTop: 64,
      paddingVertical: 24,
      borderWidth: 0,
      borderColor: Color.black,
      borderRadius: 6,
      backgroundColor: Color.black,
      color: Color.white,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    
    text: {
      padding: 10,
      margin: 10,
      color: Color.white,
      fontFamily: 'monospace',
      fontSize: 14
    },

    boilerplatetext: {
      padding: 10,
      margin: 10,
      color: Color.white,
      fontFamily: 'monospace',
      fontSize: 8
    }
  });
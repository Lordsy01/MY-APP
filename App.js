import { Image, Text, Button, StyleSheet, View, StatusBar } from "react-native";

export default function App(){

  return(
    <View style={styles.container}>
  <StatusBar barStyle={'light-content'} backgroundColor="#000" hidden={false} />

  {/* {image} */}
  <Image source={require("./assets/pic.jpg")}style={styles.avatar}/>
  <Text style={styles.name}>Ntokumgwia Lordsy</Text>
  <Text style={styles.desc}> I am a passionate learner, mision is to learn and change those around me. i can never be a vegiterain </Text>
  <Text style={styles.btn}>Read more</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:"red",
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  avatar:{
    width:150,
    height:150,
    borderRadius:75,
    elevation:12,
    borderWidth:3,
    bordercolor:'teal',
    justifyContent:'center',
    alignContent: 'center',

  },
  name:{
    marginTop:12,
    fontSize:18,
    color:'#fff',
    fontWeight:'bold',
    textAlign: 'center'

  },
  desc:{
    color:'#000',
    textAlign:'center',
    marginVertical:14,
    paddingHorizontal:20,
  },
  btn:{
    backgroundColor:'teal',
    paddingHorizontal:22,
    paddingVertical:12,
    borderRadius:11,
    elevation:20,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    
  },
  btnText:{
    color:'#fff'
  }
  

})
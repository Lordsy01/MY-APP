// CREATE A COUNTER APP 
import {View, Text, StyleSheet, Button} from 'react-native'
import {useState} from 'react'

export default function Counter(){
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(prev => prev + 1);
    }

    const handleDecrement = () => {
        setCounter(prev => prev - 1);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.Text}> Welcome to my Counter App</Text>
            <View style={styles.numberBox}>
                <Text style={styles.number}>{counter}</Text>
            </View>
            <View style={styles.btns}>
                <Button title='Add' color='green' onPress={handleIncrement}/>
                <Button title='Sub' color='red' onPress={handleDecrement}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        margin:1,
        
    },
    numberBox:{
        width:200,
        height:200,
        backgroundColor:'black',
        borderRadius: 100,
        justifyContent:'center',
        alignItems:'center'
    },
    number:{
        color:'#fff',
        fontSize:50,
    },
    btns:{
        flexDirection:'row',
        gap:30,
        marginTop:13,
        width:120,
        height:40,
    }
})
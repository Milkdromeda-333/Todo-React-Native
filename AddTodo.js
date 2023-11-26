import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    Button
} from 'react-native';
import { useState } from 'react';

export default function AddTodo({ addNewToDo }) {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='wash clothes'
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Pressable
                style={styles.button}
                onPress={() => { addNewToDo(text); setText(""); }}
            >
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 4
    },
    input: {
        borderWidth: 1,
        borderColor: "#cfcfcf",
        width: "80%",
        paddingHorizontal: 4,
        paddingVertical: 4,
    },
    button: {
        backgroundColor: "black",
        width: "20%",
        paddingVertical: 4,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
});
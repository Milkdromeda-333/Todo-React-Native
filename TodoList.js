import { View, Text, StyleSheet, Pressable } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { Octicons } from '@expo/vector-icons';


export default function ToDoList(props) {
    const { userTodos, markCompleteById, deleteToDo } = props;
    return (
        <View>
            {userTodos && userTodos.map(item => {
                return (
                    <Pressable
                        style={item.isCompleted ? { ...styles.listContainer, ...styles.itemCompleted } : styles.listContainer}
                        onPress={() => markCompleteById(item.id)}
                        key={item.id}
                    >
                        <View style={styles.itemHeader}>
                            <Entypo name="circle" size={24} color={item.isCompleted ? "white" : "black"} />
                            <Text
                                style={item.isCompleted ? { ...styles.listContainer, ...styles.itemCompleted } : styles.listContainer}
                            >
                                {item.text}
                            </Text>
                        </View>

                        <Pressable onPress={() => deleteToDo(item.id)}>
                            <Octicons name="trash" size={24} color="red" />
                        </Pressable>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemCompleted: {
        color: "white",
        backgroundColor: "black",

    },
    itemHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,

    }
});
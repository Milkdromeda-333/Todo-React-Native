import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import AddTodo from './AddTodo';
import ToDoList from './TodoList';

export default function TodoListContainer() {

    const [userTodos, setUserTodos] = useState([]);

    const addNewToDo = (text) => {
        setUserTodos(prev => [...prev, { text, isCompleted: false, id: userTodos.length }]);
    };

    const markCompleteById = (id) => {

        setUserTodos(prev => {
            const foundItem = prev.find(item => item.id === id);
            const editedList = prev.filter(item => item.id !== id);
            return [...editedList, { ...foundItem, isCompleted: !foundItem.isCompleted }];
        });
    };

    const deleteToDo = (id) => {
        setUserTodos(prev => {
            return prev.filter(item => item.id !== id);
        });
    };

    return (
        <View style={styles.container}>
            <AddTodo addNewToDo={addNewToDo} />
            {!userTodos.length ?
                <Text>No things planned yet try adding one!</Text>
                : <ToDoList userTodos={userTodos} markCompleteById={markCompleteById} deleteToDo={deleteToDo} />
            }

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        borderTop: "1px solid black"
    }
});
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const HelloWorld = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo) {
      setTodoList([...todoList, {text: newTodo, done: false}]);
      setNewTodo('');
    }
  };

  const toggleTodo = index => {
    const newTodoList = [...todoList];
    newTodoList[index].done = !newTodoList[index].done;
    setTodoList(newTodoList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {todoList.map((todo, index) => (
          <TouchableOpacity
            style={[styles.listItem, todo.done && styles.doneItem]}
            key={index}
            onPress={() => toggleTodo(index)}>
            <Text
              style={[styles.listItemText, todo.done && styles.doneItemText]}>
              {todo.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 64,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listContainer: {
    alignSelf: 'stretch',
  },
  listItem: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  doneItem: {
    backgroundColor: '#ddd',
  },
  listItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textDecorationLine: 'none',
  },
  doneItemText: {
    textDecorationLine: 'line-through',
  },
});

export default HelloWorld;

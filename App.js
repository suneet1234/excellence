import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Button, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Overlay } from 'react-native-elements';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{ key: 1, name: "nitin" },
            { key: 2, name: "shukla" },
            { key: 3, name: "React" },
            { key: 4, name: "native" }],

            text: '',
            TodoKey: null,
            TodoName: '',
            visible: false,
            alertText: ""
        }
    }

    handleDelete = (key) => {
        let newList = this.state.list.filter(todo => {
            if (todo.key != key)
                return todo
        })
        this.setState({ list: newList });

    }

    changeHandler = (val) => {

        this.setState({ text: val })
    }

    addButton = () => {
        if (this.state.text.length == 0) {
            Alert.alert("invalid item")

        }
        else {
            const data = [{ name: this.state.text, key: Math.random() }, ...this.state.list]
            this.setState({ list: data })
            this.setState({ text: "" })

        }
    }

    editHandle = (key, name) => {

        
        this.setState({ TodoName: name, TodoKey: key });

    }
    okHandle = () => {

        console.log(this.state.TodoName, 'Tofd');
        console.log(this.state.alertText, 'alert');

        if (this.state.TodoName == this.state.alertText) {
            this.setState({ visible: false })
        }
        else if (this.state.alertText.length == 0) {
            this.setState({ visible: false })
        }
        else if (this.state.alertText.length > 0) {
            const data = [{ name: this.state.alertText, key: Math.random() }, ...this.state.list]
            this.setState({ list: data })
            this.setState({ visible: false })
        }
    }

    cancleHandle = () => {
        
            const NewList = [{ name: this.state.TodoName, key: Math.random() }, ...this.state.list]
            this.setState({list:NewList})
        
        this.setState({ visible: false })
    }

    handleEditUpdate = (key) => {
        let newList = this.state.list.filter(todo => {
            if (todo.key != key)
                return todo
        })
        this.setState({ list: newList });

        const data = [{ name: this.state.alertText, key: Math.random() }, ...this.state.list]
        this.setState({ list: data })
    }

    handleEditText = (val) => {
        this.setState({ alertText: val });
        const newList = this.state.list.filter(todo => {
            if (todo.key != this.state.TodoKey)
                return todo
        })
        this.setState({ list: newList });
    }
    render() {
        const { list, text } = this.state;
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                <View style={styles.container}>
                    <Overlay
                        isVisible={this.state.visible}
                        onBackdropPress={() => this.setState({ visible: false })}
                        overlayStyle={{ width: '70%', height: 200 }}
                    >
                        <View style={{ height: '100%' }}>
                            <Text style={{ fontSize: 22 }}>
                                Edit Todo
                            </Text>
                            <TextInput
                                style={styles.textInputOverlay}
                                onChangeText={this.handleEditText}
                                defaultValue={this.state.TodoName}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%', alignSelf: 'flex-end', paddingTop: '10%' }}>
                                <Button
                                    title="ok"
                                    color="grey"
                                    onPress={this.okHandle}
                                />
                                <Button
                                    title="cancle"
                                    color="grey"
                                    onPress={this.cancleHandle}

                                />
                            </View>
                        </View>
                    </Overlay>
                    <Text style={styles.todoText}>
                        to-do ({list.length})
                    </Text>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={this.changeHandler}
                           
                            value={text}
                        />
                        <View style={{ flex: 1 }} >
                            <Button
                                style={styles.button}
                                title="add"
                                color="grey"
                                onPress={this.addButton}
                            />
                           

                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={list}
                                    style={styles.dataFlat}
                                    renderItem={({ item }) => (
                                        <View style={styles.data}>
                                            <Text style={{ fontSize: 20 }} >
                                                {item.name}
                                            </Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <TouchableOpacity
                                                    
                                                    onPress={() => {
                                                        

                                                        this.setState({ visible: true }, () => {
                                                            
                                                             this.editHandle(item.key, item.name) })
                                                    }}

                                                >
                                                    <Text style={{ fontSize: 18 }}>
                                                        Edit
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{ marginLeft: '8%' }}
                                                    onPress={() => this.handleDelete(item.key)}
                                                >
                                                    <Text style={{ fontSize: 18 }}>
                                                        Delete
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    )}
                                    keyExtractor={item => item.key}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        width: '90%',
        paddingTop: '5%'
    },
    todoText: {
        fontSize: 30,
    },
    textInput: {
        marginTop: '3%',
        borderWidth: 1,
        fontSize: 22,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: '2%'
    },
    textInputOverlay: {
        marginTop: '10%',
        borderWidth: 1,
        fontSize: 18,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
     
    },
    dataFlat: {
        marginTop: '3%',
        
        marginBottom: '3%'
    },
    data: {
      
        padding: 10,
        paddingRight: 0,
        borderWidth: 1,
        borderRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    button: {
        textTransform: 'none',
        backgroundColor: 'grey'
    }
});

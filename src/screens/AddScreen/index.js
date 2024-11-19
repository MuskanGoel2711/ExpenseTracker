import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../../assets/index'

const AddScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();
    const [expenses, setExpenses] = useState([]);
    const [chartData, setChartData] = useState([
        {
            name: "Food",
            amount: 0,
            color: "#e62d20",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Clothes",
            amount: 0,
            color: "#27e620",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Bills",
            amount: 0,
            color: "#1c6bd9",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Others",
            amount: 0,
            color: "#5adbac",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
    ]);

    const handleSubmit = () => {
        setExpenses((prev) => [...prev, {
            expenseName,
            amount,
            category
        }])
        setExpenseName('')
        setAmount('')
        setCategory('')
    }
    const showExpenses = () => {
        return (
            navigation.navigate('ShowExpenses', {
                data: expenses
            })
        )
    }
    // const handleDelete = (id) => {
    //     setExpenses(prevState => ({
    //         expenses: prevState.expenses.filter(user => user.item !== id)
    //       }));
    // };
    const renderItem = ({ item }) => (
        <View style={styles.flatListData}>
            <TouchableOpacity style={styles.crossContainer} >
                <Image source={images.cross} style={styles.cross} />
            </TouchableOpacity>
            <Text>{item.expenseName}</Text>
            <Text>{item.category}</Text>
            <Text>{item.amount}</Text>
        </View>
    )
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <Text style={styles.inputHeader}>Expense Name</Text>
            <TextInput
                value={expenseName}
                placeholder='Expense Name'
                onChangeText={(value) => setExpenseName(value)}
                style={styles.input}
            />
            <Text style={styles.inputHeader}>Amount</Text>
            <TextInput
                value={amount}
                placeholder='Amount'
                onChangeText={(value) => setAmount(value)}
                keyboardType='phone-pad'
                style={styles.input}
            />
            <Text style={styles.inputHeader}>Category</Text>
            <TextInput
                value={category}
                placeholder='Category'
                onChangeText={(value) => setCategory(value)}
                style={styles.input}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.text}>Add Expense</Text>
            </TouchableOpacity>
            {expenses?.length > 4 && <Text onPress={showExpenses} >View All</Text>}
            <View style={styles.flatListTop}>
                <Text style={styles.headerName}>ExpenseName</Text>
                <Text style={styles.headerName}>Category</Text>
                <Text style={styles.headerName}>Amount</Text>
            </View>
            <FlatList
                data={expenses}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=>item.id}
            />
        </View>
    )
}

export default AddScreen;

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    input: {
        height: 40,
        width: '90%',
        // color: '#1a2639',
        borderStyle: 'double',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#BDE8CA',
        position: 'relative',
        marginTop: 8
    },
    inputHeader: {
        fontSize: 15,
        fontWeight: 500
    },
    arrowContainer: {
        position: 'absolute',
        left: 300,
        top: 12
    },
    arrow: {
        width: 30,
        height: 30,
    },
    buttonContainer: {
        backgroundColor: '#73BBA3',
        borderRadius: 10,
        padding: 20,
        width: '40%',
        marginLeft: 100,
        marginTop: 24,
    },
    text: {
        textAlign: 'center',
    },
    flatListTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 23
    },
    flatListData: {
        backgroundColor: '#BDE8CA',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 23,
        borderRadius: 23,
        position: 'relative'
    },
    headerName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    crossContainer: {
        position: 'absolute',
        left: 350
    },
    cross: {
        width: 20,
        height: 20, 
    }
})
import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {images} from '../../assets/index'

const ShowExpenses = ({ route, navigation }) => {
    const insets = useSafeAreaInsets();
    const { data } = route.params;
    const renderExpense = ({ item }) => (
        <View style={styles.container}>
            <Text>{item.amount}</Text>
            <Text>{item.category}</Text>
            <Text>{item.expenseName}</Text>
        </View>
    )
    return (
        <View style={{ paddingTop: insets.top }}>
            <View style={styles.top}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={images.leftArrow} style={styles.arrow}/>
                </TouchableOpacity>
                
                <Text style={styles.text}>Expenses</Text>
            </View>
            <View style={styles.flatListTop}>
                <Text style={styles.headerName}>ExpenseName</Text>
                <Text style={styles.headerName}>Category</Text>
                <Text style={styles.headerName}>Amount</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderExpense}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ShowExpenses;

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        backgroundColor: '#BDE8CA',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 23,
        borderRadius: 23
    },
    arrow: {
        width: 22,
        height: 22,
        margin: 12
    },
    text: {
        padding: 12,
        fontSize: 22,
        fontWeight: 'bold'
    },
    flatListTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 18,
    },
    headerName: {
        fontWeight: 'bold',
        fontSize: 16
    }
})
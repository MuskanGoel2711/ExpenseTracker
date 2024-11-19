import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import expenses from '../../assets/data';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {vw,vh} from '../../utils/Dimensions';

const Menu = () => {
    const insets = useSafeAreaInsets();
    const renderExpenses = ({ item }) => (
        <View style={styles.expenseContainer}>
            <View style={styles.expenseContainer1}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </View>
    )
    return (
        <View style={{ paddingTop: insets.top }}>
            <FlatList
                data={expenses}
                renderItem={renderExpenses}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.container}
            />
        </View>

    )
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        margin: 23
    },
    expenseContainer: {
        flexDirection: 'row',
    },
    expenseContainer1: {
        flexDirection: 'row',
        width: '50%',
        backgroundColor: ''
    },
    image: {
        width: vw(40),
        height: vh(40)
    },
})
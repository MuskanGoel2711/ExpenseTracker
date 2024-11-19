import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../../assets/index';
import Calender from './Calendar';
import {vw,vh} from '../../utils/Dimensions'

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState('')
    const handlePress = () => {
        setShowCalendar(!showCalendar);
    };
    const onClose = () => {
        setShowCalendar(!showCalendar);
    }
    
    const handleDateChange = () => {
        setShowCalendar({showCalendar: false})
    }
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View>
                <Image source={images.leftArrow} style={styles.leftArrow} />
            </View>
            <View>
                <Text style={styles.header}>My Expenses</Text>
                <Text style={styles.headerDown}>Summary (private)</Text>
            </View>
            <View style={styles.calendarContainer}>
                <TouchableOpacity onPress={handlePress}>
                    <Image source={images.calendar} style={styles.calendar} />
                </TouchableOpacity>
                <TextInput value={date} style={styles.placeholder} onChangeText={handleDateChange}/>
            </View>
            <Modal
                transparent={true}
                visible={showCalendar}
                animationType="slide"
                onRequestClose={onClose}
            >
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.modalContainer}>
                        <View style={{ height: '25%' }}>
                            <Calender selectedDate={date}
                                onDayPress={handleDateChange}
                                markedDates={{
                                    [date]: {
                                        selected: true,
                                        marked: true,
                                        selectedColor: '#00B0FF',
                                    },
                                }} />
                            <TouchableOpacity onPress={onClose}>
                                <Text style={styles.modalText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableWithoutFeedback>
            </Modal>
            <View style={styles.categoriesContainer}>
                <View>
                    <Text style={styles.categoriesText}>CATEGORIES</Text>
                    <Text>4 Total</Text>
                </View>
                <View style={styles.leftImageContainer}>
                    <TouchableOpacity>
                        <Image source={images.chart} style={[styles.menu, { marginRight: 12 }]} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.menu} style={styles.menu} />
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15
    },
    leftArrow: {
        width: vw(25),
        height: vh(20)
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 30
    },
    headerDown: {
        fontSize: 15
    },
    calendarContainer: {
        paddingTop: 23,
        flexDirection: 'row'
    },
    calendar: {
        width: vw(30),
        height: vh(30)
    },
    modalContainer: {
        justifyContent: 'flex-end',
        height: '75%'
    },
    modalText: {
        paddingTop: 170,
        position: 'absolute',
        paddingLeft: 160,
        fontWeight: 'bold',
        fontSize: 18
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    categoriesText: {
        fontSize: 20
    },
    leftImageContainer: {
        flexDirection: 'row'
    },
    menu: {
        width: vw(40),
        height: vh(40)
    }
})
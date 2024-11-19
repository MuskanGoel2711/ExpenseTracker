import React from 'react';
import {
    Text,
    View,
    Modal,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import styles from '../style';
import { images } from '../../../assets/index';

const CategoryModal = () => {
    
    return (
        <Modal
            transparent={true}
            visible={showGenderModal}
            animationType="slide"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={this.props.onClose}>
                <View style={styles.modalContainer1}>
                    <View style={styles.modalContent1}>
                        <Text style={styles.modalTitle1}>Select Category</Text>
                        <View style={styles.lineView}></View>

                        {categoryOptions.map((gender, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => this.handleGenderSelect(gender.label)}
                                style={styles.containerTop}
                            >
                                <View style={styles.containerTop1}>
                                    <Image
                                        source={gender.image}
                                        style={styles.imgSize}
                                    />
                                    <View style={styles.containerTop2}>
                                        <Text style={styles.textName}>{gender.label}</Text>
                                    </View>

                                </View>
                                <View style={styles.forwardContainer}>
                                    <Image
                                        source={icons.sidearrowModal}
                                        style={styles.imgForward}
                                    />
                                </View>
                            </TouchableOpacity>
                        ))}

                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

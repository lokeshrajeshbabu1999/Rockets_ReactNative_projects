import { Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";

const LaunchPadScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const handleImagePress = (item) => {
        navigation.navigate('LaunchPadDetail', { id: item.id });
    };

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launchpads')
            .then((response) => response.json())
            .then((responseData) => setData(responseData))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const renderCard = ({ item }) => (
        <TouchableOpacity onPress={() => handleImagePress(item)}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.images.large[0]
                    }}
                />
                <View style={styles.cardDetails}>
                    <Text style={styles.text2}>{item.name}</Text>
                    <Text>{item.full_name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> :
                <FlatList
                    data={data}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id.toString()}
                />
            }
        </View>
    )
}
export default LaunchPadScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 8,
    },
    card: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        elevation: 5,
    },
    cardDetails: {
        padding: 12,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    text2: {
        fontSize: 28,
        color: '#006400'
    },
});

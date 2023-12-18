import { useNavigation } from "@react-navigation/native";
import { Card, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

const RocketScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/rockets')
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleImagePress = (item) => {
        navigation.navigate('RocketDetailScreen', { id: item.id });
    };
    const RocketCard = ({ item, handleImagePress }) => {
        return (
            <TouchableOpacity onPress={() => handleImagePress(item)}>
                <Card style={styles.card}>
                    <View>
                        <Text style={styles.text2}>{item.name}</Text>
                        <Text style={styles.text1}>{item.company}</Text>
                        <Text style={styles.text1}>{item.country}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> :
                <FlatList
                    data={data}
                    renderItem={({ item }) => <RocketCard item={item} handleImagePress={handleImagePress} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        elevation: 4,
    },
    container: {
        marginHorizontal: 2,
    },
    text2: {
        fontSize: 26,
        color: '#006400',
        textAlign: 'center'
    },
    text1: {
        fontSize: 26,
        textAlign: 'center'
    },
});

export default RocketScreen;

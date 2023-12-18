import { Card, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

const LaunchPadScreen = ({ navigation, route }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const handleImagePress = (item) => {
        // Navigate to CrewDetailScreen and pass necessary data, e.g., item ID
        navigation.navigate('LaunchPadDetail', { id: item.id });
    };
    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launchpads')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Card>
            {isLoading ? <ActivityIndicator /> :
                <FlatList
                    style={styles.card}
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.id} onPress={() => handleImagePress(item)}>
                            <View style={styles.container}>
                                <Text style={styles.text2}>{item.name}</Text>
                                <Text>{item.full_name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            }
        </Card>
    )
}

export default LaunchPadScreen
const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        width: 280,
        height: 350,
    },
    text2: {
        fontSize: 28,
        color: '#006400'

    },
    container: {
        marginHorizontal: 2,
        marginTop: 14,
    },
})
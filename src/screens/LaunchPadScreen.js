import { Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";

const LaunchPadScreen = ({ navigation, route }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const handleImagePress = (item) => {
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
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> :
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.id} onPress={() => handleImagePress(item)}>
                            <View style={styles.container}>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: item.images.large[0]
                                    }} />
                                <Text style={styles.text2}>{item.name}</Text>
                                <Text>{item.full_name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                    }
                    keyExtractor={(item) => item.id.toString()}
                />
            }
        </View >
    )
}

export default LaunchPadScreen
const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        width: 375,
        height: 350,
    },
    text2: {
        fontSize: 28,
        color: '#006400'
    },
    container: {
        marginHorizontal: 4,
    },
    cardstyle: {
        padding: 10,
    },
})
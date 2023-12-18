import { Card, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

const RocketScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/rockets')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <View style={styles.container}>
            <Card>
                {isLoading ? <ActivityIndicator /> :
                    <View>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <View key={item.id}>
                                    <Text>
                                        {item.name}
                                    </Text>
                                </View>
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                }
            </Card>
        </View >
    );
}
export default RocketScreen

const styles = StyleSheet.create({
    image: {
        marginTop: 20,
        width: 300,
        height: 350,
    },
    text2: {
        fontSize: 14,
    },
    container: {
        marginHorizontal: 2,
    },
})
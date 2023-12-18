import { useRoute } from "@react-navigation/native";
import { Card, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, View } from "react-native";

const RocketDetailScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const route = useRoute();
    const { rocketId } = route.params;

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
                <ScrollView>
                    {isLoading ? <ActivityIndicator /> :
                        <View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => (
                                    <View key={item.id}>
                                        <Text> {item.name}</Text>
                                        <Text> {item.type}</Text>
                                    </View>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    }
                </ScrollView>
            </Card>
        </View >
    );
}
export default RocketDetailScreen

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
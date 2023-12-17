import { Button, Card, Image, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, View } from "react-native";

const RocketScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.spacexdata.com/v5/launches/latest')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    const Item = ({ title }) => (
        <View >
            <Text style={styles.text2}>{title}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Card>
                <ScrollView>
                    <ScrollView>
                        {isLoading ? <ActivityIndicator /> :
                            <View>
                                <Image style={styles.image}
                                    source={{
                                        uri: data.links.patch.small
                                    }} />
                                <Button
                                    type="clear">{data.links.wikipedia}</Button>
                                <Button type="clear">WEBCAST:{data.links.webcast}</Button>
                                <Button type="clear">{data.links.webcast}</Button>
                                <Button type="clear">YOUTUBE_ID:  {data.links.youtube_id}</Button>
                                <View style={styles.text2}>
                                    <FlatList
                                        data={data.crew}
                                        renderItem={({ item }) => (
                                            <View>
                                                <Text style={styles.text2}>Crew ID: {item.crew}</Text>
                                                <Text style={styles.text2}>Crew Role: {item.role}</Text>
                                            </View>
                                        )}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                            </View>
                        }
                        <ScrollView>
                            <FlatList
                                data={data.cores}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text style={styles.text2}>Core ID: {item.core}</Text>
                                        <Text style={styles.text2}>Flight NO: {item.flight}</Text>
                                        <Text style={styles.text2}>Landing_Type: {item.landing_type}</Text>
                                        <Text style={styles.text2}>Landpad:{item.landpad}</Text>
                                    </View>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </ScrollView>
                    </ScrollView>
                </ScrollView>
            </Card>
        </View>
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
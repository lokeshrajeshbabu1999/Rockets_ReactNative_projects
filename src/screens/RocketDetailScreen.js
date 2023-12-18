import { useRoute } from "@react-navigation/native";
import { Card, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";

const RocketDetailScreen = () => {
    const route = useRoute();
    const { id } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [crewMember, setCrewMember] = useState(null);

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setCrewMember(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);
    return (
        <View style={styles.container}>
            <Card>
                <ScrollView>
                    {isLoading ? (<ActivityIndicator />
                    ) : (
                        <View>
                            {crewMember ? (
                                <View>
                                    <Text style={styles.text1}>
                                        <Text style={styles.text1}>{crewMember.name}</Text>
                                    </Text>
                                    <Text style={styles.text3}>TYPE -
                                        <Text style={styles.text2}>  {crewMember.type}</Text>
                                    </Text>
                                    <Text style={styles.text3}>COST PER LAUNCH-
                                        <Text style={styles.text2}>{crewMember.cost_per_launch}</Text>
                                    </Text>
                                    <Text style={styles.text3}>FIRST FLIGHT -
                                        <Text style={styles.text2}>{crewMember.first_flight}</Text>
                                    </Text>
                                    <Text style={styles.text3}>DESCRIPTION -
                                        <Text style={styles.text2}>{crewMember.description}</Text>
                                    </Text>
                                </View>
                            ) : (
                                <Text>no data available</Text>
                            )}
                        </View>
                    )}
                </ScrollView>
            </Card>
        </View >
    );
}
export default RocketDetailScreen;

const styles = StyleSheet.create({
    image: {
        marginTop: 20,
        width: 300,
        height: 350,
    },
    text2: {
        fontSize: 18,
    },
    text3: {
        fontSize: 24,
        color: '#006400',
    },
    text1: {
        fontSize: 40,
        color: '#006400',
        textAlign: 'center'
    },
    container: {
        marginHorizontal: 2,
    },
})
import { useRoute } from '@react-navigation/native';
import { Button, Card } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';

const CrewDetailScreen = () => {
    const route = useRoute();
    const { id } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [crewMember, setCrewMember] = useState(null);

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/crew/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setCrewMember(data);
                setLoading(false);
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
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <View>
                            {crewMember ? (
                                <View>
                                    <Text style={styles.text2}>{crewMember.agency}</Text>
                                    <Text style={styles.text2}>STATUS: {crewMember.status}</Text>
                                    <Text style={styles.text2}>LAUNCHES:{crewMember.launches}</Text>
                                    <Text style={styles.text2}>ID: {crewMember.id}</Text>
                                    <Button type='clear'>{crewMember.wikipedia}</Button>

                                </View>
                            ) : (
                                <Text>No data available</Text>
                            )}
                        </View>
                    )}
                </ScrollView>
            </Card>
        </View >
    );
};
export default CrewDetailScreen;


const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        width: 280,
        height: 350,
    },
    text2: {
        fontSize: 14,
    },
    container: {
        marginHorizontal: 2,
    },
});


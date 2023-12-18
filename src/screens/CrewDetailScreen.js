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
                                    <Text style={styles.text1}>AGENCY -
                                        <Text style={styles.text2}>  {crewMember.agency}</Text>
                                    </Text>
                                    <Text style={styles.text1}>STATUS -
                                        <Text style={styles.text2}>{crewMember.status}</Text>
                                    </Text>
                                    <Text style={styles.text1}>LAUNCHES -
                                        <Text style={styles.text2}>{crewMember.launches}</Text>
                                    </Text>
                                    <Text style={styles.text1}>ID -
                                        <Text style={styles.text2}>{crewMember.id}</Text>
                                    </Text>
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
        fontSize: 16,
        color: '#006400'

    },
    text1: {
        fontSize: 20,
        color: '#000'

    },
    container: {
        marginHorizontal: 2,
    },
});


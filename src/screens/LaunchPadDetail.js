import { useRoute } from '@react-navigation/native';
import { Card, Image } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';

const LaunchPadDetail = () => {
    const route = useRoute();
    const { id } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [crewMember, setCrewMember] = useState(null);

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/launchpads/${id}`)
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
                                    <Image source={{ uri: 'item.images.large' }} />

                                    <Text style={styles.text1}>LOCALITY   -
                                        <Text style={styles.text2}>   {crewMember.locality}</Text>
                                    </Text>
                                    <Text style={styles.text1}>REGION   -
                                        <Text style={styles.text2}>   {crewMember.region}</Text>
                                    </Text>
                                    <Text style={styles.text1}>DETAILS  -
                                        <Text style={styles.text2}>  {crewMember.details}</Text>
                                    </Text>
                                    <Text style={styles.text1}>TIMEZONE -
                                        <Text style={styles.text2}>  {crewMember.timezone}</Text>
                                    </Text>
                                    <Text style={styles.text1}>STATUS   -
                                        <Text style={styles.text2}>    {crewMember.status}</Text>
                                    </Text>
                                    <Text style={styles.text1}>LAUNCH_ATTEMPTS   -
                                        <Text style={styles.text2}>  {crewMember.launch_attempts}</Text>
                                    </Text>
                                    <Text style={styles.text1}>LAUNCH_SUCCESSES  -
                                        <Text style={styles.text2}>  {crewMember.launch_successes}</Text>
                                    </Text>
                                    <Text style={styles.text1}>LATITUDE  -
                                        <Text style={styles.text2}>  {crewMember.latitude}</Text>
                                    </Text>
                                    <Text style={styles.text1}>LONGITUDE  -
                                        <Text style={styles.text2}>  {crewMember.longitude}</Text>
                                    </Text>
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
export default LaunchPadDetail;

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        width: 280,
        height: 350,
    },
    text2: {
        fontSize: 14,
        color: '#006400'
    },
    text1: {
        fontSize: 18,
    },
    container: {
        marginHorizontal: 2,
    },
});


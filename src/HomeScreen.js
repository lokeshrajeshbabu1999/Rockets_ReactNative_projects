import { Button, Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

const Separator = () => <View style={styles.separator} />;
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <ScrollView >
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://cdn.britannica.com/88/125688-050-3D31632D/spacecraft-Gemini-12-John-F-Kennedy-Space-Nov-11-1966.jpg',
                        }} />
                    <View style={styles.fixToText}>
                        <Button
                            title="Go to Jane's profile"
                            onPress={() => navigation.navigate('Profile', { name: 'Jane' })} />
                    </View>
                    <Separator />
                    <View style={styles.fixToText}>
                        <Button
                            title="History"
                            onPress={() => navigation.navigate('History')} />
                    </View>
                    <Separator />
                    <View style={styles.fixToText}>
                        <Button
                            title="Launch"
                            onPress={() => navigation.navigate('Launch')} />
                    </View>
                    <Separator />
                    <View style={styles.fixToText}>
                        <Button style={styles.buttonContainer}
                            title="Rocket"
                            onPress={() => navigation.navigate('Rockets')} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginHorizontal: 50,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    image: {
        marginTop: 20,
        width: 400,
        height: 350,
    },
})
import { Platform, StyleSheet, Text } from "react-native";


function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}
export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 27,
        color: 'white',
        textAlign: "center",
        // borderWidth: Platform.OS === 'ios' ? 2 : 0,
        borderWidth: Platform.select({ ios: 2, android: 0 }),
        borderColor: 'white',
        padding: 10,
        borderRadius: 7
    }
})
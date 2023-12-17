import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SafeAreaView style={{ flex: 1, backgroundColor: 'red', width: '100%' }}>
                <WebView
                    style={{ flex: 1, width: '100%' }}
                    source={{
                        uri: 'https://docs.google.com/gview?embedded=true&url=https://www.africau.edu/images/default/sample.pdf',
                    }}
                    scalesPageToFit={true}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

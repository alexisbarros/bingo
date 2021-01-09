import React from 'react';

// Modules
import { View, Alert, StyleSheet, ScrollView } from 'react-native';
import { Text, Header, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    title: {
        marginBottom: 25,
    },
    numberSquare: {
        width: '20%',
        height: 60,
    },
    numberCircle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgray',
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default function({ history }) {

    return(

        <View>

            <Header
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={
                    <Icon
                        name='arrow-back-outline'
                        type='ionicon'
                        color='white'
                        style={{
                            marginTop: 15
                        }}
                        onPress={() => {
                            Alert.alert(
                                "Sair da partida",
                                "Deseja realmente sair da partida?",
                                [
                                  { text: "Cancelar", style: "cancel" },
                                  { text: "Sim", onPress: () => history.push('/') }
                                ],
                                { cancelable: false }
                            );
                        }}
                    />
                }
                centerComponent={
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 15,
                            marginTop: 20
                        }}
                    >
                        Bingo App
                    </Text>
                }
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 80
                }}
            />

            <View
                style={{
                    padding: 20
                }}
            >

                <Text h1 style={styles.title}>
                    Roleta
                </Text>

                <ScrollView style={{ marginBottom: 300 }}>

                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                        {
                            new Array(80).fill('-').map((el, i) => {

                                return(

                                    <View 
                                        style={styles.numberSquare}
                                        key={i + 1}
                                    >
                                        
                                        <View
                                            style={styles.numberCircle}
                                        >
                                            <View>
                                                <Text>{i + 1}</Text>
                                            </View>
                                        </View>
                                        
                                    </View>
                                )
    
                            })
                        }

                    </View>
                    
                </ScrollView>

            </View>


        </View>

    )

}
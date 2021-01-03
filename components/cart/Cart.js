import React from 'react';

// Modules
import { View, StyleSheet, Alert } from 'react-native';
import { Text, Header, Icon, Button } from 'react-native-elements';

const styles = StyleSheet.create({
    title: {
        marginBottom: 25,
    },
    numberSquare: {
        width: '20%',
        height: 60,
    },
    numberSquareInto: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgray',
        width: '95%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const cart = new Array(25).fill('99');

export default function ({ history }){

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

                <Text h1 style={styles.title}>Cartela</Text>

                <Button
                    title='Gerar nova cartela'
                    style={{
                        width: '100%',
                        marginBottom: 20
                    }}
                />

                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        cart.map((el, i) => {

                            return(

                                <View style={styles.numberSquare}>
                                    <View style={styles.numberSquareInto}>
                                        {i !== 12 ?
                                            <Text>{el}</Text> : null
                                        }
                                    </View>
                                </View>

                            )

                        })
                    }
                    
                </View>
            
            </View>

        </View>

    )

};
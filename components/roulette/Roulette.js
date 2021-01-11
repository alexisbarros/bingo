import React, { useState } from 'react';

// Modules
import { View, Alert, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { Text, Header, Icon, Button } from 'react-native-elements';

import roulette from '../../assets/img/roulette.jpg';

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

    const [ numbersDrawn, setNumbersDrawn ] = useState([]);

    /**
     * Draw a number in roulette.
     * @param {null}
     */
    let drawNumber = () => {

        let localNumbersDrawn = numbersDrawn;
        let numberPushedFlag = false;

        while(!numberPushedFlag){
            
            let numberToPush = Math.floor(Math.random() * (80 - 1 + 1) + 1);
            if(!localNumbersDrawn.includes(numberToPush)){
                localNumbersDrawn.push(numberToPush);
                numberPushedFlag = true;
            }

        }

        setNumbersDrawn([...localNumbersDrawn]);
    }

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
                    padding: 20,
                    height: Dimensions.get("window").height - 100
                }}
            >

                <Text h1 style={styles.title}>
                    Roleta
                </Text>

                <View 
                    style={{ 
                        height: 150, 
                        width: '100%', 
                        marginBottom: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >

                    <Image
                        source={roulette}
                        style={{
                            flex: 1,
                            resizeMode: 'contain',
                        }}
                    />

                </View>

                <Button
                    title='Sortear número'
                    style={{
                        width: '100%',
                        marginBottom: 20
                    }}
                    onPress={() => drawNumber()}
                />

                <ScrollView>

                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                        {
                            new Array(80).fill('-').map((el, i) => {

                                return(

                                    <View 
                                        style={styles.numberSquare}
                                        key={i + 1}
                                    >
                                        
                                        <View
                                            style={{
                                                ...styles.numberCircle,
                                                backgroundColor: !numbersDrawn.includes(i+1) ? 'lightgray' : null,
                                                borderColor: !numbersDrawn.includes(i+1) ? 'lightgray' : null, 
                                            }}
                                        >
                                            <View>
                                                <Text
                                                    style={{
                                                        color: !numbersDrawn.includes(i+1) ? 'white' : null
                                                    }}
                                                >{i + 1}</Text>
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
import React, { useState, useEffect } from 'react';

// Modules
import { View, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { Text, Header, Icon, Button } from 'react-native-elements';

import bean from '../../assets/img/bean.png';

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

export default function ({ history }){

    const [ cart, setCart ] = useState([]);
    const [ choosedNumbers, setChoosedNumbers ] = useState([]);

    useEffect(() => {
        generateNewCart();

    }, []);

    /**
     * Generate a new cart.
     * @param null
     */
    const generateNewCart = () => {

        let cartArray = [];

        while(cartArray.length < 25){
            let numberToPush = Math.floor(Math.random() * (80 - 1 + 1) + 1);

            if(!cartArray.includes(numberToPush)){
                cartArray.push(numberToPush);
            }
        }
        cartArray = cartArray.sort((a, b) => (a - b));

        setCart([...cartArray]);
        setChoosedNumbers([]);
    }

    /**
     * Select or unselect a number.
     * @param {Number} number 
     */
    const selectUnselectANumber = (number) => {

        let localChoosedNumbers = choosedNumbers;

        if(localChoosedNumbers.includes(number)){
            localChoosedNumbers.splice(localChoosedNumbers.indexOf(number), 1);
        } else {
            localChoosedNumbers.push(number);
        }

        setChoosedNumbers([...localChoosedNumbers]);
        setCart([...cart]);

        // console.log(localChoosedNumbers);

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
                    onPress={() => generateNewCart()}
                />

                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        cart.map((el, i) => {

                            return(

                                <View 
                                    style={styles.numberSquare}
                                    key={el}
                                >
                                    
                                    <TouchableOpacity 
                                        style={styles.numberSquareInto}
                                        onPress={() => {
                                            if(i !== 12) selectUnselectANumber(el);
                                        }}
                                    >
                                        {i !== 12 ?
                                            <View>
                                                <Text>{el}</Text>
                                                {
                                                    choosedNumbers.includes(el) ?
                                                        <Image 
                                                            style={{ 
                                                                height: 45, 
                                                                width: 20, 
                                                                position: 'absolute', 
                                                                marginTop: -10,
                                                                transform: [{ rotate: "35deg" }]
                                                            }} 
                                                            source={bean} 
                                                        /> : null
                                                }
                                            </View> : null
                                        }
                                    </TouchableOpacity>

                                </View>

                            )

                        })
                    }
                    
                </View>
            
            </View>

        </View>

    )

};
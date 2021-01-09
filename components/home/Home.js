import React from 'react';

// Modules
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Link } from 'react-router-native';

export default function({ history }) {

    return(

        <View 
            style={{
                justifyContent: 'center',
                flex: 1,
            }}
        >

            <View
                style={{
                    padding: 20
                }}
            >
                <Text h1>Bingo app</Text>

                <Text
                    style={{
                        fontSize: 18,
                        color: 'gray',
                        marginTop: 16
                    }}
                >O app para jogar bingo com toda sua família e amigos.</Text>

                <Link 
                    to='/how-to-play'
                    underlayColor="white"
                    style={{
                        marginTop: 16
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                        }}
                    >Como jogar?</Text>
                </Link>
            </View>
            
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    padding: 20
                }}
            >
                <Button
                    title='Cartela'
                    style={{
                        width: '100%'
                    }}
                    onPress={() => history.push('/cart')}
                />

                <Button
                    title='Roleta'
                    style={{
                        width: '100%',
                        marginTop: 10,
                    }}
                    buttonStyle={{
                        backgroundColor: '#606060'
                    }}
                    onPress={() => history.push('/roulette')}
                />

            </View>
        </View>

    )

};
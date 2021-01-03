import React from 'react';

// Modules
import { View, StyleSheet } from 'react-native';
import { Text, Header, Icon } from 'react-native-elements';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    title: {
        marginBottom: 10
    },
    subtitle: {
        marginTop: 20,
        marginBottom: 10
    },
    content: {
        fontSize: 15,
        textAlign: 'justify',
        lineHeight: 20
    }
});

export default function (){

    return(

        <View>

            <Header
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={
                    <Link to='/' underlayColor="#3D6DCC">
                        <Icon
                            name='arrow-back-outline'
                            type='ionicon'
                            color='white'
                            style={{
                                marginTop: 15
                            }}
                        />
                    </Link>
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
                    paddingTop: 40
                }}
            >

                <Text h1 style={styles.title}>Como jogar</Text>

                <Text h4 style={styles.subtitle}>Roleta</Text>
                <Text style={styles.content}>
                    Escolhendo a opção roleta, você será a pessoa responsável pelo sorteio das bolas do bingo.
                    Após escolher a opção 'Roleta', peça para que todos os demais jogadores escolham a opção 
                    'Cartela' e clique em 'Sortear número'. Informe o número sorteado e aguarde todos marcarem 
                    em suas cartelas.
                </Text>

                <Text h4 style={styles.subtitle}>Cartela</Text>
                <Text style={styles.content}>
                    Escolhendo a opção cartela, você será um dos competidores. Após escolher a opão 'Cartela', 
                    uma nova cartela será exibida para você. Escolha a opção 'Gerar nova cartela' caso queira 
                    mudar de cartela. Aguarde o usuário 'Roleta' informar o número sorteado e marque caso o mesmo 
                    tenha em sua cartela.
                </Text>

                <Text h4 style={styles.subtitle}>Quem vence o jogo?</Text>
                <Text style={styles.content}>
                    Vence o jogo o competidor que marcar todos os números da tabela de acordo com os números sorteados pela Roleta.
                </Text>

            </View>

        </View>

    )

};  
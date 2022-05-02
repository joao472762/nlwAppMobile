
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, StatusBar} from "react-native"
;
import { styles } from "./style";
import { propsStack } from "../../routes/models";
import ilustration from "../../assets/illustration.png"
import { ButtonIcon } from "../../components/buttonIcon";


export  function SignIn(){
    const navigation = useNavigation<propsStack>();

    function handleGoToHome(){
        navigation.navigate('Home')
    }

   
    return(
        <View style={styles.container} >
            <StatusBar 
                barStyle="light-content"
                backgroundColor= "transparent"
                translucent
            />
            <Image 
            source={ilustration} 
            style={styles.image}
            resizeMode = 'stretch'
            
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas{'\n'}
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{'\n'}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon title="Entrar como Dicord"  onPress={()=> handleGoToHome()}/>
            </View>
            
        </View>

    )
}
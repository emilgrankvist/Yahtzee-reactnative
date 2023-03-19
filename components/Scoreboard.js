import { useState, useEffect } from "react";
import {Text, View} from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../style/style';
import savePlayerPoints from "./Gameboard";
import {SCOREBOARD_KEY} from '../constants/Game';


export default Scoreboard = ( {} ) => {

    const [scores, setScores] = useState([]);
    const Navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = Navigation.addListener("focus", () => {
            getScoreboardData();
        }); 
        return unsubscribe;
    }, []);
  


    const getScoreboardData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY);
          if (jsonValue !== null) {
            let tmpScores = JSON.parse(jsonValue);
            tmpScores.sort((a, b) => parseFloat(b.points) - parseFloat(a.points)); 
            setScores(tmpScores);
          }
        }
        catch (error) {
          console.log(error.message);
        }
      }

    return (
        <View>
            <Header/>
            <MaterialCommunityIcons
                        name="information"
                        size={80}
                        style={styles.info}
                        color="#9370DB"
                    />
            <View>
                <Text style={styles.ScoreTitle}>Scoreboard</Text>
                {scores.map((player, i) => (
                    <Text style={styles.ruletext} key={i}>{i + 1}. {player.name} {player.date} {player.time} {player.points}</Text>
                ))}
            </View>
            <Footer/>
        </View>
    )
    
}
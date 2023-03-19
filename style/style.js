import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#62C962',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#62C962',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#62C962",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#FFFFFF",
    fontSize: 20
  },

  points: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    textAlign: 'center'
  },
  dicePoints: {
    flexDirection: "row",
    width: 280,
    alignContent: 'center'
  },
  ruletext: {
    textAlign:"center",
    fontSize:15,
    paddingBottom:4,
    paddingTop:4,
  },
  Rulebutton: {
    color:"#2B2B52",
    fontSize: 50,
    paddingTop:20,
    textAlign:"center",
  },  
  info: {
    textAlign:"center",
  },
  textinput: {
    textAlign:"center",
    padding:20,
  },
  ScoreTitle: {
    textAlign:"center",
    padding:20,
    fontSize:30,
  }
});
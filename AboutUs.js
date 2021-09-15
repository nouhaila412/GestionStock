import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const height = Dimensions.get('window').height;


const AboutUs = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/icons/back3.jpg')} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          >
          
        </TouchableOpacity>
      
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Icon name="envelope" size={32} color={"#f8991d"} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Application développée par:</Text>
        </View>
        <View style={styles.description}>
        <Icon name="info-circle" size={45} color={"#F35D38"} />
        <Text style={styles.descriptionText}>COGITAS Solutions {"\n"} 
        2, bd zerktouni, résidence du park{"\n"}2éme étage bureau N°: 9, MOHAMEDIA
        {"\n"}Site web : www.cogitas.ma
        {"\n"}Téléphone : 05 23 27 38 02
        {"\n"}Email : contact@cogitas.ma
        </Text>
        </View>

        <View style={styles.infoWrapper}>
          
          <Image style={{width: 230,
    height: 230, resizeMode: 'contain', marginTop: 15}} source={require('./assets/logo.jpg')} />
        </View>

       
      </View>
    </View>
  );
};
export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFCFE',
  },
  backgroundImage: {
    height: height * 0.35,
    justifyContent: 'space-between',
  },
  
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  

  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: '#FBFCFE',
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: '#0C0D0E',
  },
  descriptionText: {
    marginTop: 5,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#676767',
    marginLeft: 10,
  },
  infoWrapper: {
    marginTop: -80,
    marginLeft: 80
    
  },
  infoItem: {},
  infoTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: '#D1D3D2',
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: '#F35D38',
  },
  infoSubText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: '#D1D3D2',
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: '#F35D38',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: '#FBFCFE',
  },
  description: {
    padding: 20,
    flexDirection: 'row',
  }
});


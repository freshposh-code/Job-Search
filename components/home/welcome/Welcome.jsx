import {useState} from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const Welcome = ({searchTerm, setSearchTerm, handleClick }) => {
const router = useRouter()

const jobTypes = ['Full-time', 'Part-time', 'contractor'];
const [activeJobType, setActiveJobType] = useState('Full-Time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Farouk</Text>
        <Text style={styles.userDesc}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
             <TextInput 
             style={styles.searchInput} 
             value={searchTerm}
             onChange={(text) => setSearchTerm(text)}
             placeholder='What are you looking for?'
             />
          </View>

          <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
            <Image source={icons.search} 
            resizeMode='contain'
            style={styles.searchBtnImage}
            />
          </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.tab(activeJobType, item)}
          onPress={() => {
            setActiveJobType(item);
            router.push(`/search/${item}`)
          }}
          >
            <Text style={styles.tabText(activeJobType, item )}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small}}
        horizontal
        />
      </View>
    </View>
  )
}

export default Welcome
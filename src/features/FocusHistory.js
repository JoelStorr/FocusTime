import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {colors} from '../utils/colors';
import {fontSizes} from '../utils/sizes';
import {spacing} from '../utils/sizes';



export const FocusHistory = ({history}) => {

  if(!history || !history.length) return  (<Text style={styles.title}>We have not Focused on any thing.</Text>);

const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return(
    <View style={styles.container}> 
      <Text style={styles.title}>Things we Focused on</Text>
      <FlatList 
        data = {history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    padding: spacing.md,
    flex: 1,
    
  },

  title:{
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm
  }
})
import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MotiView, AnimatePresence, MotiText } from 'moti';

import styles from './styles';

export default function Movements({data}) {

  const [showValue, setShowValue] = useState(false);

 return (
   <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
    <Text style={styles.date}>{data.date}</Text>
    
    <View style={styles.content}>
      <Text style={styles.label}>{data.label}</Text>
      
      { showValue ? (
        <AnimatePresence exitBeforeEnter>
          <MotiText
          from={{
            translateX: 100
          }} 
          animate={{
            translateX: 0
          }}
          transition={{
            type: 'timing',
            duration: 500
          }}
          style={data.type === 1 ? styles.value : styles.expenses}
          >{data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
          </MotiText>
        </AnimatePresence>
      ) : (
        <AnimatePresence exitBeforeEnter>
          <MotiView 
          style={styles.skeleton}
          from={{
            opacity: 0
          }} 
          animate={{
            opacity: 1
          }}
          transition={{
            type: 'timing'
          }}
          ></MotiView>
        </AnimatePresence>
      )}
    </View>
   </TouchableOpacity>
  );
}
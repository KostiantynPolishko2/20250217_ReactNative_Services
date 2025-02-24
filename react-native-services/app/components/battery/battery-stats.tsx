import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { BatteryStatsStyles as styles } from './battery.styled';

interface IBatteryStats {
  level: number,
  lowPowerMode: boolean,
  state: number,
}

const BatteryStats: FC<IBatteryStats> = ({level, lowPowerMode, state}) => {

  const states: string[] = ['unknown', 'unplugged', 'charging', 'full'];

    return(
      // <SafeAreaView>
          <View style={[styles.stats, styles.container]}>
              <View style={[styles.statsItem, {borderLeftWidth: 0} ]}>
                <Text style={styles.statsItemLabel}>level</Text>
                <Text style={styles.statsItemValue}>{level}</Text>
              </View>
              <View style={[styles.statsItem]}>
                <Text style={styles.statsItemLabel}>power moode</Text>
                <Text style={styles.statsItemValue}>{lowPowerMode? 'on' : 'off'}</Text>
              </View>
              <View style={[styles.statsItem, {borderRightWidth: 0} ]}>
                <Text style={styles.statsItemLabel}>state</Text>
                <Text style={styles.statsItemValue}>{states[state]}</Text>
              </View>
          </View>
      // </SafeAreaView>
    );
}

export default BatteryStats;
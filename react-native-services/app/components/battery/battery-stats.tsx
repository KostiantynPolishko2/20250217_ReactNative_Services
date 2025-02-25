import React, { FC } from 'react';
import { View, Text, Vibration, TouchableOpacity } from 'react-native';
import { BatteryStatsStyles as styles } from './battery.styled';

export interface IStats {
  level: number,
  lowPowerMode: boolean,
  state: number,
}

interface IBatteryState{
    batteryState: IStats,
}

const BatteryStats: FC<IBatteryState> = ({batteryState}) => {

  const states: string[] = ['unknown', 'unplugged', 'charging', 'full'];

    return(
      <View style={[styles.stats, styles.container]}>
          <View style={[styles.statsItem, {borderLeftWidth: 0} ]}>
            <Text style={styles.statsItemLabel}>level</Text>
            <Text style={styles.statsItemValue}>{batteryState.level}</Text>
          </View>
          <View style={[styles.statsItem]}>
            <Text style={styles.statsItemLabel}>power moode</Text>
            <Text style={styles.statsItemValue}>{batteryState.lowPowerMode? 'on' : 'off'}</Text>
          </View>
          <View style={[styles.statsItem, {borderRightWidth: 0} ]}>
            <Text style={styles.statsItemLabel}>state</Text>
            <Text style={styles.statsItemValue}>{states[batteryState.state]}</Text>
          </View>
      </View>
    );
}

export default BatteryStats;
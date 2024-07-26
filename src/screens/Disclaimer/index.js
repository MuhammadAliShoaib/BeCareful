import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import SpeedRushRegular from '../../components/Wrappers/Text/SpeedRushRegular';
import SourceSansProRegular from '../../components/Wrappers/Text/SourceSansProRegular';
import {icons} from '../../assets';
import {vh, vw} from '../../utils/units';
export default function Disclaimer(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backIconContainer}
          activeOpacity={0.7}
          onPress={() => props.navigation.goBack()}>
          <Image source={icons.back} style={styles.icon} />
        </TouchableOpacity>
        <SpeedRushRegular style={styles.heading}>Disclaimer</SpeedRushRegular>
      </View>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{alignItems: 'center', paddingBottom: vh * 8}}>
        <View style={styles.paraContainer}>
          <SourceSansProRegular style={styles.txtStyle}>
            SafeStep is designed to assist individuals who engage in walking and
            texting, and people. While the app aims to enhance user safety by
            providing audio notifications of obstacles, users must acknowledge
            and adhere to the following:
          </SourceSansProRegular>
        </View>
        <View style={styles.paraContainer}>
          <SpeedRushRegular style={styles.txtStyle}>
            User Awareness:
          </SpeedRushRegular>
          <SourceSansProRegular style={styles.txtStyle}>
            SafeStep serves as a tool to improve awareness of the user's
            surroundings. Users are urged to remain vigilant, exercise caution,
            and prioritize their safety at all times.
          </SourceSansProRegular>
        </View>
        <View style={styles.paraContainer}>
          <SpeedRushRegular style={styles.txtStyle}>
            Supplementary Aid:
          </SpeedRushRegular>
          <SourceSansProRegular style={styles.txtStyle}>
            The app is intended to be a supplementary aid and should not be
            solely relied upon for navigation or obstacle detection. Users must
            use their judgment and consider other factors, such as physical
            surroundings and environmental conditions.
          </SourceSansProRegular>
        </View>
        <View style={styles.paraContainer}>
          <SpeedRushRegular style={styles.txtStyle}>
            User Responsibility:
          </SpeedRushRegular>
          <SourceSansProRegular style={styles.txtStyle}>
            Users are solely responsible for their actions and safety while
            using SafeStep. In any situation, users should prioritize their
            well-being, take appropriate precautions, and act responsibly.
          </SourceSansProRegular>
        </View>
        <View style={styles.paraContainer}>
          <SpeedRushRegular style={styles.txtStyle}>
            Not a Substitute for Attention:
          </SpeedRushRegular>
          <SourceSansProRegular style={styles.txtStyle}>
            SafeStep is not a substitute for the user's attention and diligence.
            It does not absolve users from their responsibility to be aware of
            their surroundings, follow traffic rules, and act in accordance with
            local laws.
          </SourceSansProRegular>
        </View>
        <View style={styles.paraContainer}>
          <SpeedRushRegular style={styles.txtStyle}>
            Limited Liability:
          </SpeedRushRegular>
          <SourceSansProRegular style={styles.txtStyle}>
            To the maximum extent permitted by applicable law, in no event will
            safestep be liable, either in contract or tort, for any direct,
            indirect, incidental, consequential, special damages, or any loss,
            damage, or injury to persons, including death, or for any damages of
            any kind or nature however caused arising out of user’s use or
            inability to use safestep or any feature of safestep.
          </SourceSansProRegular>
        </View>
        <View style={styles.paraContainer}>
          <SpeedRushRegular style={styles.txtStyle}>
            Emergency Situations:
          </SpeedRushRegular>
          <SourceSansProRegular style={styles.txtStyle}>
            In the case of an emergency or immediate threat, users should
            prioritize their safety and seek assistance from relevant emergency
            services. SafeStep is not a substitute for emergency response
            systems.
          </SourceSansProRegular>
        </View>
        <View style={styles.paraContainer}>
          <SpeedRushRegular style={styles.txtStyle}>
            Appropriate Use:
          </SpeedRushRegular>
          <SourceSansProRegular style={styles.txtStyle}>
            Users agree to use SafeStep in a manner consistent with its intended
            purpose. Any misuse or violation of terms may result in the
            termination of app access.
          </SourceSansProRegular>
        </View>
        <View style={styles.paraContainer}>
          <SourceSansProRegular style={styles.txtStyle}>
            By using SafeStep, users confirm their understanding and acceptance
            of these terms. For any inquiries or concerns, please contact
            SafeStep LLC.
          </SourceSansProRegular>
        </View>
      </ScrollView>
    </View>
  );
}

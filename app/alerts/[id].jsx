import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const TOTAL_SPOKES = 30;

export default function EmergencyTriggeredScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [countdown, setCountdown] = useState(30);

  // Core countdown ticker engine
  useEffect(() => {
    if (countdown <= 0) {
      router.push('/emergency/victim-tracking'); // Auto-navigate to tracker when countdown finishes
      return;
    }
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <View style={styles.container}>
      {/* Set status bar to red to blend perfectly with the layout */}
      <StatusBar style="light" backgroundColor="#EF4444" />

      {/* 🚨 All-Red Header Strip with System Status Bar Padding Buffers */}
      <SafeAreaView style={styles.headerBanner} edges={['top']}>
        <View style={styles.headerSafeRow}>
          
          {/* Left Clock Outline Icon */}
          <Ionicons name="time-outline" size={24} color="#FFFFFF" />
          
          <Text style={styles.headerTitleText}>emergency triggered</Text>
          
          {/* Right Clock Outline Icon */}
          <Ionicons name="time-outline" size={24} color="#FFFFFF" />
          
        </View>
      </SafeAreaView>

      <View style={styles.headerDivider} />

      {/* 🎯 Central Dial Graphic and Action Content Block */}
      <View style={styles.contentBody}>
        
        {/* 🔄 Wide Dial Ring Outer Frame */}
        <View style={styles.dialContainer}>
          {Array.from({ length: TOTAL_SPOKES }).map((_, index) => {
            const rotationDegree = (index * 360) / TOTAL_SPOKES;
            const isSpokeActive = index < countdown;

            return (
              <View
                key={index}
                style={[
                  styles.spokeElement,
                  {
                    transform: [
                      { rotate: `${rotationDegree}deg` },
                      { translateY: -140 }, 
                    ],
                    opacity: isSpokeActive ? 1.0 : 0.15,
                  },
                ]}
              />
            );
          })}

          {/* 📊 Central Data Labels */}
          <View style={styles.dialCoreLabelStack}>
            {/* Bound to live countdown state to ensure real-time ticking */}
            <Text style={styles.countdownNumberText}>{countdown}</Text>
            <Text style={styles.countdownSublabelText}>SECONDS</Text>
            
            {/* 💥 Expanded Dispatch Action Button */}
            <TouchableOpacity 
              style={styles.dispatchBadgeButton}
              activeOpacity={0.7}
              onPress={() => router.push('/emergency/victim-tracking')}
            >
              <Text style={styles.dispatchBadgeText}>DISPATCH</Text>
              <Text style={styles.dispatchBadgeText}>IMMEDIATELY</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 🛡️ Primary Bypass Interaction Node ("I AM SAFE" Box) */}
        <TouchableOpacity
          style={styles.safeActionContainerButton}
          activeOpacity={0.9}
          onPress={() => router.back()}
        >
          <Text style={styles.safeButtonPrimaryText}>I AM SAFE</Text>
          <Text style={styles.safeButtonSecondaryText}>CANCEL ALERT</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF4444', 
  },
  headerBanner: {
    backgroundColor: '#EF4444', 
    width: '100%',
  },
  headerSafeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    paddingTop: 16,     // Structural breathing room beneath the status bar details
    paddingBottom: 18,  // Clean balance spacing before hitting the main layout divider
  },
  headerTitleText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  headerDivider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Muted white divider to softly blend into the red background
  },
  contentBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  dialContainer: {
    width: 350,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  spokeElement: {
    position: 'absolute',
    width: 2,
    height: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  dialCoreLabelStack: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  countdownNumberText: {
    color: '#FFFFFF',
    fontSize: 64,
    fontWeight: '900',
    lineHeight: 64,
  },
  countdownSublabelText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginTop: 4,
    marginBottom: 14,
  },
  dispatchBadgeButton: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#111827', 
    paddingVertical: 10,
    paddingHorizontal: 34,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dispatchBadgeText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.8,
    lineHeight: 16,
    textAlign: 'center',
  },
  safeActionContainerButton: {
    backgroundColor: '#0B0F19',
    width: width * 0.82,
    paddingVertical: 18,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },
  safeButtonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  safeButtonSecondaryText: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 2,
  },
});
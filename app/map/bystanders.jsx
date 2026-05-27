import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Crucial for layout clearance

const { width } = Dimensions.get('window');

export default function NightDriveScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#0B0F19" />

      {/* 🗺️ Premium Midnight-Blue Map Canvas Placeholder */}
      <View style={styles.mapMock}>
        <Text style={styles.mapText}>[ Dark Mode Vector Map Matrix Loading... ]</Text>
        <View style={[styles.gridLine, { top: '30%', width: '100%', height: 1 }]} />
        <View style={[styles.gridLine, { left: '40%', width: 1, height: '100%' }]} />
      </View>

      {/* 🛡️ Safe Area Wrapper to force everything above the phone's navigation keys */}
      <SafeAreaView style={styles.safeContent} edges={['bottom']}>
        
        {/* 🛡️ Primary Tactical Driving Dashboard Panel */}
        <View style={styles.dashboardCard}>
          <View style={styles.cardHeader}>
            <View style={styles.pulseIndicator} />
            <Text style={styles.cardTitle}>DRIVE SHIELD PROTOCOL ACTIVE</Text>
          </View>

          <Text style={styles.cardInstruction}>
            Telemetry engine engaged. In a severe crisis, impact triggers automated dispatch.
          </Text>

          {/* 🚨 Scenario A: Massive SOS Emergency Panic Action Button */}
          <TouchableOpacity 
            style={styles.bigSosButton}
            activeOpacity={0.8}
            onPress={() => router.push('/alerts/active_incident')} 
          >
            <View style={styles.sosInnerRing}>
              <Text style={styles.sosText}>SOS</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 🏃‍♂️ Scenario B: Split Layout Node (Label + Big Square Directory Action Button) */}
        <View style={styles.bystanderInterfaceContainer}>
          <Text style={styles.bystanderContextLine}>Assisting an accident?</Text>
          
          <TouchableOpacity 
            style={styles.squareBystanderButton}
            activeOpacity={0.85}
            onPress={() => router.push('/emergency/bystander-accept')}
          >
            <Text style={styles.squareButtonEmoji}>🏃‍♂️</Text>
            <Text style={styles.squareButtonText}>Switch to Bystander Mode</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
  },
  mapMock: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0B132B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    color: '#1C2541',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
  },
  gridLine: {
    position: 'absolute',
    backgroundColor: '#1C2541',
    opacity: 0.4,
  },
  safeContent: {
    flex: 1,
    justifyContent: 'flex-end', // Keeps content aligned to the lower part, but respects safe boundaries
    alignItems: 'center',
    paddingBottom: 24, // Extra breathing space above virtual/physical nav keys
  },
  dashboardCard: {
    backgroundColor: '#111827',
    width: width * 0.9,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1F2937',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  pulseIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 8,
  },
  cardTitle: {
    color: '#9CA3AF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  cardInstruction: {
    color: '#6B7280',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  bigSosButton: {
    width: width * 0.45,
    height: width * 0.45,
    borderRadius: (width * 0.45) / 2,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    padding: 8,
  },
  sosInnerRing: {
    width: '100%',
    height: '100%',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sosText: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },
  bystanderInterfaceContainer: {
    width: width * 0.9,
    marginTop: 20,
    alignItems: 'center',
  },
  bystanderContextLine: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  squareBystanderButton: {
    backgroundColor: '#1E293B',
    width: '100%',
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  squareButtonEmoji: {
    fontSize: 18,
    marginRight: 10,
  },
  squareButtonText: {
    color: '#3B82F6',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function BystanderAcceptScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Keeps system icons crisp white over our premium dark layout */}
      <StatusBar style="light" backgroundColor="#0B0F19" />

      {/* 🗺️ Mock Tactical Map Backdrop (Matches watermarked_img_17578723314524807291.png) */}
      <View style={styles.mapContainer}>
        {/* Simple geometric visual lines to simulate dark-mode street grids */}
        <View style={[styles.streetLine, { top: '40%', width: '100%', height: 2, transform: [{ rotate: '-15deg' }] }]} />
        <View style={[styles.streetLine, { left: '35%', width: 2, height: '100%', transform: [{ rotate: '20deg' }] }]} />
        <View style={[styles.streetLine, { top: '65%', width: '100%', height: 2 }]} />

        {/* Your Vehicle Marker (Triangle/Arrow UI node) */}
        <View style={styles.vehicleMarker}>
          <Text style={styles.vehicleTriangle}>▲</Text>
          <Text style={styles.vehicleLabel}>Your Vehicle</Text>
        </View>

        {/* Route Pathway (The electric blue line tracking path) */}
        <View style={styles.routePathLine} />

        {/* Accident Pulse Beacon (The amber target destination ring) */}
        <View style={styles.beaconOuterRing}>
          <View style={styles.beaconInnerRing}>
            <View style={styles.beaconCore} />
          </View>
        </View>
      </View>

      {/* 🚨 Top Anchor: Incident Context Caution Banner */}
      <View style={styles.topBanner}>
        <View style={styles.bannerHeaderRow}>
          <Text style={styles.bannerEmoji}>💥</Text>
          <Text style={styles.bannerTitle}>Vehicle Collision Detected</Text>
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>📍 Route:</Text>
          <Text style={styles.metaValue}>500 meters ahead (approx. 2 min remaining)</Text>
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>⏱️ Occurred:</Text>
          <Text style={styles.metaValue}>3 mins ago</Text>
        </View>
      </View>

      {/* Mid-Screen Sub-Banner Warning Label */}
      <View style={styles.warningOverlay}>
        <Text style={styles.warningText}>⚠️ CAUTION: PARK 50M CLEAR OF INCIDENT AREA</Text>
      </View>

      {/* 🎯 Bottom Anchor: Interactive Arrival Trigger Panel */}
      <View style={styles.actionPanel}>
        <TouchableOpacity 
          style={styles.onSceneButton}
          activeOpacity={0.85}
          onPress={() => router.replace('/emergency/on-scene-toolkit')}
        >
          <Text style={styles.onSceneButtonText}>🎯 I AM ON THE SCENE</Text>
        </TouchableOpacity>
        <Text style={styles.buttonSubtext}>(Tapping this marks your GPS as arriving to assist)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19', // Premium deep midnight canvas
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0F172A',
    zIndex: -1,
  },
  streetLine: {
    position: 'absolute',
    backgroundColor: '#1E293B',
    opacity: 0.6,
  },
  routePathLine: {
    position: 'absolute',
    width: 6,
    height: height * 0.3,
    backgroundColor: '#0EA5E9', // Electric blue layout routing trace line
    top: '45%',
    left: '48%',
    transform: [{ rotate: '-35deg' }],
    borderRadius: 99,
  },
  vehicleMarker: {
    position: 'absolute',
    bottom: '25%',
    left: '35%',
    alignItems: 'center',
  },
  vehicleTriangle: {
    color: '#FFFFFF',
    fontSize: 24,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  vehicleLabel: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 4,
    backgroundColor: '#0F172A',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  beaconCore: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F59E0B', // Glowing amber anchor target
  },
  beaconInnerRing: {
    padding: 12,
    borderRadius: 99,
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.4)',
  },
  beaconOuterRing: {
    position: 'absolute',
    top: '38%',
    right: '25%',
    padding: 14,
    borderRadius: 99,
    backgroundColor: 'rgba(245, 158, 11, 0.08)',
  },
  topBanner: {
    backgroundColor: '#1E293B', // Deep dark grey framework structure
    width: width * 0.9,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#334155',
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  bannerHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bannerEmoji: {
    fontSize: 16,
    marginRight: 8,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  metaRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  metaLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '700',
    width: 65,
  },
  metaValue: {
    color: '#CBD5E1',
    fontSize: 12,
    flex: 1,
  },
  warningOverlay: {
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  warningText: {
    color: '#F59E0B',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  actionPanel: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  onSceneButton: {
    backgroundColor: '#3B82F6', // The signature electric blue button from your mockup
    width: '100%',
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  onSceneButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  buttonSubtext: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 8,
  },
});
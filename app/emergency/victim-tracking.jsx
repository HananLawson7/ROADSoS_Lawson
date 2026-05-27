import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function VictimTrackingScreen() {
  const router = useRouter();
  const [bystandersEnRoute, setBystandersEnRoute] = useState(0);

  // Simulate a nearby citizen responder picking up the alert 4 seconds in
  useEffect(() => {
    const timer = setTimeout(() => {
      setBystandersEnRoute(2);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleEmergencyCall = () => {
    Linking.openURL('tel:911'); // Native emergency line dialer breakout (or change to 108 depending on region)
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#0B132B" />

      {/* 🗺️ Background Vector Map Graphic */}
      <View style={styles.mapMock}>
        <Text style={styles.mapText}>[ Tracking GPS Telemetry Vector Node... ]</Text>
        
        {/* Dynamic sweeping pulse line overlay across map coordinates */}
        <View style={styles.radarLine} />
        <View style={[styles.gridLine, { top: '45%', width: '100%', height: 1 }]} />
        <View style={[styles.gridLine, { left: '50%', width: 1, height: '100%' }]} />
        
        {/* Glowing visual marker anchor for victim location */}
        <View style={styles.victimMarkerOuter}>
          <View style={styles.victimMarkerInner} />
        </View>
      </View>

      {/* 🛡️ Content Layout Sheet forced above bottom hardware tabs */}
      <SafeAreaView style={styles.safeContent} edges={['bottom']}>
        
        {/* 🚨 Smart Emergency Data Sheet Module */}
        <View style={styles.statusCard}>
          <View style={styles.cardHeader}>
            <View style={styles.transmittingPulse} />
            <Text style={styles.cardStatusTitleText}>INSTITUTIONAL DISPATCH SEQUENCE LOGGED</Text>
          </View>
          
          {/* Clear, professional confirmation of who was notified */}
          <View style={styles.payloadBox}>
            <Text style={styles.payloadLine}>
              🚑 <Text style={styles.boldLabel}>Trauma Care Center:</Text> Alert Received & Triaged
            </Text>
            <Text style={styles.payloadLine}>
              🚓 <Text style={styles.boldLabel}>Local Transit Police:</Text> GPS Vector Encoded
            </Text>
            <Text style={styles.payloadLine}>
              🩸 <Text style={styles.boldLabel}>Telemetry Payload:</Text> 4.2G Impact | Type A+
            </Text>
          </View>

          <View style={styles.divider} />

          {/* Community responder feedback node */}
          <View style={styles.responderUpdateRow}>
            <Ionicons 
              name="people" 
              size={20} 
              color={bystandersEnRoute > 0 ? "#10B981" : "#64748B"} 
            />
            <Text style={styles.responderUpdateText}>
              {bystandersEnRoute > 0 
                ? `${bystandersEnRoute} Citizen Responders navigating to you` 
                : "Scanning local Bystander Directory network..."}
            </Text>
          </View>
        </View>

        {/* 🛑 Primary Direct Cellular Override Action Strip */}
        <TouchableOpacity 
          style={styles.voiceOverrideButton} 
          activeOpacity={0.85}
          onPress={handleEmergencyCall}
        >
          <Ionicons name="call" size={20} color="#FFFFFF" />
          <Text style={styles.voiceOverrideButtonText}>DIRECT EMERGENCY VOICE LINK (911)</Text>
        </TouchableOpacity>

        {/* 🚪 Demolevel System Reset Controller */}
        <TouchableOpacity 
          style={styles.cancelLinkButton} 
          activeOpacity={0.7}
          onPress={() => router.dismissAll()} // Clears out the navigation queue stack entirely back to Home
        >
          <Text style={styles.cancelLinkText}>False Alarm? Clear Active Incident</Text>
        </TouchableOpacity>

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
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 1,
  },
  gridLine: {
    position: 'absolute',
    backgroundColor: '#1C2541',
    opacity: 0.3,
  },
  radarLine: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.15)',
  },
  victimMarkerOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(239, 68, 68, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  victimMarkerInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EF4444',
  },
  safeContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 16,
  },
  statusCard: {
    backgroundColor: '#111827',
    width: width * 0.9,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1F2937',
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  transmittingPulse: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3B82F6', 
    marginRight: 8,
  },
  cardStatusTitleText: {
    color: '#9CA3AF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  payloadBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#374151',
  },
  payloadLine: {
    color: '#9CA3AF',
    fontSize: 12,
    fontFamily: 'SpaceMono', 
    marginBottom: 6,
  },
  boldLabel: {
    color: '#F3F4F6',
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: '#1F2937',
    marginVertical: 14,
  },
  responderUpdateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  responderUpdateText: {
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '600',
  },
  voiceOverrideButton: {
    backgroundColor: '#DC2626', 
    width: width * 0.9,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  voiceOverrideButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  cancelLinkButton: {
    paddingVertical: 12,
    marginTop: 8,
  },
  cancelLinkText: {
    color: '#4B5563',
    fontSize: 13,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
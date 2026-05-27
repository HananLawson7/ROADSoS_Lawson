import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function OnSceneToolkit() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  // Simple local state to let judges interactively check off steps during the demo
  const [checkedSteps, setCheckedSteps] = useState({});

  const toggleStep = (id) => {
    setCheckedSteps(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const triageSteps = [
    { id: 1, title: "🛑 1. Secure the Environment", desc: "Ensure your vehicle's hazards are ON. Park 50m clear of the crash to shield the area from oncoming traffic." },
    { id: 2, title: "🗣️ 2. Assess Responsiveness", desc: "Speak loudly to the victim. Ask if they can hear you. Avoid moving them unless there is an immediate danger of fire." },
    { id: 3, title: "🩸 3. Control Severe Bleeding", desc: "Locate injuries. Apply firm, continuous direct pressure with a clean cloth or trauma kit. Keep them warm." },
    { id: 4, title: "📱 4. Maintain Relay Communication", desc: "Stay on the line with dispatch if connected. Report if the victim is conscious or unconscious." }
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#0B0F19" />

      {/* Top Success Banner */}
      <View style={styles.successBanner}>
        <View style={styles.pulseIndicator} />
        <View>
          <Text style={styles.bannerTitle}>BROADCAST: YOU ARE ON SCENE</Text>
          <Text style={styles.bannerSubtitle}>First responders notified of your arrival.</Text>
        </View>
      </View>

      {/* Scrollable Checklist */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>CRITICAL ACTION PROTOCOL</Text>
        <Text style={styles.sectionSubtitle}>Complete these steps in sequence while medical teams route to your GPS.</Text>

        {triageSteps.map((step) => (
          <TouchableOpacity 
            key={step.id} 
            style={[styles.stepCard, checkedSteps[step.id] && styles.stepCardChecked]}
            activeOpacity={0.8}
            onPress={() => toggleStep(step.id)}
          >
            <View style={styles.stepHeader}>
              <Text style={[styles.stepTitle, checkedSteps[step.id] && styles.textMuted]}>{step.title}</Text>
              <View style={[styles.checkbox, checkedSteps[step.id] && styles.checkboxChecked]}>
                {checkedSteps[step.id] && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </View>
            <Text style={[styles.stepDesc, checkedSteps[step.id] && styles.textMuted]}>{step.desc}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Emergency Release/Exit Button (Safe Area Responsive) */}
      <View style={[
        styles.footer, 
        { paddingBottom: Math.max(insets.bottom, 16) }
      ]}>
        <TouchableOpacity 
          style={styles.exitButton}
          onPress={() => router.replace('/map/bystanders')}
        >
          <Text style={styles.exitButtonText}>EXIT RESPONSE MODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19', // Matches your premium deep midnight blue
    paddingTop: 60,
  },
  successBanner: {
    backgroundColor: '#064E3B', // Rich tactical forest green
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#10B981',
    marginBottom: 24,
  },
  pulseIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#10B981',
    marginRight: 12,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
  bannerSubtitle: {
    color: '#A7F3D0',
    fontSize: 11,
    marginTop: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  sectionSubtitle: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 4,
    marginBottom: 20,
  },
  stepCard: {
    backgroundColor: '#111827',
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  stepCardChecked: {
    backgroundColor: '#0F172A',
    borderColor: '#334155',
    opacity: 0.6,
  },
  stepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  stepDesc: {
    color: '#94A3B8',
    fontSize: 13,
    lineHeight: 18,
  },
  textMuted: {
    color: '#475569',
    textDecorationLine: 'line-through',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: '#1F2937',
    backgroundColor: '#0B0F19',
  },
  exitButton: {
    backgroundColor: '#1E293B',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  exitButtonText: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
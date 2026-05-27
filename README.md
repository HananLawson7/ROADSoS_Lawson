# 🛣️ ROADSoS — Mobile Emergency Response System

An enterprise-grade emergency coordination ecosystem built with React Native and Expo Router[cite: 1]. The platform splits operational logic dynamically between two target profiles: **Victims** requiring immediate tactical rescue, and **Bystanders** executing on-scene incident mitigation before physical emergency units arrive[cite: 1].

---

## 📱 Core Application Screen Flows & Mechanics

### 1. The Main Hub: Night Drive Dashboard
* **The Interface:** Premium deep midnight blue theme (`#0B0F19`) dominated by a high-visibility, high-contrast **SOS Trigger Button**[cite: 1].
* **The User State:** Baseline passive monitoring state tracking mobile metrics for potential anomalies[cite: 1].
* **Split Vector Paths:**
  * **Victims:** Pressing the central SOS button initializes the automated countdown chain[cite: 1].
  * **Bystanders:** Active structural links or notification handlers present quick shortcuts to pivot into tactical tracking modes if an accident is observed or detected nearby[cite: 1].
    * *Entry Point 1 (The Witness Shortcut):* Manual switch via the quick-action link: `"🏃‍♂️ Assisting an accident? Switch to Bystander Directory"`[cite: 1].
    * *Entry Point 2 (The Automatic Divert):* Automated localized push notification banner reading: `🚨 CRASH DETECTED 500m AHEAD`[cite: 1]. Tapping this dynamically shifts the router context[cite: 1].

### 2. The Victim Workflow: Emergency Countdown
* **The Trigger:** Activated via manual SOS push or simulated automatic crash detection metrics[cite: 1].
* **The Mechanism:** Enforces a high-intensity **30-second ticking safety window** to mitigate false alarms and coordinate network handshakes[cite: 1].
* **The Override:** Features an explicit `DISPATCH IMMEDIATELY` action node[cite: 1]. Tapping this skips remaining system latency, instantly packaging GPS/medical telemetry and routing to live responder tracking elements[cite: 1].

### 3. The Bystander Workflow: Acceptance & Command
When a user assumes the role of an active on-scene responder rather than a victim, they step into a distinct, hyper-focused operation pipeline designed to weaponize the critical gap between dispatch and physical rescue arrival[cite: 1]:

[Night Drive Dashboard] ───(Crash Detected / Link Clicked)───► [Bystander Accept View]
│
(Tap "I AM ON THE SCENE")
│
▼
[On-Scene Toolkit View]


#### A. Bystander Acceptance View (`app/emergency/bystander-accept.jsx`)
* **Purpose:** Acts as the transitional tactical gateway before physical arrival to transform bystander panic into structured coordination[cite: 1].
* **Incident Mini-Card (Top Anchor):** Pinned high-visibility slate-blue card displaying calculated distances, incident timestamps, and severity labels (`💥 Vehicle Collision Detected • 500m away • Reported 1 min ago`)[cite: 1]. It features an amber/orange accent light to establish a clear visual difference from the crimson victim layouts[cite: 1].
* **Tactical Offline Map Layer (Center Stage):** A dark-mode vector rendering charting a clean route path directly from responder vehicle coordinates to target collision coordinates with a pulsating beacon ring over the incident zone[cite: 1].
* **Action Stack (Bottom Anchor):** Houses the primary bright blue `I AM ON THE SCENE` button (which alerts dispatch and logs on-ground deployment) alongside links to offline first-aid manuals and direct emergency relay connections[cite: 1].

#### B. The Action View: On-Scene Toolkit (`app/emergency/on-scene-toolkit.jsx`)
* **Purpose:** Transitions from passive tracking to active on-ground environmental stabilization and pre-arrival triage recording[cite: 1].
* **The Transition:** Tapping "I am on the scene" updates regional dispatch databases that a verified physical asset is on the ground[cite: 1].
* **Critical Action Protocol:** An interactive, state-driven checklist guiding the responder through sequential high-stress tasks[cite: 1]:
  1. *Secure the Environment:* Hazards ON, park 50m clear to shield the area from oncoming traffic[cite: 1].
  2. *Assess Responsiveness:* Loud verbal checks, avoid moving victims unless immediate fire risk is present[cite: 1].
  3. *Control Severe Bleeding:* Continuous direct pressure with clean trauma materials[cite: 1].
  4. *Maintain Relay Communication:* Feeding real-time pre-arrival intelligence straight to incoming medical teams[cite: 1].
* **Safe Action Footer:** An optimized, bottom-anchored layout explicitly offset using structural safe-area metrics (`useSafeAreaInsets`) to guarantee complete click visibility above native iOS/Android gesture navigation pillars[cite: 1].

---

## 🛠️ Repository Architecture Components

| File/Directory Component | Core Architectural Purpose |
| :--- | :--- |
| `app/emergency/bystander-accept.jsx` | Isolates the intake routing, vector mappings, and distance telemetry for civilian responders approaching a crash site[cite: 1]. |
| `app/emergency/on-scene-toolkit.jsx` | Hosts the post-arrival interactive checklist, applying dynamic native device offsets to maximize UI tap-accuracy under stress[cite: 1]. |
| `store/alertStore.js` | Centralized global data engine syncing vehicle diagnostic feeds, countdown timers, and live dispatch state arrays[cite: 1]. |

---

## 🚀 Rapid Local Workspace Deployment

To clone, test, or contribute to the ROADSoS ecosystem framework, initialize the project from your terminal[cite: 1]:

```bash
# 1. Clone the project architecture repository
git clone [https://github.com/HananLawson7/ROADSoS_Lawson.git](https://github.com/HananLawson7/ROADSoS_Lawson.git)

# 2. Step into the workspace directory root
cd ROADSoS

# 3. Install the cross-platform dependency matrix
npm install

# 4. Initialize the localized development environment
npx expo start --go

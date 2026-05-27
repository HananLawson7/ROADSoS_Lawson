# 🛣️ ROADSoS — Mobile Emergency Response System

An enterprise-grade emergency coordination ecosystem built with React Native and Expo Router. The platform splits operational logic dynamically between two target profiles: **Victims** requiring immediate tactical rescue, and **Bystanders** executing on-scene incident mitigation before physical emergency units arrive.

---

## 📱 Core Application Screen Flows & Mechanics

### 1. The Main Hub: Night Drive Dashboard
* **The Interface:** Premium deep midnight blue theme (`#0B0F19`) dominated by a high-visibility, high-contrast **SOS Trigger Button**.
* **The User State:** Baseline passive monitoring state tracking mobile metrics for potential anomalies.
* **Split Vector Paths:**
  * **Victims:** Pressing the central SOS button initializes the automated countdown chain.
  * **Bystanders:** Active structural links or notification handlers present quick shortcuts to pivot into tactical tracking modes if an accident is observed or detected nearby.
    * *Entry Point 1 (The Witness Shortcut):* Manual switch via the quick-action link: `"🏃‍♂️ Assisting an accident? Switch to Bystander Directory"`.
    * *Entry Point 2 (The Automatic Divert):* Automated localized push notification banner reading: `🚨 CRASH DETECTED 500m AHEAD`. Tapping this dynamically shifts the router context.

### 2. The Victim Workflow: Emergency Countdown
* **The Trigger:** Activated via manual SOS push or simulated automatic crash detection metrics.
* **The Mechanism:** Enforces a high-intensity **30-second ticking safety window** to mitigate false alarms and coordinate network handshakes.
* **The Override:** Features an explicit `DISPATCH IMMEDIATELY` action node. Tapping this skips remaining system latency, instantly packaging GPS/medical telemetry and routing to live responder tracking elements.

```
### 3. The Bystander Workflow: Acceptance & Command
When a user assumes the role of an active on-scene responder rather than a victim, they step into a distinct, hyper-focused operation pipeline designed to weaponize the critical gap between dispatch and physical rescue arrival:

[Main Dashboard with SOS Button] ───(Crash Detected / Link Clicked)───► [Bystander Accept View]
│
(Tap "I AM ON THE SCENE")
│
▼
[On-Scene Toolkit View]
```

#### A. Bystander Acceptance View (`app/emergency/bystander-accept.jsx`)
* **Purpose:** Acts as the transitional tactical gateway before physical arrival to transform bystander panic into structured coordination.
* **Incident Mini-Card (Top Anchor):** Pinned high-visibility slate-blue card displaying calculated distances, incident timestamps, and severity labels (`💥 Vehicle Collision Detected • 500m away • Reported 1 min ago`). It features an amber/orange accent light to establish a clear visual difference from the crimson victim layouts.
* **Tactical Offline Map Layer (Center Stage):** A dark-mode vector rendering charting a clean route path directly from responder vehicle coordinates to target collision coordinates with a pulsating beacon ring over the incident zone.
* **Action Stack (Bottom Anchor):** Houses the primary bright blue `I AM ON THE SCENE` button (which alerts dispatch and logs on-ground deployment) alongside links to offline first-aid manuals and direct emergency relay connections.

#### B. The Action View: On-Scene Toolkit (`app/emergency/on-scene-toolkit.jsx`)
* **Purpose:** Transitions from passive tracking to active on-ground environmental stabilization and pre-arrival triage recording.
* **The Transition:** Tapping "I am on the scene" updates regional dispatch databases that a verified physical asset is on the ground.
* **Critical Action Protocol:** An interactive, state-driven checklist guiding the responder through sequential high-stress tasks:
  1. *Secure the Environment:* Hazards ON, park 50m clear to shield the area from oncoming traffic.
  2. *Assess Responsiveness:* Loud verbal checks, avoid moving victims unless immediate fire risk is present.
  3. *Control Severe Bleeding:* Continuous direct pressure with clean trauma materials.
  4. *Maintain Relay Communication:* Feeding real-time pre-arrival intelligence straight to incoming medical teams.
* **Safe Action Footer:** An optimized, bottom-anchored layout explicitly offset using structural safe-area metrics (`useSafeAreaInsets`) to guarantee complete click visibility above native iOS/Android gesture navigation pillars.

---

## 🛠️ Repository Architecture Components

| File/Directory Component | Core Architectural Purpose |
| :--- | :--- |
| `app/emergency/bystander-accept.jsx` | Isolates the intake routing, vector mappings, and distance telemetry for civilian responders approaching a crash site.|
| `app/emergency/on-scene-toolkit.jsx` | Hosts the post-arrival interactive checklist, applying dynamic native device offsets to maximize UI tap-accuracy under stress. |
| `store/alertStore.js` | Centralized global data engine syncing vehicle diagnostic feeds, countdown timers, and live dispatch state arrays. |

### 📂 Directory Architecture
```text
📦 ROADSoS
 ├── 📂 app
 │    ├── 📂 emergency
 │    │    ├── 📄 bystander-accept.jsx   <-- Incoming bystander map view
 │    │    └── 📄 on-scene-toolkit.jsx   <-- Active on-scene checklist view
 │    └── 📂 map
 │         └── 📄 bystanders.jsx
 ├── 📂 components
 ├── 📂 store
 │    └── 📄 alertStore.js               <-- Central dispatch data state
 ├── 📄 package.json
 └── 📄 README.md
---

## 🚀 Rapid Local Workspace Deployment

To clone, test, or contribute to the ROADSoS ecosystem framework, initialize the project from your terminal:

```bash
# 1. Clone the project architecture repository
git clone https://github.com/HananLawson7/ROADSoS_Lawson.git

# 2. Step into the workspace directory root
cd ROADSoS

# 3. Install the cross-platform dependency matrix
npm install

# 4. Initialize the localized development environment
npx expo start --go

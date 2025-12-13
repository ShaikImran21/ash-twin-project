# Tokyo Adventure Paths System - Summary

## Overview
Complete redesign of the game with **predetermined adventure routes** instead of random spawning.

## Structure

### Each Main Landmark has:
- **3 Different Adventure Paths** (easy, medium, hard)
- **Each Path has 6 Waypoints** (sub-locations)
- **Final Destination** (main landmark)

### Total Content:
- 9 Main Landmarks
- 27 Adventure Paths (3 per landmark)
- 162 Waypoints (6 per path)
- Players experience mini-adventures leading to main destinations

---

## Path Design Philosophy

### Path Types:
1. **Easy Route** - Main tourist path, well-marked, popular spots
2. **Medium Route** - Mix of tourist and local spots, some exploration
3. **Hard Route** - Secret backstreets, hidden gems, local neighborhoods

### Each Waypoint Includes:
- ✅ Order number (1-6 sequential)
- ✅ Real coordinates & heading
- ✅ Name & emoji
- ✅ Description & history
- ✅ Task/objective for player
- ✅ Reward points (30-55)
- ✅ Type tag (tourist/food/secret/cultural)

---

## Example: Senso-ji Temple

### Path 1: "Eastern River Approach" (Medium - 850m)
1. 🌊 Sumida River Walk → 2. ⛩️ Komagata Bridge → 3. 🏮 Hoppy Street (secret) → 
4. 🌸 Denpoin Garden (secret) → 5. 🏮 Nakamise Street → 6. 🏮 Kaminarimon Gate → 
**FINAL:** ⛩️ Senso-ji Main Hall

### Path 2: "Traditional Shopping Route" (Easy - 650m)
1. 🍜 Ramen Shop → 2. ⛩️ Asakusa Shrine → 3. 🏯 Nitenmon Gate → 
4. 🔥 Incense Burner → 5. ⛩️ Hozomon Gate → 6. 🗼 Five-Story Pagoda → 
**FINAL:** ⛩️ Senso-ji Main Hall

### Path 3: "Hidden Backstreets" (Hard - 920m)
1. 🏘️ Residential Area (secret) → 2. ⛩️ Imado Shrine (lucky cat birthplace - secret) → 
3. 🔪 Kappabashi Street (secret) → 4. 🏯 West Entrance → 5. 🌿 Garden Path (secret) → 
6. 📜 Fortune Area → **FINAL:** ⛩️ Senso-ji Main Hall

---

## Gameplay Flow

```
Level Start
  ↓
Player chooses or is assigned 1 of 3 paths
  ↓
Spawn at Waypoint 1
  ↓
Complete objective → Get reward
  ↓
Navigate to Waypoint 2 (150-200m away)
  ↓
Repeat for all 6 waypoints
  ↓
Final waypoint leads to Main Landmark
  ↓
Complete level! Get star rating based on:
  - All waypoints visited ⭐⭐⭐
  - Secrets discovered 🌟
  - Time bonus ⏱️
```

---

## Implementation Status

### ✅ Completed:
- Senso-ji Temple (3 paths, 18 waypoints)
- Tokyo Tower (3 paths, 18 waypoints)

### 🔄 To Create:
- Meiji Shrine (3 paths, 18 waypoints)
- Imperial Palace (3 paths, 18 waypoints)
- Shibuya Crossing (3 paths, 18 waypoints)
- Tsukiji Market (3 paths, 18 waypoints)
- Ueno Park (3 paths, 18 waypoints)
- Akihabara (3 paths, 18 waypoints)
- Roppongi Hills (3 paths, 18 waypoints)

**Total Remaining:** 126 waypoints to research and create

---

## Design Decisions Needed

### Questions:
1. **Path Selection:** Random or player choice?
2. **Waypoint Detection:** How close to trigger? (50m? 100m?)
3. **Navigation Hints:** Show distance? Direction arrow? Minimap?
4. **Skipping:** Can players skip waypoints or must visit all?
5. **Failure:** What if player goes wrong direction?
6. **Rewards:** Cumulative or per-waypoint?
7. **Trail Mode:** Show full path or just next waypoint?

### Should I:
- **Option A:** Continue creating all 162 waypoints (will take many iterations)
- **Option B:** Create a prototype with 2-3 complete locations first
- **Option C:** Create the game system first, add waypoints later
- **Option D:** Simplify to 3-4 waypoints per path instead of 6

---

## Recommendation

I suggest **Option B: Prototype Approach**

1. Finish 3 complete locations (27 waypoints):
   - Senso-ji ✅
   - Tokyo Tower ✅  
   - Shibuya Crossing (to do)

2. Implement the game system with these 3

3. Test gameplay balance

4. Then create remaining 6 locations based on what works

This lets you **play and iterate faster** rather than spending time creating 162 waypoints that might need adjustment.

**What do you think?**

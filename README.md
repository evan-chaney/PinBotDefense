# Tower Defense Games

Two single-file browser tower defense games, served from a landing page (`index.html`).

| Game | File | Notes |
|------|------|-------|
| **Monster Turret Defense** | `monster-turret-defense.html` | Zombies, skeletons and spiders with armor + health. 10 turrets, 6 traps, 11 enchantment runes. Normal / Hard / Hardcore. 1 map, 50 waves (with a skip-to-wave-25 button). |
| **PinBot Defense** | `pinbot-defense.html` | Robots that shoot pins pop balloons. 5 maps, 50 waves, bosses, superpowers. |

## Hosting on GitHub Pages

Settings → Pages → deploy from branch, root folder. `index.html` is the landing page.

## Monster Turret Defense rules

- Every monster has **armor** and **health**. Damage hits armor first, then health.
- The **Rune of Piercing** (an enchantment, bought from a turret's menu) bypasses armor and damages health directly.
- Tuning lives in the HTML: difficulty in `DIFFS`, enemies in `EDEF`, turrets and traps in `TD`, waves in `BASE_WAVES` (waves 1-10) and `waveDef()` (11-50) with `hpScale`/`armorScale`/`rewScale`.
- Progress is saved between waves (never mid-wave), so resuming restarts the next wave.

### Turrets, traps and runes

- **Turrets:** Gatling, Frost Totem, Shrapnel Cannon, Crossbow Ballista, Brazier, Holy Shrine, Bomb Launcher, Tesla Coil, War Drum, Sniper Nest.
- **Traps (path slots):** Landmine, Tar Pit, Spike Trap, Bear Trap, Oil Slick (erupts when hit by fire), Grinder.
- **Runes:** each turret has one *element* slot (Fire, Frost, Lightning) and one *rune* slot (Piercing, Corrosion, Haste, Far-Sight, Echo, Plunder, Sunfire, Time; a turret can only take the runes that make sense for it). The second enchantment on a turret costs 50% more.
- Everything is data-driven: `TD` (turrets/traps), `ST` (stats), `ENCH` (runes), `TB` (behaviors).

### Boss: the King Zombie

Appears on waves 10, 20, 30, 40 and 50 at the head of a horde (60% of a normal wave). Health 120 → 1600, armor 3x a green zombie, slow. It resists crowd control (immune to bear traps, stuns halved, slows halved). If it escapes it costs 3-8 hearts (doubled on Hard). Tuned in `BOSS_TIERS`, `BOSS_ARMOR_MULT` and `BOSS_ESCORT`.

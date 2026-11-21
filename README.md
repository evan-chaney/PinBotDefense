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

### Bosses

Defined in `BOSSES` (behavior) and `BOSS_SCHEDULE` (per-wave stats, escort size, hearts drained if it escapes). Full bosses resist crowd control (immune to bear traps, stuns halved, slows halved); mini-bosses don't.

| Wave | Boss | Ability |
|------|------|---------|
| 10 | King Zombie | Slow, tanky, 3x a green zombie's armor |
| 20 | Spider Queen | Spawns spiderlings every 2.2s (up to 10) |
| 30 | Bone Colossus | Huge armor that regenerates if left unhit for 3s |
| 40 | Lich | Raises one fallen monster nearby every 4s (not if Holy Shrine / Sunfire finished it) |
| 50 | Death Knight + King Zombie | Death Knight charges at 2x speed below half health |

Mini-bosses: **Werewolf** (waves 5, 25, 45; fast, enrages at half health) and **Gravedigger** (waves 15, 35, 45; at half health it tunnels, untouchable, 30% of the way down the path, skipping traps).

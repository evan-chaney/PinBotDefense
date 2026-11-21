# Tower Defense Games

Two single-file browser tower defense games, served from a landing page (`index.html`).

| Game | File | Notes |
|------|------|-------|
| **Monster Turret Defense** | `monster-turret-defense.html` | Zombies, skeletons and spiders with armor + health. Shrapnel cannon, bomb launcher, spike traps. Normal / Hard / Hardcore. 1 map, 10 waves. |
| **PinBot Defense** | `pinbot-defense.html` | Robots that shoot pins pop balloons. 5 maps, 50 waves, bosses, superpowers. |

## Hosting on GitHub Pages

Settings → Pages → deploy from branch, root folder. `index.html` is the landing page.

## Monster Turret Defense rules

- Every monster has **armor** and **health**. Damage hits armor first, then health.
- **Piercing** upgrades bypass armor and damage health directly.
- Difficulty tuning lives in the `DIFFS` table in the HTML; enemies in `EDEF`; turrets in `TD`; waves in `WAVES`.

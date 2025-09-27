---
sidebar_position: 0.5
---

# Item Groups

There are several types used to specify different groups of items.

## Runtime Items

### GunMeleeWeapon

`GunWeapon | MeleeWeapon`

### AnyWeapon

`GunWeapon | GrenadeWeapon | MeleeWeapon`

### AnyItem

`Item | AnyWeapon`

### ItemBeforeHit

`AnyWeapon | ExplosionParams`

## Definitions

### AnyItemDefinition

`ItemDefinition | GunWeaponDefinition | MeleeWeaponDefinition | GrenadeWeaponDefinition`

### ItemDefinitionOnHitClient

`GunWeaponDefinition | MeleeWeaponDefinition | GrenadeWeaponDefinition`
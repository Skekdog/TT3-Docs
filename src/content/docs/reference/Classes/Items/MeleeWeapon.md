---
sidebar:
  order: 4
title: MeleeWeapon
---
:::note

This class inherits additional properties and methods from `BaseWeapon`.

:::

These are properties specific to melee weapons.

## Properties

### Kind

`Type: "Melee"`

Always set to "Melee". Used to differentiate between classes.

### Definition

`Type: MeleeWeaponDefinition`

The `MeleeWeaponDefinition` of the melee.

### LastAttackTime

`Type: number`

The last time (as returned by `workspace:GetServerTimeNow()`) the primary fire of the melee was used.

:::caution

This does not get set when alternate fire is used.

:::
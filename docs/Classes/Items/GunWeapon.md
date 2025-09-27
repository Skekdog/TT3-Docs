---
sidebar_position: 3
---

# GunWeapon

:::note

This class inherits additional properties and methods from `BaseWeapon`.

:::

These are properties specific to gun weapons.

## Properties

### Kind

`Type: "Gun"`

Always set to "Gun". Used to differentiate between classes.

### Definition

`Type: GunWeaponDefinition`

The `GunWeaponDefinition` of the weapon.

### Ammo

`Type: number`

The current amount of ammo loaded into the gun.

### LastAttackTime

`Type: number`

The last time (as returned by `workspace:GetServerTimeNow()`) the gun was fired.

### IsReloading

`Type: boolean`

True if the gun is currently being reloaded.
---
sidebar_position: 5
---

# GrenadeWeaponDefinition

`GrenadeWeaponDefinition` defines a grenade.

:::note

Grenades inherit from `CommonWeaponDefinition`; you can also specify those properties.

:::

## Properties

### Kind

`Type: "Grenade"`

Always set to "Grenade". Used to differentiate between classes.

### AttackSound

`Type: Sound?`

The sound to play when the grenade is thrown.

### Projectile

`Type: BasePart`

The projectile of the grenade.

### ProjectileForce

`Type: number`

The force that the projectile is launched with. For reference, the Flashbang has a force of 30, and the Discombobulator has a force of 60.

### FuseTime

`Type: number`

The time, in seconds, before the grenade explodes. If this is negative, the grenade will explode on impact.

### ExplosionInfo

`Type: ExplosionInfo`

The explosion info for the grenade.

## Hooks

:::note

All functions are optional.

:::

### OnExplode

Called when the grenade explodes.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `GrenadeWeapon` | | The grenade. |
| attacker | `Participant` | | The attacker. |
| projectile | `BasePart` | | The projectile. |

### OnHitClient

Called on the client when the client is hit.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `ItemDefinitionOnHitClient` | | The item. |
| hitPart | `BasePart` | | The part that was hit. |
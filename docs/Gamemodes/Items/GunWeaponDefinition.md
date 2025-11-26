---
sidebar_position: 3
---

# GunWeaponDefinition

`GunWeaponDefinition` defines a gun.

:::note

Guns inherit from `CommonWeaponDefinition`; you can also specify those properties.

:::

## Properties

### Kind

`Type: "Gun"`

Always set to "Gun". Used to differentiate between classes.

### AimAnimation

`Type: string?`

An asset string for the aim animation of the weapon.

:::note

Currently, aim animations only play on the viewmodel.

:::

### ReloadTime

`Type: number`

The time (in seconds) it takes to reload the gun. Set to `0` for instant reloading.

### AttackInterval

`Type: number`

The time (in seconds) between firing.

:::note

All guns are "automatic" - players can simply hold down the mouse button to fire.

:::

### AttackSound

`Type: Sound?`

The sound to play when the gun is fired.

### ReloadSound

`Type: Sound?`

The sound to play when the gun is reloaded.

:::note

Currently, reload sounds only play on the client.

:::

### Damage

`Type: DamageInfo`

The damage that the gun deals.

### AmmoType

`Type: AmmoDefinition`

The ammo type that the gun uses.

### IsSilent

`Type: boolean?`

If true, the gun is a silent weapon. Damage indicators will not be shown, and no death sound will be played. Additionally, near-miss self defense will not apply.

### AimFOV

`Type: number?`

The field of view to set when aiming. If `nil`, FOV will not change.

### HasScope

`Type: boolean?`

If true, aiming will show a scope.

### ScopeRequired

`Type: boolean?`

If true, the gun cannot be fired when not scoped in.

### HasMuzzleFlash

`Type: boolean?`

If true, a muzzle flash will be shown when the gun is fired. The gun model must have a child "MuzzleFlash" `Attachment`, at the centre of the muzzle flash location.

### AimSpreadMultiplier

`Type: number?`

A multiplier applied to the spread when aiming. If `nil`, spread will not change.

### LaserColor

`Type: Color3?`

The color of the laser. If `nil`, no laser will be shown.

### Projectile

`Type: BasePart?`

The projectile model to use for the gun. If `nil`, no projectile will be visible.

### ProjectileSpeed

`Type: number?`

The speed, in studs per second, of the projectile. Defaults to `100`. If `IsPhysicallySimulated` is `true`, this value will determine the initial force to apply to the projectile, which will be multiplied by the projectile's mass.

### ImpulseForce

`Type: number?`

The magnitude of the impulse to apply to hit objects. Defaults to no impulse.

### BulletsPerShot

`Type: number?`

The number of bullets fired per shot. Defaults to `1`. This can be used to create shotguns.

### Spread

`Type: number?`

The spread, in arbitrary units, of the gun. Typically this should be set fairly low: for reference, the HUGE has a spread of 0.04, and the G18 has a spread of 0.01.

### RecoilX

`Type: number?`

The horizontal recoil, in arbitrary units. For reference, the HUGE has a RecoilX of 1.0, and the G18 has a RecoilX of 0.2.

### RecoilY

`Type: number?`

The vertical recoil, in arbitrary units. For reference, the HUGE has a RecoilY of 2.0, and the G18 has a RecoilY of 0.8.

### IsPhysicallySimulated

`Type: boolean?`

If true, the projectile will be simulated by the physics engine. Defaults to `false`, meaning weapons are hitscan. If `true`, `Projectile` and `ProjectileSpeed` are required.

## Hooks

:::note

All functions are optional.

:::

### BeforePrimaryFireClient

This hook is called on the client before the request to fire is sent to the server. It must return a boolean: if true, the fire will proceed; if false, the fire will be cancelled.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `GunWeapon` | | The gun. |
| targetedParts | `{BasePart}` | | A list of `BaseParts` that are targeted. |

#### Returns

`boolean`

### BeforeHitAnything

This hook is called before any part is hit. It must return a boolean: if true, the hit will proceed; if false, the hit will be cancelled. This is the first hook called.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `ItemBeforeHit` | | The item. |
| round | `Round` | | The current round. |
| hitPart | `BasePart` | | The part that was hit. |
| params | `DamageParams` | | The damage parameters. |

#### Returns

`boolean`

### BeforeHitParticipant

This hook is called before any participant is hit. It must return a boolean: if true, the hit will proceed; if false, the hit will be cancelled.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `ItemBeforeHit` | | The item. |
| round | `Round` | | The current round. |
| hitParticipant | `Participant` | | The participant that was hit. |
| params | `DamageParams` | | The damage parameters. |

#### Returns

`boolean`

### BeforeHitProp

This hook is called before any prop is hit. It must return a boolean: if true, the hit will proceed; if false, the hit will be cancelled.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `ItemBeforeHit` | | The item. |
| round | `Round` | | The current round. |
| hitProp | `Prop` | | The prop that was hit. |
| params | `DamageParams` | | The damage parameters. |

#### Returns

`boolean`

### OnHitClient

Called on the client when the client is hit.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `ItemDefinitionOnHitClient` | | The item. |
| hitPart | `BasePart` | | The part that was hit. |

## Schedules

:::note

All functions are optional.

:::

All schedules are run with the following parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `AnyItem` | | The item. |
| dt | `number` | | The delta time. |

### HeartbeatClient

Called on `RunService.Heartbeat` on the client.

### PreSimulationClient

Called on `RunService.PreSimulation` on the client.

### PostSimulationClient

Called on `RunService.PostSimulation` on the client.

### PreRenderClient

Called on `RunService.PreRender` on the client.

### PreAnimationClient

Called on `RunService.PreAnimation` on the client.
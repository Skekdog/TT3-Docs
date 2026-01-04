---
sidebar:
  order: 4
title: MeleeWeaponDefinition
---
`MeleeWeaponDefinition` defines a melee weapon.

:::note

Melee weapons inherit from `CommonWeaponDefinition`; you can also specify those properties.

:::

## Properties

### Kind

`Type: "Melee"`

Always set to "Melee". Used to differentiate between classes.

### AlternateToggled

`Type: boolean?`

If true, the alternate action is toggled (i.e, players must click RMB to use the alternate action). Otherwise, the alternate action is continuous and players can hold down the mouse button to use it. No effect if not alternate action is defined.

### AttackAnimation

`Type: string`

An asset string for the attack animation of the weapon.

### AttackInterval

`Type: number`

The time (in seconds) between attacking.

:::note

All melees are "automatic" - players can simply hold down the mouse button to fire.

:::

### AttackSound

`Type: Sound?`

The sound to play when the melee is used.

### Damage

`Type: DamageInfo`

The damage that the melee deals.

### ImpulseForce

`Type: number?`

The magnitude of the impulse to apply to hit objects. Defaults to no impulse.

### MaxDistance

`Type: number`

The maximum distance that the melee can reach.

### DamageKind

`Type: "Bludgeon" | "Stab"`

The kind of damage that the melee does.

## Hooks

:::note

All functions are optional.

:::

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

### OnAlternateActivateClient

Called on the client when alternate fire is initially held down.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `AnyItem` | | The item. |

### OnAlternateDeactivateClient

Called on the client when alternate fire is released.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `AnyItem` | | The item. |

## Actions

### AlternateFireClient

Called on the client when the alternate action is used.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `MeleeWeapon` | | The item. |
| _ | | | An unused parameter. Don't ask me why it exists. |
| position | `Vector3` | | The origin of the action.
| direction | `Vector3` | | The direction of the action.

### AlternateFireServer

Called on the server when the alternate action is used.

:::caution

The `position` and `direction` parameters are supplied by the client. You should perform sanity checks to make sure they are not unreasonable. In future, these may be performed automatically.

:::

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `MeleeWeapon` | | The item. |
| _ | | | An unused parameter. Don't ask me why it exists. |
| position | `Vector3` | | The origin of the action.|
| direction | `Vector3` | | The direction of the action. |
| attacker | `Participant` | | The participant that triggered the action. |
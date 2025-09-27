---
sidebar_position: 3
---

# Prop

The prop class represents a prop loaded in the current map.

See also: [Maps.Props](/Maps/Props.md).

## Properties

### Kind

`Type: "Prop"`

Always set to "Prop". Used to differentiate between classes.

### Model

`Type: MapObject`

The `MapObject` of the prop.

### Extras

`Type: Extras`

Additional data for the specific prop instance.

### Round

`Type: Round`

A reference to the current round.

## Methods

### GetHealth

Returns the current health of the prop. Returns nil if the prop is not breakable.

#### Returns

`number?`

### SetHealth

Sets the health of the prop. No effect if the prop is not breakable.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `health` | `number` |  | The new health of the prop. |

### TryTakeDamage

Attempts to damage the prop with the provided `DamageParams`. Returns true if the prop was damaged, false otherwise.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `damageParams` | `DamageParams` |  | The damage parameters. |
| `deferDeath` | `boolean?` |  | Whether to defer OnBreak. |

#### Returns

`boolean`
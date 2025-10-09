---
sidebar_position: 3.5
---

# Interactable

The interactable class represents a loaded interactable.

See also: [Maps.Interactables](/Maps/Interactables.md).

## Properties

### Kind

`Type: "Interactable"`

Always set to "Interactable". Used to differentiate between classes.

### Definition

`Type: InteractableDefinition`

The definition of the interactable.

### Model

`Type: MapObject`

The interactable model.

### Round

`Type: Round?`

A reference to the current round. May be nil.

### Extras

`Type: Extras`

Additional data for the specific interactable instance.

### HintTextClient

`Type: string?`

Hint to display to the player when they look at the interactable.

## Methods

### GetHealth

Returns the current health of the interactable. If the interactable is non-destructible, returns nil.

#### Returns

`Type: number?`

### SetHealth

Sets the current health of the interactable.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `health` | `number` |  | The health. |

### TryTakeDamage

Deals damage to the interactable, if possible. Returns true if the damage was applied, false otherwise.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `params` | `DamageParams` |  | The damage parameters. |

#### Returns

`Type: boolean`
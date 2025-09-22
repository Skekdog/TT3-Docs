---
sidebar_position: 3
---

# Combat

:::warning

This API is only accessible from the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

# Types

## `CombatAPIExplosionParams`

```lua
export type CombatAPIExplosionParams = {
	Position: Vector3,
	Damage: number,
	FalloffBegin: number?,
	FalloffEnd: number,
	Attacker: Participant?,
	IgnoreKarma: boolean?,
}
```

# Functions

## `MakeExplosion`

Creates an explosion at the specified position with the specified damage, radius, and sound.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `params` | `CombatAPIExplosionParams` | `FalloffBegin = 0` | The parameters for the explosion. |
| `sound` | `Sound?` | `default explosion sound` | The sound to play when the explosion happens.<br/>A default sound is used if not provided. |

### Returns
`()`
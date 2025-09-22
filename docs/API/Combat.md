---
sidebar_position: 3
---

# Combat

:::warning

This API is only accessible from the server.

:::

## `MakeExplosion(params, sound)`

Creates an explosion at the specified position with the specified damage, radius, and sound.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `params` | `{`<br/>`Position: Vector3,`<br/>`Damage: number,`<br/>`FalloffBegin: number?,`<br/>`FalloffEnd: number,`<br/>`Attacker: Types.Participant?,`<br/>`IgnoreKarma: boolean?`<br/>`}` | The parameters for the explosion. |
| `sound` | `Sound?` | The sound to play when the explosion happens.<br/>A default sound is used if not provided. |

### Returns
`()`
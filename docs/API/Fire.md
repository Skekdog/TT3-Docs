---
sidebar_position: 3.1
---

# Fire

:::info

This API can be used from both the client and the server. Note that client-side usage will only allow for visuals.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

## Properties

### Attackers

Maps burning objects to the participant who ignited them. Not all burning objects are in this table.

`Type: {[MapObject]: Participant}`

## Functions

### Ignite

Ignites the object. No effect if it is already burning.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `object` | `MapObject` |  | The object to ignite. |
| `attacker` | `Participant` |  | The participant who ignited the object. Kill credit will be awarded to this participant. |

#### Returns

`()`

### Extinguish

Extinguishes the object. No effect if it is not burning.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `object` | `MapObject` |  | The object to extinguish. |

#### Returns

`()`

### IsBurning

Returns true if the object is burning.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `object` | `MapObject` |  | The object to check. |

#### Returns

`boolean`
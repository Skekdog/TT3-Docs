---
sidebar_position: 3.5
---

# Impulse

:::warning

This API is only accessible from the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

Impulses apply a force to an object in a specific direction, causing movement. If the object is a prop, it will deal damage to anything it hits.

:::warning

Impulses are not guaranteed to actually result in movement. You should not rely on an object being moved by an impulse.

:::

## Functions

### CanImpulse

Returns `true` if the object can be impusled, otherwise `false`. Currently, all objects which are not grounded (anchored) can be impulsed.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| part | `BasePart` | | The part to check. |

#### Returns

`boolean`

### ApplyImpulse

Applies an impulse to an object. If a participant is specified, any damage that the object deals will be credited to the participant. Additionally, the participant themselves will not take any damage.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| part | `BasePart` | | The part to apply the impulse to. |
| impulse | `Vector3` | | The impulse to apply. |
| adjustForMass | `boolean` | | If `true`, the impulse will be multiplied by the object's `AssemblyMass`. |
| position | `Vector3?` | `nil` | The position to apply the impulse at. If `nil`, the impulse will be applied at the part's center of mass. |
| participant | `Participant?` | | The participant to credit damage to. |

#### Returns

`()`
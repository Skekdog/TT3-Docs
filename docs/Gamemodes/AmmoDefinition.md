---
sidebar_position: 3
---

# AmmoDefinition

Defines an ammo type that can be used by guns.

## Properties

### Kind

`Type: "Ammo"`

Always set to "Ammo". Used to differentiate between classes.

### Name

`Type: string`

The internal name of the ammo.

### DisplayName

`Type: string?`

The name that will be displayed in the UI. If not set, `Name` will be used instead.

### Capacity

`Type: number`

The maximum amount of ammo that can be stored in a single clip.

### ReserveCapacity

`Type: number`

The maximum amount of ammo that can be stored in reserve (doesn't count ammo in the clip).

### CanDrop

`Type: boolean`

Whether the ammo can be dropped as an ammo box.

### Model

`Type: MapObject?`

The model of the ammo.
---
sidebar_position: 2
---

# CommonWeaponDefinition

`CommonWeaponDefinition` is the base definition for all weapon definitions. It contains the basic information for the weapon. All weapon definitions include these properties and functions.

Additionally, note that weapons **must** have a `Model` property set, as well as a `HoldAnimation` property set.

:::note

Weapons inherit from `CommonItemDefinition`; you can also specify those properties.

:::

## Properties

### HoldAnimation

`Type: string`

The hold animation of the weapon.
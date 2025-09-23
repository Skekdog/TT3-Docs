---
sidebar_position: 1
---

# Item

:::info

This class does **not** inherit additional properties or methods from `BaseWeapon`.

:::

These are properties specific to generic items.

# Properties

## Kind

`Type: "Item"`

Always set to "Item". Used to differentiate between classes.

## Definition

`Type: ItemDefinition`

The `ItemDefinition` of the item.

## Model

`Type: MapThing`

The model of the item. This is a clone of the model from `ItemDefinition.Model`. Nil if `ItemDefinition.Model` is nil.

## Extras

`Type: Extras`

Additional data for the item.
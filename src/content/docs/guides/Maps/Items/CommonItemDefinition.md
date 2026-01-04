---
sidebar:
  order: 0
title: CommonItemDefinition
---
`CommonItemDefinition` is the base definition for all item definitions. It contains the basic information for the item. All item definitions include these properties and functions.

## Properties

### Name

`Type: string`

The internal name of the item.

### DisplayName

`Type: string?`

The display name of the item. If not set, the name will be used as the display name.

### Description

`Type: string?`

The description of the item. This must be set if this item will appear in the shop.

### Icon

`Type: string?`

An asset string for the icon of the item. This must be set if this item will appear in the shop.

### IsPixelIcon

`Type: boolean?`

If true, the icon displayed will have `ImageLabel.ResampleMode` set to `Pixelated`.

### CreditCost

`Type: number?`

The cost, in credits, of this item. This must be set if this item will appear in the shop.

### MaxStock

`Type: number?`

The maximum number of times that a single player can purchase this item. If `nil`, there is no limit.

### IsEvilItem

`Type: boolean?`

If true, this item will make non-evil players a free kill when they have it equipped.

### ItemGroup

`Type: { PreferredSlot: number? }`

The group that this item belongs to. Only one item from a group can be present in an inventory at a time. If `nil`, this item is passive and not part of any group. Item groups are denoted by the specific table reference, not PreferredSlot. You must use the same table when defining the item group.

See also: [`API.StandardGame#ItemGroups`](/Traitor-Docs/reference/api/standardgame#itemgroups).

```lua
local item: Types.ItemDefinition = {
	...,
	ItemGroup = StandardGame.ItemGroups.RoleUtility,
	...,
}
```

### CanDrop

`Type: boolean?`

If true, this item can be dropped by the player. Otherwise, it cannot be dropped, and will disappear if a player dies with it in their inventory. This has no effect on passive items.

### PreventUnequip

`Type: boolean?`

If true, this item cannot be unequipped once equipped. This has no effect on passive items.

### Model

`Type: MapObject?`

The model of the item.

This model can have a special attribute, `CanReplace`, which, if true, will allow the player to equip this item and replace normally non-removable items (such as the crowbar). This is used by Asylum's Golden Frying Pan item.

### HoldAnimation

`Type: string?`

An asset string for the hold animation of the item. Note: hold animations are the same for both the viewmodel and the character model.

## Hooks

All server hooks are called with the following parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `AnyItem` |  | The item. |
| participant | `Participant` |  | The participant that triggered the action. |

All client hooks are called with the following parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `AnyItem` |  | The item. |

### OnPurchase

Called on the server when the item is purchased.

### OnEquipClient

Called on the client when the item is equipped.

### OnUnequipClient

Called on the client when the item is unequipped.

### OnEquipServer

Called on the server when the item is equipped.

### OnUnequipServer

Called on the server when the item is unequipped.

### OnActivateClient

Called on the client when primary fire is initially held down.

### OnDeactivateClient

Called on the client when primary fire is released.
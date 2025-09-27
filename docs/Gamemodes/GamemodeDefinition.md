---
sidebar_position: 2
---

# GamemodeDefinition

The `GamemodeDefinition` is the primary data and code container for a gamemode. It specifies basic information, like the name and the creators, and it also provides hooks to implement the gamemode's behaviors. This is the structure that should be returned by your gamemode module.

## Properties

### Name

`Type: string`

The internal name of the gamemode. This should match the name of the gamemode module.

### DisplayName

`Type: string?`

The name that will be displayed in the UI. If not set, `Name` will be used instead.

### Description

`Type: string`

The description of the gamemode, which is not currently used. Despite this, you must still provide a description.

### Authors

`Type: string`

Lists the authors of the gamemode. Typically, you should use Roblox usernames, starting with an `@` symbol, and separated by commas. For example: `@username1, @username2, @username3`.

### MinimumPlayers

`Type: number`

The minimum number of players before the round can begin.

### RequiredSlayVotes

`Type: number?`

If specified, this is the number of votes against a player needed before they are slain for RDM. If not specified, RDM slay is disabled.

### EnableFriendlyFire

`Type: boolean?`

If true, friendly fire between allies will deal damage. Otherwise, friendly fire is disabled.

### EnableKarma

`Type: boolean?`

If true, karma will be active and will reduce damage dealt by players with low karma. Players will gain karma for dealing good damage, and lose karma for dealing bad damage. If disabled, these effects do not occur.

### AvailableItems

`Type: {[string]: AnyItemDefinition}`

A dictionary specifiying all available items in the gamemode. If an item is not specified here (or in the loaded map), it will fail to load.

:::tip

You can get all standard items by using the `API.Items.GetItems()` function. Additionally, you can add more items in by creating a new table and giving it the standard items, then adding in your own items to the table.

:::

### AvailableAmmo

`Type: {[string]: AmmoDefinition}`

A dictionary specifying all available ammo in the gamemode. If an ammo is not specified here (or in the loaded map), it will fail to load.

:::tip

You can get all standard ammo by using the `API.Ammo.GetAllAmmo()` function. Additionally, you can add more ammo in by creating a new table and giving it the standard ammo, then adding in your own ammo to the table.

:::

### InteractableDefinitions

`Type: {[string]: InteractableDefinition}`

A dictionary specifying all available interactables in the gamemode. If an interactable is not specified here (or in the loaded map), it will fail to load.

:::tip

You can get all standard interactables by using the `API.StandardInteractables.GetInteractables()` function. Additionally, you can add more interactables in by creating a new table and giving it the standard interactables, then adding in your own interactables to the table.

:::

### StartingItems

`Type: {AnyItemDefinition}`

A list of items to give players when they spawn.

### Roles

`Type: {[string]: RoleDefinition}`

A dictionary of role name to definitions. This table specifies the available roles for the gamemode.

### RoleCanCallToCorpse

`Type: RoleDefinition?`

Specifies a role that can be called to investigate a corpse. If nil, no roles can be called to corpses.
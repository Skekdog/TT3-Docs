---
sidebar_position: 2
---

# Participant

A `Participant` represents a player in the round. You can get a `Participant` using the [`GetParticipant`](/API/GetParticipant) API.

# Properties

| Name | Type | Description |
| --- | --- | --- |
Extras | `Extras` | Extra data for the participant. |
Player | `Player` | The player associated with this participant. |
Round | `Round` | The round that this participant is in. |
DidParticipate | `boolean` | Whether or not the participant has ever joined the round. |
SlayVotes | `{Participant}` | A list of participants that have voted to slay this participant after being RDMed by them. |
Corpse | `Corpse` | The corpse of this participant. |
ExtraCorpseIcons | `{CorpseIcon}` | A list of additional corpse icons for this participant. |
CorpseSearchDistance | `number` | The max distance that the participant can interact with a corpse from. |
KillList | `{Participant}` | A list of participants that this participant has killed. |
Scores | `ScoreTable` | A table of scores for this participant. |
ItemPurchases | `ItemPurchases` | A table of items that this participant has purchased, to the number of times they have done so. |

# Methods

## TryAddSlayVote

Attempts to add a slay vote to the participant. Will fail if the voter has already voted against this participant, or if the voter was not RDMed by this participant.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `voter` | `Participant` |  | The participant that is voting to slay this participant. |

### Returns

`boolean`

## TryPlayAnimation

Attempts to play an animation on the participant's character.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animationId` | `number` |  | The ID of the animation to play. |
| `animationName` | `string` |  | The name of the animation. |

### Returns

`()`

## TryStopAnimation

Attempts to stop the animation with the given name on the participant's character.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animationName` | `string` |  | The name of the animation to stop. |

### Returns

`()`

## GetKarma

Returns the karma of the participant. Returns 1000 if karma is not enabled in the current gamemode.

### Returns

`number`

## SetKarma

Sets the karma of the participant. No effect if karma is disabled in the current gamemode.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `karma` | `number` |  | The karma to set. |

### Returns

`()`

## IsFreeKill

Returns true if the participant is a free kill.

### Returns

`boolean`

## SetFreeKill

Sets the free kill reason of the participant. Sends a chat message to the participant with the given reason, in the form "Because you \{reason\}, you are now a free kill!".

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `reason` | `string?` |  | The reason to set, or nil if the participant should no longer be a free kill. |

### Returns

`()`

## GetRole

Returns the role of the participant. If the Participant has not yet been assigned a role, returns the default role as defined by the game (not the gamemode).

### Returns

`string`

## SetRole

Sets the role of the participant to the given role definition. Unsets the role if no definition is given.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `roleDefinition` | `RoleDefinition?` |  | The role definition. Unsets the role if nil. |

### Returns

`()`

## IsBadGuy

Returns true if the participant's role is a bad guy. The default role is not set to be a bad guy.

### Returns

`boolean`

## IsAlliedWithParticipant

Returns true if the participant is allied with the given participant.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `participant` | `Participant` |  | The participant to check. |

### Returns

`boolean`

## IsDamageJustifiedAgainstParticipant

Returns true if the participant is justified to deal damage to the given participant. Damage is justified if the participant is not allied with the target, or if the participant has self-defense against the target.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `target` | `Participant` |  | The participant to check. |

### Returns

`boolean`

## GetFormattedName

Returns the participant's username, formatted with their role colour.

### Returns

`string`

## AddCorpseIcon

Adds a corpse icon when the participant is killed. This should be called before the participant is killed.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `corpseIcon` | `CorpseIcon` |  | The corpse icon to add. |

### Returns

`()`

## GetCharacter

Returns the participant's character. Returns nil if the participant has no character.

### Returns

`Model?`

## GetHumanoid

Returns the participant's humanoid. Returns nil if the participant has no humanoid.

### Returns

`Humanoid?`

## SpawnCharacter

Spawns or respawns the participant's character. The character will spawn at a random PlayerSpawn in the map.

### Returns

`()`

## UnspawnCharacter

Unspawns the participant's character. No effect if the participant has no character.

### Returns

`()`

## AddSelfDefenseEntry

Adds a self-defense entry against the specified participant for the specified duration.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `params` | `SelfDefenseParams` |  | The params. |

### Returns

`()`

## HasSelfDefenseAgainstParticipant

Returns true if the participant has self-defense against the specified participant.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `participant` | `Participant` |  | The participant to check. |

### Returns

`boolean`

## SetLastDamagedBy

Sets the participant's last attacker for the specified duration. If the participant dies to environmental causes within the specified duration, their death will be attributed to the attacker.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `attacker` | `Participant` |  | The attacker. |
| `duration` | `number` |  | The duration. |

### Returns

`()`

## AddScore

Adds the specified amount of score, for the specified reason, to the Participant.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `reason` | `string` |  | The reason. |
| `amount` | `number` |  | The amount. Can be negative. |

### Returns

`()`

## AddCredits

Adds the specified amount of credits to the Participant.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `amount` | `number` |  | The amount. Can be negative. |

### Returns

`()`

## SetCredits

Sets the participant's credits to the specified amount.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `amount` | `number` |  | The amount. |

### Returns

`()`

## DropAmmoBoxForCurrentItem

Attempts to drop an ammo box for the participant's current item. Will fail if no item is held or if the current item cannot drop an ammo box.

### Returns

`()`

## GetEquippedItem

Returns the participant's currently equipped item. Returns nil if the participant has no item equipped.

### Returns

`AnyItem?`

## SetEquippedItem

Attempt to set the participant's currently equipped item.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `AnyItem` |  | The item. |
| `force` | `boolean?` |  | Whether to force set the item, bypassing prevent unequip if the currently equipped item has it. |

### Returns

`()`

## GetItems

Returns a table of the item name to the item, for all items in the participant's inventory.

### Returns

`{[string]: AnyItem}`

## GiveItemFromItemDefinition

Gives the specified item to the participant. Will error if the item cannot be given.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `itemDefinition` | `ItemDefinition` |  | The item definition. |

### Returns

`()`

## DropItem

Attempts to drop the specified item. Will fail if the item cannot be dropped.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `AnyItem` |  | The item. |
| `throwDirection` | `Vector3?` |  | The direction to throw the item. |

### Returns

`()`

## AddItem

Adds the item to the participant's inventory. Will error if the slot is already occupied.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `AnyItem` |  | The item. |

### Returns

`()`

## RemoveItem

Removes the item from the participant's inventory.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `AnyItem` |  | The item. |

### Returns

`()`

## TryDropItem

Attempts to drop the specified item. If unsuccessful, removes the item instead. Returns true if the item was dropped.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `AnyItem` |  | The item. |
| `throw` | `boolean?` |  | Whether to apply a throwing force or not. |

### Returns

`boolean`

## IsItemSlotOccupied

Returns true if the specified item slot is occupied.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `slot` | `number` |  | The slot. |

### Returns

`boolean`

## GetAmmo

Returns the amount of the specified ammo type the participant has. Returns 0 for invalid ammo types.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ammoType` | `string` |  | The ammo type. |

### Returns

`number`

## SetAmmo

Sets the amount of the specified ammo type the participant has.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ammoType` | `string` |  | The ammo type. |
| `amount` | `number` |  | The amount. |

### Returns

`()`

## GetAllAmmo

Returns a table of the ammo type to the amount of ammo the participant has.

### Returns

`{[string]: number}`

## HasWeaponOfAmmoType

Returns true if the participant has a weapon with the specified ammo type.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ammoType` | `string` |  | The ammo type. |

### Returns

`boolean`

## PurchaseItem

Attempts to purchase the specified item definition. Returns an ItemPurchaseResult.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `itemDefinition` | `ItemDefinition` |  | The item definition. |

### Returns

`ItemPurchaseResult`

## GetStatus

Returns the status of the participant.

### Returns

`ParticipantStatus`

## IsAlive

Returns true if the participant is alive.

### Returns

`boolean`

## TryTakeDamage

Attempts to deal damage, with the specified parameters. Returns true if the damage was successful.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `params` | `DamageParams` |  | The damage parameters. |

### Returns

`boolean`

## GetHealth

Returns the health of the participant. Returns 0 if the participant has no humanoid.

### Returns

`number`

## SetHealth

Sets the health of the participant. Will automatically set the Humanoid.MaxHealth if needed.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `health` | `number` |  | The health. |

### Returns

`()`

## MoveToSpawn

Teleports the participant to a PlayerSpawn on the map.

### Returns

`()`

## TryThrowAssembly

Attempts to throw the specified assembly. Returns true if successful.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `assembly` | `Assembly` |  | The assembly. |
| `force` | `number` |  | The force of the throw. |
| `parent` | `Instance?` |  | The parent to set for the assembly. |
| `position` | `Vector3?` | | The initial position of the assembly. |
| `direction` | `Vector3?` | | The direction to throw the assembly. |
| `noForward` | `boolean?` | | Whether to teleport the assembly slightly in-front of the participant. |

### Returns

`boolean`
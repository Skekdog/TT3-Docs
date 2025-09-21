---
sidebar_position: 6
---

# Interactables

An interactable is a special kind of prop that a player can interact with. To make something into an interactable, you should add the `Interactable` tag to it.

:::note
You also need the `Prop` tag.
:::

Now, there are three kinds of interactables: prefabs, defined interactables, and runtime interactables.

## Prefabs

To make a part into a prefab interactable, you should add an additional tag, which is the name of the prefab. For example, to make a door, you should add the `Door` tag.<br/>
Currently, there are two prefab interactables:
- Door
- Ladder

### Doors

The door format is currently volatile and subject to change; thus, only the baseline is documented: you should add an `Attachment`, named `DoorPivot`, to the door. This attachment acts as the hinge of the door.

### Ladders

Unlike other interactables, ladders do not have to be under `Dynamic`. Players will climb ladders automatically when they touch them. Typically, ladders should be taller than their actual height, but shorter at the bottom.<br/>
If your ladder acts strangely, double-check the orientation.

## Defined Interactables

:::tip
Defined interactables usually require some level of scripting knowledge; however, they are not complicated if you do have some scripting capability.
:::

Defined interactables are designed to be used in multiple places around a map, using the same code. All current game interactables, like the Radio and the C4, are defined.

To make a defined interactable, you should create a ModuleScript in your map. Give it an appropriate name (usually the name of the interactable, although it doesn't strictly matter).

Now, you should require the module in your MapScript and add it to the InteractableDefinitions table:
```lua
TerrainColors = ...,

InteractableDefinitions = {
	InteractableName = require(script.Path.To.Your.Module)
},

AvailableItems = ...,
```
This will register all props with the Interactable tag and the matching name as having this interactable definition.

If you attempt to load your map now, it will break. You now need to define the interactable, so head back into your module and get coding!

The module should return an `InteractableDefinition`:
```lua
export type InteractableDefinition = {
    Name: string, -- This must match the name of the interactable in the map.
    DisplayName: string?, -- Overrides the name when displayed to players.

    NoActionHint: boolean?, -- If true, hides the action hint.
    HideName: boolean?, -- If true, hides the name. Unlike in runtime interactables, this property is not overriden by DisplayName.

    DefaultHintText: string?, -- Sets the default hint shown to players.

    Model: MapThing?, -- When defining interactables for maps, you should leave this `nil`.

    IsContinuousInteraction: boolean, -- If true, OnInteract will be called repeatedly until the player releases the interaction key or moves out of range.
    InteractionRange: number, -- The maximum distance at which the player can interact with the interactable.

    OnInteractClient: ((object: Interactable) -> ())?, -- Called on the client when the player interacts with the interactable.
    OnInteractServer: ((object: Interactable, participant: Participant) -> ())?, -- Called on the server when the participant interacts with the interactable.

    OnLoadClient: ((object: Interactable) -> ())?, -- Called on the client when the interactable is first loaded in the map.
    OnLoadServer: ((object: Interactable) -> ())?, -- Called on the server when the interactable is first loaded in the map.

    OnBreakServer: ((object: Interactable, params: DamageParams) -> ())?, -- Called on the server when the interactable is destroyed.

    BeforeTakeDamage: ((object: Interactable, params: DamageParams) -> boolean)?, -- Called on the server before the interactable takes damage. If this returns false, the damage will not be applied.
}
```

## Runtime Interactables

:::tip
Like defined interactables, runtime interactables require some level of scripting knowledge; however, they are not complicated if you do have some scripting capability, and they are somewhat easier to understand than defined interactables.
:::

Runtime Interactables do not use a centralized definition; instead, their properties are defined as attributes, and their behaviour is provided by two `ModuleScripts`, one for the client and one for the server.

To turn a prop into a runtime interactable, give it the `Interactable` tag and add an attribute, named `Button`, and set it to the boolean: `true`.

Additional attributes:
- `DisplayName`: `string?`
- `UseText`: `string?` - This is the equivalent of DefaultHintText in defined interactables.
- `ShowName`: `boolean?` - By default, runtime interactables do not show their name. However, you can set DisplayName to a string or ShowName to true to show the name.

:::note
Runtime interactables currently cannot set a custom interaction range, it is always set to 7.5.
:::

The client `ModuleScript` **must** be named `ButtonClient`. It should return a table of the following type:
```lua
export type ButtonClient = {
	Began = () -> (),
}
```

The server `ModuleScript` **must** be named `ButtonServer`. It should return a table of the following type:
```lua
export type ButtonServer = {
	Began = (player: Player) -> (),
}
```

:::warning
Unlike other map code, ButtonServer receives a `Player` instance instead of a `Participant`.
:::
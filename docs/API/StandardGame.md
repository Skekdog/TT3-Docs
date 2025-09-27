---
sidebar_position: 2.75
---

# StandardGame

:::warning

This API is only accessible from the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

The StandardGame API is used to get, create, and modify base-game definitions of items, ammo, and interactables.

:::warning

This API will only return base-game items, ammo, and interactables. It will not return any custom items, ammo, or interactables.

:::

# Functions

## CopyModify

Copies the specified definition and applies the specified modifications.

:::note

To set a property to `nil`, you should use a table, like so: `{__nil = true}`.

:::

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `original` | `T where T = AnyItemDefinition \| AmmoDefinition \| InteractableDefinition` | | The original definition. |
| `modifications` | `{[PropertyName]: PropertyValue}` | | The modifications to apply. |

### Returns

`T where T = AnyItemDefinition | AmmoDefinition | InteractableDefinition`

## GetItem

Gets the specified `AnyItemDefinition`. Will error if the item is not found.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | | The name of the item. |

### Returns

`AnyItemDefinition`

## GetItems

Gets all `AnyItemDefinition` objects.

### Returns

`{[string]: AnyItemDefinition}`

## GetAmmo

Gets the specified `AmmoDefinition`. Will error if the ammo is not found.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | | The name of the ammo. |

### Returns

`AmmoDefinition`

## GetAmmos

Gets all `AmmoDefinition` objects.

### Returns

`{[string]: AmmoDefinition}`

## GetInteractable

Gets the specified `InteractableDefinition`. Will error if the interactable is not found.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | | The name of the interactable. |

### Returns

`InteractableDefinition`

## GetInteractables

Gets all `InteractableDefinition` objects.

### Returns

`{[string]: InteractableDefinition}`
---
sidebar_position: 2.75
---

# Items

:::warning

This API is only accessible from the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

The Items API is used to get, create, and modify base-game item definitions.

# Functions

## `GetItem`

Gets the specified `AnyItemDefinition`. Will error if the item is not found.

:::warning

This API will only return base-game items.

:::

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | | The name of the item. |

### Returns

`AnyItemDefinition`

## `GetItems`

Gets all `AnyItemDefinition` objects.

:::warning

This API will only return base-game items.

:::

### Returns

`{[string]: AnyItemDefinition}`

## `CopyModify`

Copies the specified `AnyItemDefinition` and applies the specified modifications.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `AnyItemDefinition` | | The item to copy. |
| `modifications` | `{[AnyItemProperty]: AnyItemPropertyValue}` | | The modifications to apply. |

### Returns

`AnyItemDefinition`
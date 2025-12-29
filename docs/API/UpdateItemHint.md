---
sidebar_position: 6
---

# UpdateItemHint

:::warning

This API is only accessible from the client.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Updates the item hint displayed for an item. This should be used over setting the property directly, as this will update the UI if needed.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `ItemDefinition` | | The item to update. |
| `fire` | `"primary" \| "alternate"` | | The hint to update. |
| `text` | `string?` | | The new hint to display. If nil, no hint will be displayed. |

#### Returns
`MapObject?`
---
sidebar_position: 7
---

:::warning

This API is only accessible from the client.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Creates a notification of the given kind with the given message.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `message` | `string` | | The message to display. |
| `kind` | `MessageKind?` | `"Chat"` | The kind of message to display. |

### Returns
`()`
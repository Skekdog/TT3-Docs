---
title: Notification
sidebar:
    order: 7
---

:::note

This API can be used from both the client and the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Creates a notification of the given kind with the given message.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `message` | `string` | | The message to display. |
| `kind` | `MessageKind?` | `"Chat"` | The kind of message to display. |
| `to` | `Player?` | | The player to display the message to. If `nil`, the message will be sent to all players. |

#### Returns
`()`
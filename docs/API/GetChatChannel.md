---
sidebar_position: 7.6
---

# GetChatChannel

:::info

This API can be used from both the client and the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Returns the `TextChannel` with the specified name. Currently there are two channels: `RBXGeneral` and `RBXSystem`.

This function will yield until the instance with the provided name is found. If the instance found is not a `TextChannel`, it will error.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `channelName` | `string` | | The channel name. |

#### Returns

`TextChannel?`
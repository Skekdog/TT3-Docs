---
title: GetRemote
sidebar:
    order: 2.8
---

:::note

This API can be used from both the client and the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Returns a `RemoteEvent` with the given name. If the remote is not found, it is created.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | | The name to give the remote. |
| `parent` | `Instance` | | The parent of the remote. Most often, this is `script`. |

#### Returns
`RemoteEvent`
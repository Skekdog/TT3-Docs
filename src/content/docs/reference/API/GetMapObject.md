---
title: GetMapObject
sidebar:
    order: 6
---

:::note

This API can be used from both the client and the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Returns a MapObject, given a descendant instance (or the instance itself), and a tag to search for. This is often used to find a character model, given a character part, or a prop, given a prop part.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `descendant` | `Instance` | | The descendant instance (or the instance itself) of the MapObject to find. |
| `tag` | `string` | | The tag to search for. |

#### Returns
`MapObject?`
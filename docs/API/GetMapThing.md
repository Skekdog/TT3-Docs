---
sidebar_position: 6
---

# GetMapThing

:::tip

This API can be used from both the client and the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Returns a MapThing, given a descendant instance (or the instance itself), and a tag to search for. This is often used to find a character model, given a character part, or a prop, given a prop part.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `descendant` | `Instance` | The descendant instance (or the instance itself) of the MapThing to find. |
| `tag` | `string` | The tag to search for. |

### Returns
`MapThing?`
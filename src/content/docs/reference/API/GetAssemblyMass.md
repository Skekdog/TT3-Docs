---
title: GetAssemblyMass
sidebar:
    order: 6.5
---

:::note

This API can be used from both the client and the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

:::caution

This API is expensive! Avoid calling it too often, such as every frame. It is fine to use otherwise.

:::

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `part` | `BasePart` | | A part of the assembly to get the mass of. Does not need to be the assembly root. |
| `countRopes` | `boolean?` | | If `true`, the mass of parts connected by ropes will be counted. |

#### Returns
`number`
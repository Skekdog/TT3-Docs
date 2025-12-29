---
title: GetMaterial
sidebar:
    order: 6.5
---

:::note

This API can be used from both the client and the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Returns the material of a part, using the `MaterialOverride` attribute if specified, otherwise, `BasePart.Material`.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `part` | `BasePart` | | The part to get the material of. |

#### Returns

`Enum.Material`
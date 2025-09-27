---
sidebar_position: 7.5
---

:::info

This API can be used from both the client and the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Displays an on-screen message to the player, with a specified format. Returns `nil` when called from the server, returns the resulting `TextLabel` when called from the client.

If format overrides are provided, they will be applied to the resulting `TextLabel`. Note that `Position` and `AnchorPoint` are not overridable.

## Formats

- `Standard`: A standard message in white text with a black stroke.
- `Error`: An error message in red text.
- `Info`: An info message in blue text.
- `Success`: A success message in green text.
- `Warn`: A warning message in orange text.

## Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `message` | `string` | | The message to display. |
| `format` | `Format` |  | The format to display the message in. |
| `formatOverrides` | `{LabelProperties: {[TextLabelProperty]: TextLabelPropertyValue}}?` | | A table of overrides to apply to the resulting TextLabel. |
| `to` | `Player?` | | The player to display the message to. No effect when specified on the client. Must be provided when called from the server. |

## Returns
`TextLabel?`
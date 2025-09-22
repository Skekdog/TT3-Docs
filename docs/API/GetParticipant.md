---
sidebar_position: 4
---

# GetParticipant

:::warning

This API is only accessible from the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Returns a Participant given their name, player object, character model, or instance of their character model. Returns nil if no participant is found.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `identifier` | `Instance \| string` | The participant's name, player object, character model, or instance of their character model. |

### Returns
`Participant?`
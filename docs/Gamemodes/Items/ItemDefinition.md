---
sidebar_position: 1
---

# ItemDefinition

`ItemDefinition` defines a generic item that can have custom behavior attached.

:::note

Items inherit from `CommonItemDefinition`; you can also specify those properties.

:::

## Properties

### Kind

`Type: "Item"`

Always set to "Item". Used to differentiate between classes.

### PrimaryHint

`Type: string?`

The hint shown for the primary action of the item.

### AlternateHint

`Type: string?`

The hint shown for the alternate action of the item.

### PrimaryToggled

`Type: boolean?`

If true, the primary action of the item is toggled (i.e, you must click LMB). If false, the primary action is triggered every frame until it is released.

### AlternateToggled

`Type: boolean?`

If true, the alternate action of the item is toggled (i.e, you must click RMB). If false, the alternate action is triggered every frame until it is released.

## Hooks

:::note

All functions are optional.

:::

### OnAlternateActivateClient

Called on the client when alternate fire is initially held down.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `AnyItem` | | The item. |

### OnAlternateDeactivateClient

Called on the client when alternate fire is released.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `AnyItem` | | The item. |

## Actions

:::note

All functions are optional.

:::

All client actions are called with the following parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `Item` |  | The item. |
| mode | `"Primary" \| "Alternate"` | The fire type of the action. |
| position | `Vector3` |  | The position that the action occurs at, usually the player's head. |
| direction | `Vector3` |  | The direction that the camera is facing. |

All server actions are called with the following parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `Item` |  | The item. |
| mode | `"Primary" \| "Alternate"` | The fire type of the action. |
| position | `Vector3` |  | The position that the action occurs at, usually the player's head. |
| direction | `Vector3` |  | The direction that the camera is facing. |
| participant | `Participant` |  | The participant that triggered the action. |

### PrimaryFireClient

Called when the primary action of the item is triggered.

### PrimaryFireServer

Called when the primary action of the item is triggered on the server.

:::caution

The `position` and `direction` parameters are supplied by the client. You should perform sanity checks to make sure they are not unreasonable. In future, these may be performed automatically.

### AlternateFireClient

Called when the alternate action of the item is triggered.

### AlternateFireServer

Called when the alternate action of the item is triggered on the server.

:::caution

The `position` and `direction` parameters are supplied by the client. You should perform sanity checks to make sure they are not unreasonable. In future, these may be performed automatically.

:::

## Schedules

:::note

All functions are optional.

:::

All schedules are run with the following parameters:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| item | `AnyItem` | | The item. |
| dt | `number` | | The delta time. |

### HeartbeatClient

Called on `RunService.Heartbeat` on the client.

### PreSimulationClient

Called on `RunService.PreSimulation` on the client.

### PostSimulationClient

Called on `RunService.PostSimulation` on the client.

### PreRenderClient

Called on `RunService.PreRender` on the client.

### PreAnimationClient

Called on `RunService.PreAnimation` on the client.
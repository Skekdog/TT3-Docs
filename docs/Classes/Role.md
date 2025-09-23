---
sidebar_position: 5
---

# Role

A loaded role. You can get a `Role` object using `Round:GetRoleFromRoleName()`, or through `Participant:GetRole()`.

# Properties

## Kind

`Type: "Role"`

Always set to "Role". Used to differentiate between classes.

## Definition

`Type: RoleDefinition`

The `RoleDefinition` of the role.

# Methods

## IsAlliedWith

Returns true if the role is allied with the given role.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `role` | `Role` |  | The role to check. |

### Returns

`boolean`

## GetFormattedName

Returns the name of the role, formatted with the role color using rich text.

### Returns

`string`

## GetExclamatoryString

Returns `"!"` if `RoleDefinition.IsExclamatory` is true, `"."` otherwise.

### Returns

`string`

## FormatString

Returns the string, formatted with the role color using rich text.

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | `string` |  | The string to format. |

### Returns

`string`
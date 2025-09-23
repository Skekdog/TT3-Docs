---
sidebar_position: 2
---

# BaseWeapon

These properties and methods are common to all weapon items (`GrenadeWeapon`, `GunWeapon`, `MeleeWeapon`).

# Properties

## Model

`Type: MapThing`

The model of the weapon. This is a clone of the model from `ItemDefinition.Model`.

## Extras

`Type: Extras`

Additional data for the specific weapon instance.

# Methods

## RunBeforeHit

`Signature: RunBeforeHit(item: ItemBeforeHit, round: Round, hitPart: BasePart, params: DamageParams) -> boolean`

Called by the system to run the each of the `ItemDefinition.BeforeHitAnything`, `ItemDefinition.BeforeHitProp` and `ItemDefinition.BeforeHitParticipant` functions on the server.

## RunOnHitClient

`Signature: RunOnHitClient(item: ItemBeforeHit, participant: Participant, hitPart: BasePart) -> boolean`

Called by the system to run the `ItemDefinition.OnHitClient` function on the client.
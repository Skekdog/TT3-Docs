---
sidebar_position: 4.5
---

# Highlight

Not to be confused with the Roblox [Highlight](https://create.roblox.com/docs/reference/engine/classes/Highlight), which is used to highlight a model.

Highlights are shown at the end of the round in the highlights page. They are used to show off notable things that players did throughout the round.

See also: [`Round:AddHighlight()`](/Classes/Round#addhighlight)

## Properties

### Title

`Type: string`

The title of the highlight.

### Description

`Type: string`

The description of the highlight.

### Group

`Type: string`

Highlights belong to groups - only one highlight from each group is shown when the game ends. When a highlight has the same group as another highlight, the one with a higher priority is shown.

### Priority

`Type: number`

Highlights with a higher priority are shown over highlights with a lower priority.
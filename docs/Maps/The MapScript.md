---
sidebar_position: 3
---

# The MapScript

The `MapScript` serves as the root of your map. It defines the properties of your map, such as the name, creators, icons, and custom features.

MapScripts should look like the following. If you know how to script, feel free to get creative! Otherwise, just follow the template below.

```lua
--!strict
-- Note: this line is a comment, as indicated by the double dashes.

local Types = require(game:GetService("ReplicatedStorage").Shared.RoundRule.Types)

local map: Types.MapDefinition = {
	Name = "replace this with your map name",
	Description = "describe your map. at present the description is never used, but you must still have it here.",
	Authors = "@username, @somebodyElse, etc.",

	MapIcons = {
		["16:9"] = "rbxassetid://assetId", -- Despite the 16:9, your map icon can be any size.
	},

	Gravity = 80, -- default is 80. Maps with lower gravity will also have lower fall damage.

	LightingSettings = {
		ClockTime = 14,
		OutdoorAmbient = Color3.fromRGB(255, 255, 255),
		-- You can continue adding other Lighting settings here. These are applied to the Lighting service that you can see next to Workspace.
		-- NOTE! Due to Roblox limitations, you can't change settings like LightingStyle or PrioritizeLightingQuality.
	},

	WaterSettings = {
		WaterColor = Color3.fromRGB(0, 0, 0),
		WaterWaveSpeed = 10,
		-- You can continue adding other Water settings here. These are applied to the Terrain instance that you can find in Workspace.
	},

	TerrainColors = {
		Brick = Color3.fromRGB(123, 123, 64),
		Asphalt = Color3.fromRGB(123, 23, 64),
		-- You can continue adding other colors here. These are applied to the Terrain instance, under the MaterialColors property.
	},

	InteractableDefinitions = {
		-- This defines how Interactables on your map will interact. We will cover Interactables later in the guide.
	},

	AvailableItems = {
		-- Your map can also define custom items. These will be covered in the Gamemodes guide.
	},

	AvailableAmmo = {
		-- Like above
	},

	Map = script, -- IMPORTANT! Your map will not work without this!
}

return map -- Also very important!
```
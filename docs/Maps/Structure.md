---
sidebar_position: 2
---

# Structure

To make a map, you will need to structure it in a certain way so that TT3 can understand how to load it. In general, you should have something like this:

```
- MapScript (ModuleScript)
	- Static (Folder)
	- Dynamic (Folder)
	- PlayerSpawns (Folder)

	- Terrain (TerrainRegion)
	- Lighting (Folder)
	- MaterialVariants (Folder)
```

Beyond this, there are no hard requirements on how your map is structured. So lets take a look at what each of these does:

- `Static`: This contains the static geometry of the map. This folder will not be reloaded when the map reloads, so it is important that nothing here changes or moves. In general, this means all parts should be anchored, and any scripts should not have an effect on the `Static` folder.
- `Dynamic`: This is the opposite of the `Static` folder. This folder is reloaded each time the map is loaded, and should contain everything that does change or move, like doors, props, weapon spawns, or scripted parts. Your map **must** have a `Dynamic` folder, even if it is empty.
- `PlayerSpawns`: This folder contains the spawns for players. When a player joins the round, they will spawn at one of these. Spawns **must** be `Parts`. Your map may not work correctly if this folder contains anything other than `Parts`.

- `Terrain`: This instance is loaded when the map first loads - it defines terrain created with the Studio terrain tools. Your (as-yet non-existant) map-making plugin contains a button to generate this instance from your map's terrain. You can omit this instance if your map doesn't have terrain.
- `Lighting`: Instances in this folder are copied to the `Lighting` service when the map first loads. You can use this if your map uses any lighting effects, like `ColorCorrection` or `Sky`. You can omit this folder if you don't need it.
- `MaterialVariants`: This folder will be copied into `MaterialService` when the map first loads. It should contain MaterialVariant instances. You can omit this folder if your map doesn't need it.

You will also have noticed the `MapScript` `ModuleScript`. This defines certain properties of your map, which we will cover in the next section.
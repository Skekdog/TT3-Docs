---
sidebar_position: 1.5
---

# Loading your map or gamemode

Once you have the general structure of your map or gamemode down, you may want to playtest and see it in action.

To do this, you must first upload it to Roblox:

- Select the root `ModuleScript` of your map or gamemode
- Right click, Save / Export, Save to Roblox
- Give it a name, doesn't matter what
- Make sure Content Type is set to `Development Item`
- and make sure Asset Category is set to `Model`
- and now Save
- When the upload is finished, click the link to configure your asset
- Enable `Distribute on Creator Store`

:::info

This will make your asset publically available; anyone will be able to download and use it.

:::

- and save your changes.

Once uploaded, you can now load it in TT3. To do this, create a free private server in the [Labs](https://www.roblox.com/games/118757439615813/) game, and join it. Once you have joined, you will have access to a console, where you can run commands to host your server.

To load a map, use the command: `map AssetId`<br/>
To load a gamemode, use the command: `forcegamemode AssetId`

Now if everything has gone well, you will be able to play your map or gamemode!
---
sidebar_position: 9
---

# Scripts

Maps can contain any number of `Scripts` to do just about anything. Add a `Script` instance and get coding! Note that scripts in the `Dynamic` folder will reload every round, whereas scripts in the `Static` folder will not.

To work correctly, client `Scripts` should have their `RunContext` set to `Client`; don't use `LocalScripts`.
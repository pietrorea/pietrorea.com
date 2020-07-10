---
title: "VS Code Insiders & Settings Sync"
path: /2020/03/30/vs-code-insiders-settings-sync 
date: 2020-03-30
author: Pietro Rea
layout: post
status: published
---

Like many developers, I often do my work on multiple machines. While I do not own a [day phone and a night phone][1], I do have three Macs that I could get work on: an iMac that I share with the family, a personal laptop and a work laptop.

This is usually not a problem when it comes to the actual source code. I can push to Github from one machine, pull from Github from another and resume. The problem that I’ve always struggled with is keeping my IDE settings in sync. 

I like tweak my key bindings, color themes and other settings to match my ideal workflow. So when I sit down at one of my computers and realize that I forgot to set up the Quick Open shortcut I use everywhere (`Cmd + Shift + O`), it feels like I put my shoe on the wrong foot.

I’ve made [several][2] [ill-conceived][3] attempts to sync over some of my settings, but nothing has stuck. Each app does settings differently, and in the end it seems like there’s a lot of manual setup and syncing that needs to happen anyway. If you’ve found a good solution that works for you, I’d love to know.

Syncing IDE settings has been such a long-running frustration for me that I had _almost forgotten_ that it’s possible to come up with a solution. That’s why when I read about [Visual Studio Settings Sync][4] I was somewhere between a “yeah right” and a “hmmm…”.

I’m happy to report that it works. It’s only available in the [Visual Studio Code Insiders][5] build, so I installed that on all my computers first. My extensions, key bindings and IDE preferences are now being synced perfectly.

I would love to to talk to the product manager in charge of VS Code because this app continues to impress me. I hope Xcode follows suit at some point but I’m not going to hold breath. I also hope that Apple comes out with a  generalized platform approach to give apps the ability to provide setting sync backed by iCloud. That would make owning several Macs much more palatable. 

[1]:	https://www.vanityfair.com/culture/2013/03/dave-morin-path-facebook-apple)
[2]:	https://github.com/pietrorea/dotfiles
[3]:	https://github.com/pietrorea/xcode-snippets
[4]:	https://code.visualstudio.com/docs/editor/settings-sync
[5]:	https://code.visualstudio.com/insiders/
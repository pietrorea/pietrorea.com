---
title: Taking notes with BBEdit 14, Working Copy and a self-hosted git repo
path: /2022/09/08/taking-notes-with-bbedit-14-and-a-private-git-server
date: 2022-09-08
author: Pietro Rea
layout: post
status: published
---

I take a lot of notes as I work during the day. I usually keep a running log of the work I'm doing for the day. It helps me think out loud and write proto-documentation for myself. It's a great way to remember what I was up to before.

Last October, as I quarantined in my son's bedroom, I decided to reorganize all my notes and update my note-taking process.

Previously, I used Ulysses for Mac to manage all my notes. I loved the design of the app and the syncing functionality, but I was starting to have performance issues. Opening Ulysses on my (then) new M1 Mac would sometimes take 5-10 seconds. It was even worse on my iOS device. I suspected there was _something_ in my big pile of notes that Ulysses didn't like. I contacted support but couldn't get to the bottom of it.

Enter BBEdit.

[BBEdit](https://www.barebones.com/support/bbedit/) is a text editor originally made for Macintosh System Software 6, over 30 years ago. It's not typically in the "note taking" app category but it's been a foundational app for generations of macOS users and developers.

## Migrating to BBEdit

Ever since the tedious migration process out of Evernote's proprietary format circa 2016, I'd insisted on keeping all my notes as plain text files. This is partially why I'd chosen Ulysses after Evernote since you could stick to plain text using their [external folders](https://help.ulysses.app/kb/guide/en/external-folders-ZfPYZQCwid/Steps/1048491) feature.

Next, I created a **BBEdit project** and added all my files to it. A BBEdit project (extension `.bbprojectd`) is a special kind of file that contains references to other files and folders. BBEdit projects let you work with related files without needing them to be located together on disk. If you're familiar with Xcode's project files, BBEdit projects work similarly.

There are many ways to customize BBEdit to work for you. Two notable changes I made:

- I re-mapped the shortcut for BBEdit's "Open File By Name" feature. This feature is usually called "Quick Open" in other apps and it's my primary way of navigating in VSCode, Xcode, Android Studio, Tower, etc. To reuse existing muscle memory, I re-mapped BBEdit's default shortcut to **⌘ + Shift + O** in System Preferences.
- I made BBEdit open my notes project open whenever it launches. By default, BBEdit doesn't open anything when you first launch the app. If you want to have a default file, folder or project that you want BBEdit to open on app launch, you can put it in BBEdit's "Startup Item" folder. I [symlinked](https://gist.github.com/pietrorea/c9c5597677eb3db5e3aa90cd0b4e1c1f) my notes project to the "Startup Item" folder to accomplish this.

## Setting up a git remote for my notes

My old note-taking workflows relied on Dropbox or iCloud drive to sync my notes to all my devices. This is where I lacked good options — I don't run the Dropbox native client on my Mac anymore and iCloud Drive is too non-deterministic for me.

This piece of my setup won't work for everyone, but I ended up going with git. My notes are often _about_ the things I have in source control, so as I'm slinging source code back and forth from a git remote, I figured I could do the same with my notes.

If it had been for anything else, I would have created a private repo in GitHub and called it a day. I ended up not wanting to put my years of thinking, planning and researching up on a public service, so I spun up a $5/month VPS instance from AWS Lightsail to be a dedicated git server.

This ended up being much simpler than I expected and I've had to do zero maintenance on this server this past year. After setting up your user account and SSH access on the VPS, just create a repo somewhere in your home directory and you're done. The trickiest part is getting the remote URL right when connecting from a git client (i.e. _[user]@[hostname]:~/[path-to-repo]/[repo-name].git_).

I read and write most of my notes on my Mac, where I alternate between using git on the terminal and [Tower](https://www.git-tower.com/mac). On iOS, I use [Working Copy](https://workingcopy.app) as my git client.

With this setup, there's the risk that I won't have my latest notes on my mobile device if I forget to push to the remote. This has only happened once in the year of having this setup, so I hasn't been a problem for me.

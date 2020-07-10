---
title: Tools of the Trade for iOS Development
path: /2015/11/8/tools-of-the-trade-for-ios-development
date: 2015-11-08
author: Pietro Rea
layout: post
status: published
---

During the past few years of doing mobile development I’ve found a number of tools that have saved me time and frustration. This is by no means a comprehensive list of all the tools out there, but rather the small set that I’ve found helpful. They are also not all limited to iOS development. Some will be helpful on other mobile platforms or for general software development.

These posts usually group apps into different categories but I’m going to list them in (roughly) the order that I started using them.

### [Xcode](https://developer.apple.com/xcode/)

Duh, right? Like many before, my journey into iOS began when I downloaded Xcode for the first time. These days I like to code using Xcode’s built-in Midnight theme. 
I also have [Alcatraz](http://alcatraz.io/) set up on my machine to manage my Xcode plugins. My favorite plugins are [BBUDebuggerTuckAway](https://github.com/neonichu/BBUDebuggerTuckAway), [DerivedData Exterminator](https://github.com/kattrali/deriveddata-exterminator) and [SCXcodeSwitchExpander](https://github.com/stefanceriu/SCXcodeSwitchExpander).

### [SourceTree](http://www.sourcetreeapp.com/)

SourceTree is my favorite git client (although I’ve also experimented with [Tower](http://www.git-tower.com/)). It works really nicely with Github and Bitbucket.

### [JIRA](https://www.atlassian.com/software/jira)

JIRA is Atlassian’s bug tracking software. I don’t find JIRA very useful when I'm building something from scratch. To me, any kind of bug tracking software becomes a lot more useful once you have something out there to fix, maintain or improve.

### [Sublime Text](http://www.sublimetext.com/)

Sublime Text is my favorite general purpose text editor. Even though iOS developers work with native code most of the time, there are times when we have to roll up our sleeves and dive into some HTML or CSS. I’ve also found Sublime to be a good tool for JavaScript.

### [xScope](http://xscopeapp.com/)

Designers hate it when your implementation looks nothing like their designs. Measuring pixel distances and aligning things in straight lines don’t come naturally to me so I use this little tool to help me implement UI designs to a high degree of fidelity. xScope includes tools such as rulers, overlays and guides.

### [Charles](http://www.charlesproxy.com/)

Charles is my favorite HTTP/HTTPS debugging tool. It’s a proxy that intercepts all network requests coming in and out of your app. I’ve come to love its "Map Local" feature to simulate “what-if” scenarios with your API.

### [Base](http://menial.co.uk/base/)

Base is a lightweight SQLite browser. I started using this tool when I was first learning about Core Data since Core Data is often backed by SQLite. You can use Base to find out exactly what's saved on disk.

### [Linguan](http://www.peerassembly.com/linguan.html)

Localizing an app to other languages by hand is no fun. To make matters worse, Xcode doesn’t provide a GUI to get the job done quickly. Linguan is the localization GUI Xcode should have had. This little tool has saved me hours of tedious manual labor.

### [Spark Inspector](http://sparkinspector.com/)

Attach Spark Inspector to your running app and it will show you a 3D model of your view hierarchy. Spark is useful when you’re debugging your layout or your views. I also hear good things about Reveal, although I’ve never tried it.

### [Deploymate](http://www.deploymateapp.com/)

When your app supports multiple versions of iOS, you have to be careful about [backward compatibility issues](http://www.raywenderlich.com/42591/supporting-multiple-ios-versions-and-devices). For example, if you use a new API that didn’t exist in an older version of iOS, your app will crash on older devices. Deploymate is a static analyzer tool that alerts you of this type of problem. I suggest using it before submitting a new version of your app to Apple.

### [Slender](http://martiancraft.com/products/slender.html)

You’re adding assets when you add new feature, but are you remembering to remove old assets when you remove old features? Probably not. Slender scans your project for assets that you no longer use so you can remove them.

### [Cocoapods](http://cocoapods.org/)

Cocoapods is the de facto dependency manager for iOS and Mac OS projects. If you want to add a third party library to your project, it’s as easy as adding a line of text to your Podfile and executing a terminal command. I can’t recommend it enough.

### [Crashlytics](https://try.crashlytics.com/)

Getting timely crash reports from users is essential to improving the quality of your applications. Crashlytics is one of many crash reporting tools available for iOS. I’ve also worked with Testflight, HockeyApp and Crittercism.

### [Kaleidoscope](http://www.kaleidoscopeapp.com)

Kaleidoscope is Black Pixel’s diffing tool. You can use it to compare text, images and directories but I mainly use it for comparing two different images. For example, I'll use Kaleidoscope to compare a mockup with a screenshot of my live UI. I then use this information to improve and iterate my UI implementations.

### [Simpholders](http://simpholders.com/)

One of the advantages of running your app on the iOS simulator is that you can inspect your app's file system using Finder. This is practically impossible on a physical device. The problem is that the iOS simulator is buried somewhere in ~/Library and its location changes with every version of iOS (or so it seems). Simpholders is a shortcut to the simulator directories that you can access from the menu bar.

If you think I’ve left out an important tool, please go ahead and let me know in the comments. Each tool listed on this post has either increased my productivity or increased the overall quality of the apps I've worked on. I’m sure I’ll be adding more tools to the list as time goes on. Enjoy!
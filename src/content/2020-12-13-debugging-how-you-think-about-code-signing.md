---
title: Debugging how you think about code signing
path: /2020/12/13/debugging-how-you-think-about-code-signing 
date: 2020-12-13
author: Pietro Rea
layout: post
status: draft
---

I’ve spent the last 2 weeks researching and writing about code signing and provisioning for my upcoming book [“iOS Distribution & Best Practices”](/2020/08/18/coming-soon-publishing-to-the-app-store-book).

During my research there were a number of things I found surprising. This post documents my personal gotchas in the hopes it could help someone. I also offer five specific tips on how you can fix any faulty thinking you might have around these two topics.

You’ll find this post more helpful if you already have some understanding of code signing and  provisioning. If you’re starting from scratch, check out the resources at the bottom of the post first.

## So why is it hard?

Code signing and provisioning routinely trump even the most experienced developers on Apple’s platforms. There are a few reasons for this: the system behind them is complex and opaque. The frequency of issues is also low. You might run into issues at most (hopefully) once per release and at least once or twice a year when a certificate expires.

On top of high complexity and low frequency, you're usually under time pressure when issues crop up. Code signing is one of the _last_ things before you submit a build for review. If the release is late, the last thing you want to do is read a programming guide on Apple’s developer site or watch a WWDC video. One common way to fix a code signing issue is to _basically try anything and everything_ until Xcode is happy. It sounds awful but that’s been my personal experience. Unfortunately, I don’t think I’m the only one.  

## Tip #1: Start with the why

A good place to start debugging how you think about code signing is by filling any gaping holes in **background context**. Why did this system come about? When I took the time to read about the origins of code signing, I stopped seeing a mess of unrelated chores and started to think in terms of producing a “plugin” that Apple's system could interact with.

You can trace back all your code signing woes to something that happened in New Jersey in the 70’s. All operating systems made by Apple descend from Unix by means of NeXTSTEP and BSD. In Unix (developed at Bell Labs in Murray Hill, NJ) all programs run with the same access and privileges a the user running them. This made sense back then because you probably programmed and loaded all your programs yourself! 

“You =  your apps” is not a good assumption in modern times. The programs you run are typically third-party apps you got from someone else and they should not have the same OS-level access as you in case they are malicious or compromised. 

So what did Apple do about this decades-old assumption? Apple designed and developed the **App Sandbox** and made it part of iOS/watchOS/tvOS from day one and rolled it out to macOS at the same time it introduced the Mac App Store. 

The App Sandbox enforces a strict separation between you and your apps and also separates each app from each other. Apple designed the App Sandbox to limit the damage a bad actor can inflict on your system if they get hold of an app.

As an iOS developer, I’d obviously heard of the sandbox but for some reason I erroneously thought it was just about access to the file system. This is actually not the case at all. The App Sandbox applies to a lot more: hardware, user files and data and to all interesting integrations with the system (the ability to send push notifications, integrate with the Health app, etc).

So how does this all relate to code signing and provisioning? A sandboxed app that wants access to something restricted must ask for permission from the OS and the user. **This permission-based system only makes sense if Apple can unambiguously and securely distinguish between apps**, which is what code signing and provisioning is all about. 

## Tip #2: Work backwards

Another problem I had with code signing was losing track of how different pieces related to each other. Think of all the “terms” you have to keep in your head: certificates, entitlements, app IDs, public keys, private keys, provisioning profiles, etc.

A way to solve this is by working backwards from an end goal. Now that you understand the historical need for the App Sandbox, your ultimate mission is to provide the sandbox with something that can answer its questions as your app tries to do restricted things at runtime. The end goal is to cobble together a **code-signed provisioning profile**, as shown in the image below (full credits to raywenderlich.com).

<img src="/ppDiagram.jpg" alt="Provisioning Profile" style="float:left"/>

If you only remember one thing from this blog post, remember this image. You can replace whatever mental image you have of provisioning profiles with this old-timey scroll. The App sandbox asks questions and the different portions of the provisioing profile answer them (e.g. Who are you? What do you want to access?).

**Bonus credit:** Why does a provisioning profile need to be code signed? A provisioning profile is a plain file (with `.mobileprovision` file extension). The digital signature certifies that no one has tampered with it. If the provisioning profile weren’t code signed, anyone could have changed your answers. Not only would the App Sandbox not be able to trust you, the whole system would crumble. 

## Tip #3: Learn to read provisioning profiles

If the end goal is to furnish a code-signed provisioning profile, then you have to know where they live and learn how to read them. As for where they are, Xcode downloads and imports all provisioning profiles into `~/Library/MobileDevice/Provisioning Profiles`. 

Provisioning profiles are files encoded in Cryptographic Message Syntax (CMS) so you can't just double-click on one to read it. Xcode doesn't provide a good way to peek inside your provisioning profiles, so what can you do?

You can either use the `security` command-line tool, like this:

```
security cms -D -i /path/to/example.mobileprovision
```

Or you can use Finder's Quick Look preview. Simply navigate to any `.mobileprovision` file and hit the space bar. You’ll see a graphical representation of your provisioning profile with all relevant sections:

<img src="/ppQuickLook.png" alt="Provisioning Profile Quick Look" style="float:left"/>

The big components to look for are the App ID, the list of entitlements and the certificate.

**Bonus credit:** Also learn how to read certificates, which you can find in the **Keychain Access** app. You can double click on them to inspect the details.

## Tip #4: Understand what invalidates provisioning profiles

Now that you’re a pro at reading provisioning profiles, make sure you understand the scenarios that can invalidate them. The old-timey scroll from Tip #2 will help here. 

A provisioning profile contains different parts. Basically any change to any of them will invalidate the whole thing.  Some examples:

- Any change to the list of entitlements. For example, adding a new capability in the developer portal or in Xcode invalidates all previous provisioning profiles for that app.
- Anything that invalidates the embedded certificate also invalidates the related provisioning profile. Either you or Apple can revoke a certificate or it can expire naturally after one year. 
- Not having the associated private key doesn’t technically invalidate a provisioning profile but you won’t be able to code sign it anymore.

## Tip #5: Understand where artifacts originate and how they propagate

One of the primary sources of confusion for me was the fact that provisioning profiles are _everywhere_. You see them on the developer portal, inside a hidden folder on your Mac, in Xcode, and even embedded in the final binary. It’s a similar story for certificates and entitlements. 

If you're already unsure about what these artifacts are and how they relate to each other, seeing them literally everywhere makes it ten times worse. Apple trying to be helpful by automatically generating some of these also makes it worse because now there’s no single source of truth (which used to be the developer portal) and you see these artifacts in even more places.

You should aim to be clear about where certificates, entitlements and provisioning profiles originate and how they move through your development environment.

- **Certificates** originate as certificate signing requests that you give Apple to sign. Xcode can do this on your behalf. The public key goes on an amazing journey as part of the provisioning profile (see below) while the private key lives a secreet life in Keychain Access.
- **Entitlements** get tacked onto an App ID in the developer portal. Xcode can also do this for you in the Capabilities menu. Entitlements also go on an amazing journey as part of the provisioning profile (see below).
- **Provisioning profile** originate in the developer portal when you combine the right ingredients or Xcode can get you one. Once you get one on your machine, it lives in a hidden `Library` folder, where Xcode  grabs at build time. Then the provisioning profile gets embedded into the final binary and goes into your users’s devices. The information gets  copied into the digital signature.

## Some parting thoughts

This post has mostly been a journey into my own mind. The five tips are five things I clarified for myself as I wrote the chapter on code signing and provisioning. You can also refer to the resources I found most helpful. 

Please note that most programming guides below refer to the App Sandbox on the Mac. Apple understandably writes very little about its “runtime policy system” but you can piece some things together by reading these Mac-specific documents. 

Apple wrote them when it was first rolling out the sandbox to existing Mac developers and the documents themselves are mostly deprecated now so tread with caution.

1. [WWDC 2012 - Session 414: Building Archiving and Submitting Your App](https://asciiwwdc.com/2012/sessions/414)
1. [WWDC 2013 - Session 710: A Practical Guide to the App Sandbox](https://asciiwwdc.com/2013/sessions/710)
1. [App Sandbox Design Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html)
1. [Code Signing Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html)
1. [Technical Note TN2415: Entitlements Troubleshooting](https://developer.apple.com/library/archive/technotes/tn2415/_index.html#//apple_ref/doc/uid/DTS40016427-CH1-TP-ENTITLEMENTS_OVERVIEW_DIAGRAM)


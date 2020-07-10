---
title: "Publishing Your First Cocoapod"
path: /2018/06/12/publishing-your-first-cocoapod 
date: 2018-06-12
author: Pietro Rea
layout: post
status: draft
---

## Getting Started

As an iOS developer, you've probably used [Cocoapods](https://cocoapods.org/) to manage your code dependencies. Although there are other package managers out there like [Carthage](https://github.com/Carthage/Carthage) and [SwiftPM](https://swift.org/package-manager/), Cocoapods is by far the most popular package manager in the iOS community as of this writing. 

If you're anything like me, you have probably used Cocoapods for a while on a variety of different iOS projects but have never contributed a pod back to the community. In this post, I'll go through the mechanics of publishing your first pod, as well as give you some ideas of what you can publish. 

**Disclaimer**: I don't claim to have a long history of open source contributions. My [first Cocoapod](https://github.com/pietrorea/SpringAnimationController) only has three stars on Github and one confirmed user (me). I'm writing this blog post not as someone who has been doing this for years, but with fresh eyes, hoping it might be helpful to someone else who's been thinking about dipping their toe.   

## The mechanics

I'm not going to go through the basics of settings up Cocoapods or how to use it. If this is your first time using Cocoapods, I recommend [this excellent tutorial by Joshua Greene](https://www.raywenderlich.com/156971/cocoapods-tutorial-swift-getting-started). Before continuing with the rest of the article, you should already be familiar with using a `Podfile` to pull in different pods with `pod install`.

### Registering with Trunk

Before you can publish your first pod, you first need to register with **Trunk**, Cocoapod's authentication service. Run this command in your terminal to get started:

```
$ pod trunk register your@emailaddress.com 'Your Name' --description='Session name'
```

Trunk will send you an email with a verification link you'll need to click to authenticate. After this happens, Trunk starts a session tying your computer with your email account. 

You might be wondering why you need to register with Cocoapods at all if you're contributing open source software. Can't anyone contribute to open source? The reason is related to the concept of pod _ownership_. For example, if you're the author of a popular pod that folks depend on (e.g Alamofire), Cocoapods wants to make sure that you and only you are able to push updates.

Once you click the link in the verification email, you can double check that you have an active Trunk session by running the following command:

 ```
 pod trunk me
 ``` 
 
 You should see something similar, except with your name and contact information:

```
  - Name:     Pietro Rea
  - Email:    pietro@sweetpeamobile.com
  - Since:    June 10th, 16:02
  - Pods:
    - SpringAnimationController
  - Sessions:
    - June 10th, 16:02 - October 18th, 23:12. IP: 00.00.00.00 Description: mbp
```

If you haven't published any pods, you won't have anything listed under `Pods`. You may also see multiple entries under `Sessions` if you have Trunk running in multiple locations like your work computer and your home computer.

## Setting up the template

If you've browsed through different pods before, you'll know that a Cocoapod contains several components:

- A sample project
- A helpful README.md
- A license for sharing the poc
- Finally, a code that makes the pod useful!

You can take care of most of the boiler plate and file structure by using the default pod template. In your terminal, run the following command to pull it down:

```
pod lib create SpringAnimationController
```

I'm using using `SpringAnimationController` for demonstration purposes. You would use your pod name instead. 

After you're finished cloning the template repo, Cocoapods will ask you a series of questions about the kind of pod you want to create (e.g. Swift vs. Objective-C). 

- What platform do you want to use? [ __iOS__ / macOS ]
- What language do you want to use? [ __Swift__ / ObjC ]
- Would you like to include a demo application with your library? [ __Yes__ / No ]
- Which testing frameworks will you use? [ __Quick__ / None ]
- Would you like to do view based testing? [ __Yes__ / No ]

Most of these should be fairly simple to answer. Definitely answer **Yes** to the question that asks you about a demo project. Adding a simple demo app showcasing the main features of your pod will give developers a chance to see your code in action without requiring them to do any integration work upfront.

Note that the last two questions are about testing frameworks. Remember that you can always have a regular test target that uses the built-in **XCTest**. Using the testing frameworks Cocoapods is offering to add would be on top of any **XCTest** testing you may want to do.

I won't be covering testing your pod with these frameworks, but it's good to know that they're there. If you want to learn more, you can look more into [Quick](https://github.com/Quick/Quick) (Swift/Objectiv-C),  [Kiwi](https://github.com/kiwi-bdd/Kiwi) (Objective-C only) and Facebook's [iOSSnapshotTestCase](https://github.com/uber/ios-snapshot-test-case/).

## Making changes to your podspec

If you've used Cocoapods before, you're probably familiar with the `Podfile`, where you can specify the pods you want to pull down and use. As an pod publisher, however, you will be dealing mostly with the `podspec` file.

Open up the podspec file that Cocoapods generated for you. In my case, it is **SpringAnimationController.podspec** located in the root folder. It should something like this:

```ruby
Pod::Spec.new do |s|
  s.name             = 'SpringAnimationController'
  s.version          = '0.1.0'
  s.summary          = 'A short description of SpringAnimationController.'
  s.description      = 'Add your description here'
  s.homepage         = 'https://github.com/pietrorea/SpringAnimationController'
  # s.screenshots     = 'www.example.com/screenshots_1', 'www.example.com/screenshots_2'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'pietrorea' => 'your@email.com' }
  s.source           = { :git => 'https://github.com/pietrorea/SpringAnimationController.git', :tag => s.version.to_s }
  # s.social_media_url = 'https://twitter.com/pietrorea'

  s.ios.deployment_target = '8.0'
  s.source_files = 'SpringAnimationController/Classes/**/*'
end
```

Like the `Podfile` your podspec is a simple Ruby file. Some fields are required and others are optional. At a minimum you should change the following:

- Change **s.version** if you want your initial pod version to be something other than 0.1.0.
- Fill out **s.summary** (up to 140 characters) and **s.description** (a longer description) to tell your users what your pod does!
- Change your deployment target as needed. The default as of this writing is iOS 8. Note, however, that this can limit the potential audience of your pod if you bump the deployment target to the newest version of iOS.

**s.screenshots** and **s.social_media_url** are optional but good to have to market your pod and to provide an easy way for developers to get in touch with you other than email. Some of the bigger projects have standalone Twitter accounts, but you can use your personal account here.

There's a lot more you can do with your podspec, like adding dependencies and resource bundles. You can check out the [full podspec documentation](https://guides.cocoapods.org/syntax/podspec.html#specification) if you need to use these more advanced features.

Before moving on to the next section, take a look at **s.source_files**. This field holds a [**file pattern**](https://guides.cocoapods.org/syntax/podspec.html#group_file_patterns) describing which files Cocoapod should include in the final pod. You can include and exclude different types of files, but mostly you'll just want to include all the files in a particular directory.

## Moving over your code

I already had all the code I wanted to include in my pod since it was part of an older side project. In my case, all I had to do was add my code to the right folder in the default template and make some minor modifications.

If not already open, go ahead and open **SpringAnimationController/Example/SpringAnimationController.xcworkspace**. 

![](https://pietrorea-images.s3.amazonaws.com/Screen-Shot-2018-06-13-at-10.27.44-PM.png)

This Xcode workspace file contains a target for your demo project, a target for your pod and targets for any dependencies your pod may have. All your pod's code should go in the **DevelopmentPods** group in the **Pods** target. Your demo app code should go in the **SpringAnimationController** target.

**Note:** The only thing I had to change from my original code was related to **access control**. Normally when you're working in an app, you don't have to think much about access control. Almost everything is within the app's **module** so entities will either use the default access control (i.e. `internal`) or `private`/`fileprivate`.

When you're working on your pod, you're actually in a different Swift **module** so you'll have to make almost everything `public` to make it visible in the host app. For example:

```swift
public class SpringAnimationController: NSObject {

    private static let defaultTransitionDuration: TimeInterval = 0.45
    private static let defaultSpringDamping: CGFloat = 0.70
    private static let defaultInitialSpringVelocity: CGFloat = 0.9

    public var transitionDuration: TimeInterval = SpringAnimationController.defaultTransitionDuration
    public var springDamping: CGFloat = SpringAnimationController.defaultSpringDamping
    public var springVelocity: CGFloat = SpringAnimationController.defaultInitialSpringVelocity

    let isPresenting: Bool
    
    public init(isPresenting: Bool) {
        self.isPresenting = isPresenting
    }
}
```

The `SpringAnimationController` class is accessible in the host app, as are the properties `transitionDuration`, `springDamping` and `springVelocity`. However, `isPresenting` has no access control specifier so it defaults to `internal`, accessible everywhere in the pod's module but inaccessible from the host app.

## Testing and publishing

Once you're done with your pod 

## What should I publish?

## Marketing





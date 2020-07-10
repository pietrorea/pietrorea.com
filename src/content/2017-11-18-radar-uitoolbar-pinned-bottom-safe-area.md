---
title: "Radar: UIToolBar pinned to bottom of the safe area broken on iPhone X"
path: /2017/11/18/radar-uitoolbar-pinned-to-bottom-of-the-safe-area-broken-on-iphone-x
date: 2017-11-18
author: Pietro Rea
layout: post
status: published
---

**Update 2017-12-04**: "Engineering has determined that your bug report (35633289) is a duplicate of 34404165 and will be closed."

For the [99 reddits](https://itunes.apple.com/us/app/99-reddits/id474846610?mt=8) app, I updated the UI to respect the "safe area" in iOS 11. One of the view controllers made use of a UIToolBar, which doesn't look right on iOS 11 when I attach the bottom of the toolbar to the bottom of the safe area (see attached screenshot).

Filed as rdar://35633289 and on [Open Radar](http://www.openradar.me/35633289). 

## Summary:
On an iPhone X, when you add a standalone UIToolBar to a view controller and add a constraint from the bottom of the UIToolBar to the bottom of the its view controller's safe area, the bar button items appear outside the UIToolBar. It works perfectly on an iPhone 8.

## Steps to Reproduce:
1) In a storyboard file, add a UIToolbar to the initial view controller.
2) Add three constraints: trailing to the safe area's trailing edge, leading to the safe area's leading edge, and a constraint going from the bottom of the UIToolbar to the bottom of the view controller's safe area.
3) Build and run on an iPhone X.

## Expected Results:
* The UIToolBar looks the same as if it had been the tool bar of a UIToolBarController.

## Actual Results:
* The bar button items in the UIToolbar appear above and outside the enclosing toolbar.

## Version 
iOS 11.1 (15B87)

## Configuration
- iPhone X
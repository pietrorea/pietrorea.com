---
title: "My favorite bug of 2018 "
path: /2018/12/10/my-favorite-bug-of-2018
date: 2018-12-10
author: Pietro Rea
layout: post
status: published
---

The last days of 2018 are upon us! It’s a time for introspection, new resolutions and `DateFormatter` bugs.

Someone reported a curious bug in an iOS date picker that I help maintain. When selecting one of the last days of 2018, the date picker would incorrectly think the date was in 2019. For example, picking 12/31/2018 would come back as 12/31/2019.

It turned out this was not a bug with the date picker, but rather how I wrote a particular date format. To illustrate my favorite bug of 2018, let’s start by creating a `Date` for the last day of 2018:

```swift
let calendar = Calendar.current
let lastDayOf2018Components = DateComponents(calendar: calendar, year: 2018, month: 12, day: 31)
let lastDayOf2018 = calendar.date(from: lastDayOf2018Components)
```

Let’s say you want to display the date as “Dec 31, 2018” so you code up a reasonable looking `DateFormatter`:

```swift
let dateFormatter = DateFormatter()
dateFormatter.dateFormat = "MMM d, YYYY"
```

Date formatter in hand, you go ahead and generate the string representation for the last day in 2018.

```swift
let dateToDisplay = dateFormatter.string(from: lastDayOf2018)
print(dateToDisplay)
```

However, the reasonable looking date formatter prints out “Dec 31, **2019**” instead of “Dec, **2018**”.  This is because I used **YYYY** instead of **yyyy** in the date format.

This is such a common gotcha that it gets a prominent shoutout in [Apple’s Data Formatting Guide][1]

> A common mistake is to use YYYY. yyyy specifies the calendar year whereas YYYY specifies the year (of “Week of Year”) used in the ISO year-week calendar. In most cases, yyyy and YYYY yield the same number, however they may be different. Typically you should use the calendar year.

What would it take to prevent this subtle bug? You either need to be the kind of developer that reads Apple’s programming guides cover to cover or you need to become the grizzled iOS developer that intimately knows all the warts in Foundation.

[1]:	https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/Articles/dfDateFormatting10_4.html
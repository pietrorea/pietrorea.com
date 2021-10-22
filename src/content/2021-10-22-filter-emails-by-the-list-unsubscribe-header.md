---
title: Filtering emails by the List-Unsubscribe header in Fastmail
path: /2021/10/22/filter-emails-by-the-list-unsubscribe-header 
date: 2021-10-22
author: Pietro Rea
layout: post
status: published
---

I get too many emails. You get too many emails. Everyone gets too many emails. It's such a reality of digital life that no one really talks much about it anymore. 

The onslaught is seemingly unstoppable. Every new online account is liable to become another source of unwanted email. Innocuous interactions like getting a "digital receipt" at the store or joining a "loyalty program" at a restaurant just means one thing: spam. 

Back when I mostly used Gmail, I used to manually create filters to weed out senders that didn't respect my unsubscribe requests. Since I moved to [Fastmail](https://fastmail.com) a couple of years ago, this became much simpler with the most underrated feature in the history of email: filtering by email header. Specifically, filtering by the **List-Unsubscribe** header.

**Note**: As far as I know, Gmail does not support filtering by email headers. For the adventurous, you *may* be able to do it with [Google Apps Script](https://developers.google.com/apps-script/).

## What is the List-Unsubscribe header?

In 2003, the U.S Congress passed the [CAN-SPAM Act](https://www.ftc.gov/sites/default/files/documents/cases/2007/11/canspam.pdf) to restrict and slow down the oncoming avalanche of unsolicited emails. The opt-out links you see at the bottom of some emails? That's one of the things that the CAN-SPAM Act introduced.

Another opt-out mechanism, described in [RFC-2369](https://datatracker.ietf.org/doc/html/rfc2369), is the **List-Unsubscribe** email header.

From the RFC:

> The List-Unsubscribe field describes the command (preferably using
   mail) to directly unsubscribe the user (removing them from the list).
>
>   Examples:
>
>     List-Unsubscribe: <mailto:list@host.com?subject=unsubscribe>
>     List-Unsubscribe: (Use this command to get off the list)
>         <mailto:list-manager@host.com?body=unsubscribe%20list>
>     List-Unsubscribe: <mailto:list-off@host.com>

In theory, every email you receive from an mailing list must include this header, which describes a programmatic way to unsubscribe. This is how email clients implement the 1-click unsubscribe feature you see sometimes:

<img src="/emailUnsubscribe.png" alt="Unsubscribe from an mailing list in the Mail app on a Mac."/>

This header just gives you an additional (albeit faster) way to unsubscribe from mailing lists once they've already sent you email. It's better than nothing but it doesn't prevent you from getting or seeing those emails in the first place.

The most valuable thing about the List-Unsubscribe header is not what it lets you do, but its **presence or its absence**. If it's there, the email is from a mailing list. If it's not there, it's either a transactional email you probably need or, better yet, it's from a person.

## Setting up the filter

In the Fastmail web client, go to **Settings > Filters & Rules** and create a filter with two rules:

1. A header called **List-Unsubscribe** must exist.
2. Sender is not a member of group **unblocked-list.**

The second step is optional. I have it because I find that I do want emails from a very small number of mailing lists (e.g. my children's school). If you want an "allow list" like this, first go to **Contacts** and add a contact group. 


When you want to let a mailing list through to your inbox, you have to log into Fastmail and add the email address to the group. Still a manual step, but I find that I do this less often than when I used to to create bespoke email filters.

This is what my filter looks like:

<img src="/listUnsubscribeFilter.png" alt="Unsubscribe from an email list in the Mail app on a Mac."/>

I browse the "lists" folder maybe a couple times a month, and almost never have to manually add email addresses to the 
"unblocked-list" group.

Compared to my Gmail account, which currently has **over 100 filters** to silence noisy mailing list spam, my Fastmail account just relies on this one. Filtering by email header is by itself worth the price of Fastmail.
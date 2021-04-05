---
title: No more magic
path: /2021/04/04/no-more-magic 
date: 2021-04-04
author: Pietro Rea
layout: post
status: published
---

Hurricane Sandy hit New York City three months into my first job as a software developer. At the time, I was working for the [Huffington Post](https://www.huffingtonpost.com) in Manhattan. HuffPost’s data centers were also in Manhattan and [they got hit hard](https://buzzfeed.tumblr.com/post/34607165930/major-media-isp-goes-down):

> “Datagram, the ISP whose Manhattan servers host BuzzFeed, Huffington Post, Gawker, and other sites, has lost power, an official there told us via text this evening.”
>
> “Basement flooded, fuel pump off line - we got people working on it now. 5 feet of water now,” the official wrote.

HuffPost had backup servers, but unfortunately they were across the Hudson River in New Jersey. The whole system went down. The native apps I worked on didn’t work at all and huffingtonpost.com redirected to a Tumblr for a while.

As I remember the story, HuffPost’s CTO [John Pavley](https://pavley.com) went to the flooded data center himself to help get things up and running again. We also got some help from HuffPost’s then-parent-company AOL to get some servers set up in Dulles. 

Back then, I remember thinking to myself that I would have no clue how to handle this situation if I were in Pav’s shoes. I didn’t have the slightest idea about the inner workings of a data center.  

Even as the years went on and I worked on different things, I knew that the software I wrote  ran _somewhere_, likely somewhere in the _cloud_. In practice, I never had to worry about where my software ran. The physical machines were all abstracted away.

Recently, that all changed. The application I’m working on runs on very specific hardware and does not perform well in a virtualized environment. Can’t use AWS or Linode or anything like that. Meaning, I had to roll up my sleeves, and build some “bare metal” servers. 

I bought the parts, built the servers, installed Linux, set up the application, and shipped them out to the data center. It was during this process that I realized that I was still holding on a lot of the “magic” that I first felt in my HuffPost days.

<img src="/servers.jpg" alt="Ubuntu servers" style="float:left"/>

As it turns out, a sever is just another computer. It has a processor and memory and storage and all the other parts you know about. Data centers are filled with nice, helpful people that receive the boxes you send them and rack your servers.

The funny thing is that already knew all of these things. I learned about the [Turing machine](https://en.wikipedia.org/wiki/Turing_machine) and the [von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture) in school. Essentially, all computers all the same, right? And they can all compute the same things and only differ in their performance characteristics.

I _intellectually_ knew these things but I was expecting to need some secret sauce, some healthy serving of reality to layer on top of the theory. There was none. It's really just a computer.

This is not the same as impostor syndrome. That’s separate. The best term I have for it is "believing in magic”, which I would describe as a combination of grogginess and discomfort towards certain topics in computing.

The opposite of accepting magic is possessing “technical fearlessness”. Engineers who posses this type of fearlessness can move up and down the entire computing stack with ease, much like a violinist shifts positions as she plays a concerto. 

They’ll disassemble, reverse-engineer, hack, and finally, invent. They possess the humility to accept that they don't know everything (no one does), while simultaneously (and paradoxically) moving with a deep-seated confidence that there's nothing in computing that's outside their reach.

So how do you get there? You could chip away at the magic organically as you work on different things throughout your career. But that might be too slow. I do believe there's a canon of work that every technologist should learn, which includes both theory and engineering. But here's the kicker: you can't just learn it intellectually. 

To go from the abstract to the fearlessness, you have to build as you go along. [Matt Might's list](http://matt.might.net/articles/what-cs-majors-should-know/) is a good starting point. But since the goal of the list different than what I’m talking about here, I’d remove some things and add some others.

So here’s my message to all current and aspiring technologists: seek out the magic, kill the magic. 

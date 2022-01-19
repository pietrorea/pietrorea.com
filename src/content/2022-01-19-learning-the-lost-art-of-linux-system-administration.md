---
title: Learning the lost art of Linux system administration
path: /2022/01/19/learning-the-lost-art-of-linux-system-administration 
date: 2022-01-19
author: Pietro Rea
layout: post
status: draft
---

Ten years into my career, one of the skills I wish I'd learned earlier is basic Linux administration. Specifically in relation to hosting something on the web, be it a basic website or API that I wrote myself, or something made by others, such as Wordpress or something from the thriving [self-hosted community](https://github.com/awesome-selfhosted/awesome-selfhosted).

It's easy to become a software developer and never learn this. I didn't learn it in university — there wasn't a single course that covered setting up a LAMP stack.  I also didn't learn it as a mobile dev. The App Store handles all the hosting and distribution for your app. And even as I began to work on web development, even at a team size of 20-30, it was never my job to keep keep the servers running. The bigger the company, the more likely you'll be locked out of everything in production, rightfully so.

If you, like me, believe that basic server maintenance is a dying art, why is this happening? How did it come about? I've identified at least two reasons. The first one is tooling. For example, at the time of this writing I host this site on Netlify. It's free and they handle everything related to deployments, SSL certs, etc. All I have to do is `git push` and the GitHub webhook handles the rest. With the proliferation of [static site generators](https://jamstack.org/generators/), there's no shortage of services that help you do this, often for free.

As second reason is cultural. As cloud providers got more popular over the past decade, we as an industry internalized that whatever came before was necessarily harder, uglier, impossible to manage. We left behind the barbaric world of setting up your own hardware and running your own servers. Good riddance!
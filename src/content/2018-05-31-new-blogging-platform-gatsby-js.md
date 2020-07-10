---
title: "New Blogging Platform: Gatsby.js"
path: /2018/05/31/new-blogging-platform-gatsby-js 
date: 2018-05-31
author: Pietro Rea
layout: post
status: published
---

You know you're a developer when you've spent more time moving your  blog from platform to platform instead of actually writing blog posts.

Until recently, this blog was hosted on [Squarespace](http://squarespace.com), which I still recommend to anyone who wants to host a website with minimum hassle.

In my case, I wanted to learn more about statically generated sites so I decided to leave Squarespace's high-touch walled garden for something that I could implement myself.

If you're interested in static site generators, the first thing you realize is that there are lots and lots of frameworks to choose from. There's a site called [StaticGen](https://www.staticgen.com) that lists all the popular static site generators and lets you filter them by programming language, template tool (e.g. [Handlebars](https://handlebarsjs.com), [Jade
](https://github.com/dscape/jade), etc) and popularity on GitHub.

In my particular case, I wanted to do something in JavaScript, so it came down to using either [Next.js](https://nextjs.org/learn/) or [Gatsby.js](https://www.gatsbyjs.org). Gatsby uses React.js and GraphQL, which I wanted to learn for work, so I settled on Gatsby.

## Gatbsy First Impressions

I particularly like the "development workflow" of writing with Gatsby. Whenever I want to write a new blog post, all I have to do is create a new Markdown file and run `gatsby develop` to see a live preview of my writing at `http://localhost:8080/`. Gatsby uses [webpack](https://webpack.js.org) for hot reloads, so I can see my changes re-rendered on the browser as soon as I save the Markdown file on my machine.

The deployment process is similarly simple. Once I'm happy with a post, a simple `yarn deploy` runs a script that syncs Gatsby's local public folder with an S3 bucket that I set up to serve this site. AWS's Route 53 directs traffic from my custom domain to this S3 bucket and voilà. Gatsby's documentation on deploying to S3 was a bit sparse, so I may write a detailed blog post about how to do it.

Note that I deviated from the standard Gatsby setup in one important way. Most Gatsby installations have the site and the content in the same git repo. In my setup, the [site](https://github.com/pietrorea/gatsby-blog) and the [content](https://github.com/pietrorea/blog) are separate. I did this to future proof my blog. If I decide to change from Gatsby to something else in the future (Swift static site generator, anyone?), this separation of concerns will make it easier. 

## Write More Using This One Weird Trick

Something surprising happened as a result of using Gatsby to write this blog post. Using the same workflow and tools that I use for software development to write prose somehow reduced my writer's block. 

Maybe my brain strongly associates sending PRs and running terminal commands with work that I do everyday, so I might just have tricked my brain into thinking I was coding instead of writing.

##//TODOs in order of priority

As of this writing, there are lots of features missing that you would typically find in a personal blog. I basically took Kyle Matthew's excellent [starter project](https://github.com/KyleAMathews/gatsby-starter-default) and made a few changes here and there.

Some startup person once said that if you're not embarrassed by the first version of your product, then you launched too late. Well, right now the `https` version of this site doesn't take you anywhere, and that's embarrassing.

Here's a short list of improvements coming soon:
- [ ] HTTPS / SSL support
- [ ] Add RSS feed
- [ ] About page / resume / CV 
- [ ] Add Pagination
- [ ] Add CloudFront CDN (related to HTTPs)
- [ ] Write Swift static site generator
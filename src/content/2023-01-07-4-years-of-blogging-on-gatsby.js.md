---
title: 4 years of blogging on Gatsby.js, a retro
path: /2023/01/07/4-years-of-blogging-on-gatsby.js
date: 2023-01-07
author: Pietro Rea
layout: post
status: published
---

It's been over four years since I started building my blog on Gatsby.js. It's common to read blog posts about moving your blog over to a new platform ([here's my post](/2018/05/31/new-blogging-platform-gatsby-js) from 2018), but I find it much more valuable to read about how it went for those people after using the new platform for a while.

Four years after moving to Gatsby.js, I've averaged between 3 and 4 blog posts a year. During this time, I've also had over 22k visitors, averaging to ~400 visitors per month. Not a large site or audience by any means, but I definitely wrote more and had more readers than before.

> “Can’t repeat the past?…Why of course you can!” - Jay Gatsby

Trying to put myself in my 2018 shoes is difficult, but I remember moving to Gatsby with several goals in mind. Here's what they were:

- Learn more about React and GraphQL, which I had started to use for work.
- Get more freedom with with the look and feel of my site. I felt constrained by Squarespace and Wordpress theme.
- Achieve ease of maintenance. I did not want worry about running Wordpress (upgrades, backups, plug-ins, etc).
- Fourth (probably too low on my list, come think of it), I wanted to write more. I felt stifled by the clunky WYSIWYG editors I'd previously had to use, so I wrote very little. The idea of writing blog posts in plaintext, using Markdown, was appealing at the time.

## Things that went well

> “The truth was that Jay Gatsby, of West Egg, Long Island, sprang from his Platonic conception of himself." - Nick Carraway

I met my learning goals. This site is a small, low-effort, project that made me more comfortable with React, and to a lesser extent, GraphQL. The _real_ learning actually came from work, circa 2018-2019, where I used both of these in real web apps.

Something else that panned out was the degree of customization I was achieved. My current blog still looks a lot like the Gatsby starter project, but the typography, colors and layout are all mine. I particularly liked the way Gatsby handles [creating pages](https://www.gatsbyjs.com/docs/creating-and-modifying-pages/) (about, archive, etc.). To create a new page, all you need is a new React component in `src/pages` and you're done.

Gatsby's rich plugin ecosystem was also good. I kept it simple with `gatsby-plugin-google-analytics` for GA, `gatsby-plugin-feed` to generate an RSS feed and a few others. Configuring Gatsby packages was not ideal — you have to maintain `gatsby-config` with an entry for each plugin, which sometimes includes inline GraphQL queries. This method of configuration left me wanting.

Maintenance was both good and bad. If this site were a car, and we were tracking maintenance costs by _cents per mile_, this setup would be extremely inexpensive in time and money. There were a couple of discouragingly frustrating upgrade cycles but, amortized over 4 years, they were not a big deal.

[Netlify](https://netlify.com) made hosting and deployment free and easy. I started off in an S3 bucket fronted by a CloudFront distribution, which I would not recommend if you don't want to think about hosting or deployment. Netlify is a spiritual descendent of Heroku, so I could deploy with a `git push`. One of my blog posts was #1 in Hacker News for a couple of days, and Netlify served over 30 GB in bandwidth without batting an eyelash.

After few years of running this site, I'm a believer in statically-generated websites. For a personal project or blog, it's mostly neglect-proof. Despite semi-annual updates to this site's dependencies in `package.json`, there's an embarrassingly high number of Dependabot alerts open against this repo. But that's _largely OK_, because I'm not responsible for a live system serving requests. The end result is just a bucket of HTML/CSS/JS fronted by a CDN.

## Things that did not go well

> “It takes two to make an accident.” - Jordan Baker

React and GraphQL were overkill. Trying to keep things as simple as possible, I didn't use a component library such as Material UI. So React was just a templating language for HTML, a job it was way overqualified for.

One of Gatsby's selling points is the "unified data layer" that GraphQL provides. The only data I needed came from local markdown files. Writing GraphQL queries to pull in data from local files went against my "keep it simple" mantra. If you're considering Gatsby.js as a way to get your feet wet with React and GraphQL, I would not recommend starting with a blog. You'd be much better served by writing a more traditional web app.

Next, I'll address the **biggest downside** of rolling your own blog with Gatsby. As with all things, the biggest strength is also the biggest weakness. I love that I have full control to tweak this blog however I want...the bad news is that now I have to build a baseline number of features myself.

Notice how this site (as of January 2023) doesn't have search, tagged posts, or comments. It doesn't even paginate the homepage! Every blog post I've ever written ends up listed in one long page, which will quickly become a problem as I continue to write more. These missing features are table stakes in any serious blogging platform.

To be brutally honest, I traded _potential customization_ for an objectively worse site. And if I ever do get around to building those features, wouldn't that be a waste? If every person who could code had to build basic blogging features, how many developer hours would we waste rewriting the same things over and over?

The area where this tradeoff is most obvious is the **authoring experience**. My current workflow for writing a blog post is the same as my workflow for writing code — spin up a text editor, create a new Markdown file and `git push` to trigger the build when you're done.

I've tried to automate the tedious parts of writing a new blog post with [a bash script](https://github.com/pietrorea/pietrorea.com/blob/master/scripts/new_blog_post.sh) but it's still cumbersome. Git and VS Code are great tools, but are not the right tools for _this_ particular job. In a world where we have lots of great, purpose-built, authoring clients, knowing that I cannot use any of them is frustrating.

And I'm not the only one that feels this pain. The company behind Gatsby.js describes their Markdown-powered blog like this:

> Our old process required building the entire Gatsby site locally, formatting Word docs to Markdown, updating different files for the content and author profile, then submitting a Pull Request and massaging the updates to pass a series of automated tests. I can tell you war stories of spending hours to fix a single typo, because even a small change retriggered that full process.

Yup — prose is not code.

## Improvements

> “Let us learn to show our friendship for a man when he is alive and not after he is dead.” - Meyer Wolfsheim

To the Gatsby team — I already mentioned the low maintenance of this Gatsby setup being a plus, but we can make this even easier. On any given day, this blog does not give me any issues. However, I've spent _hours_ trying to upgrade to new major versions of Gatsby. Even the simplest setup like mine has too many plugins. Some Gatsby plugins should be part of the core package.

Second, make GraphQL optional. There's already been [some work](https://www.gatsbyjs.com/docs/how-to/querying-data/using-gatsby-without-graphql/) to make Gatbsy work without using GraphQL, but we need to go even further. GraphQL should not be a direct dependency of the main Gatsby package.

The biggest improvement I could make to running this site is to the authoring experience. I have a few options if I want to get out of the business of shipping prose as code. I definitely don't want serve everything from Squarespace or Wordpress again, but I do want a Wordpress-like authoring experience. Can I only use the parts of Wordpress I actually want?

Turns out you can if you use Wordpress as a headless CMS. This is what the Gatsby team [ended up doing](https://www.gatsbyjs.com/blog/gatsby-blog-wordpress/) with their own blog.

If I went with this setup, I could keep a low-powered, private, Wordpress instance that Gatsby could consult at build time. The stakes of running Wordpress would be way lower — there'd only be two users, me (for authoring) and the Gatsby build process. I could theoretically keep the best parts of Gatsby and Wordpress without incurring significant costs in maintenance or complexity.

I'm not sure this is where I'll end up going with my blog, but you should consider this option if you're starting from scratch. Gatsby even maintains a [Gatsby + headless Wordpress starter project](https://github.com/gatsbyjs/gatsby-starter-wordpress-homepage) that you can consult.

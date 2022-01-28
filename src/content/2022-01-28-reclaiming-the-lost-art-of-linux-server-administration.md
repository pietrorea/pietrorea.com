---
title: Reclaiming the lost art of Linux server administration
path: /2022/01/28/reclaiming-the-lost-art-of-linux-server-administration 
date: 2022-01-28
author: Pietro Rea
layout: post
status: published
---

One of the skills I wish I'd learned earlier in my career is basic Linux server administration. Specifically in relation to hosting something on the web, either a web app or API that I wrote myself, or something from the thriving [self-hosted community](https://github.com/awesome-selfhosted/awesome-selfhosted), such as Wordpress. Managing servers is increasingly seen as the 'older way' of doing things, so it's easy to become a software developer and never learn to set up a VPS, set up remote access, stand up a firewall, etc.

Choosing to actively manage your infrastructure is part of a much larger discussion about the proper way to choose your tools. This discussion is extensive and it runs along many different dimensions. 

There's the axis of [new vs. old tech](https://mcfunley.com/choose-boring-technology) and also of build vs. buy. Finally, there's the decision to use **managed vs. unmanaged services**. This last one is the topic of this blog post. 

At one end of the spectrum, you can manage everything like its 1999. You set up your own host, install and manage dependencies, set up backups, etc. As you move towards the fully-managed end of the spectrum, you start to see lightly-managed compute primitives like Amazon RDS all the way to full-service, cloud-enabled app frameworks like AWS Amplify or Google App Engine, and BaaS/PaaS providers like Heroku.

The default position at most places I come across is to go as managed as you can tolerate, usually to save on engineering effort. But how did we manage to ship anything just 10 years ago, when most of these options weren't available? 

The truth is that it _was_ possible to build high-traffic web services in the "bad old days", even with a very small team. Even with _just one person_. This is how Marco Arment describes his experience building and running Tumblr circa 2010, largely by himself: 

> Tumblr taught me by necessity, especially in the early days when we had no staff and very little money, how to develop and host a high-traffic web service cheaply, easily, and sanely. I couldn’t let the servers require too much maintenance because server administration wasn’t my main job — we didn’t have a dedicated server administrator for the first few years, so I just had to set things up such that they didn’t need much administration.

You can read the full blog post [here](https://marco.org/2014/03/27/web-hosting-for-app-developers). If you still don't believe that people shipped big things fast before all of these cloud services came on the scene, I recommend reading some of the write ups at [High Scalability](http://highscalability.com), especially the ones from the previous decade. I particularly like the series on [Stack Overflow](http://highscalability.com/blog/2009/8/5/stack-overflow-architecture.html).

The good news is that these tools and techniques are still available to everyone. I propose that you turn the default position on its head — instead of defaulting to highly managed services, default to self-managed services and only venture out as needed.

## How did we get here?

If you, like me, believe that basic server maintenance is a dying art, how did we get here? It's easy to point fingers at the big cloud providers and say, "They don't want us to learn this stuff for their own profit!". But the actual reason might be more prosaic. Combine the multi-billion dollar marketing budgets of AWS, GCP and Azure and you have significant gravitational pull. Then add their respective armies of developer evangelists. Sprinkle in some cargo-culting and a decade's worth of "ship fast and break things" and you end up where we are today.

Before getting into the benefits of learning basic Linux administration, keep in mind tha this isn't a black or white proposition. Like any good engineering challenge, it's about tradeoffs. For example, if you do read stories from the previous decade, you'll see people building their own hardware. That's where I draw the line. Unless you need the performance, _don't manage physical hardware_. Get a Linux VPS from a reputable hosting provider and be done with it.

Also stay away from the notion that "the cloud is evil". That's where most of these type of articles go astray. The big cloud providers have given us real benefits and real innovations over the past decade. That fact is undeniable. The trick is to separate the wheat from the chaff. For example, I'm not going to build [realtime database](https://firebase.google.com/docs/database/) but I will learn how to self-host MySQL if that's all I need.

## Reaping the benefits of Linux administration

OK — you've gotten this far without knowing how to run your own servers. Why change? These are some of the reasons that convinced me.

**No vendor lock-in**. If you run your whole system on Linux VPSes, you've essentially commoditized the compute layer. If something happens with your current host, you can pack up your things and set up shop somewhere else whenever you like. 

**Unrestrained compute**. Netlify will only host your one repo. Lambda will only run your one function. Linux admin is a chore, but in return _you get the whole computer_. You can install whatever software you want and set things up as you see fit. You can even save some money in the process since you can run all your applications on the same infrastructure instead of paying per app.

**Long-lasting skills**. The tech industry moves _fast_, but if you look around there are certain foundational technologies that have stuck around for a long, long time. Bash, SSH, nginx/Apache, even Linux itself. Here's an uncontroversial claim: these foundational technologies will continue to be foundational throughout your entire career. What else can you say that about in the tech industry? The earlier you learn how to write a good Bash script, the better. Compare this reality with cloud services. Building on top of them often feels like quicksand — they morph under you, quickly deprecate earlier versions and sometimes shut down entirely.

**The speed (and joy) of using tools**. This one is my favorite. And here I make a distinction between a "tool" and a "service". A hammer is a tool. I use a hammer in exactly the way I want . It blends into the background and becomes an extension of myself. In contrast, a service talks back. It wants things. We're so surrounded by services that we've forgotten what using a tool feels like. Linux is a tool. Bash is a tool. They're quiet and obedient. The only thing they ask for is your dedication. They're also fast, if you know how to use them. Here's my theory: the dexterity that comes from learning these tools contributes to most of the potential productivity boost of self-hosting. 

## Getting started

Starting is not hard, but you need a plan. Just like learning programming, I recommend having a project that requires you to learn Linux admin. If you have a _need to learn_, you will learn. You don't need to be a programmer to manage Linux servers, but if you're a programmer, this might be as easy as deciding to run your own software directly on a Linux VPS. If you're not a programmer, you can choose from a variety of open source projects with a strong community that can help you if you get stuck. Some projects that might interest you are [Home Assistant](https://www.home-assistant.io), [Pi-hole](https://pi-hole.net) or something from [this list of projects](https://github.com/awesome-selfhosted/awesome-selfhosted).

I also recommend picking and committing to a 'default admin stack' that includes an OS, Bash, a scripting language, a webserver and a data store. Just like you use macOS or Windows for all your personal computing, you should also pick a specific Linux distribution as your default server OS. It takes time to be productive in any OS. That's why you need to pick one and stick to it. For example, my OS of choice is [Ubuntu](https://ubuntu.com) — I picked it because it has a large community, it's easy on beginners and almost everything I'd want to host has official Ubuntu support. 

As for scripting, commit to getting good at [Bash](https://www.gnu.org/software/bash/). Bash is the default "shell" for most Linux distributions. If you're not familiar with that term, the shell is the program that runs your other programs, so it pays _huge dividends_ to know to make this layer bend to your will. 

Bash is the primary interface for the command line terminal and it is also a scripting language. You can (and should!) save your terminal commands in a file for later use, so you can run them all at once. If you get good at this, it will help you remember how you set things up, and will automate a lot of things for you. I can't stress enough how important this is, and how universally useful it can be to learn Bash. As a practical goal, you should be able to recreate your host **with a single Bash script**.

There's only one specific feature in Bash I want to highlight: [here documents](https://www.gnu.org/software/bash/manual/bash.html#Here-Documents). Most things on a server that you'd want to set up use text files for their configurations. Here documents let you specify an "inline file" inside your script file. If you know what a string literal is, you can think of here documents as a "file literal". Here's [an example](https://gist.github.com/pietrorea/5badae19ae8bd58c980b3fe9debddef0) that sets up remote SSH access. Here's [another example](https://gist.github.com/pietrorea/9081e2810c20337c6ea85350a31bb427) that directs MySQL to create a database and an admin user. That's how you can set up an entire server with only one script. Learning to use here documents took me from casual Bash user to budding system administrator. I wish I had learned it years earlier. 

Bash has been around for a while, so it has its share of rough edges compared to more modern programming environments. For example, if you're a programmer, you might take it for granted that every scripting language has dictionaries/hash maps, right? Well, in Bash associative arrays didn't formally exist until Bash 4. Some older systems have Bash 3 as the default version, so you can't use dictionaries unless you install a newer version of Bash. 

For all of Bash's advantages, I agree with Google's [Shell Style Guide](https://google.github.io/styleguide/shellguide.html#s1.1-which-shell-to-use):

> If you are writing a script that is more than 100 lines long, or that uses non-straightforward control flow logic, you should rewrite it in a more structured language now. Bear in mind that scripts grow. Rewrite your script early to avoid a more time-consuming rewrite at a later date.

You can get far with just Bash, and if you're not a programmer, that might be a good stopping point. But if need to write longer scripts, then the next decision you need to make after picking a default server OS is picking a default scripting language.

In theory, any language that can interact with OS can do, which includes most programming languages. For example, MySQL ships with a script called `mysql_secure_installation`. The [original version](https://github.com/twitter-forks/mysql/blob/master/scripts/mysql_secure_installation.sh) was written in Bash, but as the script grew, it got [a rewrite](https://github.com/mysql/mysql-server/blob/7ed30a748964c009d4909cb8b4b22036ebdef239/client/mysql_secure_installation.cc) in C++. This was a good choice for that project, because MySQL is written in C/C++, but it's probably not a good choice for your default scripting language.

For your scripting language, I recommend something that doesn't require compilation, with a strong community behind it. Python, Ruby and JavaScript are all good choices. I picked JavaScript because I like to limit the things I need to learn, and I already needed JavaScript/TypeScript for the web. Node also has a huge library of packages via [npm](https://www.npmjs.com) if I ever need to do something more complicated.

If you're an iOS developer, as much as I'd like to recommend Swift, I can't recommend it for Linux administration. Linux support is getting better, and you can avoid the compilation step and [use Swift like a scripting language](https://krakendev.io/blog/scripting-in-swift), but the Swift Package Manager simply pales in comparison to NPM, especially for something like Linux management. 

After picking your OS, learning Bash and (optionally) committing to a scripting language, the next things on the shopping list are a web server and a data layer. Keep in mind that this is just for server administration. If you're not a programmer, you don't need to learn a database like a programmer would. 

I picked [nginx](https://nginx.org) as my default webserver, although I hear Apache is also good. Learning to use a good webserver will help you direct traffic to your applications, so it's essential. For my default database, I picked [MySQL](https://www.mysql.com). It's been around long enough, that there's nothing I could throw at it that would make it break a sweat. 

To reiterate, when you're just starting, it's more important to pick something to host than to pick the tools to host it with. Let the app dictate what you need to learn first. If you don't know what to pick as your first hosted app, you can't go wrong with [Wordpress](https://wordpress.org). There are many hosting providers that offer 1-click Wordpress installations, but if something goes wrong, you won't know how everything was set up in order to fix it. As a concrete goal, aim to set up Wordpress on a new host in **a single script**. Feel free to look at my examples for [VPS setup](https://github.com/pietrorea/scripts/blob/master/ubuntu/setup.sh) and [Wordpress installation](https://github.com/pietrorea/scripts/blob/master/ubuntu/install-wordpress.sh) if you find them helpful.

Happy hosting!
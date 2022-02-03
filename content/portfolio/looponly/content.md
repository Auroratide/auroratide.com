In September, [music Discord bots were slain by YouTube](https://www.theverge.com/2021/9/12/22669502/youtube-discord-rythm-music-bot-closure) for legal reasons. Some friends and I were using one of the bots on a roleplaying server, so this was a sad moment of us.

I had some spare time, so I rapidly crafted **LoopOnly**, the simplest way to loop some music without YouTube! All it does is loop a song file continuously until told to stop.

## Simplicity

Most music bots are general purpose and feature complex queueing mechanisms that allow people to take turns sharing music. While great in general, it tends to make the commands clunky if your only goal is to loop a single song.

Therefore, LoopOnly was designed with just one main command: `/loop`, which loops the same song until called again on a different song.

## How can I use this?

I did not go through the rigamarole of fully deploying the bot for public use since I meant it to be a quick project for personal use. Therefore, at the moment it can only be self-hosted. Visit the [github repo](https://github.com/Auroratide/LoopOnly) for instructions on how to host the bot yourself.

Also, leave a **star** on the repo! This will tell me that there's interest in the bot, and I may consider deploying it properly.

## Technology Used

The project uses Typescript and demonstrates use of the Discord API.

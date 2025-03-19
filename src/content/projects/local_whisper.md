---
title: experiments with local whisper inference
pubDate: "Aug 19 2023"
description: several apps for using openai's whisper model locally on your mobile device
heroImage: "/both_apps.png"
---

In early-to-mid 2023 I shamelessly forked someone else's Android keyboard, made a small UX improvement, and
shipped it to the Google Play Store. The other guy proceeded to review it 5 stars. What a gigachad.
That project is more than a little outdated by now, but for historical preservation's sake,
the [link to repo is here.](https://github.com/kaisoapbox/OldWhisperVoiceKeyboard)
I finally got around to rebuilding the keyboard from scratch (most notably to get it to use [whisper.cpp](https://github.com/ggerganov/whisper.cpp/)) in Kotlin and using Jetpack Compose! Now relaunched as kaiboard, [link to repo is here](https://github.com/kaisoapbox/kaiboard), I might actually get around to making all the various improvements people keep asking me to make. Yay!

<a href="https://play.google.com/store/apps/details?id=kaizo.co.WhisperVoiceKeyboard">
  <img src="https://cdn.rawgit.com/steverichey/google-play-badge-svg/master/img/en_get.svg" width="25%">
</a>

I'm also working on this: an offline voice journal using Whisper for all local speech transcription.
As before, [open source](https://github.com/kaisoapbox/WhisperJournal). I may unite this with Kaiboard at some point, who knows.

Also on the Play Store. Not on the App Store yet, but when I get around to throwing money at Apple, I'll do it.

<a href="https://play.google.com/store/apps/details?id=com.kaizoco.whisperjournal">
  <img src="https://cdn.rawgit.com/steverichey/google-play-badge-svg/master/img/en_get.svg" width="25%">
</a>

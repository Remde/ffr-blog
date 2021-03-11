---
title: Pass, the Password Manager 
date: "2021-01-24T22:12:03.284Z"
description: "Cause I can't get enough Terminal in my life"
---

<p>I have been more and more wary when it comes to making sure my data is secure. It has gotten worse, specially due to a huge breach here in Brazil that led to more than 220 million people having their information leaked. How 220 million, you may ask, if there are only 210 million brazilians? Well, even the dead now have their data public.</p>

<h3>Enters Pass</h3>
By accident, while casually reading Reddit, I found out about <a href="https://www.passwordstore.org/">Pass</a>. It follows the Unix philosophy, which means that every password lives in a <i>"gpg encrypted file whose filename is the title of the website or resource that requires the passsword."</i> You manage it through the terminal, and it comes with out of the box support for git, so you can have all your encrypted files in a nice Github repository shared accross all the devices you need. 

<p>It generates a very intuitive file tree hierarchy. For instance, my folders look something like this (retrieved using the command "pass"):</p>

```
Password Store
├── Email
│   ├── emailnumber1@provider.com
│   ├── emailnumber2@provider.com
│   └── emailnumber3@anotherprovider.com
├── Social Network 1 
│   └── socialnetworkuser@anotheremail.com
├── Code stuff 
│   └── myuser 
├── Important bank thing 
│   └── myemail 
│   └── another@thing.com
```

Which makes a lot of sense and works super well with github. To generate another pass, I'd just say

```
pass generate Anotherfolder/user
```

And there it is. so I could copy with ```pass -c Anotherfolder/user``` to setup in the website, and when I'm done I ```pass git push``` to sync everything nicely.

<h3>Other devices</h3>
Alright, cool. But what about my other devices? I have other computers, I have a phone, I have a tablet, gosh, I even have a <i>WINDOWS</i>.
Well, no worries. The community is pretty rich and has come up with Android and iOS apps that work super well. I set up a SSH in my Android phone, downloaded the app, and it gets my passwords straight from my Github. You can even add sub gpg keys if you're worried about someone stealing your phone and getting that. I didn't see a need for that as it needs my fingerprint to do anything, but you have that option as well.</p>
<p>Pass is also available in any Unix platform in many forms. You can find GUI versions if the command line interface isn't your thing. And if you are a Windows person, well... Maybe there's something for you too. But come on, maybe this is the perfect time to make the move to Unix.

<StegoBody>
Imagine the following scenario. You work in an office building and are currently walking by some offices on the way to the coffee machine. As the aroma of freshly ground beans meets your nose, you notice a rather conspicuous note stuck onto Janet's office door. It looks like this:

<Figure src="/assets/posts/steganography/sullivans-note.png" alt="Sullivan's Note" caption="MBTUO JHIUX BTGVO XBOUU PIBWF EJOOF SBHBJ OUPNP SSPXO JHIUT VMMJW BO" size="md" />

That's weird. Overly curious, you take a picture of the note so you can decipher it later. At your desk, you quickly realize that by shifting each letter down by 1 alphabetically (so B becomes A, M becomes L, etc), the message comes to read:

> "Last night was fun! Want to have dinner again tomorrow night? -Sullivan"

What?! Sullivan and Janet are dating now?? Time to start spreading the news to the whole office!

## Cryptography didn't work...

So what went wrong for Sullivan?

Well, Sullivan wanted to send a message to Janet that only she would understand. To make it secret, he used **cryptography** to jumble the text so that it appeared unreadable to everyone. Janet, however, knows the secret technique for un-jumbling the letters, so she uniquely can read it. Cryptography is the art of transforming your message in such a way that only the recipient can un-transform it, thus making the message unreadable to everyone except the intended recipient.

Unfortunately for Sullivan, the trick he used to encrypt his message was extremely bad. A fellow coworker (yourself) was able to figure it out before the day ended! Maybe Sullivan can find a different means of holding "secret" conversations with Janet?

,,,
Yeah yeah, he could just send an email. But for Sullivan, that's not creative enough!
,,,

Well... Sullivan's cryptographic scheme, called a _cipher_, was bad because it was easy to figure out, so perhaps he could simply use a more complicated cipher. However, no matter what he does, his message will attract curious minds. A bunch of random letters on someone's door is bound to have a nice juicy secret, and humans love knowing things they shouldn't know.

So, cryptography isn't good enough for Sullivan. He can't just jumble his message because people will still want to know what's behind it. What Sullivan actually wants is to _hide the fact that he's sending a message in the first place_.

## Steganography to the rescue!

**Steganography** is the art of concealing a message within some medium such as another, less conspicuous message. On the outside, all people see is some regular note or picture; the intended recipient, however, knows how to find the true message embedded in the normal one.

The goal is to be unattractive. When curious people see something weird, they will want to investigate. But when they just see a regular message, they will pass it off as normal. Had Sullivan used steganography, his officemates would never even suspect he was harboring a secret.

**Crypography changes how the message looks. In steganography, hiding messages in plain sight is the name of the game.**

Want to know a secret? The digital PNG image of Sullivan's note above actually has a hidden message embedded into it! Unless you already knew what steganography was, you may never have realized it contained secret text. Such is the power of steganography.

## Steganographic Images

In the digital world, any media (images, documents, music, etc) could be used to embed messages. Images, like the one above, provide a very illustrative example of steganography (literally). It all centers around one key fact: our eyeballs aren't good enough.

It is very difficult for us to tell the difference between two colors if they differ only very slightly. For example, **##D88F30|this orange##** and **##D88F31|that orange##** are actually different colors according to the computer, but to us they look the same. Therefore, we can change the colors in an image just a tiny bit and it will still look exactly the same to us.

But the computer knows the difference, and it's in that difference where the secret message lives.

,,,
This just gives a high-level overview of the methodology behind image steganography. Perhaps in a future post I will describe how this is implemented in code.
,,,

## Try it yourself!

Below is a little widget I made for creating your own steganographic images! Simple select a picture from your computer, write up a secret message, then click on the button that says "Encode into Image". Your picture will be modified to contain the image, and you can share it with friends.

You can also use this tool to find if images have a secret message already. Try using the tool to find the secret in Sullivan's note!

<ImageSteganographer />

~,,,
To save the image with the embedded note, you need to actually download the image using "Save as". Copying the image and pasting it results in the browser taking some shortcuts and hence ruining the message.
,,,

## Summary

Over the years, many steganographic techniques have been developed, both digital and physical. Some examples include:

* Using invisible ink to write between lines of text
* Packaging `zip` files into `gif`s
* Placing invisible unicode characters between letters in a text file
* Measurably altering a computer's temperature

In all these examples, the goal is to hide the fact a secret even exists in the first place. Who knows how much secret information is flying over our heads, only because we didn't think to look!

By the way, this entire post has a secret message embedded into it somewhere! See if you can find it, but don't sweat it if you can't. I'll talk about my secret technique in a future post.
</StegoBody>
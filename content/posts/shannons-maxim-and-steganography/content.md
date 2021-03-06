"The enemy knows the system." These are famous words uttered by a mathematician named Claude Shannon regarding cryptography. Nowadays, Shannon's words have become a sort of rule of thumb for computer geeks coming up with ways to improve Internet privacy. Known as Shannon's Maxim, the rule basically goes that in spite of our enemies knowing _how_ we are making information secret, our information needs to be secure anyway.

To cryptographers, Shannon's Maxim makes sense, but it might seem counter-intuitive when applied to steganography. This post will take a look at how this little rule can be applied to both fields in order to maximize security and privacy.

## What is Cryptography?

So, we have two high school students: Dan and his girlfriend Rei. Dan wants to send a secret message to Rei, but it is a rather embarrassing message, so he wants to ensure that only Rei is able to read it. Dan could just try to discreetly pass the note in class, but we all know what happens next. The teacher catches them and forces Dan to read the note aloud to the class!

Thankfully, with cryptography, Dan can avoid any embarrassment, even if the message is read aloud. Cryptography is the practice of scrambling messages sent between two parties so that only those two parties understand the message. If only Dan and Rei can unscramble the message, then even if the message is seen by others, the meaning of the message will still be secret.

**Encryption** is the process of scrambling a message. It requires three things:

1. The message, also called the **plain text**, that needs to be scrambled.
2. An **algorithm**, the method by which the message will be scrambled.
3. A **key**, a small piece of information only Dan and Rei know which, when used with the algorithm, produces the scrambled message.

**Decryption** is the process of unscrambling a scrambled message. As with encryption, only the algorithm and key need to be known. As long as Dan and Rei agree with the algorithm and key, they will be able to send secret messages to each other. Furthermore, as long as no one else knows the key, then no one else can eavesdrop on their messages. Therefore, keeping the key secret is absolutely vital!

For example, let's say Dan wants to send a secret message to Rei. Let's look at the three parts he needs to encrypt his message:

* **Plaintext**: Dan wants to send the following, "Love you muchly squishy bear!"
* **Algorithm**: Each letter will be rotated by X letters, where X is a number between 1 and 26.
* **Key**: The key will be 13.

This means each letter will be rotated by 13 letters. In other words, A will become N, B will become O, and so on. If Dan does this, his encrypted text will be, "ybirl bhzhp uylfd hvful orne!". Shifting L by 13 spaces makes it "Y"; shifting O by 13 spaces yields "B", and so on.

Rei will receive this message, and using the same algorithm but in reverse, she can get back the original message.

## What is Shannon's Maxim?

Shannon's Maxim is a general rule of thumb followed by most modern cryptographers in order to make things more secure. Every cryptosystem requires an algorithm and a key. In the example above, we used letter rotation as an algorithm and a number between 1 and 26 as the key. Shannon's Maxim states that we ought to assume _everybody_ knows the algorithm. In other words, every person, including our enemies, knows that we are using letter rotation to encrypt the secret message. Hence, "The enemy knows the system."

Therefore, if we want to keep the message secure, it is the _key_ that must be secret. As long as no one else knows the key, then the outsiders cannot read the message.

Let's think about what this principle implies. In Dan and Rei's scenario above, they are using letter rotation to encrypt their messages. This algorithm only has 26 possible keys (1, 2, 3, … 25, 26), since there are only 26 letters in the alphabet. Therefore, if a bully named Ellie wants to read their secret message, she only needs to try all the possible keys. One of them is bound to be right.

As a result of Ellie knowing the algorithm, we suddenly find that Dan and Rei's cryptography scheme is absolutely terrible. Ellie could find out their messages in minutes (or with a computer, in milliseconds), even if they change their key periodically. If Dan and Rei want to have a more secure way of sending secret messages, they will need to come up with a better algorithm, preferably one with so many keys that they cannot possibly all be checked.

In actual cryptography systems used today, our strongest algorithms (like AES) can have a number of keys comparable to the number of atoms in the universe. The beauty of Shannon's Maxim is that, despite these algorithms being common knowledge (ie. they are all on Wikipedia), they are very secure due to their complexity and large number of keys.

<side-text>

But couldn't we just keep the algorithm secret as well? Yes, we can, and should! However, Shannon's Maxim states that we cannot _reliably_ say a cryptosystem is secure if we rely on the algorithm being secret. This technique is called "security through obscurity", and it isn't inherently bad. However, what if someone does find out the algorithm? We would then need to replace the entire thing, and this can be very hard since algorithms can be very complicated. On the other hand, if the key was leaked to the public, then all we would need to do is change the key to achieve security again.

Simply put, keys are easier to change than algorithms, so it is better to invest security in the key.

Additionally, following this maxim allows for many people to use the same cryptosystem but have different keys. As a matter of fact, this is why the Internet even works.

</side-text>

## What about Steganography?

If you are unfamiliar with steganography, I recommend reading my [post on the subject](/posts/steganography). In summary, though, steganography is another way we can secretly relay messages. However, steganography seeks to hide the fact that a message even exists rather than obfuscate the message itself.

Let's put it another way. With cryptography, Dan wants to make sure his message can only be read by Rei. With steganography, Dan wants to make sure only Rei knows the message exists.

When you think about it on a surface level, it seems like Shannon's Maxim might not apply here. Recall that Shannon's Maxim states that we must assume Ellie knows the scheme Dan and Rei are using. If that's the case, then the purpose of steganography seems defeated. After all, if you don't want outsiders to know the message even exists, then surely the method you are using to hide the message needs to be secret. Right? Well, yes and no.

Of course, it is better if the exact method is not known. However, as before, we don't want to _rely_ on that. What if the algorithm is known or becomes known? Can we still invent a stegosystem that makes the message difficult to detect?

In my post on steganography, I detailed a technique that hides messages in images. We do this by changing all of the image's pixels ever so slightly as to be undetectable to the unaided eye. The problem with this technique, however, is that once the system is known, every image sent thereafter is compromised. The message suddenly becomes trivial to detect.

However, consider a slight modification to this idea. Instead of changing every pixel in the image, we can change every Xth pixel, where X is a key. So let's say Dan and Rei were using image steganography to hide their images. They could agree on the number 13 as their key, and so only every 13th pixel in the image would encode their secret message.

<horizontal-flex>
<article-image src="/assets/posts/shannons-maxim-and-steganography/stego01.png" alt="No key" caption="An example where we change every single pixel in the image. This is not secure since there is no concept of keys involved." size="md" style="flex: 1;">
</article-image>
<article-image src="/assets/posts/shannons-maxim-and-steganography/stego02.png" alt="Key is 3" caption="AAn example with 3 as the key. Now only every third pixel is altered. Even if others knew of the algorithm, they would need to guess the correct key." size="md" style="flex: 1;">
</article-image>
</horizontal-flex>

Note that this now follows Shannon's Maxim! Even if other people were to know how the algorithm works, they might not know the key, and the information can still be difficult to detect. Now, I know this particular example is a bit silly since there are so few keys, but one can use a bit of mathematical black magic to circumvent the limitation.

In general, it is best to hide both the system and the key from all outsiders in order to optimally achieve secure communication. However, it is especially important that even if the system is known, security is not compromised. This simple maxim encourages the invention of strong and robust cryptographic and steganographic systems.

-----------

A special thanks to [Dr. Philip Ritchey](http://faculty.cse.tamu.edu/ritchey/) who helped me achieve this insight.

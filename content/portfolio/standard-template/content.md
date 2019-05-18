Before the Standard Template, Wikidot web templates were not mobile compatible, so this site is ideal for those hoping to make a website in the modern era. It is natively built with Twitter Bootstrap in order to guarantee site responsiveness. The template was eventually recognized as [Wikidot's primary mobile solution](http://blog.wikidot.com/blog:new-bootstrap-website-template).

In addition to the generic site, I created two other templates based off of it.

* The [Notebook Template](http://notebooks.wikidot.com/) is a specialization that emulates Microsoft's OneNote in order to provide users with an easy-to-use webbook.
* The [Blog Template](http://blogs-template.wikidot.com/) allows Wikidot users to easily create and maintain online blogs.

## Insight

In hindsight, I learned a great number of things from releasing the Standard Template series. Although I had kept user-friendliness in mind the entire time I was making the site, most end users complained about the template being too difficult to use. I had addressed a number of issues with the appropriate modifications, but none of those could really hit the core of the problem. Simply put, the templates were designed poorly.

I had unintentionally designed the site to make sense for experienced web developers, and in the process it became impossible to navigate for beginners. For instance, the CSS was designed in a modular fashion such that snippets could be swapped in or out easily. However, I received many complaints that it was too difficult to modify the CSS since none of the snippets could be easily found.

To make matters worse, I had not taken into account the possibility of updating the template. Due to the modular design, all Standard Template sites inherited from a common CSS base. The problem is that in having a common base, modification of the base modifies all Standard Template sites, including existing ones. Due to the potential of breaking existing sites, modification of the base is essentially impossible. This would be fine if the base didn't need to change, but the reality is that the Internet itself changes all the time. The Standard Template theme was acceptable by 2014 standards, but today it is just ubiquitously hideous.

I have taken these lessons and insights and applied them to future projects. The feedback I received from the project was exceptionally helpful, and I hope we never reach an era where people are too politically correct to criticize.

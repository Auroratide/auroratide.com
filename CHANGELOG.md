# Changelog

## 3.0.0 (28 Jan 2021)

* Update to SvelteKit for the sake of static site generation, which improves SEO and performance

## 2.3.1 (06 Aug 2021)

* Accessibility tweaks
* Bugfix for visiting hash links within the site

## 2.3.0 (23 Jul 2021)

* Accessibility overhaul, improving the accessibility of multiple website aspects including better link contrast, navigation within cards, and the creation of a statement
* Bugfix for colorscape not changing on art pages when it should
* `icon-ul`, `icon-li`, and `icon-divider` components for articles

## 2.2.2 (07 Jul 2021)

* Replace `popout-img` with new `img-popout` component

## 2.2.1 (29 Jun 2021)

* Bugfix for incorrect article colors appearing in related lists
* Bugfix for article image being too long in some browsers
* Added `sliding-demo` and `math-*` components

## 2.2.0 (28 May 2021)

* Add art section

## 2.1.2 (24 May 2021)

* Adjust format for mobile top bar
* Add open source link
* Bugfix for navigating back to the first page visited on the site not retaining scroll position

## 2.1.1 (13 May 2021)

* Noscript warning message
* Add `slide-show` component for inline slideshows
* Add `point-compilation` and `point-compilation-view` components for gradually compiling key points
* Add `/styleguide` page
* Improvements to `article-image` and `popout-image`

## 2.1.0 (04 Apr 2021)

* Make portfolio its own site section

## 2.0.1 (21 Mar 2021)

* Touchups on article viewing for better experience

## 2.0.0 (08 Mar 2021)

* Update everything to Svelte
* Combine posts and portfolio
* Remove digests entirely

## 1.2.3 (08 Mar 2021)

* Update dependencies

## 1.2.2 (28 Jun 2019)

* Bug fixes (janky behaviour when loading post pages)
* Remove commenting and sharing functionality for unpublished items

## 1.2.1 (17 Jun 2019)

* Basically just code refactoring
 * Refactored MobX out of the codebase
 * Consolidated posts and portfolio components

## 1.2.0 (18 May 2019)

* Added my portfolio of projects dating back to 2008

## 1.1.4 (17 Mar 2019)

* Missing pages now return 404 on the browser
* Significantly decreased asset size to improve loading times

## 1.1.3 (04 Feb 2019)

* Added favicon to the site

## 1.1.2 (20 Nov 2018)

* Added loading indicator to post pages to show when posts are coming from the API
* Allow commenting on posts
* Various enhancements to the markdown parser
* Can now see posts related to the post being currently read

## 1.1.1 (04 Oct 2018)

* Added loading indicator to digests page to show when digests are coming from the API
* Site theme now changes color according to which section of the site the viewer is on

## 1.1.0 (03 Oct 2018)

* Added posts to the site, a way for my to write my own articles

## 1.0.0 (13 Sep 2018)

* Site released to public

## 0.5.1 (10 Sep 2018)

* Made internal links scroll to the top when clicked
* Document title is now dynamic depending on landed page
* Adjusted link and button behaviour when hovered and clicked

## 0.5.0 (06 Sep 2018)

* Added fallback pages and legal page

## 0.4.2 (05 Sep 2018)

* Added source to digest items and API

## 0.4.1 (04 Sep 2018)

* Updated multiple dependencies to latest
* Internal code refactoring

## 0.4.0 (03 Sep 2018)

* Created the home page

## 0.3.0 (27 May 2018)

* Added digests to the API
* Can now fetch digests from the API and serve them on the `/digests` page

## 0.2.0 (20 May 2018)

* Added header and footer
* Styled the content area

## 0.1.0 (13 May 2018)

* Initial Release

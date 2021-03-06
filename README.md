# Jekyll Site

Inspired by [Octopress](https://github.com/imathis/octopress) - this is a [Jekyll](https://github.com/mojombo/jekyll) framework, but directed more at website content than blogging.

## Getting Started

Assuming you at least have Ruby `1.9.3` installed on your system; You can start building your own website using this framework by:

* Clone the repo: `git clone https://github.com/supporttime/jekyll-site my-site`.
* Browse in to the directory `cd jekyll-site`.
* Install all the dependant packages `bundle install`.
* Run the jekyll server `bundle exec jekyll server --watch`.

Your skeleton site should now be running on `http://localhost:3000`

## Building Your Site

### Microdata & Schema.org

[http://schema.org/](http://schema.org/) provides a collection of specs, that you can use to markup your pages in ways recognized by major search providers. They will then be able to understand what sort of business you are, what your address is, what your phone number is, what people have said about your products and much more.

We allow you to easily add a site-wide schema to your site; simply add the URL to the appropriate schema (`i.e. http://schema.org/Organization`) to your `_config.yml` under the key `schema`.

Further to this site-wide schema, all the `_includes` for the framework are coded with these schemas in mind.

* `address.html` - [http://schema.org/PostalAddress](http://schema.org/PostalAddress)

### Site Navigation

We have a handy little include which allows you to easily drop a Bootstrap Navbar into your site.

```html
{{ include navbar.html }}
```

Once your navbar is in place you can use your pages front-matter to configure if and how they appear in the navigation.

```yml
---
nav:
  title: ''
  weight: 1
---
```

Property | Description 
:--- | :--- 
Title | Link text which appears in the nav.
Weight (optional) | Numeric weight for the page, lower the number the higher the priority of the page. Pages without a wieght appear last, and in alphabetical order.

### Google Analytics

We've bundled in some nice [Google Analytics](http://www.google.com/analytics/) support within the site. All you need to do is to set the required configuration under the `analytics` key in your `_config.yml` file.

Property | Description 
:--- | :--- 
tracking_code | This tracking code is given to your by Google e.g. `UA-000000-00`.
domain | The domain name for which you are tracking metrics e.g. `www.example.com`

Once this has been done and your site has been rebuilt, analytics data will be enabled.

#### More than just page hits.

In addition to tracking standard page hits, we also automaticly track events on contact links such as `tel:*` or `mailto:*` so you have a better understandning of how people are interacting with your contact elements.

### Icons

#### Using Icons

By default this project ships with the [Iconic](http://somerandomdude.com/work/iconic/) font-icon set. Although it's a custom build which was compiled using [Fontastic](http://fontastic.me/). This replaces the icon set which is bundled with [Bootstrap](http://getbootstrap.com/), but can be used in much the same manor.

```html
<i class="icon icon-{{icon name}}"></i>
```

#### Customizing Icons

To build your own icon set, register with the [Fontastic](http://fontastic.me/) service and create a new font called 'icons'. Once complete download the package which they bundle up for you.

Place the font files (`icons.woff, icons.ttf, icons.eot, icons.svg`) in to the `_assets/fonts/icons` directory.

Next place all the CSS content from the bundled `styles.css` into `_assets/stylesheets/partials/_icons.scss`

The icons within the site should now be using your own custom font.

## Deploying to GitHub Pages

We include some simple deployment tools for publishing your site to [GitHub Pages](http://pages.github.com/). Due to the fact that the site uses various [Jekyll Plugins](http://jekyllrb.com/docs/plugins/) we can't simply push the source of the site to the gh-pages branch, we need to pre-compile the site before deployment.

`bundle exec rake site:publish`

This rake task will compile your site and push the latest compiled version up to the gh-pages branch.

For details on how to configure your DNS to route traffic to your site, look at the [GitHub Pages documenation](https://help.github.com/articles/setting-up-a-custom-domain-with-pages#setting-up-dns).

## Contributing

We love to see people contributing to this project, whether it's a bug report, feature suggestion or a pull request. At the moment, we try to keep the core slick and lean, focusing on basic website needs, so some of your suggestions might not find their way in.

## Versioning

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, This project will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit <http://semver.org/>.

## Authors & Contributors

**Robert Rawlins**

+ <http://twitter.com/sirrawlins>
+ <https://github.com/SirRawlins>

**Robin Geall**

+ <http://twitter.com/robingeall>

## Copyright

Copyright & 2013 Support Time Limited. See [LICENSE](LICENSE) for details.
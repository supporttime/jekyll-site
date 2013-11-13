# Jekyll Site

Inspired by Octopress - this is a Jekyll framework, but directed more at website content than blogging.

## Quick Started

Assuming you at least have Ruby `1.9.3` installed on your system; You can start building your own website using this framework by:

* Clone the repo: `git clone https://github.com/supporttime/jekyll-site my-site`.
* Browse in to the directory `cd jekyll-site`.
* Install all the dependant packages `bundle install`.
* Run the jekyll server `bundle exec jekyll server --watch`.

Your skeleton site should now be running on `http://localhost:3000`

## Deploying to GitHub Pages

We include some simple deployment tools for publishing your site to [GitHub Pages](http://pages.github.com/). Due to the fact that the site uses various [Jekyll Plugins](http://jekyllrb.com/docs/plugins/) we can't simply push the source of the site to the gh-pages branch, we need to pre-compile the site before deployment.

`bundle exec rake site:publish`

This rake task will compile your site and push the latest compiled version up to the gh-pages branch.

For details on how to configure your DNS to route traffic to your site, look at the [GitHub Pages documenation](https://help.github.com/articles/setting-up-a-custom-domain-with-pages#setting-up-dns).

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
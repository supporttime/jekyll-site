# Rquire jekyll to compile the site.
require "jekyll"

#
# Because we are using 3rd party plugins for jekyll to manage the asset pipeline
# and suchlike we are unable to just branch the code, we have tp process the site
# localy before pushing it to the branch to publish.
#
# We built this little rake task to help make that a little bit eaiser.
#

# Github pages publishing.
namespace :site do
  # Usaage:
  # rake site:publish
  desc "Publish site to gh-pages"
  task :publish do
    # Compile the Jekyll site using the config.
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site",
      "config" => "_config.yml"
    })).process

    # Make a temporary directory for the build before production release.
    Dir.mktmpdir do |tmp|
      # Copy accross our compiled _site directory.
      cp_r "_site/.", tmp

      # Switch in to the tmp dir.
      Dir.chdir tmp

      # Iniialize a git repo with all the required details.
      system "git init"
      system "git add ."
      message = "Site updated at #{Time.now.utc}"
      system "git commit -m #{message.shellescape}"

      # Push the files to the gh-pages branch, forcing an overwrite.
      system "git push origin master:refs/heads/gh-pages --force"
    end
  end
end
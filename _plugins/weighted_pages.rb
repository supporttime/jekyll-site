module Jekyll
  
  class WeightedPagesGenerator < Generator
    safe true

    def generate(site)
      site.config['weighted_pages'] = site.pages.sort_by { |a| 
        a.data['nav'] && a.data['nav']['weight'] ? a.data['nav']['weight'] : site.pages.length }
    end

  end

end
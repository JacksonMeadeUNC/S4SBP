# frozen_string_literal: true

Gem::Specification.new do |s|
  s.name          = "S4SBP-theme"
  s.version       = "0.1.0"
  s.license       = "MIT"
  s.authors       = ["Jackson Meade"]
  s.email         = ["robinson4sbp@gmail.com"]
  s.homepage      = "jacksonmeade.github.io"
  s.summary       = "This is a custom Jekyll format inspired by the Kamala Harris for President and UNC Web Standard layouts for the Sam Robinson for SBP Campaign Website."

  s.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  s.required_ruby_version = ">= 2.4.0"

  s.platform = Gem::Platform::RUBY
  s.add_runtime_dependency "jekyll", "> 3.5", "< 5.0"
  s.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
end
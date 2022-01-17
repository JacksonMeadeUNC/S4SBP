# frozen_string_literal: true

Gem::Specification.new do |s|
  s.name          = "S4SBP-theme"
  s.version       = "0.2.0"
  s.license       = "CC0-1.0"
  s.authors       = ["Jackson Meade"]
  s.email         = ["samrobinson4sbp@gmail.com"]
  s.homepage      = "jacksonmeade.github.io"
  s.summary       = "S4SBP is a political Jekyll theme for GitHub Pages and the Sam Robinson for SBP Campaign"

  s.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  s.required_ruby_version = ">= 2.4.0"

  s.platform = Gem::Platform::RUBY
  s.add_runtime_dependency "jekyll", "> 3.5", "< 5.0"
  s.add_development_dependency "html-proofer", "~> 3.0"
  s.add_development_dependency "rubocop-github", "~> 0.16"
  s.add_development_dependency "w3c_validators", "~> 1.3"
end

# frozen_string_literal: true

Gem::Specification.new do |spec|
    spec.name          = "S4SBP"
    spec.version       = "0.1.0"
    spec.authors       = ["Jackson Meade"]
    spec.email         = ["samrobinson4sbp@gmail.com"]
  
    spec.summary       = "This is a custom Jekyll format inspired by the Kamala Harris for President and UNC Web Standard layouts for the Sam Robinson for SBP Campaign Website."
  
    spec.license       = "MIT"
  
    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }
  
    spec.add_runtime_dependency "jekyll", "~> 3.8"
  
    spec.add_development_dependency "bundler", "~> 1.16"
    spec.add_development_dependency "rake", "~> 12.0"
  end
require 'rubygems'
require 'reek/rake/task'
require 'jshint/tasks'
require 'rspec/core/rake_task'
require 'jasmine-headless-webkit'

task :default => :full_test
JSHint.config_path = "spec/config/jshint.yml"

Reek::Rake::Task.new do |t|
end

RSpec::Core::RakeTask.new do |t|
end

Jasmine::Headless::Task.new('jasmine:headless') do |t|
  t.keep_on_error = true
end

desc "Runs all other tests: JSHint, RSpec, Reek"
task :full_test => [:reek, :jshint, 'jasmine:headless', :spec] do
end
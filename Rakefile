require 'rubygems'
require 'reek/rake/task'
require 'jshint/tasks'
require 'rspec/core/rake_task'

task :default => :full_test
JSHint.config_path = "spec/config/jshint.yml"

Reek::Rake::Task.new do |t|
end

RSpec::Core::RakeTask.new do |t|
end

desc "Runs all other tests: JSHint, RSpec, Reek"
task :full_test => [:reek, :jshint, :spec] do
end
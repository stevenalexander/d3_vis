require 'sinatra/base'
require 'erb'

# This is the main application
# 
class App < Sinatra::Base

  get '/' do
    erb :index
  end
  
end
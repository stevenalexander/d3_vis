require 'sinatra/base'
require 'erb'

class App < Sinatra::Base

  get '/' do
    iShouldFailReek = "This should fail reek"  
    
    erb :index
  end
  
end
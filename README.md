### Tests

Simply run `rake` to run all our tests.
This runs:
* JSHint
* Reek (Ruby Linting)
* RSpec

### Ruby Linting

We use the [Reek Gem](https://github.com/troessner/reek/wiki) for running Ruby lint: `gem install reek`

To check all Ruby files within `lib/`, you can run `rake reek`.

Specify a single file like: `rake reek REEK_SRC=lib/my_file.rb`


### Testing with RSpec

Run `bundle` to get RSPec installed.

Then simply run `rspec`. This will run all files within the `spec/` folder with the name `*_spec.rb`.

You can run a specific file by doing `rspec spec/demo_spec.rb`

Integration tests are stored under spec/integration, these require a populated db to complete.

### JSHint

Run `rake jshint` to run JSHint. Config is stored in `config/jshint.yml`.
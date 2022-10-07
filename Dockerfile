FROM ruby
RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev nodejs npm && \
    npm install n yarn -g -y &&\
    n 16.17.1
RUN mkdir /myapp
WORKDIR /myapp
ADD Gemfile /myapp/Gemfile
ADD Gemfile.lock /myapp/Gemfile.lock
RUN bundle install
ADD . /myapp
# rails server start
CMD ["rails", "server", "-b", "0.0.0.0"]

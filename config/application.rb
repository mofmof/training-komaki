require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Myapp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    config.active_job.queue_adapter = :sidekiq
    config.active_record.default_timezone = :local
    config.time_zone = 'Tokyo'

    config.generators do |g|
      g.test_framework :rspec,
        fixtures: false, #DBにレコード作成するファイル作成をスキップ
        view_specs: false, #ビュースペック作成スキップ
        helper_specs: false, #ヘルパーファイル用のスペック作成スキップ
        routing_specs: false #ルーティング用のスペック作成スキップ
      g.factory_bot false
    end
  end
end

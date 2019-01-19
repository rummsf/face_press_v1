Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'face-press.org'

    resource 'face-press.org',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
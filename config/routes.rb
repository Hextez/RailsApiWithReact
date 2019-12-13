Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :items
      resources :lists
      resources :users
    end
  end
  post 'authenticate', to: 'authentication#authenticate_request'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

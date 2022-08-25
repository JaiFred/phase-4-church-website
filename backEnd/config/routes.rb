Rails.application.routes.draw do
  
  resources :bulletins
  resources :members
  resources :admins
  
  get "/me", to: "members#show"
  get "/admin", to: "admins#show"
  post "/signup", to: "members#create"
  post "/adminsignup", to: "admin#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
end

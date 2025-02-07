Rails.application.routes.draw do
  
  resources :bulletins
  resources :members
  resources :admins
  
  get "/me", to: "members#show"
  get "/bulletins", to: "bulletins#index"
  patch "/update_bulletins", to: "bulletins#update"
  delete "/delete_bulletins", to: "bulletins#destroy"
  get "/admin", to: "admins#show"
  post "/signup", to: "members#create"
  post "/adminsignup", to: "admins#create"
  post "/login", to: "sessions#create" 
  delete "/adminlogout", to: "sessions#destroy_admin"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

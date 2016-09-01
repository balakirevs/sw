Rails.application.routes.draw do

  devise_for :users, skip: [ :sessions ]
  as :user do
    post '/api/login' => 'sessions#create'
    delete '/api/logout' => 'sessions#destroy'
  end

  namespace :api do
    resources :edges, only: [ :index, :create, :destroy, :update ]
    resources :users, only: [ :index ]
    resources :categories, only: [ :index ]
  end
end
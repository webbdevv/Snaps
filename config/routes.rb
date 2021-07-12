Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :workspaces, only: [:show, :index]
    resources :channels, only: [:create, :show, :update, :index, :destroy]
    resources :subscriptions, only: [:create, :show, :destroy, :index]
    resources :messages, only: [:create, :show, :update, :destroy]
  end

  mount ActionCable.server => '/cable'
end

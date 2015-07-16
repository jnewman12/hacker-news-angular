Rails.application.routes.draw do
  devise_for :users
  # this roots the project as rendering the application.html page
  root to: 'application#angular'


  resources :posts do 
    member do 
      put '/upvote' => 'posts#upvote'
    end
    resources :comments do
      member do 
        # member routes require an id
        put '/upvote' => 'comments#upvote'
      end
    end
  end
  # this is for the has_many/belongs_to. A posts has_many comments, and a comment belongs_to a post
  # in our generators we ran post:references in our comment model which sets up the comment table to have a post_id reference

  # running rake routes returns this (the (.:format) refers to render as json so posts/:id.json)
#                Prefix Verb URI Pattern                                   Controller#Action
#                root GET  /                                             application#angular
# upvote_post_comment PUT  /posts/:post_id/comments/:id/upvote(.:format) comments#upvote
#       post_comments POST /posts/:post_id/comments(.:format)            comments#create
#        post_comment GET  /posts/:post_id/comments/:id(.:format)        comments#show
#         upvote_post PUT  /posts/:id/upvote(.:format)                   posts#upvote
#               posts GET  /posts(.:format)                              posts#index
#                     POST /posts(.:format)                              posts#create
#                post GET  /posts/:id(.:format)                          posts#show

# this is like what writing sinatra routes would be if we were manually doing all of them

end
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # application_controller is the super for all other controllers, so respond_to :json tells all our controllers to only render json
  respond_to :json
  # this is the root to: call in routes.rb
  def angular
  	render 'layouts/application'
  end
end

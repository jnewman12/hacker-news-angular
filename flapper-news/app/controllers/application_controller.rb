class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # application_controller is the super for all other controllers, so respond_to :json tells all our controllers to only render json
  respond_to :json
  # this is the root to: call in routes.rb

  # this is our login/register state in app.js
  before_action :configure_permitted_parameters, if: :devise_controller?

  def angular
  	render 'layouts/application'
  end

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username
  end
end
end

class AuthenticationController < ApplicationController

    skip_before_action :authenticate_request

    def authenticate_request
        command = AuthenticateUser.call(params[:user][:email],params[:user][:password])

        if command.success?
            render json: command.result
        else
            render json: command.errors, status: :unauthorized
        end
    end
end

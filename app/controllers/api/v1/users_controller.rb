module Api::V1
    
  class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
    before_action :authenticate_request, only: [:show, :update, :destroy]

    # GET /users
    def index
      @users = User.all

      render json: @users
    end

    # GET /users/1
    def show
      logger.debug 'AQUI CRL'
      render json: { name: @user.name, email: @user.email}
    end

    # POST /users
    def create
      @user = User.new(user_params)
      if @user.save
        command = AuthenticateUser.call(params[:user][:email],params[:user][:password])

        if command.success?
          render json: command.result , status: :created
        else
          render json: command.errors, status: :unauthorized
        end
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /users/1
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    # DELETE /users/1
    def destroy
      @user.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_user
        @user = User.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
      end
  end

end
class CocktailsController < ApplicationController 
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_cocktail, only: [:show, :update, :destroy]

  # GET /cocktails
  def index
    @cocktails = Cocktail.all

    render json: @cocktails, include: :user
  end

  # GET /cocktails/1
  def show 
    @cocktails = Cocktail.find(params[:id]) 

    render json: @cocktail, include:[:user, :reviews], status: :ok
  end

  # POST /cocktails
  def create 
    @cocktail = Cocktail.new(cocktail_params) 
    @cocktail.user = @current_user
    if @cocktail.save
      render json: @cocktail, status: :created, location: @cocktail
    else
      render json: @cocktail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cocktails/1
  def update
    if @cocktail.update(cocktail_params)
      render json: @cocktail, include: :user
    else
      render json: @cocktail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cocktails/1
  def destroy 
    @cocktail = Cocktail.find(params[:id])

    @cocktail.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cocktail
      @cocktail = Cocktail.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cocktail_params 
      params.require(:cocktail).permit(:name, :type, :ingredients, :build)
      # params.require(:cocktail).permit(:name, :type, :ingredients, :build, :user_id)
    end
end

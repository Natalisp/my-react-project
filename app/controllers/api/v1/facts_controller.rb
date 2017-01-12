class Api::V1::FactsController < Api::V1::BaseController
  def index
    respond_with Fact.all
  end

  def create
    respond_with :api, :v1, Fact.create(fact_params)
  end

  def destroy
    respond_with Fact.destroy(params[:id])
  end

  def update
    fact = Fact.find(params["id"])
    fact.update_attributes(fact_params)
    respond_with fact, json: fact
  end

  private

  def fact_params
    params.require(:fact).permit(:id, :content)
  end
end

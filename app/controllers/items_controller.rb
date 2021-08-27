class ItemsController < ApplicationController
  before_action :set_department
  before_action :set_topic, only: [:show,:edit, :update, :destroy]

  def index
    render component: "Items", props:{department:@department, items:@department.items}
  end

  def new
    # render component: "ItemNew", props:{department:@department, x:1, t:'this is t'}
  end

  def edit
    # render component: "ItemEdit", props:{department:@department, item:@item}
  end

  def create
  #  @item = @department.items.new(item_params)
  #  if(@item.save)
  #   redirect_to department_items_path(@department.id)
  #  else
  #   #TODO
  #  end
  end

  def update
    # if(@item.update(item_params))
    #   redirect_to department_items_path(@department.id)
    # else
    #   #TODO
    # end
  end

  def show
    # @item = @department.items.find(params[:id])
    # # render json: @item
    render component: "Item", props: {item:@item, department:@department}
  end

  def destroy
    # @item.destroy
    # redirect_to department_items_path(@department.id)
  end
 
  private

  def item_params
    params.require(:item).permit(:name, :available)
  end
  
  
  def set_department
    @department = Department.find(params[:department_id])
  end

  def set_topic
    @item = @department.items.find(params[:id])
  end
end

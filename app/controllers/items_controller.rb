class ItemsController < ApplicationController
  before_action :set_department
  # before_action :set_topic, only: [:show,:edit, :update, :destroy]

  def index
    render component: "Items", props:{department: @department, items: @department.items}
  end

  def new
    # render component: "NewTopic", props:{sub:@sub, x:1, t:'this is t'}
  end

  def edit
    # render component: "EditTopic", props:{sub:@sub, topic:@topic}
  end

  def create
  #  @topic = @sub.topics.new(topic_params)
  #  if(@topic.save)
  #   redirect_to sub_topics_path(@sub.id)
  #  else
  #   # todo handle bad input
  #  end
  end

  def update
    # if(@topic.update(topic_params))
    #   redirect_to sub_topics_path(@sub.id)
    # else
    #      # todo handle bad input
    # end
  end

  def show
    # @topic = @sub.topics.find(params[:id])
    # # render json: @topic
    # render component: "Topic", props: {topic:@topic, comments:@topic.comments}
  end

  def destroy
    # @topic.destroy
    # redirect_to sub_topics_path(@sub.id)
  end
 
  private

  def item_params
    params.require(:item).permit(:name, :available)
  end
  
  
  def set_department
    @department = Department.find(params[:department_id])
  end

  # def set_topic
  #   @topic = @sub.topics.find(params[:id])
  # end
end

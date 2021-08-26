class DepartmentsController < ApplicationController
  before_action :set_department, only:[:show, :update, :edit, :destroy] #, :update, :edit, :destroy
  def index
    puts "Index called"
    departments = Department.all
    render component: "Departments", props:{departments:departments}
  end

  # def gettop5
  #   subs = Sub.all.limit(5)
  # end

  def show
    # sub = Sub.find(params[:id])
    render component: "Department", props:{department:@department}
    
  end

  def new
    render component: "DepartmentNew" #be the form #private
  end

  def create
    # render "SubsNew" # be the form
    department = Department.new(department_params)
    if department.save
      redirect_to departments_path
    else
      render :new
    end
  end

  def edit #edit update delete need set_sub
    # sub = Sub.find(params[:id])
    render component: "DepartmentEdit", props:{department:@department}
  end

  def update
    # sub = Sub.find(params[:id])
    if(@department.update(department_params))
      redirect_to departments_path
    else
      #TODO
    end
  end

  def destroy
    # sub = Sub.find(params[:id])
    @department.destroy
    redirect_to departments_path
  end

  private

  def department_params
    params.require(:department).permit(:name, :manager, :n_employees) # :manager, :n_employees
  end

  def set_department
    @department = Department.find(params[:id])
  end
end

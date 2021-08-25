class DepartmentsController < ApplicationController
  def index
    puts "Index called"
    departments = Department.all
    render component: "Departments", props: { departments:departments }
  end

  def show
    
  end
end

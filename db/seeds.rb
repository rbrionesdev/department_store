# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"
Department.destroy_all
Item.destroy_all
5.times do
  s = Department.create(
    name: Faker::Commerce.department, 
    manager: Faker::Name.name, 
    n_employees: Faker::Number.between(from: 1, to: 10) )
  2.times do
    s.items.create(name: Faker::Commerce.product_name, available: Faker::Boolean.boolean)
  end
end
puts "seeded #{Department.all.size} Departments"
puts "first department name: #{Department.first.name}"
puts "seeded #{Item.all.size} Items"
puts "first item name: #{Department.first.items.first.name}"

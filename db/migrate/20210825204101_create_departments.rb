class CreateDepartments < ActiveRecord::Migration[6.1]
  def change
    create_table :departments do |t|
      t.string :name
      t.string :manager
      t.integer :n_employees

      t.timestamps
    end
  end
end

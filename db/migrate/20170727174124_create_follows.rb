class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :teacher_id, null: false
      t.integer :student_id, null: false
      t.timestamps
    end
    add_index :follows, :teacher_id
    add_index :follows, :student_id
  end
end

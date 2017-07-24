class Pinnings < ActiveRecord::Migration[5.0]
  def change
    create_table :pinnings do |t|
      t.integer :board_id, null: false
      t.integer :pin_id
    end
    add_index :pinnings, :board_id
    add_index :pinnings, :pin_id
  end
end

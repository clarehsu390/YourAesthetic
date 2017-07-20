class CreatePins < ActiveRecord::Migration[5.0]
  def change
    create_table :pins do |t|
      t.string :name, null: false
      t.text :description
      t.string :image_url
      t.string :creator_id, null: false

      t.timestamps
    end
    add_index :pins, :name
    add_index :pins, :creator_id
  end
end

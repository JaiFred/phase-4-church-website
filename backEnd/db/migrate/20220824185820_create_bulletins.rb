class CreateBulletins < ActiveRecord::Migration[6.1]
  def change
    create_table :bulletins do |t|
      t.string :name
      t.string :date
      t.string :activity
      t.integer :member_id
      t.integer :admin_id

      t.timestamps
    end
  end
end

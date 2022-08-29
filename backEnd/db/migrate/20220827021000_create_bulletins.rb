class CreateBulletins < ActiveRecord::Migration[6.1]
  def change
    create_table :bulletins do |t|
      t.string :title
      t.string :activity
      t.datetime :starts
      t.datetime :ends
      t.belongs_to :admin, null: false, foreign_key: true
      t.belongs_to :member, null: false, foreign_key: true

      t.timestamps
    end
  end
end

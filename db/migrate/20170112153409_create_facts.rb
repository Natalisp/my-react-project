class CreateFacts < ActiveRecord::Migration[5.0]
  def change
    create_table :facts do |t|
      t.string :content

      t.timestamps
    end
  end
end

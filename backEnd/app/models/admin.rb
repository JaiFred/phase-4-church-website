class Admin < ApplicationRecord
    # has_many :members
    # has_many :bulletins, through: :members
   
    has_many :bulletins
    has_many :members, through: :bulletins 
end

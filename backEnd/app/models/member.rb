class Member < ApplicationRecord
    has_many :bulletins
    has_many :admins, through: :bulletins
end

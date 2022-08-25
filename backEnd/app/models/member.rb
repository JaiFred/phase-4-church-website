class Member < ApplicationRecord
    has_many :bulletins
    has_many :admins, through: :bulletins

    has_secure_password
    validates :username, presence: true, uniqueness: true
end

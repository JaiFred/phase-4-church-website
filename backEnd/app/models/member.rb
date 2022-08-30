class Member < ApplicationRecord
    has_many :bulletins
    has_many :admins, through: :bulletins

    has_secure_password
    validates :username, :password, presence: true
    
    validates :username, uniqueness: true
end

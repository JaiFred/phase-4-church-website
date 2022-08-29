class Member < ApplicationRecord
    has_many :bulletins
    has_many :admins, through: :bulletins

    has_secure_password
    validates :username, :password, :password_confirmation, presence: true
    
    validates :username, uniqueness: true
end

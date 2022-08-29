class Bulletin < ApplicationRecord
  belongs_to :admin
  belongs_to :member
end

class BulletinSerializer < ActiveModel::Serializer
  attributes :id, :title, :activity, :starts, :ends
  has_one :admin
  has_one :member
end

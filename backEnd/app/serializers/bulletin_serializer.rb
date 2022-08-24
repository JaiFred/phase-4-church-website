class BulletinSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :activity, :member_id, :admin_id
end

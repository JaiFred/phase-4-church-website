class AdminSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :email
end

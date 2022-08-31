class BulletinDetailSerializer < ActiveModel::Serializer
    has_many :members
    has_many :admins

    attributes :creator, :time

    def creator
        object.member.username
    end

    def admin
        object.admin.username
    end

    def time
        "From #{object.starts_at.strftime("%A %m/%d/%y %l:%m %p")} to #{object.ends_at.strftime("%A %m/%d/%y %l:%m %p")}"
    end
end
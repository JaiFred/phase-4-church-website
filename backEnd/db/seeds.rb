# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Admin.destroy_all
Member.destroy_all
Bulletin.destroy_all # why don't these delete my previous seed!!!


puts '🌱 seeding admins 👮‍♂️'

# t.string :name
# t.string :username
# t.string :password
# t.string :email
# t.integer :member_id
# t.integer :bulletin_id


ad1 = Admin.create(name: "Charles", username: "CharlesDW", password: "123Admin", email: "CharlesDW@gmail.com")
# ad2 = Admin.create(name: "Martha", username: "MarthaWithers", password: "321Admin", email: "MarthaWithers@gmail.com")

puts '🌱 seeding members 👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👩‍👧‍👦'

# t.string :name
# t.string :username
# t.string :password
# t.string :email

m1 = Member.create(name: "Bill", username: "BillTT", password: "first", email: "BillTurner@gmail.com")
m2 = Member.create(name: "Kelly", username: "KellyCrane", password: "second", email: "KellyCrane@gmail.com")
m3 = Member.create(name: "Vanessa", username: "VanessAdler", password: "third", email: "VanessaAdler@gmail.com")
m4 = Member.create(name: "Francis", username: "Frank", password: "fourth", email: "FrankTizic@gmail.com")

puts '🌱 seeding bulletins 📆'

# t.string :title
# t.string :activity
# t.datetime :starts
# t.datetime :ends
# t.belongs_to :admin, null: false, foreign_key: true
# t.belongs_to :member, null: false, foreign_key: true

b1 = Bulletin.create(title: "Morning Prayer", activity: "Regular Service", starts: "8/30/2022", ends: "8/30/2022", member_id: Member.first.id, admin_id: Admin.first.id)
b2 = Bulletin.create(title: "Community Gardening", activity: "Community Service", starts: "9/1/2022", ends: "9/1/2022", member_id: m2.id, admin_id: ad1.id)
b3 = Bulletin.create(title: "Community Jungle Gym Fundraiser", activity: "Community Service", starts: "2/14/2022", ends: "10/25/2022", member_id: m3.id, admin_id: ad1.id)
b4 = Bulletin.create(title: "Late Service", activity: "Regular Service", starts: "8/26/2022", ends: "8/26/2022", member_id: m4.id, admin_id: ad1.id)
b5 = Bulletin.create(title: "Weekend Potluck", activity: "Outside Service", starts: "9/16/2022", ends: "9/16/2022", member_id: m3.id, admin_id: ad1.id)

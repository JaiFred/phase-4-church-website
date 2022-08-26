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


ad1 = Admin.create(name: "Charles", username: "CharlesDW", password_digest: "123Admin", email: "CharlesDW@gmail.com")
# ad2 = Admin.create(name: "Martha", username: "MarthaWithers", password: "321Admin", email: "MarthaWithers@gmail.com")

puts '🌱 seeding members 👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👩‍👧‍👦'

# t.string :name
# t.string :username
# t.string :password
# t.string :email

m1 = Member.create(name: "Bill", username: "BillTT", password_digest: "first", email: "BillTurner@gmail.com")
m2 = Member.create(name: "Kelly", username: "KellyCrane", password_digest: "second", email: "KellyCrane@gmail.com")
m3 = Member.create(name: "Vanessa", username: "VanessAdler", password_digest: "third", email: "VanessaAdler@gmail.com")
m4 = Member.create(name: "Francis", username: "Frank", password_digest: "fourth", email: "FrankTizic@gmail.com")

puts '🌱 seeding bulletins 📆'

# t.string :name
# t.string :date
# t.string :activity

b1 = Bulletin.create(name: "Morning Prayer", date: "8/30/2022", activity: "Regular Service" , member_id: m1.id, admin_id: ad1.id)
b2 = Bulletin.create(name: "Community Gardening", date: "9/1/2022", activity: "Community Service", member_id: m2.id, admin_id: ad1.id)
b3 = Bulletin.create(name: "Community Jungle Gym Fundraiser", date: "Ongoing", activity: "Community Service", member_id: m3.id, admin_id: ad1.id)
b4 = Bulletin.create(name: "Late Service", date: "8/26/2022", activity: "Regular Service", member_id: m4.id, admin_id: ad1.id)
b5 = Bulletin.create(name: "Weekend Potluck", date: "9/16/2022", activity: "Outside Service", member_id: m3.id, admin_id: ad1.id)

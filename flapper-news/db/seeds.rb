# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do 
	c = Comment.create(:body => Faker::Company.bs,
		            :upvotes => rand(1..100),
		            :post_id => rand(1..5),
		            :user_id => rand(1..3))
end

10.times do 
	p = Post.create(:title => Faker::Company.catch_phrase,
		         :link => Faker::Company.name,
		         :upvotes => rand(1..100),
		         :user_id => rand(1..3))
end